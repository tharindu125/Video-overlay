import React, { useState,} from 'react';
import { Player } from 'video-react';
import 'video-react/dist/video-react.css'; // import video-react css
import 'video.js/dist/video-js.css'; // import video.js css

function VideoPlayer() {
    const [overlayVisible, setOverlayVisible] = useState(true);
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleContinueClick = () => {
        setOverlayVisible(false);
    };


    return (
        <div id="videoplay" style={{ position: 'absolute' }}>
            <div  >
                <Player
                    autoPlay
                    muted = {true}
                    fluid={false}
                    width={854}
                    height={480}
                    src="http://vjs.zencdn.net/v/oceans.mp4"
                />
                
            </div>
            
            

            {overlayVisible && 
                <div id="overlays-wrap">
                <div className="overlay-item"  data-overlayid="59" data-time="41">

                    <p className="vo-question">
                        Welche Zahl ist die Summe bei 3 + 50 = 53?
                    </p>

                    <div className="vtask-choices-wrap">

                        <div className="vtask-choice-item">
                            <input 
                                className="vtask-choice" 
                                type="radio" 
                                name="quiz" 
                                id="59-a1" 
                                value="3"
                                onChange={handleOptionChange}
                            />
                            <label className="radio-tile" htmlFor="59-a1">
                                <span className="radio-tile-label">3</span>
                            </label>
                        </div>

                        <div className="vtask-choice-item">
                            <input 
                                className="vtask-choice" 
                                type="radio" 
                                name="quiz" 
                                id="59-a2" 
                                value="50"
                                onChange={handleOptionChange}
                            />
                            <label className="radio-tile" htmlFor="59-a2">
                                <span className="radio-tile-label">50</span>
                            </label>
                        </div>

                        <div className="vtask-choice-item">
                            <input 
                                className="vtask-choice" 
                                type="radio" 
                                name="quiz" 
                                id="59-a3" 
                                value="53"
                                onChange={handleOptionChange}
                            />
                            <label className="radio-tile" htmlFor="59-a3">
                                <span className="radio-tile-label">53</span>
                            </label>
                        </div>

                    </div>

                    {selectedOption && 
                        <button 
                            className="buttonb vtask-btn-continue" 
                            onClick={handleContinueClick}
                        >
                            Continue
                        </button>
                    }
                </div>
                </div>
            }
        </div>
    );
}

export default VideoPlayer;
