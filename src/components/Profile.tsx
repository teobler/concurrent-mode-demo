import * as React from "react";
import { useRequest } from "../hooks/useRequest";
import { BASE_API } from "../config";

export const Profile: React.FC<{ id: number }> = ({ id }) => {
  const { data: user } = useRequest({ baseURL: BASE_API, url: `/api/fake-user/${id}`, method: "get" }, { suspense: true });

  return <h1>{user.name}</h1>;
};
