import React from 'react';
import PropTypes from 'prop-types';
import { Message, Response, Typing } from './messageTypes'

function MessageHistory({list}) {
  return (
    list.length
    &&
    <ul>
      {
        list.map(li => {
          const message = {text: li.text, time: li.time}
          return(
            li.type === 'message' 
              ? <Message key={li.id} from={li.from} message={message} />
              : li.type === 'response' 
                ? <Response key={li.id} from={li.from} message={message} />
                : li.type === 'typing' && <Typing key={li.id} from={li.from} message={message} />
          )
        })
      }
    </ul>
  )
}

MessageHistory.defaultProps = {
  list: [],
}

MessageHistory.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      from: PropTypes.object.isRequired,
      type: PropTypes.oneOf(['response', 'message', 'typing']).isRequired,
      time: PropTypes.string.isRequired,
      text: PropTypes.string
    })
  )
}

export default MessageHistory;