import React, { Component } from 'react';
import data from './data';
import List from './List';

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      end: 5,
      tasks: [],
    };
  }

  componentDidMount() {
    const showing = this.slicing();
    const { end } = this.state;
    this.setState({ tasks: [...showing], start: end, end: end + 5 });
  }

  slicing = () => {
    const { start, end } = this.state;
    const showing = [...data].slice(start, end);
    return showing;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { end } = this.state;
    const showing = this.slicing();
    this.setState({ tasks: [...showing], start: end + 1, end: end + 5 });
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
    const { tasks } = this.state;
    return (
      <div style={this.containerStyle}>
        <h2 style={{ color: 'blue' }}>TASKS: </h2>
        <List tasks={tasks} onChecked={this.onChecked} />
        <button style={this.buttonStyle} onClick={this.handleSubmit}>
          Show More
        </button>
      </div>
    );
  }
}

export default Tasks;
