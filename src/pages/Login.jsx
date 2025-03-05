import LoginMain from '../components/Layout/LoginMain';
import '../styles/Layout/LoginMainStyle.css'

function Login() {
    return (
        <>
            <div className='logo-container'>
                <img src="/logo2.png" alt="logo"></img>
            </div>
            <LoginMain />
        </>
    )
}

export default Login;