<div>
                <div className="container-xxl bg-white p-0">
                    {/* <!-- Spinner Start --> */}
                    <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                        <div className="spinner-grow text-primary" style="width: 3rem; height: 3rem;" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                    {/* <!-- Spinner End --> */}


                    {/* <!-- Navbar & Hero Start --> */}
                    <div className="container-xxl position-relative p-0">
                        <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
                            <a href="" className="navbar-brand p-0">
                                <h1 className="m-0"><i className="fa fa-search me-2"></i>SEO<span className="fs-5">Master</span></h1>
                                {/* <!-- <img src="img/logo.png" alt="Logo"> --> */}
                            </a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                <span className="fa fa-bars"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                <div className="navbar-nav ms-auto py-0">
                                    <a href="index.html" className="nav-item nav-link active">Home</a>
                                    <a href="about.html" className="nav-item nav-link">About</a>
                                    <a href="service.html" className="nav-item nav-link">Service</a>
                                    <a href="project.html" className="nav-item nav-link">Project</a>
                                    <div className="nav-item dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                        <div className="dropdown-menu m-0">
                                            <a href="team.html" className="dropdown-item">Our Team</a>
                                            <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                                            <a href="404.html" className="dropdown-item">404 Page</a>
                                        </div>
                                    </div>
                                    <a href="contact.html" className="nav-item nav-link">Contact</a>
                                </div>
                                <button type="button" className="btn text-secondary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></button>
                                <a href="https://htmlcodex.com/startup-company-website-template" className="btn btn-secondary text-light rounded-pill py-2 px-4 ms-3">Pro Version</a>
                            </div>
                        </nav>

                        <div className="container-xxl py-5 bg-primary hero-header mb-5">
                            <div className="container my-5 py-5 px-lg-5">
                                <div className="row g-5 py-5">
                                    <div className="col-lg-6 text-center text-lg-start">
                                        <h1 className="text-white mb-4 animated zoomIn">All in one SEO tool need to grow your business rapidly</h1>
                                        <p className="text-white pb-3 animated zoomIn">Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam sit justo amet ipsum vero ipsum clita lorem</p>
                                        <a href="/LoginPage" className="btn btn-light py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft">Login</a>
                                        <a href="/RegistrationForm" className="btn btn-outline-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">Sign Up</a>
                                    </div>
                                    <div className="col-lg-6 text-center text-lg-start">
                                        <img className="img-fluid" src="img/hero.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Navbar & Hero End -->


                    {/* <!-- Full Screen Search Start --> */}
                    <div className="modal fade" id="searchModal" tabindex="-1">
                        <div className="modal-dialog modal-fullscreen">
                            <div className="modal-content" style="background: rgba(29, 29, 39, 0.7);">
                                <div className="modal-header border-0">
                                    <button type="button" className="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body d-flex align-items-center justify-content-center">
                                    <div className="input-group" style="max-width: 600px;">
                                        <input type="text" className="form-control bg-transparent border-light p-3" placeholder="Type search keyword" />
                                        <button className="btn btn-light px-4"><i className="bi bi-search"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Full Screen Search End --> */}


                    {/* <!-- About Start --> */}
                    <div className="container-xxl py-5">
                        <div className="container px-lg-5">
                            <div className="row g-5">
                                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="section-title position-relative mb-4 pb-2">
                                        <h6 className="position-relative text-primary ps-4">About Us</h6>
                                        <h2 className="mt-2">The best SEO solution with 10 years of experience</h2>
                                    </div>
                                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                                    <div className="row g-3">
                                        <div className="col-sm-6">
                                            <h6 className="mb-3"><i className="fa fa-check text-primary me-2"></i>Award Winning</h6>
                                            <h6 className="mb-0"><i className="fa fa-check text-primary me-2"></i>Professional Staff</h6>
                                        </div>
                                        <div className="col-sm-6">
                                            <h6 className="mb-3"><i className="fa fa-check text-primary me-2"></i>24/7 Support</h6>
                                            <h6 className="mb-0"><i className="fa fa-check text-primary me-2"></i>Fair Prices</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center mt-4">
                                        <a className="btn btn-primary rounded-pill px-4 me-3" href="">Read More</a>
                                        <a className="btn btn-outline-primary btn-square me-3" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-outline-primary btn-square me-3" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-outline-primary btn-square me-3" href=""><i className="fab fa-instagram"></i></a>
                                        <a className="btn btn-outline-primary btn-square" href=""><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <img className="img-fluid wow zoomIn" data-wow-delay="0.5s" src="img/about.jpg" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- About End --> */}


                    {/* <!-- Newsletter Start --> */}
                    <div className="container-xxl bg-primary newsletter my-5 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="container px-lg-5">
                            <div className="row align-items-center" style="height: 250px;">
                                <div className="col-12 col-md-6">
                                    <h3 className="text-white">Ready to get started</h3>
                                    <small className="text-white">Diam elitr est dolore at sanctus nonumy.</small>
                                    <div className="position-relative w-100 mt-3">
                                        <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Enter Your Email" style="height: 48px;" />
                                        <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i className="fa fa-paper-plane text-primary fs-4"></i></button>
                                    </div>
                                </div>
                                <div className="col-md-6 text-center mb-n5 d-none d-md-block">
                                    <img className="img-fluid mt-5" style="height: 250px;" src="img/newsletter.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Newsletter End --> */}


                    {/* <!-- Service Start --> */}
                    <div className="container-xxl py-5">
                        <div className="container px-lg-5">
                            <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                                <h6 className="position-relative d-inline text-primary ps-4">Our Services</h6>
                                <h2 className="mt-2">What Solutions We Provide</h2>
                            </div>
                            <div className="row g-4">
                                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
                                    <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                                        <div className="service-icon flex-shrink-0">
                                            <i className="fa fa-home fa-2x"></i>
                                        </div>
                                        <h5 className="mb-3">SEO Optimization</h5>
                                        <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                        <a className="btn px-3 mt-auto mx-auto" href="">Read More</a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                                    <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                                        <div className="service-icon flex-shrink-0">
                                            <i className="fa fa-home fa-2x"></i>
                                        </div>
                                        <h5 className="mb-3">Web Design</h5>
                                        <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                        <a className="btn px-3 mt-auto mx-auto" href="">Read More</a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                                    <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                                        <div className="service-icon flex-shrink-0">
                                            <i className="fa fa-home fa-2x"></i>
                                        </div>
                                        <h5 className="mb-3">Social Media Marketing</h5>
                                        <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                        <a className="btn px-3 mt-auto mx-auto" href="">Read More</a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.1s">
                                    <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                                        <div className="service-icon flex-shrink-0">
                                            <i className="fa fa-home fa-2x"></i>
                                        </div>
                                        <h5 className="mb-3">Email Marketing</h5>
                                        <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                        <a className="btn px-3 mt-auto mx-auto" href="">Read More</a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.3s">
                                    <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                                        <div className="service-icon flex-shrink-0">
                                            <i className="fa fa-home fa-2x"></i>
                                        </div>
                                        <h5 className="mb-3">PPC Advertising</h5>
                                        <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                        <a className="btn px-3 mt-auto mx-auto" href="">Read More</a>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                                    <div className="service-item d-flex flex-column justify-content-center text-center rounded">
                                        <div className="service-icon flex-shrink-0">
                                            <i className="fa fa-home fa-2x"></i>
                                        </div>
                                        <h5 className="mb-3">App Development</h5>
                                        <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet lorem.</p>
                                        <a className="btn px-3 mt-auto mx-auto" href="">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Service End --> */}


                    {/* <!-- Portfolio Start --> */}
                    <div className="container-xxl py-5">
                        <div className="container px-lg-5">
                            <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                                <h6 className="position-relative d-inline text-primary ps-4">Our Projects</h6>
                                <h2 className="mt-2">Recently Launched Projects</h2>
                            </div>
                            <div className="row mt-n2 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="col-12 text-center">
                                    <ul className="list-inline mb-5" id="portfolio-flters">
                                        <li className="btn px-3 pe-4 active" data-filter="*">All</li>
                                        <li className="btn px-3 pe-4" data-filter=".first">Design</li>
                                        <li className="btn px-3 pe-4" data-filter=".second">Development</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row g-4 portfolio-container">
                                <div className="col-lg-4 col-md-6 portfolio-item first wow zoomIn" data-wow-delay="0.1s">
                                    <div className="position-relative rounded overflow-hidden">
                                        <img className="img-fluid w-100" src="img/portfolio-1.jpg" alt="" />
                                        <div className="portfolio-overlay">
                                            <a className="btn btn-light" href="img/portfolio-1.jpg" data-lightbox="portfolio"><i className="fa fa-plus fa-2x text-primary"></i></a>
                                            <div className="mt-auto">
                                                <small className="text-white"><i className="fa fa-folder me-2"></i>Web Design</small>
                                                <a className="h5 d-block text-white mt-1 mb-0" href="">Project Name</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item second wow zoomIn" data-wow-delay="0.3s">
                                    <div className="position-relative rounded overflow-hidden">
                                        <img className="img-fluid w-100" src="img/portfolio-2.jpg" alt="" />
                                        <div className="portfolio-overlay">
                                            <a className="btn btn-light" href="img/portfolio-2.jpg" data-lightbox="portfolio"><i className="fa fa-plus fa-2x text-primary"></i></a>
                                            <div className="mt-auto">
                                                <small className="text-white"><i className="fa fa-folder me-2"></i>Web Design</small>
                                                <a className="h5 d-block text-white mt-1 mb-0" href="">Project Name</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item first wow zoomIn" data-wow-delay="0.6s">
                                    <div className="position-relative rounded overflow-hidden">
                                        <img className="img-fluid w-100" src="img/portfolio-3.jpg" alt="" />
                                        <div className="portfolio-overlay">
                                            <a className="btn btn-light" href="img/portfolio-3.jpg" data-lightbox="portfolio"><i className="fa fa-plus fa-2x text-primary"></i></a>
                                            <div className="mt-auto">
                                                <small className="text-white"><i className="fa fa-folder me-2"></i>Web Design</small>
                                                <a className="h5 d-block text-white mt-1 mb-0" href="">Project Name</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item second wow zoomIn" data-wow-delay="0.1s">
                                    <div className="position-relative rounded overflow-hidden">
                                        <img className="img-fluid w-100" src="img/portfolio-4.jpg" alt="" />
                                        <div className="portfolio-overlay">
                                            <a className="btn btn-light" href="img/portfolio-4.jpg" data-lightbox="portfolio"><i className="fa fa-plus fa-2x text-primary"></i></a>
                                            <div className="mt-auto">
                                                <small className="text-white"><i className="fa fa-folder me-2"></i>Web Design</small>
                                                <a className="h5 d-block text-white mt-1 mb-0" href="">Project Name</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item first wow zoomIn" data-wow-delay="0.3s">
                                    <div className="position-relative rounded overflow-hidden">
                                        <img className="img-fluid w-100" src="img/portfolio-5.jpg" alt="" />
                                        <div className="portfolio-overlay">
                                            <a className="btn btn-light" href="img/portfolio-5.jpg" data-lightbox="portfolio"><i className="fa fa-plus fa-2x text-primary"></i></a>
                                            <div className="mt-auto">
                                                <small className="text-white"><i className="fa fa-folder me-2"></i>Web Design</small>
                                                <a className="h5 d-block text-white mt-1 mb-0" href="">Project Name</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 portfolio-item second wow zoomIn" data-wow-delay="0.6s">
                                    <div className="position-relative rounded overflow-hidden">
                                        <img className="img-fluid w-100" src="img/portfolio-6.jpg" alt="" />
                                        <div className="portfolio-overlay">
                                            <a className="btn btn-light" href="img/portfolio-6.jpg" data-lightbox="portfolio"><i className="fa fa-plus fa-2x text-primary"></i></a>
                                            <div className="mt-auto">
                                                <small className="text-white"><i className="fa fa-folder me-2"></i>Web Design</small>
                                                <a className="h5 d-block text-white mt-1 mb-0" href="">Project Name</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Portfolio End --> */}


                    {/* <!-- Testimonial Start --> */}
                    <div className="container-xxl bg-primary testimonial py-5 my-5 wow fadeInUp" data-wow-delay="0.1s">
                        <div className="container py-5 px-lg-5">
                            <div className="owl-carousel testimonial-carousel">
                                <div className="testimonial-item bg-transparent border rounded text-white p-4">
                                    <i className="fa fa-quote-left fa-2x mb-3"></i>
                                    <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                                    <div className="d-flex align-items-center">
                                        <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-1.jpg" style="width: 50px; height: 50px;" />
                                        <div className="ps-3">
                                            <h6 className="text-white mb-1">Client Name</h6>
                                            <small>Profession</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-item bg-transparent border rounded text-white p-4">
                                    <i className="fa fa-quote-left fa-2x mb-3"></i>
                                    <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                                    <div className="d-flex align-items-center">
                                        <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-2.jpg" style="width: 50px; height: 50px;" />
                                        <div className="ps-3">
                                            <h6 className="text-white mb-1">Client Name</h6>
                                            <small>Profession</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-item bg-transparent border rounded text-white p-4">
                                    <i className="fa fa-quote-left fa-2x mb-3"></i>
                                    <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                                    <div className="d-flex align-items-center">
                                        <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-3.jpg" style="width: 50px; height: 50px;" />
                                        <div className="ps-3">
                                            <h6 className="text-white mb-1">Client Name</h6>
                                            <small>Profession</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-item bg-transparent border rounded text-white p-4">
                                    <i className="fa fa-quote-left fa-2x mb-3"></i>
                                    <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
                                    <div className="d-flex align-items-center">
                                        <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-4.jpg" style="width: 50px; height: 50px;" />
                                        <div className="ps-3">
                                            <h6 className="text-white mb-1">Client Name</h6>
                                            <small>Profession</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Testimonial End --> */}


                    {/* <!-- Team Start --> */}
                    <div className="container-xxl py-5">
                        <div className="container px-lg-5">
                            <div className="section-title position-relative text-center mb-5 pb-2 wow fadeInUp" data-wow-delay="0.1s">
                                <h6 className="position-relative d-inline text-primary ps-4">Our Team</h6>
                                <h2 className="mt-2">Meet Our Team Members</h2>
                            </div>
                            <div className="row g-4">
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="team-item">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5" style="width: 75px;">
                                                <a className="btn btn-square text-primary bg-white my-1" href=""><i className="fab fa-facebook-f"></i></a>
                                                <a className="btn btn-square text-primary bg-white my-1" href=""><i className="fab fa-twitter"></i></a>
                                                <a className="btn btn-square text-primary bg-white my-1" href=""><i className="fab fa-instagram"></i></a>
                                                <a className="btn btn-square text-primary bg-white my-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                            </div>
                                            <img className="img-fluid rounded w-100" src="img/team-1.jpg" alt="" />
                                        </div>
                                        <div className="px-4 py-3">
                                            <h5 className="fw-bold m-0">Jhon Doe</h5>
                                            <small>CEO</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                    <div className="team-item">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5" style="width: 75px;">
                                                <a className="btn btn-square text-primary bg-white my-1" href=""><i className="fab fa-facebook-f"></i></a>
                                                <a className="btn btn-square text-primary bg-white my-1" href=""><i className="fab fa-twitter"></i></a>
                                                <a className="btn btn-square text-primary bg-white my-1" href=""><i className="fab fa-instagram"></i></a>
                                                <a className="btn btn-square text-primary bg-white my-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                            </div>
                                            <img className="img-fluid rounded w-100" src="img/team-2.jpg" alt="" />
                                        </div>
                                        <div className="px-4 py-3">
                                            <h5 className="fw-bold m-0">Emma William</h5>
                                            <small>Manager</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                                    <div className="team-item">
                                        <div className="d-flex">
                                            <div className="flex-shrink-0 d-flex flex-column align-items-center mt-4 pt-5" style="width: 75px;">
                                                <a className="btn btn-square text-primary bg-white my-1" href=""><i className="fab fa-facebook-f"></i></a>
                                                <a className="btn btn-square text-primary bg-white my-1" href=""><i className="fab fa-twitter"></i></a>
                                                <a className="btn btn-square text-primary bg-white my-1" href=""><i className="fab fa-instagram"></i></a>
                                                <a className="btn btn-square text-primary bg-white my-1" href=""><i className="fab fa-linkedin-in"></i></a>
                                            </div>
                                            <img className="img-fluid rounded w-100" src="img/team-3.jpg" alt="" />
                                        </div>
                                        <div className="px-4 py-3">
                                            <h5 className="fw-bold m-0">Noah Michael</h5>
                                            <small>Designer</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Team End --> */}


                    {/* <!-- Footer Start --> */}
                    <div className="container-fluid bg-primary text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
                        <div className="container py-5 px-lg-5">
                            <div className="row g-5">
                                <div className="col-md-6 col-lg-3">
                                    <h5 className="text-white mb-4">Get In Touch</h5>
                                    <p><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                                    <p><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                                    <p><i className="fa fa-envelope me-3"></i>info@example.com</p>
                                    <div className="d-flex pt-2">
                                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-instagram"></i></a>
                                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <h5 className="text-white mb-4">Popular Link</h5>
                                    <a className="btn btn-link" href="">About Us</a>
                                    <a className="btn btn-link" href="">Contact Us</a>
                                    <a className="btn btn-link" href="">Privacy Policy</a>
                                    <a className="btn btn-link" href="">Terms & Condition</a>
                                    <a className="btn btn-link" href="">Career</a>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <h5 className="text-white mb-4">Project Gallery</h5>
                                    <div className="row g-2">
                                        <div className="col-4">
                                            <img className="img-fluid" src="img/portfolio-1.jpg" alt="Image" />
                                        </div>
                                        <div className="col-4">
                                            <img className="img-fluid" src="img/portfolio-2.jpg" alt="Image" />
                                        </div>
                                        <div className="col-4">
                                            <img className="img-fluid" src="img/portfolio-3.jpg" alt="Image" />
                                        </div>
                                        <div className="col-4">
                                            <img className="img-fluid" src="img/portfolio-4.jpg" alt="Image" />
                                        </div>
                                        <div className="col-4">
                                            <img className="img-fluid" src="img/portfolio-5.jpg" alt="Image" />
                                        </div>
                                        <div className="col-4">
                                            <img className="img-fluid" src="img/portfolio-6.jpg" alt="Image" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-3">
                                    <h5 className="text-white mb-4">Newsletter</h5>
                                    <p>Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu</p>
                                    <div className="position-relative w-100 mt-3">
                                        <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Your Email" style="height: 48px;" />
                                        <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i className="fa fa-paper-plane text-primary fs-4"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container px-lg-5">
                            <div className="copyright">
                                <div className="row">
                                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                        &copy; <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved.


                                        Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                                    </div>
                                    <div className="col-md-6 text-center text-md-end">
                                        <div className="footer-menu">
                                            <a href="">Home</a>
                                            <a href="">Cookies</a>
                                            <a href="">Help</a>
                                            <a href="">FQAs</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Footer End --> */}


                    {/* <!-- Back to Top --> */}
                    <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top pt-2"><i className="bi bi-arrow-up"></i></a>
                </div>
            </div>