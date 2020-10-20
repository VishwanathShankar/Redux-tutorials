import { ADD_NOTE } from '../actions/actions';

const initialState = {
  notes: [],
};

function rootReducer(state = initialState, action) {
  console.log("Inside rootReducer");
  console.log("Action type is "+action.type);
  switch (action.type) {
    case ADD_NOTE:
      return {
        notes: [
          ...state.notes,
          {
            title: action.title,
            content: action.content,
          },
        ],
      };

    default:
      return state;
  }
}

export default rootReducer;