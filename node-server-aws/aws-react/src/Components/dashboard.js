import axios from "axios";
import { useEffect, useState } from "react";


export function Dashboard (){
    const [octane_count, set_octane_count] = useState(0)
    const [all_that, set_all_that] = useState(0)
    
    function get_octane_count() {
        axios.get('http://localhost:5000/users/octane')
            .then((res) => {
                const result = res.data
                const count = result.octane
                console.log(count)
                set_octane_count(count)
            })
        console.log(octane_count)
        return octane_count
    }

    function get_all_that_count() {
        axios.get('http://localhost:5000/users/all_that')
            .then((res) => {
                const result = res.data
                const all_that_count = result.all_that
                set_all_that(all_that_count)
            })
            console.log(all_that)
        return all_that
    }

    return(
        <div>
                <h3>Number of choices for High Octane</h3>
                <p>{get_octane_count()}</p>
                <h3>Number of choices for all that</h3>
                <p>{get_all_that_count()}</p>
        </div>
    )
}

export default Dashboard;
