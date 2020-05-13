import * as React from "react";
import { FunctionComponent } from "react";
import { useRequest } from "../hooks/useRequest";
import { BASE_API } from "../config";

export const Profile: FunctionComponent = () => {
  const { data: user } = useRequest({ baseURL: BASE_API, url: "/fakeUser", method: "get" }, { suspense: true });

  return <h1>{user?.name}</h1>;
};
