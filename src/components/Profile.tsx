import * as React from "react";

export interface IUser {
  name: string;
}

interface IProfileProps {
  user: IUser;
}

export const Profile: React.FC<IProfileProps> = ({ user }) => <h1>{user.name}</h1>;
