import '../css/gramvikas.css';

const GramVikasInfo = () => {
  const infoBlocks = [
    {
      id: 1,
      title: 'About Gram Vikas Trust',
      text: 'Gram Vikas Trust is a community-focused nonprofit working to empower underserved rural areas through sustainable water, sanitation, health, education and livelihood programs.',
      icon: 'fa-solid fa-hands-holding-heart'
    },
    {
      id: 2,
      title: 'Our Mission',
      text: 'We bridge the gap between communities and resources by building local capacity for clean water access, proper sanitation, and climate-resilient livelihoods.',
      icon: 'fa-solid fa-bullseye'
    },
    {
      id: 3,
      title: 'Key Programs',
      text: 'Our work includes watershed development, organic farming, women’s empowerment, child education, health outreach, and forest restoration in eastern India.',
      icon: 'fa-solid fa-seedling'
    }
  ];

  return (
    <section className="gramvikas-info-section">
      <div className="container">
        <div className="section-heading">
          <h2>From Gram Vikas Official Pages</h2>
          <p>Information sourced from gramvikas.org to help visitors understand our mission, programs and impact.</p>
        </div>
        <div className="info-grid">
          {infoBlocks.map(block => (
            <div key={block.id} className="info-card">
              <div className="info-icon"><i className={block.icon}></i></div>
              <h4>{block.title}</h4>
              <p>{block.text}</p>
            </div>
          ))}
        </div>
        <div className="info-footer">
          <a href="https://www.gramvikas.org/" target="_blank" rel="noopener noreferrer" className="btn btn-success">Read the official Gram Vikas site</a>
        </div>
      </div>
    </section>
  );
};

export default GramVikasInfo;
