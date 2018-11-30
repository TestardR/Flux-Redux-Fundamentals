import { Dispatcher } from './flux';

const controlPanelDispatcher = new Dispatcher();

document
  .getElementById(`userNameInput`)
  .addEventListener(`input`, ({ target }) => {
    const name = target.value;
    console.log('Dispatching...', name);
    controlPanelDispatcher.dispatch(`TODO_NAMEINPUTACTION`);
  });

document.forms.fontSizeForm.fontSize.forEach(element => {
  element.addEventListener(`change`, ({ ttarget }) => {
    controlPanelDispatcher.dispatch('TODO_FONTUPDATEACTION');
  });
});

controlPanelDispatcher.register(action => {
  console.info('Received action...', action);
});
