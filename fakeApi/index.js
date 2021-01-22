import {
  insertItem,
  search,
  updateItem,
  changeStatus,
  FINISH,
  PROCESSING,
  REMOVE,
} from './mock';
const DELAYTIME = 500;

const SUCCESS = 'success';
const FAILURE = 'failure';

const apiFormat = (type, data) => {
  return {
    type,
    data,
  };
};

export const createNewTodo = (text) => {
  return new Promise((resolve, reject) => {
    const isSuccess = insertItem(text);
    setTimeout(() => {
      resolve(apiFormat(isSuccess ? SUCCESS : FAILURE));
    }, DELAYTIME);
  });
};

export const readAll = () => {
  return new Promise((resolve, reject) => {
    const res = search();
    setTimeout(() => {
      resolve(apiFormat(SUCCESS, res));
    }, DELAYTIME);
  });
};

export const readByStatus = (status) => {
  return new Promise((resolve, reject) => {
    const res = search(status);
    setTimeout(() => {
      resolve(apiFormat(SUCCESS, res));
    }, DELAYTIME);
  });
};

export const updateById = (id, text) => {
  return new Promise((resolve, reject) => {
    const isSuccess = updateItem(id, text);
    setTimeout(() => {
      resolve(apiFormat(isSuccess ? SUCCESS : FAILURE));
    }, DELAYTIME);
  });
};

export const setTodoItemIsFinish = (id) => {
  return new Promise((resolve, reject) => {
    const isSuccess = changeStatus(id, FINISH);

    setTimeout(() => {
      resolve(apiFormat(isSuccess ? SUCCESS : FAILURE));
    }, DELAYTIME);
  });
};

export const setToDoItemIsProcessing = (id) => {
  return new Promise((resolve, reject) => {
    const isSuccess = changeStatus(id, PROCESSING);

    setTimeout(() => {
      resolve(apiFormat(isSuccess ? SUCCESS : FAILURE));
    }, DELAYTIME);
  });
};

export const setToDoItemIsRemove = (id) => {
  return new Promise((resolve, reject) => {
    const isSuccess = changeStatus(id, REMOVE);

    setTimeout(() => {
      resolve(apiFormat(isSuccess ? SUCCESS : FAILURE));
    }, DELAYTIME);
  });
};
