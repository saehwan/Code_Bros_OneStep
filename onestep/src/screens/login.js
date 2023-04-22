import { useNavigate }  from 'react-router-dom';

const Login = () => {

    let navigate = useNavigate();

    return (
        <div>
            <h2>Hi</h2>
            <button onClick={() => navigate('/dashboard')}>Dashboard</button>
        </div>
    );
}

export default Login;