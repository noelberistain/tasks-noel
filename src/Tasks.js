import React, { Component } from 'react';
import { jsonTasks } from './data';
import List from './List';

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = { step: 0, end: 5, tasks: [...jsonTasks] };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ step: this.state.step + 5, end: this.state.end + 5 });
  };

  onChecked = (id, status) => {
    const helper = this.state.tasks.map((task) => {
      if (task.id === id) {
        let aux = { ...task };
        aux.completed = !status;
        return aux;
      }
      return task;
    });
    this.setState({ tasks: [...helper] });
  };

  init = () => {
    this.setState({ step: 0, end: 5 });
  };
  containerStyle = {
    listStyleType: 'none',
    padding: '1rem',
    margin: '5px auto',
    backgroundColor: 'lightblue',
    textAlign: 'center',
    width: '30%',
  };

  buttonStyle = {
    backgroundColor: '#4CAF50',
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
  };

  render() {
    const { step, end, tasks } = this.state;
    return (
      <div style={this.containerStyle}>
        <h2 style={{ color: 'blue' }}>TASKS: </h2>
        <List tasks={tasks} onChecked={this.onChecked} step={step} end={end} />
        {end < tasks.length ? (
          <button style={this.buttonStyle} onClick={this.handleSubmit}>
            Show More
          </button>
        ) : (
          <button style={this.buttonStyle} onClick={this.init}>
            {' '}
            Watch Again
          </button>
        )}
      </div>
    );
  }
}

export default Tasks;
