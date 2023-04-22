import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { ToggleButtonGroup, ToggleButton, } from '@mui/material';

const Dashboard = () => {

    let navigate = useNavigate();

    const [currentDifficulty, setCurrentDifficulty] = useState('easy');

    return (
        <div style={styles.dashboardPage}>
            <h1 style={styles.title}>Dashboard</h1>
            <div style={styles.mainDash}>
                <div style={styles.dashHeader}>
                    <h2>Overview</h2>
                    <div>
                        <ToggleButtonGroup
                            color="success"
                            orientation="horizontal"
                            value={currentDifficulty}
                            exclusive
                            onChange={(event, newDifficulty) => {
                                setCurrentDifficulty(newDifficulty);
                            }}
                        >
                            <ToggleButton value="easy" aria-label="easy">
                                easy
                            </ToggleButton>
                            <ToggleButton value="medium" aria-label="medium">
                                medium
                            </ToggleButton>
                            <ToggleButton value="hard" aria-label="hard">
                                hard
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </div>
                <div>
                    { currentDifficulty === 'easy' ?
                        <h2>Easy</h2>
                    : currentDifficulty === 'medium' ?
                        <h2>Medium</h2>
                    : currentDifficulty === 'hard' ?
                        <h2>Hard</h2>
                    :
                        <h2>Pick something</h2>
                    }
                </div>
            </div>
        </div>
    );
}

export default Dashboard;

let styles = {
    dashboardPage: {

    },
    title: {
        color: '#698975',
        fontFamily: 'sanchez'
    },
    mainDash: {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        borderRadius: '25px',
        alignItems: 'center',
        width: '80%',
        minHeight: '80%',
        backgroundColor: '#9EB7BC'
    },
    dashHeader: {
        paddingTop: '1%',
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
}