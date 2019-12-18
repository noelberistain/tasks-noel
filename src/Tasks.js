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
    this.setState({ tasks: [...showing], start: end, end: end + 5 });
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

  render() {
    const { tasks, start, end } = this.state;
    console.log(start, end);
    return (
      <>
        <List tasks={tasks} onChecked={this.onChecked} />
        <button onClick={this.handleSubmit}>Show More</button>
      </>
    );
  }
}

export default Tasks;
