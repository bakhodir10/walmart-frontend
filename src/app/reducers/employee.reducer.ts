import * as EmployeeActions from '../action/employee.action';
import {Users} from '../user/user.model';

// export type Action = EmployeeActions.ALL;
const INITIAL_STATE: Users = {
  list: []
};

export function employeeReducer(state: Users = INITIAL_STATE, action: any): any {
  let index, list;

  switch (action.type) {

    case EmployeeActions.GET: {
      return Object.assign({}, state, {list: action.payload.list});
    }

    case EmployeeActions.CREATE: {
      state.list.push(action.payload.user);
      return state;
    }

    case EmployeeActions.UPDATE: {
      list = [...state.list];
      index = list.findIndex(({id}) => id === action.payload.user.id);
      list[index] = action.payload.user;
      return Object.assign({}, state, {list});
    }

    case EmployeeActions.DELETE: {
      list = state.list
        .filter(({_id}) => _id !== action.payload._id);
      return Object.assign({}, state, {list});
    }

    default: {
      return state;
    }
  }
}
