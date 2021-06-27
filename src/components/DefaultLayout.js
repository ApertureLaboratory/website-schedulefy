import React from 'react';

export default function DefaultLayout(props){
    return(
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', ...props.style}}>
            {props.children}
        </div>
    )
}