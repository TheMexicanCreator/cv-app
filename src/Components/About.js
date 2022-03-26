import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <div className='card'>
          <div className='card-content'>
            <h6 className='mt-bottom'> 
              <strong> ABOUT ME </strong>
            </h6>
            <p className='grey-text'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
          <div className='card-action'>
          <h6> 
            <strong> PERSONAL INFO </strong>
          </h6>
          <div className='row mt'>
            <div className='col s12 m6 xl6'>
              <p> <strong> Address:</strong> 123 Lorem </p>
              <p> <strong> Email:</strong> test@gmail.com </p>
              <p> <strong> Phone:</strong> 123 456 789 </p>
            </div>
            <div className='col s12 l6 xl6'>
              <p> <strong> Main Language:</strong> Spanish </p>
              <p> <strong> Second Language:</strong> English </p>
              <p> <strong> Other Languages:</strong> German and French </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}
