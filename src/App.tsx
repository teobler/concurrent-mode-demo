import React, { Suspense, useState } from "react";
import { Profile } from "./components/Profile";
import { ProfileTimeline } from "./components/ProfileTimeline";

const App: React.FC = () => {
  const [id, setId] = useState(0);

  return (
    <>
      <button onClick={() => setId(id + 1)}>next</button>
      <Suspense fallback={<h1>Loading profile...</h1>}>
        <Profile id={id} />
        <Suspense fallback={<h1>Loading posts...</h1>}>
          <ProfileTimeline id={id} />
        </Suspense>
      </Suspense>
    </>
  );
};

export default App;
