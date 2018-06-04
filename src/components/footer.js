import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FooterStyle } from './styles';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
fontawesome.library.add(brands);

class Footer extends Component{
  render(){
    return(
    <FooterStyle>
      <span id='pagelinks'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/terms'>Terms</Link>
        <Link to='/privacy'>Privacy</Link>
      </span>
      <h1>&bull; Follow us &bull;</h1>
      <a href='https://bit.ly/2HFWFB2' target='_blank' rel='noopener noreferrer'><button className='btn'><FontAwesomeIcon icon={['fab', 'facebook-f']} /></button></a>&bull;
      <a href='https://instagram.com/techflask' target='_blank' rel='noopener noreferrer'><button className='btn'><FontAwesomeIcon icon={['fab', 'instagram']} /></button></a>&bull;
      <a href='https://twitter.com/techflask' target='_blank' rel='noopener noreferrer'><button className='btn'><FontAwesomeIcon icon={['fab', 'twitter']} /></button></a>&bull;
      <a href='https://bit.ly/2r7CHI6' target='_blank' rel='noopener noreferrer'><button className='btn'><FontAwesomeIcon icon={['fab', 'youtube']} /></button></a>
      <ul>
        <p>&copy; 2018 | Techvax.com</p>
        <img src={require('../img/search-by-algolia.png')} alt='' className='searchlogo' />
      </ul>
    </FooterStyle>
    );
  }
}
export default Footer;
