import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MenuStyle } from './styles';

class Menu extends Component{
  render(){
    return(
    <React.Fragment>
      {this.props.open ? <MenuStyle>
        {this.props.children}
        <Link to='/'>Home</Link>
        <Link to='/news'>News</Link>
        <Link to='/howto'>How To's</Link>
        <Link to='/reviews'>Reviews</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/error'>Shop</Link>
      </MenuStyle> : null }
    </React.Fragment>
    );
  }
}
export default Menu;