import highoctaneimg from '../files/highoctane.jpg'
import high_octane from '../files/bensound-highoctane.ogg'
import allthatimg from '../files/allthat.jpg'
import all_that from '../files/bensound-allthat.mp3'

import ReactAudioPlayer from 'react-audio-player';



function choice_page () {

    return (
        <div className = 'App'>
            <header><h1>Pick the track you like best!</h1></header>
                <div className ='container'>
                    <div className='track-item'>
                        <img alt='track 1 high octane' src={highoctaneimg}></img>
                        <div className = 'track_footer'>
                            <button className='track_select'>Select this track</button>
                            <ReactAudioPlayer
                                src={high_octane}
                                controls
                            />
                        </div>
                 </div>
                     <div className = 'track-item'>
                        <img alt='track 2 all that' src={allthatimg}></img>
                        <div className = 'track_footer'>
                        <button className='track_select'>Select this track</button>
                        <ReactAudioPlayer
                        src = {all_that}
                        controls
                        />
                    </div>
                </div>
            </div>
      </div>
    )
}

export default choice_page