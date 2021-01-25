import {REFRESHLIST} from './actionType';

export const refreshTodoList = (list = []) => {
  return {
    type: REFRESHLIST,
    payload: {
      list,
    },
  };
};
