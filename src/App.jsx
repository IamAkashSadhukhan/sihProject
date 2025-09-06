import React from 'react'
import Home from './components/Home'
import Marquee from './components/Marque'
import Weather from './components/Weather'
import Market from './components/Market'
import Solution from './components/Solution'
import React from "react";
import Page2 from "./components/Page2";
import DiseaseDetection from "./components/DiseaseDetection";
import PaddyPage from "./components/PaddyPage";

const App = () => {
  return (
    <div>
     <Home/>
     <Weather/>
     <Market/>
     <PaddyPage />
    </div>
  )
}

// const App = () => {
//   return (
//     <div>
//       {/* <Page2 /> */}
//       {/* <DiseaseDetection /> */}
      
//     </div>
//   );
// };

export default App;
