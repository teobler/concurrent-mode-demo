import * as React from "react";
import { useRequest } from "../hooks/useRequest";
import { BASE_API } from "../config";

export const ProfileTimeline: React.FC = () => {
  const { data: postList } = useRequest({ baseURL: BASE_API, url: "/fakeList", method: "get" }, { suspense: true });

  return (
    <ul>
      {postList?.data?.map((listData: { id: number; text: string }) => (
        <li key={listData.id}>{listData.text}</li>
      ))}
    </ul>
  );
};
