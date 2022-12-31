import { useState, createContext } from "react";

const AuthContext = createContext({
  authState: { token: null } as { token: string | null },
  setUserAuthInfo: (data: any) => {},
  isUserAuthenticated: (() => {}) as () => boolean,
});

interface IAuthProvider {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: IAuthProvider) => {
  const [authState, setAuthState] = useState({
    token: "",
  });

  const setUserAuthInfo = ({ data }: any) => {
    localStorage.setItem("token", data);

    setAuthState({
      ...authState,
      token: data,
    });
  };

  // checks if the user is authenticated or not
  const isUserAuthenticated = () => !!authState.token;

  return (
    <AuthContext.Provider
      value={{ authState, setUserAuthInfo, isUserAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
