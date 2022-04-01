import React from 'react';
import YellowHeader from "./components/YellowHeader.js";
import BlackHeader from "./components/BlackHeader.js";
import AlbumCover from "./components/AlbumCover.js";

function App() {
  return (
  <div>
    <YellowHeader />
    <BlackHeader />
    <div className="adSpace"></div>
    <AlbumCover/>
  </div>
  );
}

export default App;
