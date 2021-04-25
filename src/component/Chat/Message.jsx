import React from 'react'
import './style/Message.scss'
import { Avatar } from '@material-ui/core'

const Message = () => {
    return (
        <div className="message">
            <Avatar src="https://i.pinimg.com/736x/6d/cb/58/6dcb58c96bb5e52e43d613c246ca094c.jpg" />
            <div className="message__info">
                <h4>
                    RASEM0n
                    <span className="message__timestamp">20.02.2021</span>
                </h4>
                <p className="message__content">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequuntur dolore ea
                    eius ex hic in ipsa itaque recusandae veritatis!Lorem ipsum dolor sit amet, consectetur
                    adipisicing elit. Animi consequuntur dolore ea eius ex hic in ipsa itaque recusandae
                    veritatis!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consequuntur
                    dolore ea eius ex hic in ipsa itaque recusandae veritatis!Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Animi consequuntur dolore ea eius ex hic in ipsa itaque
                    recusandae veritatis!
                </p>
            </div>
        </div>
    )
}

export default Message
