import Navbar from "../components/Navbar";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import teamData from "../data/teamData";
import "../css/team.css";

export default function Team() {
  return (
    <>
      <Navbar />
      <PageHeader title="Meet My Team" path="/team" name="Meet My Team" />
      <section className="team-page section-padding">
        <div className="container">
          <div className="team-intro">
            <h2>Meet My Team</h2>
            <p>
              This page displays the full Gram Vikas team data imported from the
              provided source. Browse the complete roster of members, leaders, and
              advisors below.
            </p>
          </div>
          <div className="team-grid">
            {teamData.map((member, index) => (
              <article key={index} className="team-card">
                <div className="team-card-image">
                  <img src={member.image} alt={member.name} loading="lazy" />
                </div>
                <div className="team-card-body">
                  <h3>{member.name}</h3>
                  {member.role && <p className="team-card-role">{member.role}</p>}
                  <p>{member.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <BackToTop />
    </>
  );
}
