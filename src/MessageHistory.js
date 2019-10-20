import React from 'react';
import PropTypes from 'prop-types';
import { Message, Response, Typing } from './messageTypes'

function MessageHistory({list}) {
  if (!list.length) {
    return null;
  }

  const messages = list.map(message => {
    if (message.type === 'message') {
      return <Message key={message.id} message={message} />
    }

    if (message.type === 'response') {
      return <Response key={message.id} message={message} />
    }

    if (message.type === 'typing') {
      return <Typing key={message.id} message={message} />
    }
  })

  return (
    <ul>
      {messages}
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