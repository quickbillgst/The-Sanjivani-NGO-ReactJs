import React from 'react';
import '../css/gramvikas.css'; // We'll create this CSS file

const GramVikasCards = () => {
  const cardsData = [
    {
      id: 1,
      type: 'NEWS',
      title: 'Gram Vikas wins CASCA 2025 award for community-led water security efforts',
      description: 'The CASCA (Climate Action & Sustainability Conference & Awards) 2025 Awards recognised Gram Vikas for Community Engagement for Sustainability.',
      image: 'https://www.gramvikas.org/wp-content/uploads/2025/07/CASCA-Award.jpg',
      link: 'https://www.gramvikas.org/blg/gram-vikas-wins-casca-2025-award-for-community-led-water-security-efforts/'
    },
    {
      id: 2,
      type: 'FEATURE',
      title: 'Rural Odisha farmers enter carbon credit market in grassroots climate push',
      description: 'Farmers in Odisha lead community-driven agro and social forestry, earning carbon credits while restoring degraded lands.',
      image: 'https://www.gramvikas.org/wp-content/uploads/2025/06/Post2_3.jpg',
      link: 'https://www.gramvikas.org/blg/rural-odisha-farmers-enter-carbon-credit-market-in-grassroots-climate-push/'
    },
    {
      id: 3,
      type: 'STORY',
      title: 'Guardians of Water: How Adivasi communities are securing their land and livelihoods',
      description: 'Adivasi households restore forests, protect watersheds, and conserve water sources to secure their land and future.',
      image: 'https://www.gramvikas.org/wp-content/uploads/2025/05/Post9_5-1-1024x574.jpeg',
      link: 'https://www.gramvikas.org/blg/guardians-of-water-how-adivasi-communities-are-securing-their-land-and-livelihoods/'
    }
  ];

  return (
    <section className="gramvikas-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="section-title">Gram Vikas Updates</h2>
          </div>
        </div>
        <div className="row">
          {cardsData.map(card => (
            <div key={card.id} className="card-blk col-md-4" style={{ padding: '0 10px 20px' }}>
              <div className="grid-4-img-blk">
                <div className="grid-4-title background-image-fit" style={{ backgroundImage: `url(${card.image})` }}>
                </div>
                <div className="grid-4-detail">
                  <span style={{ color: '#567D42' }}>{card.type}</span>
                  <a href={card.link} target="_blank" rel="noopener noreferrer">
                    <h5>{card.title}</h5>
                  </a>
                  <p>{card.description}</p>
                  <div className="text-right">
                    <a href={card.link} target="_blank" rel="noopener noreferrer" className="read-more-blog">READ MORE</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GramVikasCards;