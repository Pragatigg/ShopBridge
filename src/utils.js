import { notification } from 'antd';

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export const showNotification = (message, placement="topRight") => {
    notification.info({
        message,
        placement,
    });
}

export const formatError = error => {
  const errArr = error.split(" ");
  errArr[0] = capitalize(errArr[0]).replace("_", " ");
  return errArr.join(" ");
};
