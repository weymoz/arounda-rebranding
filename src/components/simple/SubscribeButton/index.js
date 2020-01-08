import React from 'react'
import s from './style.scss'
import classnames from 'classnames'

const SubscribeButton = ({text, style, className}) => {
    return (
        <button 
            className={classnames(className, s.subscribeButton)}
            style={style ? style : {}}
        >
         {text}
        </button>
    )
}

export default SubscribeButton;