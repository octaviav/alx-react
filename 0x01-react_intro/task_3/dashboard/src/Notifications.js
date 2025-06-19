import React from "react";
import './Notifications.css';

function Notifications() {
    return (
        <div className="Notifications">
            <p>Here is the list of notifications</p>
            <ul>
                <li>New course available</li>
                <li>New resume available</li>
                <li>New data available</li>
            </ul>
        </div>
    )
}

export default Notifications;