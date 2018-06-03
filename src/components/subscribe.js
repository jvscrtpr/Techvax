import React, { Component } from 'react';
import { SubscribeStyle } from './styles';

class Subscribe extends Component{
  render(){
    return(
    <React.Fragment>
      {this.props.open ? <SubscribeStyle>
        {this.props.children}
        <ul>
          {/* will replace this with mailchimp later before production just useing as placeholder to get styles set */}
          <p>Enter your email down below to subscribe to our newsletter to keep up to date on all things Techvax</p>
          <input type='text' placeholder='Enter your email...' className='subbar'/>
          <input type='button' value='Enter' className='btn' />
        </ul>
      </SubscribeStyle> : null }
    </React.Fragment>
    );
  }
}
export default Subscribe;