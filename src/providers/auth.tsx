import React, { useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface ContextProps {
  user: UserProps | undefined;
  setUser: (value: UserProps) => void;
}

interface UserProps {
  uuid: string;
  email: string;
  fullName: string;
  nickName: string;
  birthDate: string;
  genre: string;
  scheduleUUID: string;
}

export const AuthContext = React.createContext<ContextProps>(
  {} as ContextProps
);

export const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<UserProps>();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
