import { generate as id } from 'shortid';
import { Dispatcher, ReduceStore } from './flux';

const tasksDispatcher = new Dispatcher();

class TasksStore extends ReduceStore {
  getInitialState() {
    return {
      tasks: [
        {
          id: id(),
          content: 'Update CSS styles',
          complete: false
        },
        {
          id: id(),
          content: 'Add Unit tests',
          complete: false
        },
        {
          id: id(),
          content: 'Post to social media',
          complete: false
        },
        {
          id: id(),
          content: 'Install hard drive',
          complete: false
        }
      ],
      showComplete: true
    };
  }
  reduce(state, action) {
    console.log('Reducing...', state, action);
    return state;
  }
  getState() {
    return this.__state;
  }
}

const taskStore = new TasksStore(tasksDispatcher);

tasksDispatcher.dispatch('TEST_DISPATCH');
