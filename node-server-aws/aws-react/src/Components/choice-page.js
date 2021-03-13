import highoctaneimg from '../files/highoctane.jpg'
import high_octane from '../files/bensound-highoctane.ogg'
import allthatimg from '../files/allthat.jpg'
import all_that from '../files/bensound-allthat.mp3'

import ReactAudioPlayer from 'react-audio-player';
import { useHistory, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../utils/auth_context';
import { UserContext } from '../utils/user_context';
import axios from 'axios'


function Choice_page () {
    let {id , username} = useParams();
    const {auth, setAuth} = useContext(AuthContext);
    const {user,setUser} = useContext(UserContext)
    const [admin, setAdmin] = useState(false)
    const history = useHistory();

    useEffect(() => {
        if (id === user && auth){
            console.log(id)
            console.log(user)
            console.log("auth successful")
        } else {
            history.push('/')
        }
    })

    function send_data(song) {
        axios.post('http://localhost:5000/users/update', {user: username , song: song})
        .then(res => {
            console.log(res.data)
        history.push('/thank_you')
        })

    }

    function dashboard_button(){
        return (
        <button className='track_select' onClick={ () => history.push("/dashboard/" + username)}>
            go to dashboard
            </button>)
    }

    function admin_post(){
        axios.post('http://localhost:5000/users/admin_check', {username: username})
                .then(res => {
                    const result = res.data
                    setAdmin(result.admin)
                })
    }

    function Dashboardlink(){
        var rendered_item = (<div></div>)
        admin_post()
        if (admin) {
            rendered_item = dashboard_button()
        }
        return rendered_item
    }

    return (
        <div className = 'App'>
            <header><h1>Pick the track you like best!</h1></header>
                <div className ='container'>
                    <div className='track-item'>
                        <img alt='track 1 high octane' src={highoctaneimg}></img>
                        <div className = 'track_footer'>
                            <ReactAudioPlayer
                                src={high_octane}
                                controls
                            />
                            <div>
                            <button className='track_select' onClick={ () => {send_data("High Octane")}}>Select this track</button>
                            </div>
                        </div>
                 </div>
                     <div className = 'track-item'>
                        <img alt='track 2 all that' src={allthatimg}></img>
                        <div className = 'track_footer'>
                        <ReactAudioPlayer
                        src = {all_that}
                        controls
                        />
                        <div>
                        <button className='track_select' onClick={ () => {send_data("All That")}}>Select this track</button>
                        </div>
                    </div>
                </div>
            </div>
            <Dashboardlink/>
      </div>
    )
}

export default Choice_page