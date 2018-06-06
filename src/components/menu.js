import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MenuStyle } from './styles';

class Menu extends Component{
  render(){
    return(
    <React.Fragment>
      {this.props.open ? <MenuStyle>
        {this.props.children}
        <Link to='/' onClick={this.props.open}>Home</Link>
        <Link to='/news' onClick={this.props.open}>News</Link>
        <Link to='/howto' onClick={this.props.open}>How To's</Link>
        <Link to='/reviews' onClick={this.props.open}>Reviews</Link>
        <Link to='/blog' onClick={this.props.open}>Blog</Link>
        <Link to='/error' onClick={this.props.open}>Shop</Link>
      </MenuStyle> : null }
    </React.Fragment>
    );
  }
}
export default Menu;
