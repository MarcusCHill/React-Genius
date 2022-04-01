import React from "react";

function AlbumCover (){
  return(
    <section>
      <div className="albumBackground">
        <div className="albumInfoSection">
          <div className="albumColumn">
            <div className="annotatedCover">
              <a href="WHEN CLICKED YOU CAN SEE ANNOTATIONS ON THE ALBUM">
                <img src="https://t2.genius.com/unsafe/600x600/https%3A%2F%2Fimages.genius.com%2F938568f8961cba0e4fe34fd28d709c63.1000x1000x1.png" alt="JAY-Z 4:44 Album Cover"></img>
              </a>
            </div>
            <div className="albumInfo">
              <h4>Album</h4>
              <h1>4:44</h1>
              <h2>Jay-Z</h2>
              <h3>Released June 30, 2017</h3>              
            </div>
          </div>
          <div className="albumViewColumn">
            <div className="albumViews"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AlbumCover;
