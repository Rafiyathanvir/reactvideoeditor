import React, { useState, useRef } from 'react';
import '../App.css'
import '../editor.css'

import {faLightbulb, faMoon} from '@fortawesome/free-solid-svg-icons' // https://fontawesome.com/v5/docs/web/use-with/react


//import ReactPlayer from 'react-player';


function VideoWithMusic() {
  const [backgroundMusicURL, setBackgroundMusicURL] = useState(null);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const audioRef = useRef(null);

 

  const handleBackgroundMusicUpload = (event) => {
    setBackgroundMusicURL(URL.createObjectURL(event.target.files[0]));
  };

  const handleMusicPlay = () => {
    setIsMusicPlaying(true);
    audioRef.current.play();
  };

  const handleMusicPause = () => {
    setIsMusicPlaying(false);
    audioRef.current.pause();
  };

  return (
    <div>
      <label for="song">Add Song:</label>
      <input type="file"    id="song" accept="audio/*"   onChange={handleBackgroundMusicUpload} /> 

        

      {backgroundMusicURL && (
        <audio 
        name="add"
          ref={audioRef}
          src={backgroundMusicURL}
          type="audio/mpeg"
          loop
        />
      )}

      {backgroundMusicURL && (
        <div>
          <br/>
          {isMusicPlaying ? (
             <button style={{width:"50%"}} onClick={handleMusicPause}>Pause Music</button>
          ) : (
            <button style={{width:"50%"}} onClick={handleMusicPlay}>Play Music</button>
          )}
        </div>
      )}
    </div>
  );
}

export default VideoWithMusic