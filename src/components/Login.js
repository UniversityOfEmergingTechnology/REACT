import {useNavigate} from 'react-router-dom'
export const Login = () =>{
    // this hook returns a navigate function which we are using to navigate to a path
    const navigate = useNavigate()
    function handleRedirect(){
        navigate('/newPage');
    }
    function handleGoBack(){
        navigate(-1)
    }
    return(
        <div>
            This is my login page
            <br /><br />
            <button onClick={handleRedirect}>New page</button>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    )
}