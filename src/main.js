import store from './store/store';
import { addNote } from './actions/actions';

// We use store.getState() to get our app state from the store

function handleChange() {
  console.log(store.getState());
}

const unsubscribe = store.subscribe(handleChange)

console.log('Before:', store.getState());
store.dispatch(addNote('One', 'One content'));
store.dispatch(addNote('Two', 'Two content'));
store.dispatch(addNote('Three', 'Three content'));
console.log('After:', store.getState());

//Finally unsubscribe
unsubscribe(); 