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
      <ul>
        <img src={require('../img/logo.png')} alt='' className='logo' />
      </ul>
      <span id='pagelinks'>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/terms'>Terms</Link>
        <Link to='/jobs'>Jobs</Link>
        <Link to='/privacy'>Privacy</Link>
      </span><br/><br/>
      <a href='https://bit.ly/2HFWFB2' target='_blank' rel='noopener noreferrer'><button className='btn'><FontAwesomeIcon icon={['fab', 'facebook-f']} /></button></a>
      <a href='https://instagram.com/techflask' target='_blank' rel='noopener noreferrer'><button className='btn'><FontAwesomeIcon icon={['fab', 'instagram']} /></button></a>
      <a href='https://twitter.com/techflask' target='_blank' rel='noopener noreferrer'><button className='btn'><FontAwesomeIcon icon={['fab', 'twitter']} /></button></a><br id='br' />
      <img src={require('../img/search-by-algolia.png')} alt='' className='searchlogo' />
      <ul style={{ marginBottom: 0 }}>
        <p>&copy; 2018 | Techvax</p>
      </ul>
    </FooterStyle>
    );
  }
}
export default Footer;
