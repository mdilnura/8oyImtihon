import "./Home.css";
import "../components/button.css";
function Home() {
  return (
    <div className="home ">
      {/* Navbar */}
      <div className="my-container">
        {/* Hero */}
        <section className="hero">
          <h1 className="home__title">
            <span className="highlight">Healthy</span> meals, zero fuss
          </h1>
          <p>
            Discover quick, whole-food recipes that you can cook tonight — no
            processed junk, no guesswork.
          </p>
          <button className="btn">Start exploring</button>
          <div className="hero-img">
            <img
              src="/images/image-home-hero-large.webp"
              alt="Cooking at home"
            />
          </div>
        </section>

        {/* Features */}
        <section className="features">
          <h2>What you'll get</h2>
          <div className="feature-cards">
            <div className="card">
              <img className="imag" src="/images/icon-whole-food-recipes.svg" alt="" />
              <h3>Whole-food recipes</h3>
              <p>Each dish uses everyday, unprocessed ingredients.</p>
            </div>
            <div className="card">
              <img className="img" src="/images/icon-minimum-fuss.svg" alt="" />
              <h3>Minimum fuss</h3>
              <p>
                All recipes are designed to make eating healthy quick and easy.
              </p>
            </div>
            <div className="card">
              <img className="img" src="/images/icon-search.svg" alt="" />
              <h3>Search in seconds</h3>
              <p>
                Filter by name or ingredient and jump straight to the recipe you
                need.
              </p>
            </div>
          </div>
        </section>

        {/* Info */}
        <section className="info">
          <h2>Built for real life</h2>
          <p>
            Cooking shouldn't be complicated. These recipes come in under 30
            minutes or less, fit busy schedules, and taste good enough to share.
          </p>
          <div className="info-img">
            <img src="/images/cutting.jpg" alt="Cutting vegetables" />
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <h2>Ready to cook smarter?</h2>
          <p>
            Hit the button, pick a recipe, and get dinner on the table—fast.
          </p>
          <button className="btn">Browse recipes</button>
        </section>
      </div>

      {/* Footer */}
    </div>
  );
}

export default Home;
