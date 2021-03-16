import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import MyResponsivePie from './pie_chart'
import pie_data from '../files/pie_data.json'


export function Dashboard (){
    let {username} = useParams();
    const [octane_count, set_octane_count] = useState(0)
    const [all_that_count, set_all_that] = useState(0)
    const [default_count, set_default_count] = useState(0)
    const history = useHistory()

    useEffect(() => {
        axios.post('http://3.20.232.9:4000/users/admin_check', {username: username})
            .then(res => {
                const result = res.data
                if (result.admin){
                } else {
                    history.push('/')
                }
            })
            .catch(() => history.push('/'))

        
    })
    

    
    function get_octane_count() {
        axios.get('http://3.20.232.9:4000/users/octane')
            .then((res) => {
                const result = res.data
                const count = result.octane
                set_octane_count(count)
            })
        return octane_count
    }

    function get_all_that_count() {
        axios.get('http://3.20.232.9:4000/users/all_that')
            .then((res) => {
                const result = res.data
                const all_that_count = result.all_that
                set_all_that(all_that_count)
            })
        return all_that_count
    }

    function get_no_selection_count() {
        axios.get('http://3.20.232.9:4000/users/default')
            .then((res) => {
                const result = res.data
                const default_count = result.default
                set_default_count(default_count)
            })
        return default_count
    }

    function get_graph_data(){
        var graph_data = pie_data

        graph_data[0].value = default_count
        graph_data[1].value = octane_count
        graph_data[2].value = all_that_count
        
        return graph_data
    }

    return(
        <div>   
                <h3>Number of choices for High Octane</h3>
                <p>{get_octane_count()}</p>
                <h3>Number of choices for all that</h3>
                <p>{get_all_that_count()}</p>
                <h3>Number of undecided users</h3>
                <p>{get_no_selection_count()}</p>
                <div className='pie_div'>
                    <MyResponsivePie data={get_graph_data()}/>
                </div>
                <button className='button' onClick={ () => {history.push('/')}}>Return to login</button>
        </div>
    )
}

export default Dashboard;
