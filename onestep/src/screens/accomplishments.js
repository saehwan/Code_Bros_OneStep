import { useNavigate }  from 'react-router-dom';

const Accomplishments = () => {

    let navigate = useNavigate();

    return (
        <div>
            <h2>Hi</h2>
            <button onClick={() => navigate('/dashboard')}>Dashboard</button>
        </div>
    );
}

export default Accomplishments;