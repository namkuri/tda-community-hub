import React from 'react';
import './ContentBox.css';

function ContentBox(props) {
    return (
        <div className="Content-box-wrap">
            <div className="Content-box-name">{props.name}</div>
            <div className="Content-box">
                {props.children}
            </div>
        </div>
    )
}

export default ContentBox;