import React from "react";
import Home from "./components/Home";
import Weather from "./components/Weather";
import Market from "./components/Market";
import Solution from "./components/Solution";
import Page2 from "./components/Page2";
import DiseaseDetection from "./components/DiseaseDetection";
import PaddyPage from "./components/PaddyPage";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Weather" element={<Weather />} />
        <Route path="/Market" element={<Market />} />
        <Route path="/Page2" element={<Page2/>} />
        <Route path="/Solution" element={<Solution/>} />
        <Route path="/DiseaseDetection" element={<DiseaseDetection/>} />
        <Route path="/PaddyPage" element={<PaddyPage/>} />
      </Routes>
    </div>
  );
};

// const App = () => {
//   return (
//     <div>
//       {/* <Page2 /> */}
//       {/* <DiseaseDetection /> */}

//     </div>
//   );
// };

export default App;
