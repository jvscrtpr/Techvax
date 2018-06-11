import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { FooterPagesStyle } from '../components/styles';

class Privacy extends Component{
  render(){
    return(
    <div>
      <Helmet>
        <title>Privacy Policy | Techvax.com</title>
      </Helmet>
      <FooterPagesStyle>
      </FooterPagesStyle>
    </div>
    );
  }
}
export default Privacy;