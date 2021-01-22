const fakeData = [];

export const PROCESSING = 'processing';
export const FINISH = 'finish';
export const REMOVE = 'remove';

const saveItemMode = {
  todo: '',
  date: '',
  status: '',
  id: 0,
};

export const insertItem = (text = '') => {
  if (!text) return false;
  const item = {
    todo: text,
    date: new Date().toString(),
    status: TODO,
    id: fakeData.length + 1,
  };

  fakeData.push(item);
};

export const updateItem = (id = -1, text = '') => {
  if (id === -1 || text === '') return false;
  const results = fakeData.filter((item) => {
    return item.id === id;
  });

  if (results.length === 0) return false;
  results[0].todo = text;
  return true;
};

export const deleteItem = (id = -1) => {
  if (id === -1) return false;
  const itemPosition = fakeData.findIndex((item) => {
    return item.id === id;
  });

  if (itemPosition === -1) return false;
  fakeData.splice(itemPosition, 1);
  return true;
};

export const changeStatus = (id = -1, status = TODO) => {
  if (id === -1) return false;
  const results = fakeData.filter((item) => {
    return item.id === id;
  });

  if (results.length === 0) return false;
  results[0].status = status;
  return true;
};

export const search = (id = -1, status = '') => {
  if (id === -1 && status === '') return fakeData;
  return fakeData.filter((item) => {
    return item.id === id || item.status === status;
  });
};
