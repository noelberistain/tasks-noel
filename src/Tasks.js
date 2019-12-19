import React, { Component } from 'react';
import { jsonTasks } from './data';
import List from './List';

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = { step: 0, end: 5, tasks: [...jsonTasks], chunk: [] };
  }

  componentDidMount() {
    const { step, end } = this.state;
    const aux = [...jsonTasks].filter((e, step) => step < end);
    console.log(aux);
    this.setState({
      chunk: [...aux],
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((prev) => ({ step: prev.step + 5, end: prev.end + 5 }));
  };

  onChecked = (id, status) => {
    const helper = this.state.tasks.map((task) => {
      if (task.id === id) {
        let aux = { ...task };
        aux.completed = !status;
        console.log('task modified', aux);
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
    const { chunk, step, end, tasks } = this.state;
    console.log(
      'TCL: Tasks -> render -> chunk,step,end,tasks',
      chunk,
      step,
      end,
      tasks,
    );
    return (
      <div style={this.containerStyle}>
        <h2 style={{ color: 'blue' }}>TASKS: </h2>
        <List tasks={chunk} onChecked={this.onChecked} />
        {step <= tasks.length ? (
          <button style={this.buttonStyle} onClick={this.handleSubmit}>
            Show More
          </button>
        ) : (
          <button style={this.buttonStyle} onClick={this.init}>
            {' '}
            Reset
          </button>
        )}
      </div>
    );
  }
}

export default Tasks;
