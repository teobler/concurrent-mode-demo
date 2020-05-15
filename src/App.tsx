import React, { Suspense } from "react";
import { PageProfile } from "./components/PageProfile";

const App: React.FC = () => (
  <Suspense fallback={<h1>Loading...</h1>}>
    <PageProfile />
  </Suspense>
);

export default App;
