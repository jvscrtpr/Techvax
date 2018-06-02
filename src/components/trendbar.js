import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TrendbarStyle } from './styles';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faFire from '@fortawesome/fontawesome-free-solid/faFire';

class Trendbar extends Component{
  render(){
    return(
    <TrendbarStyle>
      <p><FontAwesomeIcon icon={faFire} style={{ color: '#ff4081' }} /> Top</p>
      <Link to='/'>Some Text</Link>
      <Link to='/'>Some Text</Link>
      <Link to='/'>Some Text</Link>
      <Link to='/'>Some Text</Link>
    </TrendbarStyle>
    );
  }
}
export default Trendbar;