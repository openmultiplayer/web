import React, { FunctionComponent } from "react";

import { api } from "src/fetcher/fetcher";
import { User, UserSchema } from "src/types/_generated_User";

type AuthenticationContext = {
  isAuthenticated: boolean;
  isLoading: boolean;
  setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  user?: User;
};

const AuthContext = React.createContext<AuthenticationContext>({
  isAuthenticated: false,
  isLoading: true,
  setAuthenticated: () => undefined,
  user: undefined,
});

// to be used in _app.tsx where `authenticated` is set
export const AuthProvider: FunctionComponent = ({ children }) => {
  const [isAuthenticated, setAuthenticated] = React.useState(false);
  const [isLoading, setLoading] = React.useState(true);
  const [user, setUser] = React.useState<User | undefined>(undefined);

  React.useEffect(() => {
    const initializeAuth = async () => {
      try {
        const user = await api("/users/self", { schema: UserSchema });
        setAuthenticated(true);
        setUser(user);
      } catch (_) {
        setAuthenticated(false);
      }
      setLoading(false);
    };
    initializeAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        isLoading,
        setAuthenticated,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthenticationContext {
  const context = React.useContext<AuthenticationContext>(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider context");
  }
  return context;
}

export function useIsAuthenticated(): boolean {
  const { isAuthenticated } = useAuth();
  return isAuthenticated;
}
export function useIsAdmin(): boolean {
  const { user } = useAuth();
  return user?.admin ?? false;
}
