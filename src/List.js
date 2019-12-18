import React from 'react';

class List extends React.Component {
  //   const {tasks,onChecked} = this.props
  ulStyle = {
    listStyleType: 'none',
    padding: '2rem',
  };

  itemStyle = {
    margin: '7px auto',
  };

  render() {
    const { tasks, onChecked } = this.props;
    const list =
      tasks.length > 0
        ? tasks.map((task, idx) => (
            <li key={idx} style={this.itemStyle}>
              <input
                type='checkbox'
                onChange={() => onChecked(idx, task.completed)}
                checked={task.completed}
              />
              {task.details}
            </li>
          ))
        : 'no tasks';
    return <ul style={this.ulStyle}>{list}</ul>;
  }
}

export default List;
