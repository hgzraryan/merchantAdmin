import { useNavigate, Link, Outlet } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import React, { Suspense, useState } from "react";
import LoadingSpinner from "../LoadingSpinner";



const MainTemplate = () => {
    const navigate = useNavigate();
    const logout = useLogout();

    //-------------------
    const [isActive, setIsActive] = useState(false);
	const menuClick = event => {
		setIsActive(current => !current);
	};
	
	const [misActive, msetIsActive] = useState(false);
	const mmenuClick = event => {
		msetIsActive(current => !current);
	};
	
	const [sisActive, ssetIsActive] = useState(false);
	const smenuClick = event => {
		ssetIsActive(current => !current);
	};

    const [dropDownMenu1, dropDownMenu1IsActive] = useState(true);
	const dropDownMenu1Click = event => {
		dropDownMenu1IsActive(current => !current);
	};
   //--------------------------------------



	


    const signOut = async () => {
        await logout();
        navigate('/login');
    }

    return (
        <section>
            {/* Wrapper */}
            <div className="hk-wrapper" data-layout="vertical" data-layout-style={misActive ? 'collapsed' : 'default'} data-hover={misActive ? 'active' : ''} data-menu="light" data-footer="simple">
                {/* Top Navbar */}
                <nav className="hk-navbar navbar navbar-expand-xl navbar-light fixed-top">
                    <div className="container-fluid">
                    {/* Start Nav */}
                        <div className="nav-start-wrap">
                            <button className="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover navbar-toggle d-xl-none" onClick={mmenuClick}>
                                <span className="icon">
                                    <span className="feather-icon">
                                        {/*<i data-feather="align-left"></i>*/}
                                        <i className="fas fa-align-left"></i>
                                    </span>
                                </span>
                            </button>
                            {/* Search */}
                            <form className="dropdown navbar-search">
                                <div className={sisActive ? 'dropdown-toggle no-caret show' : 'dropdown-toggle no-caret'} data-bs-toggle="dropdown" data-dropdown-animation data-bs-auto-close="outside">
                                    <a  href="/privacy-policy" className="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover  d-xl-none" onClick={smenuClick}>
                                        <span className="icon">
                                            <span className="feather-icon">
                                                {/*<i data-feather="search"></i>*/}
                                                <i className="fa fa-search" aria-hidden="true"></i>
                                            </span>
                                        </span>
                                    </a>
                                    <div className="input-group d-xl-flex d-none">
                                        <span className="input-affix-wrapper input-search affix-border">
                                            <input type="text" className="form-control  bg-transparent"  data-navbar-search-close="false" placeholder="Փնտրել..." aria-label="Փնտրել" />
                                            <span className="input-suffix">
                                                <span>/</span>
                                                <span className="btn-input-clear">
                                                    <i className="bi bi-x-circle-fill"></i>
                                                </span>
                                                <span className="spinner-border spinner-border-sm input-loader text-primary" role="status">
                                                    <span className="sr-only">Բեռնում...</span>
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                </div>
                                <div  className={sisActive ? 'dropdown-menu p-0 show' : 'dropdown-menu p-0'}>
                                    {/* Mobile Search */}
                                    <div className="dropdown-item d-xl-none bg-transparent" >
                                        <div className="input-group mobile-search">
                                            <span className="input-affix-wrapper input-search">
                                                <input type="text" className="form-control" placeholder="Search..." aria-label="Search"/>
                                                <span className="input-suffix" onClick={smenuClick}>
                                                    <span className="btn-input-clear"><i className="bi bi-x-circle-fill"></i></span>
                                                    <span className="spinner-border spinner-border-sm input-loader text-primary" role="status">
                                                        <span className="sr-only">Բեռնում...</span>
                                                    </span>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    {/* Mobile Search */}
                                    <div data-simplebar className="dropdown-body p-2">
                                        <h6 className="dropdown-header">Recent Search</h6>
                                        <div className="dropdown-item bg-transparent">
                                            <a href="/privacy-policy" className="badge badge-pill badge-soft-secondary">Grunt</a>
                                            <a href="/privacy-policy" className="badge badge-pill badge-soft-secondary">Node JS</a>
                                            <a href="/privacy-policy" className="badge badge-pill badge-soft-secondary">SCSS</a>
                                        </div>
                                        <div className="dropdown-divider"></div>
                                        <h6 className="dropdown-header">Help</h6>
                                        <a href="/privacy-policy" className="dropdown-item">
                                            <div className="media align-items-center">
                                                <div className="media-head me-2">
                                                    <div className="avatar avatar-icon avatar-xs avatar-soft-light avatar-rounded">
                                                        <span className="initial-wrap">
                                                            <span className="svg-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-corner-down-right" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                    <path d="M6 6v6a3 3 0 0 0 3 3h10l-4 -4m0 8l4 -4"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="media-body">
                                                    How to setup theme?
                                                </div>
                                            </div>
                                        </a>
                                        <a href="/privacy-policy" className="dropdown-item">
                                            <div className="media align-items-center">
                                                <div className="media-head me-2">
                                                    <div className="avatar avatar-icon avatar-xs avatar-soft-light avatar-rounded">
                                                        <span className="initial-wrap">
                                                            <span className="svg-icon">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-corner-down-right" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                                    <path d="M6 6v6a3 3 0 0 0 3 3h10l-4 -4m0 8l4 -4"></path>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="media-body">
                                                    View detail documentation
                                                </div>
                                            </div>
                                        </a>
                                        <div className="dropdown-divider"></div>
                                        <h6 className="dropdown-header">Users</h6>
                                        <a href="/privacy-policy" className="dropdown-item">
                                            <div className="media align-items-center">
                                                <div className="media-head me-2">
                                                    <div className="avatar avatar-xs avatar-rounded">
                                                        <img src="/dist/img/avatar3.jpg" alt="user" className="avatar-img"/>
                                                    </div>
                                                </div>
                                                <div className="media-body">
                                                    Sarah Jone
                                                </div>
                                            </div>
                                        </a>
                                        <a href="/privacy-policy" className="dropdown-item">
                                            <div className="media align-items-center">
                                                <div className="media-head me-2">
                                                    <div className="avatar avatar-xs avatar-soft-primary avatar-rounded">
                                                        <span className="initial-wrap"></span>
                                                    </div>
                                                </div>
                                                <div className="media-body">
                                                    Joe Jackson
                                                </div>
                                            </div>
                                        </a>
                                        <a href="/privacy-policy" className="dropdown-item">
                                            <div className="media align-items-center">
                                                <div className="media-head me-2">
                                                    <div className="avatar avatar-xs avatar-rounded">
                                                        <img src="/dist/img/avatar4.jpg" alt="user" className="avatar-img"/>
                                                    </div>
                                                </div>
                                                <div className="media-body">
                                                    Maria Richard
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="dropdown-footer d-xl-flex d-none">
                                        <a href="/privacy-policy">
                                            <u>Search all</u>
                                        </a>
                                    </div>
                                </div>
                            </form>
                            {/* /Search */}
                        </div>
                        {/* /Start Nav */}
                        {/* End Nav */}
                        <div className="nav-end-wrap" onClick={menuClick}>
                            <ul className="navbar-nav flex-row">
                            {/*
                                <li className="nav-item">
                                    <a href="email.html" className="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover"><span className="icon"><span className=" position-relative"><span className="feather-icon"><i data-feather="inbox"></i></span><span className="badge badge-sm badge-soft-primary badge-sm badge-pill position-top-end-overflow-1">4</span></span></span></a>
                                </li>
                            
                                <li className="nav-item">
                                    <div className="dropdown dropdown-notifications">
                                        <a href="#" className="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover dropdown-toggle no-caret" data-bs-toggle="dropdown" data-dropdown-animation role="button" aria-haspopup="true" aria-expanded="false"><span className="icon"><span className="position-relative"><span className="feather-icon"><i data-feather="bell"></i></span><span className="badge badge-success badge-indicator position-top-end-overflow-1"></span></span></span></a>
                                        <div className="dropdown-menu dropdown-menu-end p-0">
                                            <h6 className="dropdown-header px-4 fs-6">Notifications<a href="#" className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"><span className="icon"><span className="feather-icon"><i data-feather="settings"></i></span></span></a>
                                            </h6>
                                            <div data-simplebar className="dropdown-body  p-2">
                                                <a href="#" className="dropdown-item">
                                                    <div className="media">
                                                        <div className="media-head">
                                                            <div className="avatar avatar-rounded avatar-sm">
                                                                <img src="dist/img/avatar2.jpg" alt="user" className="avatar-img"/>
                                                            </div>
                                                        </div>
                                                        <div className="media-body">
                                                            <div>
                                                                <div className="notifications-text">Morgan Freeman accepted your invitation to join the team</div>
                                                                <div className="notifications-info">
                                                                    <span className="badge badge-soft-success">Collaboration</span>
                                                                    <div className="notifications-time">Today, 10:14 PM</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    <div className="media">
                                                        <div className="media-head">
                                                            <div className="avatar  avatar-icon avatar-sm avatar-success avatar-rounded">
                                                                <span className="initial-wrap">
                                                                    <span className="feather-icon"><i data-feather="inbox"></i></span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="media-body">
                                                            <div>
                                                                <div className="notifications-text">New message received from Alan Rickman</div>
                                                                <div className="notifications-info">
                                                                    <div className="notifications-time">Today, 7:51 AM</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    <div className="media">
                                                        <div className="media-head">
                                                            <div className="avatar  avatar-icon avatar-sm avatar-pink avatar-rounded">
                                                                <span className="initial-wrap">
                                                                    <span className="feather-icon"><i data-feather="clock"></i></span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="media-body">
                                                            <div>
                                                                <div className="notifications-text">You have a follow up with Jampack Head on Friday, Dec 19 at 9:30 am</div>
                                                                <div className="notifications-info">
                                                                    <div className="notifications-time">Yesterday, 9:25 PM</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    <div className="media">
                                                        <div className="media-head">
                                                            <div className="avatar avatar-sm avatar-rounded">
                                                                <img src="dist/img/avatar3.jpg" alt="user" className="avatar-img"/>
                                                            </div>
                                                        </div>
                                                        <div className="media-body">
                                                            <div>
                                                                <div className="notifications-text">Application of Sarah Williams is waiting for your approval</div>
                                                                <div className="notifications-info">
                                                                    <div className="notifications-time">Today 10:14 PM</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    <div className="media">
                                                        <div className="media-head">
                                                            <div className="avatar avatar-sm avatar-rounded">
                                                                <img src="dist/img/avatar10.jpg" alt="user" className="avatar-img"/>
                                                            </div>
                                                        </div>
                                                        <div className="media-body">
                                                            <div>	
                                                                <div className="notifications-text">Winston Churchil shared a document with you</div>
                                                                <div className="notifications-info">
                                                                    <span className="badge badge-soft-violet">File Manager</span>
                                                                    <div className="notifications-time">2 Oct, 2021</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <a href="#" className="dropdown-item">
                                                    <div className="media">
                                                        <div className="media-head">
                                                            <div className="avatar  avatar-icon avatar-sm avatar-danger avatar-rounded">
                                                                <span className="initial-wrap">
                                                                    <span className="feather-icon"><i data-feather="calendar"></i></span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="media-body">
                                                            <div>	
                                                                <div className="notifications-text">Last 2 days left for the project to be completed</div>
                                                                <div className="notifications-info">
                                                                    <span className="badge badge-soft-orange">Updates</span>
                                                                    <div className="notifications-time">14 Sep, 2021</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="dropdown-footer"><a href="#"><u>View all notifications</u></a></div>
                                        </div>
                                    </div>
                                </li>
                                */}
                                <li className="nav-item">
                                    <div className="dropdown ps-2">
                                        <a className=" dropdown-toggle no-caret" href="#" role="button" data-bs-display="static" data-bs-toggle="dropdown" data-dropdown-animation data-bs-auto-close="outside" aria-expanded="false">
                                            <div className="avatar avatar-rounded avatar-xs">
                                                <img src="/dist/img/avatar12.jpg" alt="user" className="avatar-img"/>
                                            </div>
                                        </a>
                                        <div className={isActive ? 'dropdown-menu dropdown-menu-end show showSlow' : 'dropdown-menu dropdown-menu-end showSlow'}>
                                            <div className="p-2">
                                                <div className="media">
                                                    <div className="media-head me-2">
                                                        <div className="avatar avatar-primary avatar-sm avatar-rounded">
                                                            <span className="initial-wrap">{}</span>
                                                        </div>
                                                    </div>
                                                    <div className="media-body">
                                                        <div className="fs-7">{}</div>
                                                        <a href="/login" className="d-block fs-8 link-secondary" onClick={signOut}><u>Դուրս գալ</u></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="profile.html">Profile</a>
                                                <a className="dropdown-item" href="/privacy-policy">
                                                    <span className="me-2">Offers</span>
                                                    <span className="badge badge-sm badge-soft-pink">2</span>
                                                </a>
                                                <div className="dropdown-divider"></div>
                                                <h6 className="dropdown-header">Manage Account</h6>
                                                <a className="dropdown-item" href="/privacy-policy"><span className="dropdown-icon feather-icon"><i data-feather="credit-card"></i></span><span>Payment methods</span></a>
                                                <a className="dropdown-item" href="/privacy-policy"><span className="dropdown-icon feather-icon"><i data-feather="check-square"></i></span><span>Subscriptions</span></a>
                                                <a className="dropdown-item" href="/privacy-policy"><span className="dropdown-icon feather-icon"><i data-feather="settings"></i></span><span>Settings</span></a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="/privacy-policy"><span className="dropdown-icon feather-icon"><i data-feather="tag"></i></span><span>Raise a ticket</span></a>
                                      <div className="dropdown-divider"></div>
                                      <a className="dropdown-item" href="/privacy-policy">Terms & Conditions</a>
                                      <a className="dropdown-item" href="/privacy-policy">Help & Support</a>
                                  </div>
                              </div>
                          </li>
                      </ul>
                  </div>
                  {/* /End Nav */}
                  </div>									
              </nav>
              {/* /Top Navbar */}
  
              {/* Vertical Nav */}
              <div className="hk-menu">
              {/* Brand */}
                  <div className="menu-header">
                      <span>
                          <a className="navbar-brand" href="/dashboard">
                              <img className="brand-img img-fluid" src="/dist/img/icon.svg" alt="brand" />
                              <img className="brand-img img-fluid" src="/dist/img/text.svg" alt="brand" />
                              
                          </a>
                          <button className="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover navbar-toggle" onClick={mmenuClick}>
                              <span className="icon">
                                  <span className="svg-icon fs-5">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-bar-to-left" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                          <line x1="10" y1="12" x2="20" y2="12"></line>
                                          <line x1="10" y1="12" x2="14" y2="16"></line>
                                          <line x1="10" y1="12" x2="14" y2="8"></line>
                                          <line x1="4" y1="4" x2="4" y2="20"></line>
                                      </svg>
                                  </span>
                              </span>
                          </button>
                      </span>
                  </div>
                  {/* /Brand */}
  
                  {/* Main Menu */}
                  <div data-simplebar className="nicescroll-bar">
                      <div className="menu-content-wrap">
                          <div className="menu-group">
                              <ul className="navbar-nav flex-column">
                                  <li className="nav-item active">
                                      <a className="nav-link" href="/">
                                          <span className="nav-icon-wrap">
                                              <span className="svg-icon">
                                                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-template" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                      <rect x="4" y="4" width="16" height="4" rx="1" />
                                                      <rect x="4" y="12" width="6" height="8" rx="1" />
                                                      <line x1="14" y1="12" x2="20" y2="12" />
                                                      <line x1="14" y1="16" x2="20" y2="16" />
                                                      <line x1="14" y1="20" x2="20" y2="20" />
                                                  </svg>
                                              </span>
                                          </span>
                                          <span className="nav-link-text">Կառ․ վահանակ</span>
                                          {/*<span className="badge badge-sm badge-soft-pink ms-auto">Hot</span>*/}
                                      </a>
                                  </li>
                              </ul>	
                          </div>
                          <div className="menu-gap"></div>
                          <div className="menu-group">
                              <div className="nav-header">
                                  <span>Գործիքակազմ</span>
                              </div>
                              
                              <ul className="navbar-nav flex-column">
                                  <li className="nav-item">
                                      <Link className="nav-link" to="./clients">
                                          <span className="nav-icon-wrap">
                                              <span className="svg-icon">
                                                <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g id="User / Users_Group">
                                                        <path id="Vector" d="M17 20C17 18.3431 14.7614 17 12 17C9.23858 17 7 18.3431 7 20M21 17.0004C21 15.7702 19.7659 14.7129 18 14.25M3 17.0004C3 15.7702 4.2341 14.7129 6 14.25M18 10.2361C18.6137 9.68679 19 8.8885 19 8C19 6.34315 17.6569 5 16 5C15.2316 5 14.5308 5.28885 14 5.76389M6 10.2361C5.38625 9.68679 5 8.8885 5 8C5 6.34315 6.34315 5 8 5C8.76835 5 9.46924 5.28885 10 5.76389M12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </g>
                                                </svg>
                                              </span>
                                          </span>
                                          <span className="nav-link-text">Հաճախորդներ</span>
                                      </Link>
                                  </li>	
                                  <li className="nav-item">
                                  <Link className="nav-link" to="./agents">
                                          <span className="nav-icon-wrap">
                                              <span className="svg-icon">
                                              <svg width="800px" height="800px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                                <path fill="#000000" d="M864 409.6a192 192 0 0 1-37.888 349.44A256.064 256.064 0 0 1 576 960h-96a32 32 0 1 1 0-64h96a192.064 192.064 0 0 0 181.12-128H736a32 32 0 0 1-32-32V416a32 32 0 0 1 32-32h32c10.368 0 20.544.832 30.528 2.432a288 288 0 0 0-573.056 0A193.235 193.235 0 0 1 256 384h32a32 32 0 0 1 32 32v320a32 32 0 0 1-32 32h-32a192 192 0 0 1-96-358.4 352 352 0 0 1 704 0zM256 448a128 128 0 1 0 0 256V448zm640 128a128 128 0 0 0-128-128v256a128 128 0 0 0 128-128z"/>
                                              </svg>
                                              </span>
                                          </span>
                                          <span className="nav-link-text">Գործակալներ</span>
                                      </Link>
                                  </li>	
                                  <li className="nav-item">
                                  <Link className="nav-link" to="./Organizations">
                                          <span className="nav-icon-wrap">
                                              <span className="svg-icon">
                                              <svg fill="#000000" width="800px" height="800px" viewBox="0 0 15 15" id="town" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.651,7.121a.251.251,0,0,0-.314,0L8.092,8.929A.247.247,0,0,0,8,9.122v4.625A.253.253,0,0,0,8.253,14H9.747A.253.253,0,0,0,10,13.747h0V12h1v1.747a.253.253,0,0,0,.253.253h1.494A.253.253,0,0,0,13,13.747h0V9.12a.25.25,0,0,0-.094-.2ZM10,11H9V10h1Zm2,0H11V10h1ZM5.71,1.815a.252.252,0,0,0-.42,0L2.042,5.936A.252.252,0,0,0,2,6.076v7.671A.252.252,0,0,0,2.251,14h2.5A.252.252,0,0,0,5,13.748V12H6v1.748A.252.252,0,0,0,6.252,14H7V8a.5.5,0,0,1,.188-.391L9,6C9,5.95,5.71,1.815,5.71,1.815ZM4,10H3V9H4ZM4,7H3V6H4Zm2,3H5V9H6ZM6,7H5V6H6Z"/>
                                                </svg>
                                              </span>
                                          </span>
                                          <span className="nav-link-text">Կազմակերպություններ</span>
                                      </Link>
                                  </li>	
                                  <li className="nav-item">
                                      <Link className="nav-link" to="#" data-bs-toggle="collapse" data-bs-target="#dash_chatpop">
                                          <span className="nav-icon-wrap">
                                              <span className="svg-icon">
                                               <svg fill="#000000" width="800px" height="800px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                                               <path d="M491.52 618.879v190.075c0 16.968-13.754 30.72-30.72 30.72H71.68c-16.966 0-30.72-13.752-30.72-30.72v-593.91c0-16.968 13.754-30.72 30.72-30.72H460.8c16.966 0 30.72 13.752 30.72 30.72v241.664c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48V215.044c0-39.591-32.094-71.68-71.68-71.68H71.68c-39.586 0-71.68 32.089-71.68 71.68v593.91c0 39.591 32.094 71.68 71.68 71.68H460.8c39.586 0 71.68-32.089 71.68-71.68V618.879c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48z"/><path d="M399.36 327.678c5.657 0 10.24-4.583 10.24-10.24v-40.96c0-5.657-4.583-10.24-10.24-10.24H133.12a10.238 10.238 0 00-10.24 10.24v40.96c0 5.657 4.583 10.24 10.24 10.24h266.24zm0 40.96H133.12c-28.278 0-51.2-22.922-51.2-51.2v-40.96c0-28.278 22.922-51.2 51.2-51.2h266.24c28.278 0 51.2 22.922 51.2 51.2v40.96c0 28.278-22.922 51.2-51.2 51.2zm-216.711 98.593c5.468 28.856-19.364 53.688-48.22 48.22-16.026-3.041-29.143-16.159-32.174-32.184-5.478-28.856 19.354-53.688 48.21-48.22 16.036 3.041 29.143 16.159 32.184 32.184zm122.88 0c5.468 28.856-19.364 53.688-48.22 48.22-16.026-3.041-29.143-16.159-32.174-32.184-5.478-28.856 19.354-53.688 48.21-48.22 16.036 3.041 29.143 16.159 32.184 32.184zm-122.88 123.904c5.468 28.856-19.364 53.688-48.22 48.22-16.026-3.041-29.143-16.159-32.174-32.184-5.478-28.856 19.354-53.688 48.21-48.22 16.036 3.041 29.143 16.159 32.184 32.184zm122.88 0c5.468 28.856-19.364 53.688-48.22 48.22-16.026-3.041-29.143-16.159-32.174-32.184-5.478-28.856 19.354-53.688 48.21-48.22 16.036 3.041 29.143 16.159 32.184 32.184zm122.88 0c5.468 28.856-19.364 53.688-48.22 48.22-16.026-3.041-29.143-16.159-32.174-32.184-5.478-28.856 19.354-53.688 48.21-48.22 16.036 3.041 29.143 16.159 32.184 32.184zm-245.76 122.88c5.468 28.856-19.364 53.688-48.22 48.22-16.026-3.041-29.143-16.159-32.174-32.184-5.478-28.856 19.354-53.688 48.21-48.22 16.036 3.041 29.143 16.159 32.184 32.184zm122.88 0c5.468 28.856-19.364 53.688-48.22 48.22-16.026-3.041-29.143-16.159-32.174-32.184-5.478-28.856 19.354-53.688 48.21-48.22 16.036 3.041 29.143 16.159 32.184 32.184zm122.88 0c5.468 28.856-19.364 53.688-48.22 48.22-16.026-3.041-29.143-16.159-32.174-32.184-5.478-28.856 19.354-53.688 48.21-48.22 16.036 3.041 29.143 16.159 32.184 32.184zm179.469-37.034l-199.67-199.67c-9.738-9.738-9.738-25.535 0-35.272l4.808-4.797c9.756-9.762 25.547-9.762 35.284-.02l199.674 199.664c7.998 7.998 20.965 7.997 28.963-.001s7.997-20.965-.001-28.963l-199.67-199.66c-25.73-25.745-67.468-25.745-93.202.005l-4.803 4.793c-25.749 25.749-25.749 67.48-.015 93.214l199.67 199.67c7.998 7.998 20.965 7.998 28.963 0s7.998-20.965 0-28.963z"/><path d="M678.341 609.334l-104.54-104.54c-9.747-9.747-9.747-25.531-.004-35.268l4.832-4.843c9.722-9.722 25.519-9.722 35.257.015l104.551 104.541c7.998 7.998 20.966 7.997 28.963-.001s7.997-20.966-.001-28.963l-104.55-104.54c-25.733-25.733-67.464-25.733-93.198.001l-4.828 4.838c-25.729 25.714-25.729 67.439.015 93.183l104.54 104.54c7.998 7.998 20.965 7.998 28.963 0s7.998-20.965 0-28.963z"/><path d="M766.665 559.551l-104.54-104.54c-9.747-9.747-9.747-25.531-.004-35.268l4.832-4.843c9.722-9.722 25.519-9.722 35.257.015l104.551 104.541c7.998 7.998 20.966 7.997 28.963-.001s7.997-20.966-.001-28.963l-104.55-104.54c-25.733-25.733-67.464-25.733-93.198.001l-4.828 4.838c-25.729 25.714-25.729 67.439.015 93.183l104.54 104.54c7.998 7.998 20.965 7.998 28.963 0s7.998-20.965 0-28.963z"/><path d="M854.775 510.196l-104.54-104.54c-9.747-9.747-9.747-25.531-.004-35.268l4.832-4.843c9.722-9.722 25.519-9.722 35.257.015l104.551 104.541c7.998 7.998 20.966 7.997 28.963-.001s7.997-20.966-.001-28.963l-104.55-104.54c-25.733-25.733-67.464-25.733-93.198.001l-4.828 4.838c-25.729 25.714-25.729 67.439.015 93.183l104.54 104.54c7.998 7.998 20.965 7.998 28.963 0s7.998-20.965 0-28.963zM685.653 754.755l-93-93-28.963 28.963 93 93z"/><path d="M818.516 393.754l119.562 119.562 28.963-28.963-119.562-119.562z"/><path d="M931.165 506.23c32.758 32.579 51.49 76.693 51.49 123.821 0 96.445-78.178 174.623-174.623 174.623-46.962 0-90.924-18.593-123.472-51.141l-28.963 28.963c40.154 40.154 94.499 63.138 152.435 63.138 119.066 0 215.583-96.516 215.583-215.583 0-58.143-23.155-112.673-63.567-152.864l-28.883 29.042z"/>
                                               </svg>
                                              </span>
                                          </span>
                                          <span className="nav-link-text">Հաշվարկներ</span>                                          
                                      </Link>
                                      <ul id="dash_chatpop" className="nav flex-column collapse  nav-children">
                                          <li className="nav-item">
                                              <ul className="nav flex-column">
                                                  <li className="nav-item">
                                                      <a className="nav-link" href="chatpopup.html"><span className="nav-link-text">Direct Message</span></a>
                                                  </li>
                                                  <li className="nav-item">
                                                      <a className="nav-link" href="chatbot.html"><span className="nav-link-text">Chatbot</span></a>
                                                  </li>
                                              </ul>	
                                          </li>	
                                      </ul>	
                                  </li>	
                                  <li className="nav-item">
                                      <Link className="nav-link" to="#" onClick={dropDownMenu1Click} data-bs-toggle="collapse" data-bs-target="#dash_chat">
                                          <span className="nav-icon-wrap">
                                              <span className="svg-icon">
                                              <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect x="3" y="6" width="18" height="13" rx="2" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M3 10H20.5" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                <path d="M7 15H9" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                </svg>
                                              </span>
                                          </span>
                                          <span className="nav-link-text">Վճարման մեթոդները</span>
                                      </Link>
                                      <ul id="dash_chat" className={dropDownMenu1 ? 'nav flex-column collapse  nav-children' : 'nav flex-column collapse  nav-children show'}>
                                          <li className="nav-item">
                                              <ul className="nav flex-column">
                                                  <li className="nav-item">
                                                      <a className="nav-link" href="#"><span className="nav-link-text">Մենյու1</span></a>
                                                  </li>
                                                  <li className="nav-item">
                                                      <a className="nav-link" href="#"><span className="nav-link-text">Մենյու2</span></a>
                                                  </li>
                                                  <li className="nav-item">
                                                      <a className="nav-link" href="#"><span className="nav-link-text">Մենյու2</span></a>
                                                  </li>
                                              </ul>	
                                          </li>	
                                      </ul>	
                                  </li>	
                                  <li className="nav-item">
                                      <Link className="nav-link" to="email.html">
                                          <span className="nav-icon-wrap">
                                              <span className="svg-icon">
                                              <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 64 64">
                                                <g>
                                                    <path fill="#231F20" d="M62.828,37.172L48.347,22.69l0.012,0.011C48.764,21.201,49,19.629,49,18c0-9.94-8.059-18-18-18
                                                        c-1.663,0-3.266,0.244-4.793,0.666C25.557,0.236,24.791,0,24,0H4C1.791,0,0,1.791,0,4v20c0,1.061,0.422,2.078,1.172,2.828l36,36
                                                        C37.952,63.609,38.977,64,40,64s2.048-0.391,2.828-1.172l20-20C64.391,41.267,64.391,38.733,62.828,37.172z M31,2.001
                                                        c8.837,0,16,7.163,16,16c0,1.003-0.117,2.088-0.295,3.048l-1.77-1.77l-0.024-0.025C44.949,18.855,45,18.383,45,18.001
                                                        c0-7.731-6.268-14-14-14c-0.432,0-0.856,0.026-1.278,0.064c-0.82,0.074-1.616,0.228-2.391,0.438
                                                        c-3.525,0.955-6.49,3.249-8.327,6.308c-0.345,0.573-0.66,1.165-0.921,1.788C17.387,14.262,17,16.086,17,18.001
                                                        c0,0.617,0.131,1.817,0.131,1.817S16.396,20,16,20c-0.303,0-0.595-0.04-0.878-0.104c-0.033-0.008-0.038-0.008,0,0
                                                        C15.049,19.273,15,18.644,15,18.001c0-2.118,0.421-4.134,1.168-5.983c0.268-0.662,0.577-1.299,0.927-1.913
                                                        c1.899-3.337,4.963-5.915,8.64-7.198c0.72-0.252,1.458-0.461,2.221-0.607C28.941,2.108,29.958,2.001,31,2.001z M42.965,17.309
                                                        L31.692,6.036C37.765,6.383,42.617,11.235,42.965,17.309z M20,16c0,0.991-0.371,1.885-0.971,2.579
                                                        C19.021,18.387,19,18.197,19,18.001c0-1.301,0.213-2.55,0.596-3.724C19.848,14.801,20,15.381,20,16z M13,18
                                                        c0,0.211,0.022,0.418,0.031,0.627C12.402,17.924,12,17.018,12,16c0-1.397,0.72-2.625,1.806-3.34C13.282,14.348,13,16.141,13,18z
                                                        M61.414,41.414l-20.001,20C41.036,61.792,40.534,62,40,62s-1.036-0.208-1.414-0.586l-36-36C2.214,25.041,2,24.525,2,24V4
                                                        c0-1.104,0.897-2,2-2h18.778c-3.446,1.775-6.235,4.627-7.94,8.115C12.081,10.656,10,13.084,10,16c0,3.313,2.687,6,6,6s6-2.687,6-6
                                                        c0-1.488-0.545-2.848-1.443-3.896c1.748-3.088,4.822-5.316,8.451-5.924l32.406,32.406C61.792,38.964,62,39.466,62,40
                                                        S61.792,41.036,61.414,41.414z"/>
                                                    <path fill="#231F20" d="M50.122,37.88c-1.17-1.17-3.073-1.171-4.243-0.001l-7.984,7.984c-1.169,1.169-1.212,3.116-0.042,4.286
                                                        c1.168,1.17,3.108,1.134,4.278-0.036l7.992-7.99h-0.002C51.291,40.953,51.291,39.049,50.122,37.88z M48.707,40.709l-7.96,7.96
                                                        c-0.391,0.391-1.092,0.457-1.48,0.066c-0.391-0.391-0.34-1.074,0.051-1.465l7.976-7.976c0.391-0.391,1.023-0.391,1.414,0
                                                        C49.098,39.684,49.098,40.318,48.707,40.709z"/>
                                                    <path fill="#231F20" d="M42.122,34.124c1.17-1.17,1.17-3.074,0.001-4.243c-1.17-1.17-3.073-1.171-4.243-0.001l-7.984,7.984
                                                        c-1.169,1.169-1.212,3.116-0.042,4.286c1.168,1.17,3.108,1.134,4.278-0.036l7.992-7.99H42.122z M40.708,32.71l-7.96,7.96
                                                        c-0.391,0.391-1.092,0.457-1.48,0.066c-0.391-0.391-0.34-1.074,0.051-1.465l7.976-7.976c0.391-0.391,1.023-0.391,1.414,0
                                                        C41.099,31.685,41.099,32.319,40.708,32.71z"/>
                                                    <path fill="#231F20" d="M34.118,26.12c1.17-1.17,1.17-3.074,0.001-4.243c-1.17-1.17-3.073-1.171-4.243-0.001l-7.984,7.984
                                                        c-1.169,1.169-1.212,3.116-0.042,4.286c1.168,1.17,3.108,1.134,4.278-0.036l7.992-7.99H34.118z M32.704,24.706l-7.96,7.96
                                                        c-0.391,0.391-1.092,0.457-1.48,0.066c-0.391-0.391-0.34-1.074,0.051-1.465l7.976-7.976c0.391-0.391,1.023-0.391,1.414,0
                                                        C33.095,23.681,33.095,24.315,32.704,24.706z"/>
                                                </g>
                                                </svg>
                                              </span>
                                          </span>
                                          <span className="nav-link-text">Գնացուցակ</span>
                                      </Link>
                                  </li>





                                  <li className="nav-item">
                                      <Link className="nav-link" to="/users">
                                          <span className="nav-icon-wrap position-relative">
                                              <span className="svg-icon">
                                              <span className="badge badge-sm badge-primary badge-sm badge-pill position-top-end-overflow">3</span>
                                              <svg width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <title/>
                                                    <g id="Complete">
                                                    <g id="user">
                                                    <g>
                                                    <path d="M20,21V19a4,4,0,0,0-4-4H8a4,4,0,0,0-4,4v2" fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                                                    <circle cx="12" cy="7" fill="none" r="4" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                                                    </g>
                                                    </g>
                                                    </g>
                                                    </svg>
                                              </span>
                                          </span>
                                          <span className="nav-link-text">Աշխատակիցներ</span>
                                      </Link>
                                  </li>





                                  
                                  <li className="nav-item">
                                      <Link className="nav-link" to="#" data-bs-toggle="collapse" data-bs-target="#dash_contact">
                                          <span className="nav-icon-wrap">
                                              <span className="svg-icon">
                                              <svg fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1"  viewBox="0 0 480 480" >
                                            <g>
                                                <g>
                                                    <g>
                                                        <path d="M131.34,298.066c0-34.351-27.974-62.297-62.358-62.297c-34.368,0-62.329,27.946-62.329,62.297
                                                            c0,22.89,12.405,42.924,30.835,53.767c-19.855,11.578-31.634,35.215-31.634,66.538V470c0,5.523,4.477,10,10,10h105.039
                                                            c5.523,0,10-4.477,10-10v-51.629c0-31.001-11.534-54.478-31.02-66.183C118.651,341.434,131.34,321.21,131.34,298.066z
                                                            M110.893,419.978V460H25.854v-40.022H110.893z M108.954,399.978H27.793c3.574-16.441,13.514-36.055,40.58-36.055
                                                            C95.439,363.923,105.379,383.537,108.954,399.978z M68.982,340.41c-23.34,0-42.329-18.995-42.329-42.344
                                                            c0-23.323,18.989-42.297,42.329-42.297c23.356,0,42.358,18.974,42.358,42.297C111.34,321.415,92.338,340.41,68.982,340.41z"/>
                                                        <path d="M444.904,354.608c17.548-11.043,29.242-30.572,29.242-52.791c0-34.35-27.971-62.296-62.352-62.296
                                                            c-34.377,0-62.344,27.946-62.344,62.296c0,21.325,10.768,40.175,27.145,51.421c-18.478,12.022-29.365,35.023-29.365,65.132V470
                                                            c0,5.523,4.478,10,10,10h105.039c5.522,0,10-4.477,10-10v-51.629C472.269,389.366,462.163,366.961,444.904,354.608z
                                                            M369.451,301.817c0-23.322,18.995-42.296,42.344-42.296c23.353,0,42.352,18.974,42.352,42.296
                                                            c0,22.515-17.668,40.974-39.867,42.265c-1.49-0.095-2.994-0.16-4.529-0.16c-0.647,0-1.281,0.03-1.922,0.046
                                                            C386.334,341.962,369.451,323.828,369.451,301.817z M407.328,363.984c1.476,0.105,2.963,0.177,4.467,0.177
                                                            c0.758,0,1.508-0.03,2.259-0.057c23.83,1.973,32.899,20.337,36.277,35.874h-81.162
                                                            C372.635,384.039,382.089,365.123,407.328,363.984z M452.269,460H367.23v-40.022h85.039V460z"/>
                                                        <path d="M317.528,338.121l-61.089-25.127v-59.443c0-2.316-0.795-4.441-2.116-6.137h46.638c5.522,0,10-4.477,10-10V178.85
                                                            c0-29.68-10.57-52.466-28.572-64.623c16.775-11.185,27.853-30.272,27.853-51.904C310.242,27.958,282.274,0,247.898,0
                                                            c-34.373,0-62.336,27.958-62.336,62.322c0,21.875,11.332,41.142,28.423,52.272c-17.688,12.243-28.064,34.864-28.064,64.255
                                                            v58.564c0,5.523,4.477,10,10,10h42.634c-1.321,1.695-2.116,3.821-2.116,6.137v59.227l-57.708,22.412
                                                            c-5.148,2-7.701,7.794-5.702,12.942c1.538,3.958,5.318,6.383,9.324,6.383c1.204,0,2.428-0.219,3.618-0.681l60.272-23.408
                                                            l63.677,26.191c1.244,0.512,2.532,0.754,3.8,0.754c3.934,0,7.663-2.336,9.252-6.198
                                                            C325.073,346.065,322.636,340.222,317.528,338.121z M205.562,62.322c0-23.336,18.992-42.322,42.336-42.322
                                                            c23.349,0,42.344,18.986,42.344,42.322c0,22.062-16.96,40.228-38.524,42.166c-1.079-0.049-2.168-0.079-3.271-0.079
                                                            c-1.321,0-2.622,0.044-3.911,0.114C222.76,102.802,205.562,84.54,205.562,62.322z M244.417,124.567
                                                            c1.153,0.063,2.313,0.102,3.481,0.102c1.358,0,2.702-0.059,4.039-0.145c20.33,1.344,30.136,14.448,34.824,27.862h-76.64
                                                            C214.769,139.092,224.448,126.106,244.417,124.567z M205.92,227.414V178.85h0.001c0-1.698,0.056-3.91,0.242-6.464h84.555
                                                            c0.187,2.554,0.242,4.766,0.242,6.464v48.564H205.92z"/>
                                                    </g>
                                                </g>
                                            </g>
                                            </svg>
                                              </span>
                                          </span>
                                          <span className="nav-link-text">Ստորաբաժանումներ</span>
                                      </Link>
                                      <ul id="dash_contact" className="nav flex-column collapse  nav-children">
                                          <li className="nav-item">
                                              <ul className="nav flex-column">
                                                  <li className="nav-item">
                                                      <a className="nav-link" href="contact.html"><span className="nav-link-text">Contact List</span></a>
                                                  </li>
                                                  <li className="nav-item">
                                                      <a className="nav-link" href="contact-cards.html"><span className="nav-link-text">Contact Cards</span></a>
                                                  </li>
                                                  <li className="nav-item">
                                                      <a className="nav-link" href="edit-contact.html"><span className="nav-link-text">Edit Contact</span></a>
                                                  </li>
                                              </ul>	
                                          </li>	
                                      </ul>	
                                  </li>
                                  <li className="nav-item">
                                      <Link className="nav-link" to="#" data-bs-toggle="collapse" data-bs-target="#dash_file">
                                          <span className="nav-icon-wrap">
                                          <svg fill="#000000" width="23" height="23" viewBox="0 0 512 512" id="Layer_1" version="1.1">
                                                <g>
                                                <g>
                                                <path d="M398.4,468.9H113.6c-15.4,0-29.7-7.6-38.3-20.4s-10.3-28.9-4.5-43.2l100.8-248.7c3.7-9.2,5.6-19,5.6-29V97.8h-11.1    c-15.1,0-27.3-12.3-27.3-27.3c0-15.1,12.3-27.3,27.3-27.3h179.8c15.1,0,27.3,12.3,27.3,27.3c0,15.1-12.3,27.3-27.3,27.3h-11.1    v29.8c0,10,1.9,19.7,5.6,29l100.8,248.8c5.8,14.3,4.1,30.4-4.5,43.2C428.2,461.3,413.8,468.9,398.4,468.9z M166.1,58.1    c-6.8,0-12.3,5.5-12.3,12.3s5.5,12.3,12.3,12.3h18.6c4.1,0,7.5,3.4,7.5,7.5v37.4c0,11.9-2.3,23.6-6.7,34.6L84.6,411    c-4,9.8-2.9,20.4,3,29.2s15.3,13.8,25.9,13.8h284.9c10.6,0,20-5,25.9-13.8s7-19.4,3-29.2L326.5,162.2c-4.5-11-6.7-22.7-6.7-34.6    V90.3c0-4.1,3.4-7.5,7.5-7.5h18.6c6.8,0,12.3-5.5,12.3-12.3s-5.5-12.3-12.3-12.3L166.1,58.1L166.1,58.1z"/>
                                                </g>
                                                <g>
                                                <path d="M377.1,281.6h-49.4c-4.1,0-7.5-3.4-7.5-7.5s3.4-7.5,7.5-7.5h49.4c4.1,0,7.5,3.4,7.5,7.5S381.2,281.6,377.1,281.6z"/>
                                                </g>
                                                <g>
                                                <path d="M287,281.6H132c-4.1,0-7.5-3.4-7.5-7.5s3.4-7.5,7.5-7.5h155c4.1,0,7.5,3.4,7.5,7.5S291.1,281.6,287,281.6z"/>
                                                </g>
                                                </g>
                                                </svg>
                                          </span>
                                          <span className="nav-link-text">Ախտորոշումներ</span>
                                      </Link>
                                      <ul id="dash_file" className="nav flex-column collapse  nav-children">
                                          <li className="nav-item">
                                              <ul className="nav flex-column">
                                                  <li className="nav-item">
                                                      <a className="nav-link" href="file-manager-list.html"><span className="nav-link-text">List View</span></a>
                                                  </li>
                                                  <li className="nav-item">
                                                      <a className="nav-link" href="file-manager-grid.html"><span className="nav-link-text">Grid View</span></a>
                                                  </li>
                                              </ul>	
                                          </li>	
                                      </ul>	
                                  </li>
                                  <li className="nav-item">
                                      <Link className="nav-link" to="gallery.html">
                                          <span className="nav-icon-wrap">
                                              <span className="svg-icon">
                                              <svg version="1.1" id="Uploaded to svgrepo.com" 
                                                    width="800px" height="800px" viewBox="0 0 32 32">
                                                
                                                <path className="linesandangles_een" d="M30,13V7H2v6c1.657,0,3,1.343,3,3s-1.343,3-3,3v6h28v-6c-1.657,0-3-1.343-3-3S28.343,13,30,13z
                                                    M28,20.582V23h-7v-2h-2v2H4v-2.418C5.764,19.81,7,18.046,7,16s-1.236-3.81-3-4.583V9h15v2h2V9h7v2.417
                                                    c-1.764,0.773-3,2.536-3,4.583S26.236,19.81,28,20.582z M19,12h2v2h-2V12z M19,15h2v2h-2V15z M19,18h2v2h-2V18z"/>
                                                </svg>
                                              </span>
                                          </span>
                                          <span className="nav-link-text">Զեղչի քարտեր</span>
                                      </Link>
                                  </li>
                                  <li className="nav-item">
                                      <Link className="nav-link" to="#" data-bs-toggle="collapse" data-bs-target="#dash_integ">
                                          <span className="nav-icon-wrap">
                                              <span className="svg-icon">
                                                <svg width="800px" height="800px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path className="a" d="M12,2A10,10,0,1,0,22,12H12Z"/><path className="a" d="M15,9h6.54077A10.02174,10.02174,0,0,0,15,2.45923Z"/>
                                                </svg>
                                              </span>
                                          </span>
                                          <span className="nav-link-text">Հաշվետվություններ</span>
                                      </Link>
                                      <ul id="dash_integ" className="nav flex-column collapse  nav-children">
                                          <li className="nav-item">
                                              <ul className="nav flex-column">
                                                  <li className="nav-item">
                                                      <a className="nav-link" href="all-apps.html"><span className="nav-link-text">All Apps</span></a>
                                                  </li>
                                                  <li className="nav-item">
                                                      <a className="nav-link" href="integrations-detail.html"><span className="nav-link-text">App Detail</span></a>
                                                  </li>
                                                  <li className="nav-item">
                                                      <a className="nav-link" href="integrations.html"><span className="nav-link-text">Integrations</span></a>
                                                  </li>
                                              </ul>	
                                          </li>	
                                      </ul>	
                                  </li>
                              </ul>
                          </div>
                          {/*
                          <div className="menu-gap"></div>
                          <div className="menu-group">
                              <div className="nav-header">
                                  <span>Pages</span>
                              </div>
                              <ul className="navbar-nav flex-column">
                                  <li className="nav-item">
                                      <a className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target="#dash_pages">
                                          <span className="nav-icon-wrap">
                                              <span className="svg-icon">
                                                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-plus" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                      <circle cx="9" cy="7" r="4" />
                                                      <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                                                      <path d="M16 11h6m-3 -3v6" />
                                                  </svg>
                                              </span>
                                          </span>
                                          <span className="nav-link-text">Authentication</span>
                                      </a>
                                      <ul id="dash_pages" className="nav flex-column collapse  nav-children">
                                          <li className="nav-item">
                                              <ul className="nav flex-column">
                                                  <li className="nav-item">
                                                      <a className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target="#dash_log">
                                                          <span className="nav-link-text">Log In</span> 
                                                      </a>
                                                      <ul id="dash_log" className="nav flex-column collapse  nav-children">
                                                          <li className="nav-item">
                                                              <ul className="nav flex-column">
                                                                  <li className="nav-item">
                                                                      <a className="nav-link" href="login.html"><span className="nav-link-text">Login</span></a>
                                                                  </li>
                                                                  <li className="nav-item">
                                                                      <a className="nav-link" href="login-simple.html"><span className="nav-link-text">Login Simple</span></a>
                                                                  </li>
                                                                  <li className="nav-item">
                                                                      <a className="nav-link" href="login-classNameic.html"><span className="nav-link-text">Login Classic</span></a>
                                                                  </li>
                                                              </ul>	
                                                          </li>	
                                                      </ul>	
                                                  </li>
                                                  <li className="nav-item">
                                                      <a className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target="#dash_sign">
                                                          <span className="nav-link-text">Sign Up</span>
                                                      </a>
                                                      <ul id="dash_sign" className="nav flex-column collapse  nav-children">
                                                          <li className="nav-item">
                                                              <ul className="nav flex-column">
                                                                  <li className="nav-item">
                                                                      <a className="nav-link" href="signup.html"><span className="nav-link-text">Signup</span></a>
                                                                  </li>
                                                                  <li className="nav-item">
                                                                      <a className="nav-link" href="signup-simple.html"><span className="nav-link-text">Signup Simple</span></a>
                                                                  </li>
                                                                  <li className="nav-item">
                                                                      <a className="nav-link" href="signup-classNameic.html"><span className="nav-link-text">Signup Classic</span></a>
                                                                  </li>
                                                              </ul>		
                                                          </li>	
                                                      </ul>	
                                                  </li>
                                                  <li className="nav-item">
                                                      <a className="nav-link" href="lock-screen.html"><span className="nav-link-text">Lock Screen</span></a>
                                                  </li>
                                                  
                                                  <li className="nav-item">
                                                      <a className="nav-link" href="reset-password.html"><span className="nav-link-text">Reset Password</span></a>
                                                  </li>
                                                  <li className="nav-item">
                                                      <a className="nav-link" href="404.html"><span className="nav-link-text">Error 404</span></a>
                                                  </li>
                                                  <li className="nav-item">
                                                      <a className="nav-link" href="503.html"><span className="nav-link-text">Error 503</span></a>
                                                  </li>
                                              </ul>
                                          </li>
                                      </ul>
                                  </li>
                                  <li className="nav-item">
                                      <a className="nav-link" href="#" data-bs-toggle="collapse" data-bs-target="#dash_profile">
                                          <span className="nav-icon-wrap">
                                              <span className="svg-icon">
                                                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-search" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                      <circle cx="12" cy="7" r="4" />
                                                      <path d="M6 21v-2a4 4 0 0 1 4 -4h1" />
                                                      <circle cx="16.5" cy="17.5" r="2.5" />
                                                      <path d="M18.5 19.5l2.5 2.5" />
                                                  </svg>
                                              </span>
                                          </span>
                                          <span className="nav-link-text position-relative">Profile
                                              <span className="badge badge-danger badge-indicator position-absolute top-0 start-100"></span>
                                          </span>
                                      </a>
                                      <ul id="dash_profile" className="nav flex-column collapse  nav-children">
                                          <li className="nav-item">
                                              <ul className="nav flex-column">
                                                  <li className="nav-item">
                                                      <a className="nav-link" href="profile.html">
                                                          <span className="nav-link-text">Profile</span>
                                                      </a>
                                                  </li>
                                                  <li className="nav-item">
                                                      <a className="nav-link" href="edit-profile.html">
                                                          <span className="nav-link-text">Edit Profile</span>
                                                      </a>
                                                  </li>
                                                  <li className="nav-item">
                                                      <a className="nav-link" href="account.html">
                                                          <span className="nav-link-text">Account</span>
                                                      </a>
                                                  </li>
                                              </ul>
                                          </li>
                                      </ul>
                                  </li>
                              </ul>
                          </div>
                          
                          <div className="menu-gap"></div>
                          <div className="menu-group">
                              <div className="nav-header">
                                  <span>Documentation</span>
                              </div>
                              <ul className="navbar-nav flex-column">
                                  <li className="nav-item">
                                      <a className="nav-link" href="https://nubra-ui.hencework.com/" target="_blank">
                                          <span className="nav-icon-wrap">
                                              <span className="svg-icon">
                                                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-code-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                      <path d="M10 12h-1v5h1" />
                                                      <path d="M14 12h1v5h-1" />
                                                      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                                      <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                                                  </svg>
                                              </span>
                                          </span>
                                          <span className="nav-link-text">Documentation</span>
                                      </a>
                                  </li>
                                  <li className="nav-item">
                                      <a className="nav-link" href="https://nubra-ui.hencework.com/avatar.html" target="_blank">
                                          <span className="nav-icon-wrap">
                                              <span className="svg-icon">
                                                  <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                      <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                                      <rect x="4" y="4" width="6" height="5" rx="2" />
                                                      <rect x="4" y="13" width="6" height="7" rx="2" />
                                                      <rect x="14" y="4" width="6" height="16" rx="2" />
                                                  </svg>
                                              </span>
                                          </span>
                                          <span className="nav-link-text">Components</span>
                                      </a>
                                  </li>
                              </ul>
                          </div>
                          */}
                      </div>
                  </div>
                  {/* /Main Menu */}
              </div>
              <div id="hk_menu_backdrop" className="hk-menu-backdrop"></div>
              {/* /Vertical Nav */}
  
              {/* Chat Popup */}
              <div className="hk-chatbot-popup">
                  <header>
                      <div className="chatbot-head-top">
                          <a className="btn btn-sm btn-icon btn-dark btn-rounded" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              <span className="icon"><span className="feather-icon"><i data-feather="more-horizontal"></i></span></span>
                          </a>
                          <div className="dropdown-menu">
                              <a className="dropdown-item" href="#"><i className="dropdown-icon zmdi zmdi-notifications-active"></i><span>Send push notifications</span></a>
                              <a className="dropdown-item" href="#"><i className="dropdown-icon zmdi zmdi-volume-off"></i><span>Mute Chat</span></a>
                          </div>
                          <span className="text-white">Chat with Us</span>
                          <a id="minimize_chatbot" href="#" className="btn btn-sm btn-icon btn-dark btn-rounded">
                              <span className="icon"><span className="feather-icon"><i data-feather="minus"></i></span></span>
                          </a>
                      </div>
                      <div className="separator-full separator-light mt-0 opacity-10"></div>
                      <div className="media-wrap">
                          <div className="media">
                              <div className="media-head">
                                  <div className="avatar avatar-sm avatar-soft-primary avatar-icon avatar-rounded position-relative">
                                      <span className="initial-wrap">
                                          <i className="ri-customer-service-2-line"></i>
                                      </span>
                                      <span className="badge badge-success badge-indicator badge-indicator-lg badge-indicator-nobdr position-bottom-end-overflow-1"></span>
                                  </div>
                              </div>
                              <div className="media-body">
                                  <div className="user-name">Chat Robot</div>
                                  <div className="user-status">Online</div>
                              </div>
                          </div>
                      </div>
                  </header>
                  <div className="chatbot-popup-body">
                      <div data-simplebar className="nicescroll-bar">
                          <div>
                              <div className="init-content-wrap">
                                  <div className="card card-shadow">
                                      <div className="card-body">
                                          <p className="card-text">Hey I am chat robot 😈<br/>Do yo have any question regarding our tools?<br/><br/>Select the topic or start chatting.</p>
                                          <button className="btn btn-block btn-primary text-nonecase start-conversation">Start a conversation</button>
                                      </div>
                                  </div>
                                  <div className="btn-wrap">
                                      <button className="btn btn-soft-primary text-nonecase btn-rounded start-conversation"><span><span className="icon"><span className="feather-icon"><i data-feather="eye"></i></span></span><span className="btn-text">Just browsing</span></span></button>
                                      <button className="btn btn-soft-danger text-nonecase btn-rounded start-conversation"><span><span className="icon"><span className="feather-icon"><i data-feather="credit-card"></i></span></span><span className="btn-text">I have a question regarding pricing</span></span></button>
                                      <button className="btn btn-soft-warning text-nonecase btn-rounded start-conversation"><span><span className="icon"><span className="feather-icon"><i data-feather="cpu"></i></span></span><span className="btn-text">Need help for technical query</span></span></button>
                                      <button className="btn btn-soft-success text-nonecase btn-rounded start-conversation"><span><span className="icon"><span className="feather-icon"><i data-feather="zap"></i></span></span><span className="btn-text">I have a pre purchase question</span></span></button>
                                  </div>
                              </div>
                              <ul className="list-unstyled d-none">
                                  <li className="media sent">
                                      <div className="media-body">
                                          <div className="msg-box">
                                              <div>
                                                  <p>I have a plan regarding pricing</p>
                                              </div>
                                          </div>
                                      </div>
                                  </li>
                                  <li className="media received">
                                      <div className="avatar avatar-xs avatar-soft-primary avatar-icon avatar-rounded">
                                          <span className="initial-wrap">
                                              <i className="ri-customer-service-2-line"></i>
                                          </span>
                                      </div>
                                      <div className="media-body">
                                          <div className="msg-box">
                                              <div>
                                                  <p>Welcome back!<br/>Are you looking to upgrade your existing plan?</p>
                                              </div>
                                          </div>
                                          <div className="msg-box typing-wrap">
                                              <div>
                                                  <div className="typing">
                                                    <div className="dot"></div>
                                                    <div className="dot"></div>
                                                    <div className="dot"></div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <footer>
                      <div className="chatbot-intro-text fs-7">
                          <div className="separator-full separator-light"></div>
                          <p className="mb-2">This is jampack's beta version please sign up now to get early access to our full version</p>
                          <a className="d-block mb-2" href="#"><u>Give Feedback</u></a>		
                      </div>
                        <div className="input-group d-none">
                            <div className="input-group-text overflow-show border-0">
                                <button className="btn btn-icon btn-flush-dark flush-soft-hover btn-rounded dropdown-toggle no-caret" data-bs-toggle="dropdown"  aria-haspopup="true" aria-expanded="false">
                                    <span className="icon"><span className="feather-icon"><i data-feather="share"></i></span></span>
                                </button>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">
                                        <div className="d-flex align-items-center">
                                            <div className="avatar avatar-icon avatar-xs avatar-soft-primary avatar-rounded me-3">
                                                <span className="initial-wrap">
                                                    <i className="ri-image-line"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <span className="h6 mb-0">Photo or Video Library</span>
                                            </div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <div className="d-flex align-items-center">
                                            <div className="avatar avatar-icon avatar-xs avatar-soft-info avatar-rounded me-3">
                                                <span className="initial-wrap">
                                                    <i className="ri-file-4-line"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <span className="h6 mb-0">Documents</span>
                                            </div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        <div className="d-flex align-items-center">
                                            <div className="avatar avatar-icon avatar-xs avatar-soft-success avatar-rounded me-3">
                                                <span className="initial-wrap">
                                                    <i className="ri-map-pin-line"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <span className="h6 mb-0">Location</span>
                                            </div>
                                        </div>
                                    </a>
                                    <a className="dropdown-item" href="/contact">
                                        <div className="d-flex align-items-center">
                                            <div className="avatar avatar-icon avatar-xs avatar-soft-blue avatar-rounded me-3">
                                                <span className="initial-wrap">
                                                    <i className="ri-contacts-line"></i>
                                                </span>
                                            </div>
                                            <div>
                                                <span className="h6 mb-0">Contact</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <input type="text" id="input_msg_chat_popup" name="send-msg" className="input-msg-send form-control border-0 shadow-none" placeholder="Type something..."/>
                            <div className="input-group-text overflow-show border-0">
                                <button className="btn btn-icon btn-flush-dark flush-soft-hover btn-rounded">
                                    <span className="icon"><span className="feather-icon"><i data-feather="smile"></i></span></span>
                                </button>
                            </div>
                        </div>
                        <div className="footer-copy-text">Powered by 
                            <a className="brand-link" href="#">
                                <img src="/dist/img/logo-light.png" alt="logo-brand"/>
                            </a>
                        </div>
                    </footer>
                </div>
                {/*
                <a href="#" className="btn btn-icon btn-floating btn-primary btn-lg btn-rounded btn-popup-open">
                    <span className="icon">
                        <span className="feather-icon"><i data-feather="message-circle"></i></span>
                    </span>
                </a>
                */}
                <div className="chat-popover shadow-xl"><p>Try Jampack Chat for free and connect with your customers now!</p></div>
                {/* /Chat Popup */}
                
                {/* Main Content */}
                <div className="hk-pg-wrapper">
                    {/*<div className="container-xxl">*/}
						<Suspense fallback = {<LoadingSpinner/>}>
							<Outlet/>
						</Suspense>
                    </div>
                    {/* Page Footer */}
                    <div className="hk-footer">
                        <footer className="container-xxl footer">
                            <div className="row">
                                <div className="col-xl-8 text-center">
                                    <p className="footer-text pb-0">
                                        <span className="copy-text">Vteam LIMS © {new Date().getFullYear()}</span> 
                                        <span className="footer-link-sep">|</span>
                                        <a href="/privacy-policy" className="" target="_blank">Գաղտնիության քաղաքականություն</a>
                                        {/*
                                        <span className="footer-link-sep">|</span><a href="#" className="" target="_blank">T&C</a>
                                        <span className="footer-link-sep">|</span><a href="#" className="" target="_blank">System Status</a>
                                        */}
                                    </p>
                                </div>
                            </div>
                        </footer>
                    </div>
                    {/* Page Footer */}  
                {/*</div>*/}
                {/* /Main Content */}
            </div>
            {/* /Wrapper */}  
        </section>
    )
}

export default MainTemplate