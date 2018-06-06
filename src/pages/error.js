import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
//import { Link } from 'react-router-dom';
import { ErrorStyle } from '../components/styles';
//import FontAwesomeIcon from '@fortawesome/react-fontawesome';
//import faArrowLeft from '@fortawesome/fontawesome-free-solid/faArrowLeft';

class Error extends Component{
  render(){
    return(
    <div>
        <Helmet>
            <title>404 | Techvax.com</title>
        </Helmet>
        <ErrorStyle>
         {/* mite add this later dont know leve commented out tho
            <Link to='/'><FontAwesomeIcon icon={faArrowLeft} /> Back to Techvax.com</Link>*/}
            <h1>404</h1>
            <p>We are sorry the page seems to not exist or <br/> we are currently working on it.</p>
        </ErrorStyle>
    </div>
    );
  }
}
export default Error;
