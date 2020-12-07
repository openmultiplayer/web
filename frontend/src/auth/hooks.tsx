import React from "react";

type AuthenticationContext = {
  isAuthenticated: boolean;
  setAuthenticated: React.Dispatch<any>;
};

type AuthProviderProps = {
  children: JSX.Element[];
  authenticated: boolean;
};

const AuthContext = React.createContext<AuthenticationContext>({
  isAuthenticated: false,
  setAuthenticated: (_: any) => {},
});

// to be used in _app.tsx where `authenticated` is set
export const AuthProvider = ({
  children,
  authenticated,
}: AuthProviderProps) => {
  const [isAuthenticated, setAuthenticated] = React.useState(authenticated);
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setAuthenticated,
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
