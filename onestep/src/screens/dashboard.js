import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { ToggleButtonGroup, ToggleButton, Button } from '@mui/material';
import {
  MdDriveEta, MdLightbulb, MdRestoreFromTrash, MdOutlineEmail, MdElectricBolt,
  MdCompost, MdOutlineLocalLaundryService, MdCleanHands
} from 'react-icons/md';
import { FcCheckmark } from 'react-icons/fc';
import { TbPlant2 } from 'react-icons/tb';
import { GiFarmTractor, GiBuyCard, GiRecycle } from 'react-icons/gi';
import { FaSink, FaTrophy } from 'react-icons/fa';
import { GrReturn } from 'react-icons/gr';

function Task({ task, onCompletion }) {
  return (
    <div style={styles.taskInterface}>
      {task.completed === false ?
        <div>
          <div style={styles.taskTitle}>
            <h3>{task.name}</h3>
          </div>
          <p>{task.description}</p>
          <Button style={{ backgroundColor: 'grey', textTransform: 'none', color: 'black', marginTop: '2%' }}
            onClick={() => onCompletion(task.id)}>Complete</Button>
        </div>
        :
        <div>
          <div style={styles.taskTitle}>
            <h3>{task.name}</h3>
            <FcCheckmark style={styles.checkIcon} />
          </div>
          <p>{task.description}</p>
          <Button style={{ backgroundColor: '#8CA177', textTransform: 'none', marginTop: '2%' }}
            onClick={() => onCompletion(task.id)}>Completed</Button>
        </div>
      }
    </div>
  )
}

