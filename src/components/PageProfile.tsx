import * as React from "react";
import { useState } from "react";
import { Profile } from "./Profile";
import { ProfileTimeline } from "./ProfileTimeline";
import { useData } from "./useData";

export const PageProfile: React.FC = () => {
  const [id, setId] = useState(0);
  const { user, postList } = useData(id);

  return (
    <>
      <button onClick={() => setId(id + 1)}>next</button>
      <Profile user={user} />
      <ProfileTimeline postList={postList} />
    </>
  );
};
