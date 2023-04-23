import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { ToggleButtonGroup, ToggleButton, Button } from '@mui/material';
import { FcCheckmark } from 'react-icons/fc';
import { FaSink, FaTrophy } from 'react-icons/fa';
import { GrReturn } from 'react-icons/gr';
import Tree from '../components/accomplishmentTree';

const Accomplishments = () => {

  let navigate = useNavigate();

  const [currentDifficulty, setCurrentDifficulty] = useState('easy');

  useEffect(() => {
    console.log(localStorage.getItem('points'));
  })

  return (
    <div style={styles.accomplishmentPage}>
      <div style={styles.accomplishmentHeader}>
        <div style={styles.navButton}>
          <GrReturn />
          <Button style={{textTransform: 'none', color: 'white'}}
          onClick={() => navigate('/')}
          >back to dashboard</Button>
        </div>
        <h1 style={styles.title}>Accomplishments</h1>
        <div style={styles.navButton}>
          <FaTrophy />
          <Button style={{textTransform: 'none', color: 'white'}}
          onClick={() => navigate('/accomplishments')}
          >accomplishments</Button>
        </div>
      </div>
      <div style={styles.mainDash}>
        <div style={styles.dashHeader}>
          <h2>Tree</h2>
          <div>
            <div>
              Points: {localStorage.getItem('points')}
            </div>
          </div>
        </div>
        <Tree height={500}/>
      </div>
    </div>
  );
}

export default Accomplishments;

let styles = {
  accomplishmentPage: {
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
  accomplishmentHeader: {
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
