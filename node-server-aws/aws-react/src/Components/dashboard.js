import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";


export function Dashboard (){
    let {username} = useParams();
    const [octane_count, set_octane_count] = useState(" ")
    const [all_that, set_all_that] = useState(" ")
    const history = useHistory()

    useEffect(() => {
        axios.post('http://localhost:5000/users/admin_check', {username: username})
            .then(res => {
                const result = res.data
                if (result.admin){
                    console.log("admin check successful")
                } else {
                    console.log("failed")
                    history.push('/')
                }
            })
            .catch(() => history.push('/'))
    })
    

    
    function get_octane_count() {
        axios.get('http://localhost:5000/users/octane')
            .then((res) => {
                const result = res.data
                const count = result.octane
                set_octane_count(count)
            })
        return octane_count
    }

    function get_all_that_count() {
        axios.get('http://localhost:5000/users/all_that')
            .then((res) => {
                const result = res.data
                const all_that_count = result.all_that
                set_all_that(all_that_count)
            })
        return all_that
    }

    return(
        <div>
                <h3>{}Number of choices for High Octane</h3>
                <p>{get_octane_count()}</p>
                <h3>Number of choices for all that</h3>
                <p>{get_all_that_count()}</p>
                <button className='track_select' onClick={ () => {history.push('/')}}>Return to login</button>
        </div>
    )
}

export default Dashboard;
