import React from "react";
import './Notifications.css';
import { getLatestNotification } from "./utils";
import close from './close.svg';

function Notifications() {
    const handleClose = () => {
        console.log('Close button has been clicked');
    };

    return (
        <div className="Notifications">
            <p>Here is a list of notifications</p>
            <button 
                aria-label='Close' 
                onClick={handleClose} 
                style={{
                    float: "right", 
                    border: 'none', 
                    background: 'transparent', 
                    position: 'absolute', 
                    right: '2em', 
                    top: '2em'
                }}
            >
                <img 
                    src={close} 
                    alt='close-btn' 
                    style={{width: '15px', height: '20px', top: 0}}
                />
            </button>
            <ul type="bullet" className="notif-list">
                <li data="default">New course available</li>
                <li data="urgent">New resume available</li>
                <li data='urgent' dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
        </div>
    )
}

export default Notifications;