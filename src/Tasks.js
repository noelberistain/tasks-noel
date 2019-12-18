import React, { Component } from 'react';
import data from './data';
import List from './List';

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  componentDidMount() {
    this.setState({ tasks: [...data] });
  }
  handleSubmit = (e) => {
    e.preventDefault();
  };
  onChecked = (id, status) => {
    console.log(id, status);
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
  render() {
    const { tasks } = this.state;
    console.log(tasks);
    return (
      <>
        <List tasks={tasks} onChecked={this.onChecked} />
        <button onClick={this.handleSubmit}>Show More</button>
      </>
    );
  }
}

export default Tasks;
