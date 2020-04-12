import React from 'react';
// document shape of data
import PropTypes from 'prop-types';

const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === 'TASK_ARCHIVED'}
          disabled={true}
          name="checked"
        />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)}></span>
      </label>
      <div className="title">
        <input type="text" value={title} readOnly={true} placeholder="Input Title" />
      </div>

      <div className="actions" onClick={event => event.stopPropagation()}>
        {
          state !== 'TASK_ARCHIVED' && (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a onClick={() => onPinTask(id)}>
              <span className="icon-start"></span>
            </a>
          )
        }
      </div>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired
  }),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func
};

export default Task;
