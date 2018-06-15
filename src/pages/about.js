import React, { Component, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Team, People } from '../components/team';
import { FooterPagesStyle } from '../components/styles';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faFlag from '@fortawesome/fontawesome-free-solid/faFlag';
import faUsers from '@fortawesome/fontawesome-free-solid/faUsers';
import faNewspaper from '@fortawesome/fontawesome-free-solid/faNewspaper';

class About extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>About us | Techvax.com</title>
        </Helmet>
        <FooterPagesStyle>
          <div className='banner' style={ { backgroundImage: 'url(https://source.unsplash.com/sggw4-qDD54)' } }>
            <h1>About us</h1>
          </div>
          <ul>
            <FontAwesomeIcon id='icon' icon={ faFlag } />
            <h1>2018</h1>
            <p>Founded</p>
          </ul>
          <ul>
            <FontAwesomeIcon id='icon' icon={ faUsers } />
            <h1>{ People }</h1>
            <p>Contributors</p>
          </ul>
          <ul>
            <FontAwesomeIcon id='icon' icon={ faNewspaper } />
            <h1>{ this.props.data.allMarkdownRemark.totalCount }</h1>
            <p>Articles posted</p>
          </ul>
          <div id='leftstuff'>
            <h1>About Techvax</h1>
            <p>We here at Techvax are all lovers of technology from device reviews, coding, building robots and anything in between Techvax started as an idea that turned into a reality we make sure that we are the first ones on the scene to bring you the best Tech News, How To's, Tips & Tricks and more... we put your content first and we will never bog it down with ads ever we believe that you should have a good time while reading content on the web and not get distracted by ads because no one likes ads.</p>
          </div>
          <h1>Meet the Team</h1>
          { Team.map(team =>
            <div className='container'>
              <img src={ team.img } alt='' className='img' />
              <a href={ team.href } target='_blank' rel='noopener noreferrer'>
                <div className='overlay'>
                  <p><span id='name'>{ team.name }</span> <br /> { team.dis }</p>
                </div>
              </a>
            </div>
          ) }
        </FooterPagesStyle>
      </div>
    );
  }
}
export default About;


export const pageQuery = graphql`
  query PageCount {
    
      allMarkdownRemark{
      totalCount
    }
  
  }
`;