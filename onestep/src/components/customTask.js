import React, { useState } from 'react';
import { Button, Modal, TextField, FormControlLabel, Checkbox } from '@mui/material';

const CustomTask = ({ isModalOpen, handleModalClose }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [completion, setCompletion] = useState(false);
  const [goals, setGoals] = useState([]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  const handleCompletionChange = (event) => {
    setCompletion(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newGoal = {
      id: Math.floor(Math.random() * 10000),
      name,
      description,
      difficulty,
      completion,
    };
    setGoals([...goals, newGoal]);
  };

  const renderGoals = () => {
    return goals.map((goal) => (
      <div key={goal.id}>
        <h2>{goal.name}</h2>
        <p>{goal.description}</p>
        <p>{goal.difficulty}</p>
        <p>{goal.completion ? 'Completed' : 'Not Completed'}</p>
      </div>
    ));
  };

  return (
    <div>      
      <Modal style={styles.modal}
            open={isModalOpen} onClose={handleModalClose}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
          <form onSubmit={handleSubmit}>
            <TextField label="Goal Name" value={name} onChange={handleNameChange} />
            <TextField label="Goal Description" value={description} onChange={handleDescriptionChange} />
            <TextField label="Goal Difficulty" value={difficulty} onChange={handleDifficultyChange} />
            <FormControlLabel
              control={<Checkbox checked={completion} onChange={handleCompletionChange} color="primary" />}
              label="Completion"
            />
            <Button type="submit" variant="contained" color="primary">
              Add
            </Button>            
            <Button onClick={handleModalClose}>Close</Button>
          </form>
        </div>
      </Modal>
      <div>{renderGoals()}</div>
    </div>
  );
};

export default CustomTask;

let styles = {  
    modal: {
    }
}