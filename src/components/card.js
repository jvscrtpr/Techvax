import React from 'react';
import Link from 'gatsby-link'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faArrowRight from '@fortawesome/fontawesome-free-solid/faArrowRight'

export default class Card extends React.Component {
  render() {
    const {card} = this.props
    return (
        <ul key={card.id}>
          <img src={card.frontmatter.image} alt="" className="img" />
          <Link to={card.fields.slug}>
            {card.frontmatter.title} <FontAwesomeIcon id="arrow" icon={faArrowRight} />
          </Link>
          <p>{card.excerpt}</p>
          {/* Can you also add to artical title inside the <h1 /> JSX element and use id='usr' something like so <h1>{title}<span id='usr'>Posted by: {User}</span></h1> */}
          <p id="postusr">Will add later</p>
        </ul>
    );
  }
}