const Dashboard = () => {

  let navigate = useNavigate();
  
  const [currentDifficulty, setCurrentDifficulty] = useState('easy');
  const [points, setPoints] = useState(0);

  useEffect(() => {
    setPoints(JSON.parse(window.localStorage.getItem('points')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('points', points);
  }, [points]);

  useEffect(() => {
    console.log(localStorage.getItem('points'));
  })


  const handleEasyTaskCompletion = (taskId) => {
    const updatedTasks = easyTaskArray.map((task) =>
      task.id === taskId ? { ...task, completed: true } : task
    );
    setEasyTaskArray(updatedTasks);
    setPoints(points + 1);
  };

  const handleMediumTaskCompletion = (taskId) => {
    const updatedTasks = mediumTaskArray.map((task) =>
      task.id === taskId ? { ...task, completed: true } : task
    );
    setMediumTaskArray(updatedTasks);
    setPoints(points + 3);
  };

  const handleHardTaskCompletion = (taskId) => {
    const updatedTasks = hardTaskArray.map((task) =>
      task.id === taskId ? { ...task, completed: true } : task
    );
    setHardTaskArray(updatedTasks);
    setPoints(points + 5);
  };

  const [easyTaskArray, setEasyTaskArray] = useState([
    {
      id: 1,
      name: 'Anti-Litterbug',
      description: 'Pick up 10 pieces of litter',
      difficulty: 'easy',
      completed: false,
      icon: <MdRestoreFromTrash />
    },
    {
      id: 2,
      name: 'The Responsible',
      description: 'Turns the lights off before leaving the house',
      difficulty: 'easy',
      completed: false,
      icon: <MdLightbulb />
    },
    {
      id: 3,
      name: 'Water Warrior',
      description: 'Reduce water usage by turning off wasteful water when brushing, washing dishes, etc.',
      difficulty: 'easy',
      completed: false,
      icon: <FaSink />
    },
    {
      id: 4,
      name: 'The Electrician (Mini)',
      description: 'Go without using any electricity for 1 hour outside of sleeping hours',
      difficulty: 'easy',
      completed: false,
      icon: <FaSink />
    },
    {
      id: 3,
      name: 'Water Warrior',
      description: 'Reduce water usage by turning off wasteful water when brushing, washing dishes, etc.',
      difficulty: 'easy',
      completed: false,
      icon: <FaSink />
    },
    {
      id: 3,
      name: 'Water Warrior',
      description: 'Reduce water usage by turning off wasteful water when brushing, washing dishes, etc.',
      difficulty: 'easy',
      completed: false,
      icon: <FaSink />
    },
    {
      id: 3,
      name: 'Water Warrior',
      description: 'Reduce water usage by turning off wasteful water when brushing, washing dishes, etc.',
      difficulty: 'easy',
      completed: false,
      icon: <FaSink />
    },
  ]);


  const [mediumTaskArray, setMediumTaskArray] = useState([
    {
      id: 1,
      name: 'Vegetarian Explorer',
      description: 'Switch to a vegetarian or vegan diet for the day.',
      difficulty: 'medium',
      completed: false,
      icon: <TbPlant2 />
    },
    {
      id: 2,
      name: 'Bulbous',
      description: 'Switch light bulbs in house to energy efficient bulbs.',
      difficulty: 'medium',
      completed: false,
      icon: <MdLightbulb />
    },
    {
      id: 3,
      name: 'E-Mail',
      description: 'Switch to paperless billing and communication for bills and documents.',
      difficulty: 'medium',
      completed: false,
      icon: <MdOutlineEmail />
    },
    {
      id: 4,
      name: 'The Electrician (Lite)',
      description: 'Go without using any electricity for 3 hours outside of sleeping hours',
      difficulty: 'medium',
      completed: false,
      icon: <MdElectricBolt />
    },
  ]);

  const [hardTaskArray, setHardTaskArray] = useState([
    {
      id: 1,
      name: 'Joyride',
      description: 'Choose to walk, bike, or take public transportation instead of driving a car for the day.',
      difficulty: 'hard',
      completed: false,
      icon: <MdDriveEta />
    },
    {
      id: 2,
      name: 'Composter',
      description: 'Compost fruits, vegetables, or other biodegradables instead of throwing them out.',
      difficulty: 'hard',
      completed: false,
      icon: <MdCompost />
    },
    {
      id: 3,
      name: 'Green Thumb',
      description: 'Compost fruits, vegetables, or other biodegradables instead of throwing them out.',
      difficulty: 'hard',
      completed: false,
      icon: <GiFarmTractor />
    },
    {
      id: 4,
      name: 'Market Farmer',
      description: "Shop at a local farmer's market or co-op for locally grown produce.",
      difficulty: 'hard',
      completed: false,
      icon: <GiBuyCard />
    },
    {
      id: 5,
      name: 'Reusable',
      description: 'Reduce plastic usage by bringing a reusable water bottle and shopping bag.',
      difficulty: 'hard',
      completed: false,
      icon: <GiRecycle />
    },
    {
      id: 6,
      name: 'Old School Laundromat',
      description: 'Use a clothesline or drying rack instead of a dryer for one load of laundry.',
      difficulty: 'hard',
      completed: false,
      icon: <MdOutlineLocalLaundryService />
    },
    {
      id: 7,
      name: 'Communal Cleaning',
      description: 'Attend a community clean-up event to reduce litter and pollution.',
      difficulty: 'hard',
      completed: false,
      icon: <MdCleanHands />
    },
    {
      id: 8,
      name: 'The Electrician',
      description: 'Go without using any electricity for 6 hours outside of sleeping hours',
      difficulty: 'hard',
      completed: false,
      icon: <MdElectricBolt />
    },
  ]);

  return (
    <div style={styles.dashboardPage}>
      <div style={styles.dashboardHeader}>
        <div style={styles.navButton}>
          <GrReturn />
          <Button style={{textTransform: 'none', color: 'white'}}
          onClick={() => console.log("logout")}
          >logout</Button>
        </div>
        <h1 style={styles.title}>Dashboard</h1>
        <div style={styles.navButton}>
          <FaTrophy />
          <Button style={{textTransform: 'none', color: 'white'}}
          onClick={() => navigate('/accomplishments')}
          >accomplishments</Button>
        </div>
      </div>
      <div style={styles.mainDash}>
        <div style={styles.dashHeader}>
          <h2>Task List</h2>
          <div>
            <ToggleButtonGroup
              color="success"
              orientation="horizontal"
              value={currentDifficulty}
              exclusive
              style={{ textTransform: 'none' }}
              onChange={(event, newDifficulty) => {
                setCurrentDifficulty(newDifficulty);
              }}
            >
              <ToggleButton style={{ textTransform: 'none' }} value="easy" aria-label="easy">
                easy
              </ToggleButton>
              <ToggleButton style={{ textTransform: 'none' }} value="medium" aria-label="medium">
                medium
              </ToggleButton>
              <ToggleButton style={{ textTransform: 'none' }} value="hard" aria-label="hard">
                hard
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>
        <div style={styles.taskInterface}>
          {currentDifficulty === 'easy' ?
            <div>
              <div style={styles.taskList}>
                {easyTaskArray.map((task) => (
                  <div>
                    {task.icon}
                    <Task key={task.id} task={task} onCompletion={handleEasyTaskCompletion} />
                  </div>
                ))}
              </div>
            </div>
            : currentDifficulty === 'medium' ?
              <div>
                <div style={styles.taskList}>
                  {mediumTaskArray.map((task) => (
                    <div>
                      {task.icon}
                      <Task key={task.id} task={task} onCompletion={handleMediumTaskCompletion} />
                    </div>
                  ))}
                </div>
              </div>
              : currentDifficulty === 'hard' ?
                <div>
                  <div style={styles.taskList}>
                    {hardTaskArray.map((task) => (
                      <div>
                        {task.icon}
                        <Task key={task.id} task={task} onCompletion={handleHardTaskCompletion} />
                      </div>
                    ))}
                  </div>
                </div>
                :
                <img src="https://media4.giphy.com/media/hrXNZuo6SYYx079zvd/giphy.gif" alt="Encouraging bird GIF" />
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
    textAlign: 'center',
    backgroundColor: '#E0D8C3',
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
    width: '90%',
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
    justifyContent: 'center',
  },
  checkIcon: {
    marginLeft: '2%'
  },
  taskInterface: {
    marginBottom: '2%'
  },
  dashboardHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    alignItems: 'center',
    margin: 'auto',
    marginBottom: '2%'
  },
  navButton: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#7E7466',
    padding: '5px',
    paddingLeft: '5px',
    paddingRight: '5px',
    borderRadius: '10px',  
  }
}
