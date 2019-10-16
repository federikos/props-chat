import React from 'react';
import PropTypes from 'prop-types';

const Message = ({from, message}) => (
  <li className="clearfix">
    <div className="message-data align-right">
      <span className="message-data-time">{message.time} </span>
      <span className="message-data-name">{from.name} </span>
      <i className="fa fa-circle me"></i>
    </div>
    <div className="message other-message float-right">
      {message.text}
    </div>
  </li>
)

const Response = ({from, message}) => (
  <li>
    <div className="message-data">
      <span className="message-data-name"><i className="fa fa-circle online"></i>{from.name} </span>
      <span className="message-data-time">{message.time}</span>
    </div>
    <div className="message my-message">
      {message.text}
    </div>
  </li>
)

const Typing = ({from, message}) => (
  <li className="clearfix">
    <div className="message-data align-right">
      <span className="message-data-time">{message.time} </span>
      <span className="message-data-name">{from.name} </span>
      <i className="fa fa-circle me"></i>
    </div>
    <div className="float-right">
      <i className="fa fa-circle me animated-typing animated-typing_1"></i>
      <i className="fa fa-circle me animated-typing animated-typing_2"></i>
      <i className="fa fa-circle me animated-typing animated-typing_3"></i>
    </div>
  </li>
)

Message.propTypes = Response.propTypes = Typing.propTypes = {
  from: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  message: PropTypes.shape({
    time: PropTypes.string.isRequired,
    text: PropTypes.string,
  })
}

export { Message, Response, Typing }