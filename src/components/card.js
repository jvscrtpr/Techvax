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
          <p id="postusr">{card.frontmatter.author.name}</p>

        </ul>
    );
  }
}
