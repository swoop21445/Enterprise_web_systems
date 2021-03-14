import {useHistory} from 'react-router-dom'


export function Thank_you (){
    const history = useHistory()
    return(
        <div>
            <div>
                <h1>Thank you for your input!</h1>
            </div>
            <div>
                <button className='button' onClick={ () => {history.push('/')}}>Return to login page</button>
            </div>
        </div>
    )
}

export default Thank_you;