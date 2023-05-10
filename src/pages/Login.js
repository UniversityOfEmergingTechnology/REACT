import Template from '../component/Template'
import loginImg from '../assets/login.png'
const Login = ({setIsLoggedIn}) => {
    return(
        <Template
            title = 'Welcome Back'
            description1 = 'Build skills for today, tomorrow, and beyond.'
            description2 = 'Education to future-proof your career.'
            img = {loginImg}
            formType = "login"
            setIsLoggedIn = {setIsLoggedIn}
        />

    )
}

export default Login;