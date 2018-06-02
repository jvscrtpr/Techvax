import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { TopbarStyle } from './styles';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';
import brands from '@fortawesome/fontawesome-free-brands';
import faRss from '@fortawesome/fontawesome-free-solid/faRss';
import faSearch from '@fortawesome/fontawesome-free-solid/faSearch';
fontawesome.library.add(brands);

class Topbar extends Component{
  render(){
    return(
    <TopbarStyle>
      <span id='open' onClick={this.props.Menu}><FontAwesomeIcon icon={faBars} /></span> 
      <span id='logo'><Link to='/'>Tech<span id='txt'>vax</span></Link></span>
      <Link to='/news'>News</Link>
      <Link to='/howto'>How To's</Link>
      <Link to='/reviews'>Reviews</Link>
      <Link to='/blog'>Blogs</Link>
      <Link to='/error'>Shop</Link>
      <ul>
        <a href='/' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
        <a href='/' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
        <a href='/' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
        <a href='/' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={['fab', 'youtube']} /></a>
        <a href='/' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon icon={faRss} /></a>
        {/* <span id='search-mobile' onClick={this.props.SearchMobile}><FontAwesomeIcon icon={faSearch} /></span> */}
        {/* <input onChange={this.props.searchChange} value={this.props.search} type='text' placeholder='Search Techvax...' className='search' /> */}
      </ul>
    </TopbarStyle>
    );
  }
}
export default Topbar;
