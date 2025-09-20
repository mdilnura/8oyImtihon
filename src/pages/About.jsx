import "../index.css";
import "../pages/Home.css";
import "./About.css";
function About() {
  return (
    <div className="home">
      <div className="mycontainer">
        {/* section info========================= */}
        <section className="info">
          <div className="wrapper">
            <h2>Help more people cook nourishing meals, more often.</h2>
            <p className="wrapper-p1">
              Healthy Recipe Finder was created to prove that healthy eating can
              be convenient, affordable, and genuinely delicious.
            </p>
            <p className="wrapper-p2">
              We showcase quick, whole-food dishes that anyone can master—no
              fancy equipment, no ultra-processed shortcuts—just honest
              ingredients and straightforward steps.
            </p>
          </div>
          <div className="info-img">
            <img
              src="../assets/images/image-about-our-mission-large.webp"
              alt="Cutting vegetables"
            />
          </div>
        </section>

        {/* why-we-exist========================= */}
      </div>
      <hr className="divider" />
      <div className="mycontainer">
        <section className="why-we-exist">
          <h2 className="why-we-exist__title">Why we exist</h2>
          <div className="why-wrapper">
            <div className="why-we-exist__item">
              <div className="why-we-exist__icon">
                <img src="/images/arrow.svg" alt="" />
              </div>
              <div className="why-we-exist__content">
                <h3 className="why-we-exist__subtitle">
                  Cut through the noise.
                </h3>
                <p className="why-we-exist__text">
                  The internet is bursting with recipes, yet most busy cooks
                  still default to take-away or packaged foods. We curate a
                  tight collection of fool-proof dishes so you can skip the
                  scrolling and start cooking.
                </p>
              </div>
            </div>

            <div className="why-we-exist__item">
              <div className="why-we-exist__icon">
                <img src="../assets/images/arrow.svg" alt="" />
              </div>
              <div className="why-we-exist__content">
                <h3 className="why-we-exist__subtitle">
                  Empower home kitchens.
                </h3>
                <p className="why-we-exist__text">
                  When you control what goes into your meals, you control how
                  you feel. Every recipe is built around unrefined ingredients
                  and ready in about half an hour of active prep.
                </p>
              </div>
            </div>

            <div className="why-we-exist__item">
              <div className="why-we-exist__icon">
                <img src="/images/arrow.svg" alt="" />
              </div>
              <div className="why-we-exist__content">
                <h3 className="why-we-exist__subtitle">
                  Make healthy look good.
                </h3>
                <p className="why-we-exist__text">
                  High-resolution imagery shows you exactly what success looks
                  like—because we eat with our eyes first, and confidence
                  matters.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <hr className="divider" />
      <div className="mycontainer">
        <section className="why-we-exist">
          <h2 className="why-we-exist__title">
            Our food <br />
            philosophy
          </h2>

          <div className="why-wrapper">
            <div className="why-we-exist__item">
              <div className="why-we-exist__icon">
                <img src="../assets/images/arrow.svg" alt="" />
              </div>
              <div className="why-we-exist__content">
                <h3 className="why-we-exist__subtitle">
                  Whole ingredients first.
                </h3>
                <p className="why-we-exist__text">
                  Fresh produce, grains, legumes, herbs, and quality fats form
                  the backbone of every recipe.
                </p>
              </div>
            </div>

            <div className="why-we-exist__item">
              <div className="why-we-exist__icon">
                <img src="/images/arrow.svg" alt="" />
              </div>
              <div className="why-we-exist__content">
                <h3 className="why-we-exist__subtitle">
                  Flavor without compromise.
                </h3>
                <p className="why-we-exist__text">
                  Spices, citrus, and natural sweetness replace excess salt,
                  sugar, and additives.
                </p>
              </div>
            </div>

            <div className="why-we-exist__item">
              <div className="why-we-exist__icon">
                <img src="../assets/images/arrow.svg" alt="" />
              </div>
              <div className="why-we-exist__content">
                <h3 className="why-we-exist__subtitle">Respect for time.</h3>
                <p className="why-we-exist__text">
                  Weeknight meals should slot into real schedules; weekend
                  cooking can be leisurely but never wasteful.
                </p>
              </div>
            </div>

            <div className="why-we-exist__item">
              <div className="why-we-exist__icon">
                <img src="/images/arrow.svg" alt="" />
              </div>
              <div className="why-we-exist__content">
                <h3 className="why-we-exist__subtitle">Sustainable choices.</h3>
                <p className="why-we-exist__text">
                  Short ingredient lists cut down on food waste and carbon
                  footprint, while plant-forward dishes keep things
                  planet-friendly.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <hr className="divider" />

      <div className="mycontainer">
        {/* section Beyond========================= */}
        <section className="info inabout">
          <div className="wrapper wrappe">
            <h2>Beyond the plate</h2>
            <p className="wrapper-p1">
              We believe food is a catalyst for community and well-being. By
              sharing approachable recipes, we hope to:
            </p>
            <ul className="list">
              <li className="wrapper-p1">
                Encourage family dinners and social cooking.
              </li>
              <li className="wrapper-p1">
                Reduce reliance on single-use packaging and delivery waste.
              </li>
              <li className="wrapper-p1">
                Spark curiosity about seasonal produce and local agriculture.
              </li>
            </ul>
          </div>
          <div className="info-img">
            <img
              className="inim"
              src="../assets/images/image-about-beyond-the-plate-large.webp"
              alt="Cutting vegetables"
            />
          </div>
        </section>
        {/* <hr /> */}
        {/* why-we-exist========================= */}
      </div>
      <div className="mycontainer">
        {/* CTA ===============================*/}
        <section className="cta cta-mt">
          <h2>Ready to cook smarter?</h2>
          <p>
            Hit the button, pick a recipe, and get dinner on the table—fast.
          </p>
          <button className="btn">Browse recipes</button>
        </section>
      </div>
    </div>
  );
}

export default About;
