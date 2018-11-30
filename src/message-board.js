import { createStore, combineReducers } from 'redux';

export const ONLINE = 'ONLINE';
export const AWAY = 'AWAY';
export const BUSY = 'BUSY';
export const OFFLINE = 'OFFLINE';

export const UPDATE_STATUS = 'UPDATE_STATUS';

export const CREATE_NEW_MESSAGE = 'CREATE_NEW_MESSAGE';

const defaultState = {
  messages: [
    {
      date: new Date('2018-10-10 10:11:52'),
      postedBy: 'Stan',
      content: 'I <3 the new productivity app!'
    },
    {
      date: new Date('2018-10-11 10:25:48'),
      postedBy: 'Maria',
      content: 'Anyone got tickets to ng-conf?'
    }
  ],
  userStatus: ONLINE
};

const userStatusReducer = (
  state = defaultState.userStatus,
  { type, value }
) => {
  switch (type) {
    case UPDATE_STATUS:
      return value;
      break;
  }
  return state;
};

const store = createStore(reducer);

const render = () => {
  const { messages, userStatus } = store.getState();
  document.getElementById('messages').innerHTML = messages
    .sort((a, b) => b.date - a.date)
    .map(
      message =>
        `<div>
            ${message.postedBy} : ${message.content}
        </div>
        `
    )
    .join('');

  document.forms.newMessage.fields.disabled = userStatus === OFFLINE;
};

const statusUpdateAction = value => {
  return {
    type: UPDATE_STATUS,
    value
  };
};

const newMessageAction = (content, postedBy) => {
  const date = new Date();
  return {
    type: CREATE_NEW_MESSAGE,
    value: content,
    postedBy,
    date
  };
};

document.forms.selectStatus.status.addEventListener('change', e => {
  store.dispatch(statusUpdateAction(e.target.value));
});

render();

store.subscribe(render);
