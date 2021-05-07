import { notification } from 'antd';

export const showNotification = (message, placement="topRight") => {
    notification.info({
        message,
        placement,
    });
}