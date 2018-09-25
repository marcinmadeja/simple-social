const PREFIX = 'SIMPLE_SOCIAL_';
const storage = window.localStorage;

export const setItem = (name, item) => {
  try {
    storage.setItem(PREFIX + name, item);
  } catch (error) {
    console.log(error);
  }
};

export const getItem = (name) => {
  try {
    return storage.getItem(PREFIX + name);
  } catch (error) {
    console.log(error);
  }
};

export const removeItem = (name) => {
  try {
    storage.removeItem(PREFIX + name);
  } catch (error) {
    console.log(error);
  }
};
