import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MenuStyle } from './styles';

class Menu extends Component{
  render(){
    return(
    <React.Fragment>
      {this.props.open ? <MenuStyle>
        {this.props.children}
        <Link to='/' onClick={this.props.Menu}>Home</Link>
        <Link to='/news' onClick={this.props.Menu}>News</Link>
        <Link to='/howto' onClick={this.props.Menu}>How To's</Link>
        <Link to='/reviews' onClick={this.props.Menu}>Reviews</Link>
        <Link to='/blog' onClick={this.props.Menu}>Blog</Link>
        <Link to='/error' onClick={this.props.Menu}>Shop</Link>
      </MenuStyle> : null }
    </React.Fragment>
    );
  }
}
export default Menu;
