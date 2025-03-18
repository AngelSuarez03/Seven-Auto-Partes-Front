import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postUser } from '../../api/services/userService';
import '../../styles/Layout/LoginMainStyle.css'

function LoginMain() {

    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState("");
    const [dataForm, setDataForm] = useState({
        correo: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDataForm((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const onSubmit = async (e) => {
        setErrorMessage(""); 
        try {
            const response = await postUser(dataForm);
            if ( response.status === 200 ) {
                localStorage.setItem("correo", response.data.message.correo)
                navigate("/")
            }
        } catch (error) {
            if (error.response) {
                setErrorMessage(error.response.data.message || "Error en el login"); // Muestra un mensaje de error
            } else {
                setErrorMessage("Error en la solicitud");
            }
        }
    }
    
    return (
        <div className="login-container">
            <h2>Iniciar Sesión</h2>
            <div className="input-container">
                <div style={{ marginBottom:'3vh' }}>
                    <p>Correo</p>
                    <br />
                    <input type="text" onChange={handleChange} name='correo'></input>
                </div>
                <div>
                    <p>Contraseña</p>
                    <br />
                    <input type="password" onChange={handleChange} name='password'></input>
                </div>
            </div>
            <button className="login" onClick={onSubmit}>Iniciar Sesión</button>
        </div>
    )

}

export default LoginMain;