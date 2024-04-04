import React from "react";

const Home = (props) => {
  return (
    <>
      <div className="main-page-content">
        <div id="home">
          <div id="particles-js"></div>
          <div className="home-content-main">
            <div className="table-cell">
              <div className="container">
                <div className="row home-row">
                  <div className="col-md-12 col-sm-12">
                    <div className="home-text wow fadeIn text-center">
                      <h1 className="cd-headline clip is-full-width">
                        <span
                          className="cd-words-wrapper"
                          style={{ width: "266px", overflow: "hidden" }}
                        >
                          <b className="is-hidden">Pankaj Jajra</b>
                          <b className="is-hidden">React Native</b>
                          <b className="is-visible">React Js</b>
                        </span>
                      </h1>
                      <div className="about-social-icon text-center">
                        <ul className="about-social">
                          <li className="wow fadeIn" data-wow-delay=".4s">
                            <a
                              href="https://www.linkedin.com/in/pankajjajra"
                              target="newtab"
                            >
                              <i
                                className="fa fa-linkedin"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li className="wow fadeIn" data-wow-delay=".2s">
                            <a
                              href="https://github.com/pankajjajra"
                              target="newtab"
                            >
                              <i
                                className="fa fa-github"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li className="wow fadeIn" data-wow-delay=".8s">
                            <a
                              href="https://twitter.com/pankajjajra"
                              target="newtab"
                            >
                              <i
                                className="fa fa-twitter"
                                aria-hidden="true"
                              ></i>
                            </a>
                          </li>
                          <li className="wow fadeIn" data-wow-delay="1s">
                            <a
                              href="https://dev.to/pankajjajra"
                              target="newtab"
                            >
                              <i className="fa fa-book" aria-hidden="true"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="parallax" data-velocity="-.1"></div>
          <div className="parallax" data-velocity="-.5" data-fit="525"></div>
        </div>

        {/* <!-- ================================ ABOUT =============================== --> */}

        <div id="about">
          <div className="about-content">
            <div className="love-grid text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>What I do</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        As a React Native Developer, my work revolves around
                        crafting top-notch mobile applications that excel in
                        both aesthetics and performance. I specialize in
                        designing user interfaces that are intuitive and
                        visually appealing, ensuring seamless navigation and
                        engagement. Alongside this, I prioritize optimizing the
                        technical aspects of the apps, such as speed and
                        scalability, to deliver a smooth user experience even
                        under high traffic. Additionally, I contribute to
                        content creation, refining copywriting and multimedia
                        elements to enhance the overall quality of the app. My
                        focus is on delivering professional-grade solutions that
                        meet the highest standards of usability and
                        functionality.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row love-row wow fadeIn">
                  <div className="col-md-3 col-sm-6">
                    <div className="love-details" data-wow-delay=".1s">
                      <i
                        className="fa fa-pencil-square-o love-icon"
                        aria-hidden="true"
                      ></i>
                      <h3>Designing and Creating Apps</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        I leverage my expertise in React Native to design and
                        develop engaging mobile applications.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="love-details" data-wow-delay=".3s">
                      <i
                        className="fa fa-file-image-o love-icon"
                        aria-hidden="true"
                      ></i>
                      <h3>UI/UX Design</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        I pay close attention to user interactions, ensuring
                        seamless navigation and optimal usability.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="love-details" data-wow-delay=".2s">
                      <i
                        className="fa fa-globe love-icon"
                        aria-hidden="true"
                      ></i>
                      <h3>Mobile Responsive Design</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        I specialize in crafting mobile-responsive designs that
                        adapt seamlessly to various screen sizes and
                        orientations
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6">
                    <div className="love-details" data-wow-delay=".4s">
                      <i className="fa fa-cog love-icon" aria-hidden="true"></i>
                      <h3>Performance Optimization</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        I am responsible for optimizing the performance and
                        capacity of the applications I develop.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="about-back"></div>
            <div className="me-grid">
              <div className="container">
                <div className="row">
                  <div className="col-md-4 col-sm-6 col-xs-12 about-col">
                    <div className="about-image">
                      <img
                        src="assets/img/profile.png"
                        alt="Pankaj-jajra"
                        className="about-img wow fadeIn"
                      />
                    </div>
                  </div>
                  <div className="col-md-8 col-sm-6 col-xs-12 about-col">
                    <div className="about-details wow fadeIn">
                      <div className="main-title left-title text-left wow fadeIn">
                        <h3>Hello! This is Pankaj</h3>
                        <div className="underline1 no-margin"></div>
                        <div className="underline2 no-margin"></div>
                      </div>
                      <p className="wow fadeIn">
                        I'm a mobile app developer based in Rajasthan, India,
                        specializing in React Native. I thrive on building a
                        wide range of apps, from simple business solutions to
                        feature-rich, interactive experiences. Whether you're a
                        business in need of a mobile presence or an employer
                        seeking talent, feel free to reach out to me you can get
                        me{" "}
                        <a className="underline2" href="#contact">
                          {" "}
                          here.
                        </a>{" "}
                        My passion lies in crafting digital products with
                        elegant, efficient code. I excel in custom mobile app
                        development and find immense joy in my work. My journey
                        as a mobile app developer began during my college days,
                        and since then, I've contributed remotely to various
                        agencies, provided consultation to startups, and
                        collaborated with talented individuals to bring digital
                        products to life for both business and consumer
                        audiences.
                        <br />
                        <br />I approach challenges with quiet confidence,
                        fueled by a natural curiosity and a constant drive to
                        refine my skills with each project I undertake.
                      </p>
                      <a
                        className="about-link-1"
                        href="assets/cv/pankaj jajra.pdf"
                        target="_blank"
                      >
                        See Resume
                      </a>
                      <a className="about-link-2" href="#contact">
                        Hire Me
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="work-counter text-center">
              <div className="counter">
                <div className="container">
                  <div className="row wow fadeIn">
                    <div className="col-md-3 col-sm-6">
                      <div className="work-statistics">
                        <i
                          className="fa fa-pencil-square-o stat-icon"
                          aria-hidden="true"
                        ></i>
                        <h3 className="Count">10+</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>App Completed</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="work-statistics">
                        <i
                          className="fa fa-crop stat-icon"
                          aria-hidden="true"
                        ></i>
                        <h3 className="Count">20+</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>UI/UX Design Done</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="work-statistics">
                        <i
                          className="fa fa-bolt stat-icon"
                          aria-hidden="true"
                        ></i>
                        <h3 className="Count">02</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>Website Created</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                      <div className="work-statistics">
                        <i
                          className="fa fa-coffee stat-icon"
                          aria-hidden="true"
                        ></i>
                        <h3 className="Count">500+</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>Cups Coffee Taken</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ================================ Skill =============================== --> */}

        <div id="skill">
          <div className="skill-main">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="main-title text-center wow fadeIn">
                    <h3>My Skill</h3>
                    <div className="underline1"></div>
                    <div className="underline2"></div>
                    <p>
                      I value simple content structure, clean design patterns,
                      and thoughtful interactions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row love-row wow fadeIn">
                <div className="col-md-6">
                  <div className="skill-details text-left">
                    <p>
                      React Native development involves planning and iterating
                      on an app's structure and layout. Once the proper
                      information architecture is in place, I design the visual
                      layer to create a seamless user experience. Front End
                      Development in React Native is about building out the
                      visual components of a mobile application. Using React
                      Native, I develop fast, interactive apps for both iOS and
                      Android platforms. This may also include integrating with
                      various APIs or other backend services. The work that I am
                      most interested in is turning your app idea into a
                      reality, from inception to launch.
                    </p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="skill-details">
                    <div className="content">
                      <div className="col">
                        <ul id="skill-main">
                          <li>
                            <h3>React Native - 90%</h3>
                          </li>
                          <li>
                            <h3>TypeScript - 60%</h3>
                          </li>
                          <li>
                            <h3>React JS - 60%</h3>
                          </li>
                          <li>
                            <h3>Redux - 80%</h3>
                          </li>
                          <li>
                            <h3>Npm Modules Used - 80%</h3>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ================================ RESUME =============================== --> */}

        <div id="resume">
          <div className="resume-content">
            <div className="resume-grid text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>Educational Story</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        I like to code things from scratch, and enjoy bringing
                        ideas to life in the App.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row love-row wow fadeIn">
                  <div className="col-md-4 col-sm-4">
                    <div className="resume-details" data-wow-delay=".2s">
                      <div className="resume-hover"></div>
                      <div className="resume-main">
                        <i
                          className="fa fa-home resume-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>School</h3>
                        <h2>2016-2019</h2>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Completed my school life from SDP Memorial S.S.
                          School, Bikaner, Rajasthan, India.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <div className="resume-details" data-wow-delay=".3s">
                      <div className="resume-hover"></div>
                      <div className="resume-main">
                        <i
                          className="fa fa-graduation-cap resume-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Graduation</h3>
                        <h2>2019-2022</h2>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Achieved my Bachelor in Computer Application (BCA)
                          Graduation Degree from{" "}
                          <a
                            href="https://www.ecb.ac.in/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Engineering College Bikaner
                          </a>
                          , Bikaner, Rajasthan, India.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-4">
                    <div className="resume-details" data-wow-delay=".4s">
                      <div className="resume-hover"></div>
                      <div className="resume-main">
                        <i
                          className="fa fa-graduation-cap resume-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Training &amp; Skill</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Networking, Hardware, Cloud Computing, RedHat Server,
                          Linux, CCNA, CSCU from{" "}
                          <a
                            href="https://iantindia.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            IANT
                          </a>
                          ,Bikaner, Rajasthan, India.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row main-row wow fadeIn">
                  <div className="col-md-12">
                    <div className="main-title text-center">
                      <h3>Working Experience</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        I don’t like to define myself by the work I’ve done. I
                        define myself by the work I want to do.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row love-row">
                  <div className="col-md-4 col-sm-12">
                    <div className="exp-details" data-wow-delay=".2s">
                      <div className="exp-hover"></div>
                      <div className="exp-main">
                        <i
                          className="fa fa-building exp-icon"
                          aria-hidden="true"
                        ></i>
                        <h3 style={{ color: "#4d4d4d" }}>
                          iWebwiser Pvt. Ltd.
                        </h3>
                        <h4>React Native Developer</h4>
                        <h2>2024-present</h2>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          At iWebwiser, I am working as a React Native Developer
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 col-sm-12">
                    <div className="exp-details" data-wow-delay=".2s">
                      <div className="exp-hover"></div>
                      <div className="exp-main">
                        <i
                          className="fa fa-building exp-icon"
                          aria-hidden="true"
                        ></i>
                        <h3 style={{ color: "#4d4d4d" }}>Itech Solutions</h3>
                        <h4>React Native Developer</h4>
                        <h2>2022-2023 (1 year+)</h2>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          I did Full Time Job at Itech Solution Around 1 year+
                          as a React Native Developer
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="exp-details" data-wow-delay=".3s">
                      <div className="exp-hover"></div>
                      <div className="exp-main">
                        <i
                          className="fa fa-building exp-icon"
                          aria-hidden="true"
                        ></i>
                        <h3 style={{ color: "#4d4d4d" }}>Samta</h3>
                        <h4>React Js Developer</h4>
                        <h2>2022-2022 (6 months)</h2>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          At Samta, I did remote Job at Samta Around 6 months+
                          as a React Js Developer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- ============================================== SERVICE ===================================================== --> */}

        <div id="service">
          <div className="service-content">
            <div className="service-grid text-center">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-title text-center wow fadeIn">
                      <h3>Service List</h3>
                      <div className="underline1"></div>
                      <div className="underline2"></div>
                      <p>
                        I always want to make things that make a difference.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row love-row wow fadeIn">
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="assets/img/service/App.jpg"
                          alt="design-development"
                        />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-edit service-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Design + Development</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Clean, modern designs - optimized for performance,
                          search engines, and converting users to customers.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="assets/img/service/e-commarce.jpg"
                          alt="e-commarce"
                        />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-cart-plus exp-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>eCommerce</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Integration of eCommerce platforms, payment gateways,
                          custom product templates, and more.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="assets/img/service/mobile-friendly.jpg"
                          alt="analytics"
                        />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-tachometer service-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Mobile Responsive Design</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          A responsive design makes your app accessible to all
                          users, regardless of their device.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="assets/img/service/mobile-friendly.jpg"
                          alt="mobile-friendly"
                        />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-desktop exp-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Cross Platform</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          cross-platform capability allows for creating apps
                          compatible with iOS and Android.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="assets/img/service/website-audit.jpg"
                          alt="website-audit"
                        />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-search exp-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Performance Optimization</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          Looking to improve your page performance, SEO, or user
                          experience?
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6">
                    <div className="service-details" data-wow-delay=".1s">
                      <div className="service-head">
                        <img
                          src="assets/img/service/content-management.jpg"
                          alt="content-management"
                        />
                      </div>
                      <div className="service-bottom">
                        <i
                          className="fa fa-file exp-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>UI/UX Design</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                        I pay close attention to user interactions, ensuring seamless navigation and optimal usability
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial">
              <div className="testimonial-content">
                <div className="testimonial-grid">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="main-title text-center wow fadeIn">
                          <h3>Testimonials</h3>
                          <div className="underline1"></div>
                          <div className="underline2"></div>
                          <p>
                            People I've worked with have said some nice things
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-details">
                    <section id="carousel">
                      <div className="container">
                        <div className="row">
                          <div className="col-md-8 col-md-offset-2">
                            <div className="quote">
                              <i className="fa fa-quote-left fa-4x"></i>
                            </div>
                            <div
                              className="carousel slide"
                              id="fade-quote-carousel"
                              data-ride="carousel"
                              data-interval="3000"
                            >
                              <ol className="carousel-indicators">
                                <li
                                  data-target="#fade-quote-carousel"
                                  data-slide-to="0"
                                  className="active"
                                ></li>
                                <li
                                  data-target="#fade-quote-carousel"
                                  data-slide-to="1"
                                ></li>
                                <li
                                  data-target="#fade-quote-carousel"
                                  data-slide-to="2"
                                ></li>
                              </ol>
                              <div className="carousel-inner">
                                <div className="active item">
                                  <blockquote>
                                    <p>
                                      “Pankaj was a real pleasure to work with
                                      and we look forward to working with him
                                      again. He’s definitely the kind of
                                      developer you can trust with a project
                                      from start to finish.”
                                      <br />
                                      <span>Ishrak Chaudhury</span>
                                    </p>
                                  </blockquote>
                                </div>
                                <div className="item">
                                  <blockquote>
                                    <p>
                                      “Pankaj's a clear communicator with the
                                      tenacity and confidence to really dig in
                                      to tricky design scenarios and the
                                      collaborative friction that's needed to
                                      produce excellent work.”
                                      <br />
                                      <span>Kamrul Roy</span>
                                    </p>
                                  </blockquote>
                                </div>
                                <div className="item">
                                  <blockquote>
                                    <p>
                                      “Pankaj has done a fantastic job overall.
                                      Not only the site is to design, but the
                                      code is also very clean and slick. Love
                                      the way he achieved the translations
                                      portion of the app.”
                                      <br />
                                      <span>Shahadat Mahapatra</span>
                                    </p>
                                  </blockquote>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* <!-- ================================ CONTACT ========================== --> */}

        <div id="contact">
          <div className="contact-content">
            <div className="text-grid">
              <div className="text-grid-main">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <div className="main-title text-center wow fadeIn">
                        <h3>Contact Me</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          I’m always open to discussing product design work or
                          partnership opportunities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-grid">
              <div className="contact-form-details wow fadeIn">
                <div className="container">
                  <div className="row contact-info-row text-center wow fadeIn">
                    <div className="col-md-3 col-sm-6 contact-colamn">
                      <div className="contact-col-info" data-wow-delay=".2s">
                        <i
                          className="fa fa-map-marker contact-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Address</h3>
                        <p>Bikaner, Rajasthan, India</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 contact-colamn">
                      <div className="contact-col-info" data-wow-delay=".4s">
                        <i
                          className="fa fa-envelope contact-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Email</h3>
                        <a
                          href="mailto:pankajjajra000@gmail.com"
                          style={{
                            color: "black",
                            textDecoration: "none",
                            fontSize: "17px",
                          }}
                        >
                          pankajjajra000@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 contact-colamn">
                      <div className="contact-col-info" data-wow-delay=".6s">
                        <i
                          className="fa fa-mobile contact-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Phone</h3>
                        <a
                          href="tel:7627048319"
                          style={{
                            color: "black",
                            textDecoration: "none",
                            fontSize: "17px",
                          }}
                        >
                          +91 7627048319
                        </a>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 contact-colamn">
                      <div className="contact-col-info" data-wow-delay=".6s">
                        <i
                          className="fa fa-github contact-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Github</h3>
                        <p>
                          <a
                            href="https://github.com/Pankajjajra"
                            style={{
                              color: "black",
                              textDecoration: "none",
                              fontSize: "17px",
                            }}
                          >
                            https://github.com/Pankajjajra
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="container-fluid map-col">
                  <div class="col-md-12 col-sm-12 map-col">
                    <div class="google-maps">
                      <div class="map-wrap">
                        <iframe
                          title="google-maps"
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7308961.062658118!2d69.38337096699732!3d26.55777225024418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396a3efaf7e30e37%3A0xb52b9b4506c088e5!2sRajasthan!5e0!3m2!1sen!2sin!4v1680605204101!5m2!1sen!2sin"
                          width="100%"
                          height="450"
                          style={{ border: "0" }}
                          allowfullscreen=""
                          loading="lazy"
                          referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
