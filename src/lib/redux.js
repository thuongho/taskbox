// A simple redux store/actions/reducer
import { createStore } from 'redux';

// actions are name of the changes that can happen to the store
export const actions = {
  ARCHIVE_TASK: 'ARCHIVE_TASK',
  PIN_TASK: 'PIN_TASK'
};

// action creators bundle actions with the data required to execute them
export const archiveTask = id => ({ type: actions.ARCHIVE_TASK, id });
export const pinTask = id => ({ type: actions.PIN_TASK, id });

// All our reducers simply change the state of a single task
const taskStateReducer = (taskState) => (state, action) => (
  {
    ...state,
    tasks: state.tasks.map(task =>
      task.id === action.id ? { ...task, state: taskState } : task
    )
  }
);

// the reducer describes how the contents of the store change for each action
export const reducer = (state, action) => {
  switch(action.type) {
    case actions.ARCHIVE_TASK:
      return taskStateReducer('TASK_ARCHIVED')(state, action);
    case actions.PIN_TASK:
      return taskStateReducer('TASK_PINNED')(state, action);
    default:
      return state;
  }
};

// initial state of the store when the app loads
// usually fetch from the server
const defaultTasks = [
  { id: '1', title: 'Something', state: 'TASK_INBOX' },
  { id: '2', title: 'Something more', state: 'TASK_INBOX' },
  { id: '3', title: 'Something else', state: 'TASK_INBOX' },
  { id: '4', title: 'Something again', state: 'TASK_INBOX' },
];

// export constructed redux store
export default createStore(reducer, { tasks: defaultTasks });
