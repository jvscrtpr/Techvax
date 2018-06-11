import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { FooterPagesStyle } from '../components/styles';

class Terms extends Component{
  render(){
    return(
    <div>
      <Helmet>
        <title>Terms | Techvax.com</title>
      </Helmet>
      <FooterPagesStyle>
      </FooterPagesStyle>
    </div>
    );
  }
}
export default Terms;