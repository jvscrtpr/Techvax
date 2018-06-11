import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { FooterPagesStyle } from '../components/styles';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faArrowRight from '@fortawesome/fontawesome-free-solid/faArrowRight';

class Jobs extends Component{
  render(){
    return(
    <div>
      <Helmet>
        <title>Jobs | Techvax.com</title>
      </Helmet>
      <FooterPagesStyle>
          <div className='banner' style={{ backgroundImage: 'url(https://source.unsplash.com/QBpZGqEMsKg)' }}>
            <h1>Come work with us</h1>
          </div>
          <div className='list'>
            <h2>Why work with us?</h2>
            <p>You can become apart of an amazing team of people who want to change the technology game and be the first on board to an awesome startup. you can also collaborate among amazing people to bring Techvax to the forefront of everyone's daily tech needs and have the privilege of making someones day just that much better. Plus were not like most other jobs in the market we give YOU the option to choose if you want to work remotely or not how awesome is that? we made it that way because we know how hard it can be or challenging to get out of bed each day and drive to work now the odds are in your favor and you can just relax and sit in your PJ's all day and work to need to get up it's a win win for everyone.</p>
            <h1 style={{ marginLeft: 1 + '%', textAlign: 'left', position: 'relative', top: 0 }}>Job openings:</h1>
            <a href='/' target='_blank' rel='noopener noreferrer'>Article writer <FontAwesomeIcon id="arrow" icon={faArrowRight} /></a>
            <a href='/' target='_blank' rel='noopener noreferrer'>Device Reviewer <FontAwesomeIcon id="arrow" icon={faArrowRight} /></a>
            <a href='/' target='_blank' rel='noopener noreferrer'>Video Editor <FontAwesomeIcon id="arrow" icon={faArrowRight} /></a>
          </div>
      </FooterPagesStyle>
    </div>
    );
  }
}
export default Jobs;