import './About.scss';
function About(){
  return (
    <section className="about-section" aria-labelledby="about-header">
      <img width="200" src="/assets/images/profile.jpg" alt="Scott and Koda" />
      <div>
        <h2 id="about-header">I'm Scott Casey</h2>
        <p>A Full stack web developer with UI design experience with a certificate obtained at University of Utah Bootcamp. Skills in HTML, CSS, and ECMAScript. Strengths in creatively adapting physical materials to the web and working as part of a distributed team. Lead client’s shift to test driven product development to reduce development cost and time. Passionate about accessible web sites and crafting responsive and elegant solutions.
        </p>
      </div>
    </section>
  )
};
export default About;