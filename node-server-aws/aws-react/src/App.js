import highoctaneimg from './files/highoctane.jpg'
import highoctane from './files/bensound-highoctane.ogg'
import allthatimg from './files/allthat.jpg'
import all_that from './files/bensound-allthat.mp3'
import './App.css';
import ReactAudioPlayer from 'react-audio-player';


function App() {
  return (
    <div className='App'>
      <header><h1>Pick the track you like best!</h1></header>
      <div className='track_1'>
        <img alt='track 1 high octane' src={highoctaneimg}></img>
        <div className = 'track_footer'>
          <button className='track_select'>Select this track</button>
            <ReactAudioPlayer
            src={highoctane}
            controls
            />
        </div>
      </div>
      <div className = 'track_2'>
      <img alt='track 1 high octane' src={allthatimg}></img>
      <div className = 'track_footer'>
        <button className='track_select'>Select this track</button>
        <ReactAudioPlayer
        src = {all_that}
        controls
        />
      </div>
      </div>
    </div>
  );
}

export default App;
