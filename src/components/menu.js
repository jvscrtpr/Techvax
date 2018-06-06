import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MenuStyle } from './styles';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faHome from '@fortawesome/fontawesome-free-solid/faHome';
import faNewspaper from '@fortawesome/fontawesome-free-solid/faNewspaper';
import faChessKing from '@fortawesome/fontawesome-free-solid/faChessKing';
import faLaptop from '@fortawesome/fontawesome-free-solid/faLaptop';
import faPencilAlt from '@fortawesome/fontawesome-free-solid/faPencilAlt';
import faShoppingBag from '@fortawesome/fontawesome-free-solid/faShoppingBag';

class Menu extends Component{
  render(){
    return(
    <React.Fragment>
      {this.props.open ? <MenuStyle>
        {this.props.children}
        <Link to='/' onClick={this.props.open}><FontAwesomeIcon icon={faHome} /> Home</Link>
        <Link to='/news' onClick={this.props.open}><FontAwesomeIcon icon={faNewspaper} /> News</Link>
        <Link to='/howto' onClick={this.props.open}><FontAwesomeIcon icon={faChessKing} /> How To's</Link>
        <Link to='/reviews' onClick={this.props.open}><FontAwesomeIcon icon={faLaptop} /> Reviews</Link>
        <Link to='/blog' onClick={this.props.open}><FontAwesomeIcon icon={faPencilAlt} /> Blog</Link>
        <Link to='/error' onClick={this.props.open}><FontAwesomeIcon icon={faShoppingBag} /> Shop</Link>
      </MenuStyle> : null }
    </React.Fragment>
    );
  }
}
export default Menu;
