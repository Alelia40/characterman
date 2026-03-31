import { createContext, useState, useContext, ReactNode, useEffect, useCallback } from 'react';

// Define the shape of the user object
interface User {
  username: string;
  // Add other user properties here if needed
}

// Define the shape of the AuthContext
interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
  signup: (username: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}

// Create the AuthContext
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create the AuthProvider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const checkAuthStatus = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/users/profile'); // Endpoint to get current user
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
        setIsAuthenticated(true);
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
    } catch (error) {
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    checkAuthStatus();
  }, [checkAuthStatus]);

  const login = async (username, password) => {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (response.ok) {
        await checkAuthStatus();
    } else {
        throw new Error('Login failed');
    }
  };

  const signup = async (username, email, password) => {
    const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ username, email, password }),
        headers: {
            'Content-Type': 'application/json',
        }
    });

    if (!response.ok) {
        throw new Error('Signup failed');
    }
  };

  const logout = async () => {
    const response = await fetch('/logout', {
        method: 'POST'
    });

    if(response.ok) {
        setUser(null);
        setIsAuthenticated(false);
    } else {
        throw new Error('Logout failed');
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, signup, logout, loading }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
