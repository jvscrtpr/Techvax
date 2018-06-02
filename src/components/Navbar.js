import React, { Component } from 'react';
import Link from 'gatsby-link';
import { TopbarStyle } from './styles';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';
fontawesome.library.add(brands);

class Topbar extends Component {
  render() {
    return (
      <TopbarStyle>
        <span id='open' onClick={ this.props.Menu }><FontAwesomeIcon icon={ faBars } /></span>
        <span id='logo'><Link to='/'>Tech<span id='txt'>vax</span></Link></span>
        <Link to='/news'>News</Link>
        <Link to='/howto'>How To's</Link>
        <Link to='/reviews'>Reviews</Link>
        <Link to='/blog'>Blogs</Link>
        <Link to='/error'>Shop</Link>
        <ul>
          <a href='https://instagram.com/jvscrptr' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={ ['fab', 'facebook-f'] } /></a>
          <a href='https://instagram.com/jvscrptr' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={ ['fab', 'instagram'] } /></a>
          <a href='https://twitter.com/jvscrptr' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={ ['fab', 'twitter'] } /></a>
          <a href='https://github.com/jvscrptr' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={ ['fab', 'youtube'] } /></a>
        </ul>
      </TopbarStyle>
    );
  }
}
export default Topbar;