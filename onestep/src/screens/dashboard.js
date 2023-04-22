import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { ToggleButtonGroup, ToggleButton, Button } from '@mui/material';
import { MdDriveEta, MdRestoreFromTrash } from 'react-icons/md';
import { FcCheckmark } from 'react-icons/fc';

function Task({ task, onCompletion }) {
    const [iconName, setIconName] = useState(task.icon);
    return (        
        <div>
          {task.completed === false ?
          <div>
            <div style={styles.taskTitle}>
              <h3>{task.name}</h3>  
            </div>            
            <p>{task.description}</p>
            <Button style={{backgroundColor: 'grey', textTransform: 'none', color: 'black'}}
            onClick={() => onCompletion(task.id)}>Complete</Button>  
          </div>
          :
          <div>
            <div style={styles.taskTitle}>
              <h3>{task.name}</h3>  
              <FcCheckmark style={styles.checkIcon} />
            </div>            
            <p>{task.description}</p>
            <Button style={{backgroundColor: '#8CA177', textTransform: 'none'}}
            onClick={() => onCompletion(task.id)}>Completed</Button>  
          </div>
          }            
        </div>
    )
}

const Dashboard = () => {

    let navigate = useNavigate();

    const [currentDifficulty, setCurrentDifficulty] = useState('easy');    

    const handleEasyTaskCompletion = (taskId) => {
        const updatedTasks = easyTaskArray.map((task) =>
          task.id === taskId ? { ...task, completed: true } : task
        );
        setEasyTaskArray(updatedTasks);
    };
    
    const handleMediumTaskCompletion = (taskId) => {
        const updatedTasks = mediumTaskArray.map((task) =>
          task.id === taskId ? { ...task, completed: true } : task
        );
        setMediumTaskArray(updatedTasks);
    };
    
    const handleHardTaskCompletion = (taskId) => {
        const updatedTasks = hardTaskArray.map((task) =>
          task.id === taskId ? { ...task, completed: true } : task
        );
        setHardTaskArray(updatedTasks);
        console.log(hardTaskArray);
    };

    const [easyTaskArray, setEasyTaskArray] = useState([
        {
            id: 1,
            name: 'Anti-Litterbug',
            description: 'Pick up 10 pieces of litter',
            difficulty: 'easy',
            completed: false,
            icon: 'MdRestoreFromTrash'
        },
        {
            id: 2,
            name: 'The Responsible',
            description: 'Turns the lights off before leaving the house',
            difficulty: 'easy',
            completed: false,
            icon: 'MdLightbulb'
        },
    ]);


    const [mediumTaskArray, setMediumTaskArray] = useState([
        {
            id: 1,
            name: 'Vegetarian Explorer',
            description: 'Switch to a vegetarian or vegan diet for the day.',
            difficulty: 'medium',
            completed: false,
            icon: 'MdDriveEta'
        },
        {
            id: 2,
            name: 'Bulbous',
            description: 'Switch light bulbs in house to energy efficient bulbs.',
            difficulty: 'medium',
            completed: false,
            icon: 'MdDriveEta'
        },
        {
            id: 3,
            name: 'E-Mail',
            description: 'Switch to paperless billing and communication for bills and documents.',
            difficulty: 'medium',
            completed: false,
            icon: 'MdDriveEta'
        },
        {
            id: 4,
            name: 'The Electrician (Lite)',
            description: 'Go without using any electricity for 3 hours outside of sleeping hours',
            difficulty: 'medium',
            completed: false,
            icon: 'MdDriveEta'
        },
    ]);

    const [hardTaskArray, setHardTaskArray] = useState([
        {
            id: 1,
            name: 'Joyride',
            description: 'Choose to walk, bike, or take public transportation instead of driving a car for the day.',
            difficulty: 'hard',
            completed: false,
            icon: 'MdDriveEta'
        },
        {
            id: 2,
            name: 'Composter',
            description: 'Compost fruits, vegetables, or other biodegradables instead of throwing them out.',
            difficulty: 'hard',
            completed: false,
            icon: 'MdDriveEta'
        },
        {
            id: 3,
            name: 'Green Thumb',
            description: 'Compost fruits, vegetables, or other biodegradables instead of throwing them out.',
            difficulty: 'hard',
            completed: false,
            icon: 'MdDriveEta'
        },
        {
            id: 4,
            name: 'Market Farmer',
            description: "Shop at a local farmer's market or co-op for locally grown produce.",
            difficulty: 'hard',
            completed: false,
            icon: 'MdDriveEta'
        },
        {
            id: 5,
            name: 'Reusable',
            description: 'Reduce plastic usage by bringing a reusable water bottle and shopping bag.',
            difficulty: 'hard',
            completed: false,
            icon: 'MdDriveEta'
        },
        {
            id: 6,
            name: 'Old School Laundromat',
            description: 'Use a clothesline or drying rack instead of a dryer for one load of laundry.',
            difficulty: 'hard',
            completed: false,
            icon: 'MdDriveEta'
        },
        {
            id: 7,
            name: 'Communal Cleaning',
            description: 'Attend a community clean-up event to reduce litter and pollution.',
            difficulty: 'hard',
            completed: false,
            icon: 'MdDriveEta'
        },
        {
            id: 8,
            name: 'The Electrician',
            description: 'Go without using any electricity for 6 hours outside of sleeping hours',
            difficulty: 'hard',
            completed: false,
            icon: 'MdDriveEta'
        },
    ]);

    return (
        <div style={styles.dashboardPage}>
            <h1 style={styles.title}>Dashboard</h1>
            <div style={styles.mainDash}>
                <div style={styles.dashHeader}>
                    <h2>Task List</h2>
                    <div>
                        <ToggleButtonGroup
                            color="success"
                            orientation="horizontal"
                            value={currentDifficulty}
                            exclusive
                            style={{textTransform: 'none'}}
                            onChange={(event, newDifficulty) => {
                                setCurrentDifficulty(newDifficulty);
                            }}
                        >
                            <ToggleButton style={{textTransform: 'none'}} value="easy" aria-label="easy">
                                easy
                            </ToggleButton>
                            <ToggleButton style={{textTransform: 'none'}} value="medium" aria-label="medium">
                                medium
                            </ToggleButton>
                            <ToggleButton style={{textTransform: 'none'}} value="hard" aria-label="hard">
                                hard
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </div>
                <div>
                    {currentDifficulty === 'easy' ?
                        <div>
                            <div style={styles.taskList}>
                                {easyTaskArray.map((task) => (
                                    <Task key={task.id} task={task} onCompletion={handleEasyTaskCompletion} />
                                ))}
                            </div>
                        </div>
                        : currentDifficulty === 'medium' ?
                            <div>
                                <div style={styles.taskList}>
                                    {mediumTaskArray.map((task) => (
                                        <Task key={task.id} task={task} onCompletion={handleMediumTaskCompletion} />
                                    ))}
                                </div>
                            </div>
                            : currentDifficulty === 'hard' ?
                                <div>
                                    <div style={styles.taskList}>
                                        {hardTaskArray.map((task) => (
                                            <Task key={task.id} task={task} onCompletion={handleHardTaskCompletion} />
                                        ))}
                                    </div>
                                </div>
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
      padding: '10px',
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
        backgroundColor: '#9EB7BC',
        padding: '10px'
    },
    dashHeader: {
        paddingTop: '1%',
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    taskList: {
        display: 'flex',
        flexDirection: 'column'
    },
    taskTitle: {
      display: 'flex',
      alignItems: 'center',      
      justifyContent: 'center'
    },
    checkIcon: {
      marginLeft: '2%'
    }
}
