import React, { Component } from 'react'

export default class Skills extends Component {
  render() {
    return (
      <div>
        <div className='card'>
          <div className='card-content'>
            <h6>
              <strong> PROFESSIONAL SKILLS </strong>
            </h6>
            <div className='row mt-top'>
              <div className='col s6'>
                <p> HTML </p>
                <div className='progress grey lighten-1'>
                  <div className='determinate blue' style={{ width: '89%' }}></div>
                </div>
              </div>
              <div className='row mt-top'>
              <div className='col s6'>
                <p> CSS </p>
                <div className='progress grey lighten-1'>
                  <div className='determinate blue' style={{ width: '89%' }}></div>
                </div>
              </div>
              <div className='row mt-top'>
              <div className='col s6'>
                <p> Javascript </p>
                <div className='progress grey lighten-1'>
                  <div className='determinate blue' style={{ width: '89%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    );
  }
}
