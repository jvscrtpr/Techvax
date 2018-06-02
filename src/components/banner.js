import React, { Component } from 'react';
import { BannerStyle } from './styles';

class Banner extends Component{
  render(){
    return(
    <BannerStyle>
      <ul>
        <h1>Your content the way you want it.</h1>
        <p>We deliver the best Tech News, How to's, Reviews, Tips & tricks, and more... only the stuff you care about most never the boring stuff.</p>
      </ul>
    </BannerStyle>
    );
  }
}
export default Banner;