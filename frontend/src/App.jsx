import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Quiz from "./routes/Quiz";
import { Routes, Route } from 'react-router-dom';
import { UserContext } from "./components/UserContext";

function App() {
  const [trackNum, setTrackNum] = React.useState({
    chosen_need : 0,
    chosen_want : 0,
    chosen_type : 0,
    chosen_plan : 0
  })

  const [trackState, setTrackState] = React.useState(0)
  return (
    <UserContext.Provider value={{trackNum, setTrackNum, trackState, setTrackState}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='quiz' element={<Quiz />}>
              <Route path=':id' element={<Quiz />} /> 
        </Route>
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
