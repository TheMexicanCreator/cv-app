import React, { Component } from 'react'

export default class Experience extends Component {
  render() {
    return (
      <div className='card'>
        <div className='card-content'> 
          <div> 
            <h6> <strong> EXPERIENCE </strong> </h6>
            <div className='row'>
              <div className='col s12 m4 l4 xl4'>
                <p className='teal year_exp white-text'>
                  Jan <strong> 2019 </strong> -March <strong> 2020 </strong>
                </p>
              </div>
              <div className='col s12 m8 l8 xl8'>
                <blockquote className='no-pad'>
                  <h6 className='no-pad mt-bottom'>
                    <strong> WEB DEVELOPER </strong>
                  </h6>
                  <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                </blockquote>
              </div>
            </div>
            <div className='row'>
              <div className='col s12 m4 l4 xl4'>
                <p className='teal year_exp white-text'>
                  Jan <strong> 2020 </strong> -March <strong> 2022 </strong>
                </p>
              </div>
              <div className='col s12 m8 l8 xl8'>
                <blockquote className='no-pad'>
                  <h6 className='no-pad mt-bottom'>
                    <strong> FULL STACK DEVELOPER </strong>
                  </h6>
                  <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
