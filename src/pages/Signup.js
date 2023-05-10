import Template from '../component/Template'
import signupImg from '../assets/signup.png'
const Signup = ({setIsLoggedIn}) => {
    return(
        <Template
            title = 'Join the millions learning to code with StudyNotion for free'
            description1 = 'Build skills for today, tomorrow, and beyond.'
            description2 = 'Education to future-proof your career.'
            img={signupImg}
            formType = 'signup'
            setIsLoggedIn={setIsLoggedIn}
        />
    )
}

export default Signup;