import * as React from "react";
import { useRequest } from "../hooks/useRequest";
import { BASE_API } from "../config";

export const ProfileTimeline: React.FC<{ id: number }> = ({ id }) => {
  const { data: postList } = useRequest(
    { baseURL: BASE_API, url: `/api/fake-list/${id}`, method: "get" },
    { suspense: true },
  );

  return (
    <ul>
      {postList.data.map((listData: { id: number; text: string }) => (
        <li key={listData.id}>{listData.text}</li>
      ))}
    </ul>
  );
};
