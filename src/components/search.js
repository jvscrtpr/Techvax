import React, { Component } from 'react';
import { SearchStyle } from './styles';
import { Link } from 'react-router-dom';
import { blogcards } from './cards';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faArrowRight from '@fortawesome/fontawesome-free-solid/faArrowRight';

class Searchbar extends Component{
  render(){
    return(
    <React.Fragment>
      {this.props.open ? <SearchStyle>
        {this.props.children}
        <input type='text' placeholder='Search Techvax...' className='search' />
        <div className='cards'>
          {blogcards.map(card =>
            <ul key={card.title}> 
              <img src={card.img} alt='' className='img' />
              <Link to={card.href}>{card.title} <FontAwesomeIcon id='arrow' icon={faArrowRight} /></Link>
              <p>{card.dis}</p>
              <p id='postusr'>Posted by: {card.usr}</p>
            </ul>
          )}
        </div>
      </SearchStyle> : null }
    </React.Fragment>
    );
  }
}
export default Searchbar;
