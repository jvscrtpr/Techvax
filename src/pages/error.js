import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { ErrorStyle } from '../components/styles';

class Error extends Component{
  render(){
    return(
    <div>
        <Helmet>
            <title>404 | Techvax.com</title>
        </Helmet>
        <ErrorStyle>
          <h1>404</h1>
          <p>We are sorry the page seems to not exist or <br/> we are currently working on it.</p>
        </ErrorStyle>
    </div>
    );
  }
}
export default Error;
