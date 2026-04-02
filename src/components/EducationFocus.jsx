import '../css/education.css';

const educationBlocks = [
  {
    id: 1,
    title: 'School Strengthening',
    description: 'Support village schools with improved classrooms, sanitation, libraries, and learning materials to build safe, child-friendly spaces.',
    icon: 'fa-solid fa-school'
  },
  {
    id: 2,
    title: 'Early Childhood Learning',
    description: 'Promote early learning programs and foundational literacy for children before they enter primary school.',
    icon: 'fa-solid fa-child'
  },
  {
    id: 3,
    title: 'Girls’ Education',
    description: 'Create inclusive pathways for girls through scholarships, mentorship, and community awareness on the value of education.',
    icon: 'fa-solid fa-venus'
  },
  {
    id: 4,
    title: 'Teacher & Community Training',
    description: 'Build local capacity through teacher development, parent engagement, and education committees to sustain learning outcomes.',
    icon: 'fa-solid fa-chalkboard-teacher'
  }
];

export default function EducationFocus() {
  return (
    <section className="education-focus-section">
      <div className="container">
        <div className="section-heading">
          <h2>Education Focus Area</h2>
          <p>
            Gram Vikas Trust works with rural communities to strengthen education systems, increase access for children and girls, and nurture lifelong learning through schools, early childhood programs, and teacher support.
          </p>
        </div>

        <div className="education-grid">
          {educationBlocks.map(block => (
            <div key={block.id} className="education-card">
              <div className="education-icon"><i className={block.icon}></i></div>
              <h4>{block.title}</h4>
              <p>{block.description}</p>
            </div>
          ))}
        </div>

        <div className="education-detail">
          <div className="education-detail-text">
            <h3>How we make education work in rural communities</h3>
            <p>
              Our approach is rooted in building strong village institutions, improving school infrastructure, and supporting children from the most marginalised families. We combine access, quality, and inclusion to make sure every child can learn with dignity.
            </p>
            <ul>
              <li>Upgrade schools with clean drinking water, toilets, and safe classrooms.</li>
              <li>Support remedial learning, digital literacy, and after-school study centres.</li>
              <li>Engage parents, volunteers and community leaders in education planning.</li>
              <li>Focus on girls’ attendance, child protection, and gender-sensitive learning.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
