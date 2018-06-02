import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ContentStyle } from './styles';
import { newscards, reviewcards, howtocards, blogcards } from './cards';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faArrowRight from '@fortawesome/fontawesome-free-solid/faArrowRight';

export class NewsContent extends Component{
  renderCards = () => {
    if(this.props.search){
      const filtered = this.filterCards(this.props.search)
      return(
      <Fragment>
      {filtered.map(card =>
        <ul key={card.title}> 
          <img src={card.img} alt='' className='img' />
          <Link to={card.href}>{card.title} <FontAwesomeIcon id='arrow' icon={faArrowRight} /></Link>
          <p>{card.dis}</p>
          <p id='postusr'>Posted by: {card.usr}</p>
        </ul>
      )}
      </Fragment>
      )}
      return(
      <Fragment>
      {this.props.cards.map(card =>
        <ul key={card.title}>
          <img src={card.img} alt='' className='img' />
          <Link to={card.href}>{card.title} <FontAwesomeIcon id='arrow' icon={faArrowRight} /></Link>
          <p>{card.dis}</p>
          <p id='postusr'>Posted by: {card.usr}</p>
        </ul>
      )}
      </Fragment>
      )}
      filterCards(s){
        return newscards.filter((card)=>{
        return card.title.toLowerCase().includes(s.toLowerCase())
      })
    }
    render(){
      return(
      <ContentStyle>
        {!this.props.search && this.props.children}
        {this.renderCards()}
      </ContentStyle>
    );
  }
}
export class ReviewContent extends Component{
  renderCards = () => {
    if(this.props.search){
      const filtered = this.filterCards(this.props.search)
      return(
      <Fragment>
      {filtered.map(card =>
        <ul key={card.title}> 
          <img src={card.img} alt='' className='img' />
          <Link to={card.href}>{card.title} <FontAwesomeIcon id='arrow' icon={faArrowRight} /></Link>
          <p>{card.dis}</p>
          <p id='postusr'>Posted by: {card.usr}</p>
        </ul>
      )}
      </Fragment>
      )}
      return(
      <Fragment>
      {this.props.cards.map(card =>
        <ul key={card.title}>
          <img src={card.img} alt='' className='img' />
          <Link to={card.href}>{card.title} <FontAwesomeIcon id='arrow' icon={faArrowRight} /></Link>
          <p>{card.dis}</p>
          <p id='postusr'>Posted by: {card.usr}</p>
        </ul>
      )}
      </Fragment>
      )}
      filterCards(s){
        return reviewcards.filter((card)=>{
        return card.title.toLowerCase().includes(s.toLowerCase())
      })
    }
    render(){
      return(
      <ContentStyle>
        {!this.props.search && this.props.children}
        {this.renderCards()}
      </ContentStyle>
    );
  }
}
export class HowtoContent extends Component{
  renderCards = () => {
    if(this.props.search){
      const filtered = this.filterCards(this.props.search)
      return(
      <Fragment>
      {filtered.map(card =>
        <ul key={card.title}> 
          <img src={card.img} alt='' className='img' />
          <Link to={card.href}>{card.title} <FontAwesomeIcon id='arrow' icon={faArrowRight} /></Link>
          <p>{card.dis}</p>
          <p id='postusr'>Posted by: {card.usr}</p>
        </ul>
      )}
      </Fragment>
      )}
      return(
      <Fragment>
      {this.props.cards.map(card =>
        <ul key={card.title}>
          <img src={card.img} alt='' className='img' />
          <Link to={card.href}>{card.title} <FontAwesomeIcon id='arrow' icon={faArrowRight} /></Link>
          <p>{card.dis}</p>
          <p id='postusr'>Posted by: {card.usr}</p>
        </ul>
      )}
      </Fragment>
      )}
      filterCards(s){
        return howtocards.filter((card)=>{
        return card.title.toLowerCase().includes(s.toLowerCase())
      })
    }
    render(){
      return(
      <ContentStyle>
        {!this.props.search && this.props.children}
        {this.renderCards()}
      </ContentStyle>
    );
  }
}
export class BlogContent extends Component{
  renderCards = () => {
    if(this.props.search){
      const filtered = this.filterCards(this.props.search)
      return(
      <Fragment>
      {filtered.map(card =>
        <ul key={card.title}> 
          <img src={card.img} alt='' className='img' />
          <Link to={card.href}>{card.title} <FontAwesomeIcon id='arrow' icon={faArrowRight} /></Link>
          <p>{card.dis}</p>
          <p id='postusr'>Posted by: {card.usr}</p>
        </ul>
      )}
      </Fragment>
      )}
      return(
      <Fragment>
      {this.props.cards.map(card =>
        <ul key={card.title}>
          <img src={card.img} alt='' className='img' />
          <Link to={card.href}>{card.title} <FontAwesomeIcon id='arrow' icon={faArrowRight} /></Link>
          <p>{card.dis}</p>
          <p id='postusr'>Posted by: {card.usr}</p>
        </ul>
      )}
      </Fragment>
      )}
      filterCards(s){
        return blogcards.filter((card)=>{
        return card.title.toLowerCase().includes(s.toLowerCase())
      })
    }
    render(){
      return(
      <ContentStyle>
        {!this.props.search && this.props.children}
        {this.renderCards()}
      </ContentStyle>
    );
  }
}