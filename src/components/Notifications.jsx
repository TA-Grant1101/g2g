import React from 'react';
import { ReactNotifications, Store } from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';


export default function Notification() {
    const handleNotificationClick = () => {
        Store.addNotification({
          title: 'Success!',
          message: 'Your action was completed successfully.',
          type: 'success',
          insert: 'top',
          container: 'top-right',
          animationIn: ["animated", "fadeIn"],
          animationOut: ["animated", "fadeOut"],
          dismiss: {
            duration: 5000,
            onScreen: true
          }
        });
      };

    return (
        <div>
            <ReactNotifications />
            <button onClick={handleNotificationClick}>Show Success Notification</button>
        </div>

    );


}