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
    const helper = this.state.tasks.map((task) =>
      task.id === id ? (task.completed = !status) : task,
    );
    this.setState({ tasks: [...helper] });
  };
  render() {
    const { tasks } = this.state;
    return (
      <>
        <List tasks={tasks} onChecked={this.onChecked} />
        <button onClick={this.handleSubmit}>Show More</button>
      </>
    );
  }
}

export default Tasks;
