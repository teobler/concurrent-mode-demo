import * as React from "react";

interface IListData {
  id: number;
  text: string;
}

export interface IData {
  data: IListData[];
}

interface IProfileTimeline {
  postList: IData;
}

export const ProfileTimeline: React.FC<IProfileTimeline> = ({ postList }) => (
  <ul>
    {postList.data.map((listData: { id: number; text: string }) => (
      <li key={listData.id}>{listData.text}</li>
    ))}
  </ul>
);
