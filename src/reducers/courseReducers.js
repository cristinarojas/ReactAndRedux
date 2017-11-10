import * as types from '../actions/actionTypes';

export default function courseReducer(state = [], action) {
  switch(action.type) {
    case types.CREATE_COURSE:
      // [Nueva instancia de state =[]]
      return [
        ...state,
        Object.assign({}, action.payload)
      ];
      // En este nuevo objeto mete el cambio action.course

    default:
      return state;
  }
}

/*
[{course: { title: 'hola' }}, {course: { title: 'hola 2' }}]
*/
