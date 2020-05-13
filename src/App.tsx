import React, { Suspense } from "react";
import { Profile } from "./components/Profile";
import { ProfileTimeline } from "./components/ProfileTimeline";

const App: React.FC = () => {
  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      <Profile />
      <Suspense fallback={<h1>Loading posts...</h1>}>
        <ProfileTimeline />
      </Suspense>
    </Suspense>
  );
};

export default App;
