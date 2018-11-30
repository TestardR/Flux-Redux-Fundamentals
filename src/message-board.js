import { createStore } from 'redux';

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
  usersStatus: 'ONLINE'
};

const store = createStore((state = defaultState) => {
  return state;
});

const render = () => {
  const { messages, usersStatus } = store.getState();
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
};

render();
