import React from 'react';

class List extends React.Component {
  //   const {tasks,onChecked} = this.props
  render() {
    const { tasks, onChecked } = this.props;

    const list =
      tasks.length > 0
        ? tasks.map((task, idx) => (
            <li key={idx}>
              <input
                type='checkbox'
                onChange={() => onChecked(idx, task.completed)}
                checked={task.completed}
              />
              {task.details}
            </li>
          ))
        : 'no tasks';
    return <ul>{list}</ul>;
  }
}

export default List;
