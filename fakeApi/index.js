const fakeData = [];

const saveItemMode = {
  todo: '',
  date: '',
  id: 0,
};

const createNewSaveItemFormat = (todo, date, id) => {
  const newItem = Object.assign({}, saveItemMode);

  return {
    ...newItem,
    todo,
    date,
    id,
  };
};

const SUCCESS = 'success';
const FAILURE = 'failure';
const returnInfoFormat = (type, data) => {
  return {
    type,
    data,
  };
};
export const createItem = (text) => {
  return new Promise((resolve, reject) => {
    if (!text) {
      resolve(returnInfoFormat(FAILURE));
      return;
    }
    const id = fakeData.length + 1;
    const todo = text;
    const date = new Date().toDateString();
    const item = createNewSaveItemFormat(todo, date, id);

    fakeData.push(item);
    setTimeout(() => {
      resolve(returnInfoFormat(SUCCESS));
    }, 100);
  });
};

export const readAll = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(returnInfoFormat(SUCCESS, fakeData));
    }, 100);
  });
};

export const readById = (id) => {
  return new Promise((resolve, reject) => {
    const results = fakeData.filter((item) => {
      return item.id === id;
    });

    setTimeout(() => {
      if (results.length > 0) {
        resolve(returnInfoFormat(SUCCESS, results[0]));
      } else {
        resolve(returnInfoFormat(FAILURE));
      }
    }, 100);
  });
};

export const updateById = (id, text) => {
  return new Promise((resolve, reject) => {
    const results = fakeData.filter((item) => {
      return item.id === id;
    });

    setTimeout(() => {
      if (results.length > 0) {
        results[0].todo = text;
        resolve(returnInfoFormat(SUCCESS));
      } else {
        resolve(returnInfoFormat(FAILURE));
      }
    }, 100);
  });
};

export const deleteById = (id) => {
  return new Promise((resolve, reject) => {
    const id = fakeData.findIndex((item) => {
      return item.id === id;
    });

    setTimeout(() => {
      if (id !== -1) {
        fakeData.splice(id, 1);
      }
      resolve(returnInfoFormat(SUCCESS));
    }, 100);
  });
};
