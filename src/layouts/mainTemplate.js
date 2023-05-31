

const mainTemplate = () => {
    return (
		<article>
		
		{/*<!-- Wrapper -->*/}

		<div className="hk-wrapper" data-layout="vertical" data-layout-style="default" data-menu="light" data-footer="simple"/>
			{/*<!-- Top Navbar -->*/}
			<nav className="hk-navbar navbar navbar-expand-xl navbar-light fixed-top">
				<div className="container-fluid">
				{/*<!-- Start Nav -->*/}
				<div className="nav-start-wrap">
					<button className="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover navbar-toggle d-xl-none"><span className="icon"><span className="feather-icon"><i data-feather="align-left"></i></span></span></button>
						
					{/*<!-- Search -->*/}
					<form className="dropdown navbar-search">
						<div className="dropdown-toggle no-caret" data-bs-toggle="dropdown" data-dropdown-animation data-bs-auto-close="outside">
							<a href="#" className="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover  d-xl-none"><span className="icon"><span className="feather-icon"><i data-feather="search"></i></span></span></a>
							<div className="input-group d-xl-flex d-none">
								<span className="input-affix-wrapper input-search affix-border">
									<input type="text" className="form-control  bg-transparent"  data-navbar-search-close="false" placeholder="Search..." aria-label="Search"/>
									<span className="input-suffix"><span>/</span>
										<span className="btn-input-clear"><i className="bi bi-x-circle-fill"></i></span>
										<span className="spinner-border spinner-border-sm input-loader text-primary" role="status">
											<span className="sr-only">Loading...</span>
										</span>
									</span>
								</span>
							</div>
						</div>
						<div  className="dropdown-menu p-0">
							{/*<!-- Mobile Search -->*/}
							<div className="dropdown-item d-xl-none bg-transparent">
								<div className="input-group mobile-search">
									<span className="input-affix-wrapper input-search">
										<input type="text" className="form-control" placeholder="Search..." aria-label="Search"/>
										<span className="input-suffix">
											<span className="btn-input-clear"><i className="bi bi-x-circle-fill"></i></span>
											<span className="spinner-border spinner-border-sm input-loader text-primary" role="status">
												<span className="sr-only">Loading...</span>
											</span>
										</span>
									</span>
								</div>
							</div>
							{/*<!--/ Mobile Search -->*/}
							<div data-simplebar className="dropdown-body p-2">
								<h6 className="dropdown-header">Recent Search
								</h6>
								<div className="dropdown-item bg-transparent">
									<a href="#" className="badge badge-pill badge-soft-secondary">Grunt</a>
									<a href="#" className="badge badge-pill badge-soft-secondary">Node JS</a>
									<a href="#" className="badge badge-pill badge-soft-secondary">SCSS</a>
								</div>
								<div className="dropdown-divider"></div>
								<h6 className="dropdown-header">Help
								</h6>
								<a href="javascript:void(0);" className="dropdown-item">
									<div className="media align-items-center">
										<div className="media-head me-2">
											<div className="avatar avatar-icon avatar-xs avatar-soft-light avatar-rounded">
												<span className="initial-wrap">
													<span className="svg-icon">
														<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-corner-down-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
								<a href="javascript:void(0);" className="dropdown-item">
									<div className="media align-items-center">
										<div className="media-head me-2">
											<div className="avatar avatar-icon avatar-xs avatar-soft-light avatar-rounded">
												<span className="initial-wrap">
													<span className="svg-icon">
														<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-corner-down-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
								<h6 className="dropdown-header">Users
								</h6>
								<a href="javascript:void(0);" className="dropdown-item">
									<div className="media align-items-center">
										<div className="media-head me-2">
											<div className="avatar avatar-xs avatar-rounded">
												<img src="dist/img/avatar3.jpg" alt="user" className="avatar-img"/>
											</div>
										</div>
										<div className="media-body">
											Sarah Jone
										</div>
									</div>
								</a>
								<a href="javascript:void(0);" className="dropdown-item">
									<div className="media align-items-center">
										<div className="media-head me-2">
											<div className="avatar avatar-xs avatar-soft-primary avatar-rounded">
												<span className="initial-wrap">J</span>
											</div>
										</div>
										<div className="media-body">
											Joe Jackson
										</div>
									</div>
								</a>
								<a href="javascript:void(0);" className="dropdown-item">
									<div className="media align-items-center">
										<div className="media-head me-2">
											<div className="avatar avatar-xs avatar-rounded">
												<img src="dist/img/avatar4.jpg" alt="user" className="avatar-img"/>
											</div>
										</div>
										<div className="media-body">
											Maria Richard
										</div>
									</div>
								</a>
							</div>
							<div className="dropdown-footer d-xl-flex d-none"><a href="#"><u>Search all</u></a></div>
						</div>
					</form>
					{/*<!-- /Search -->*/}
				</div>
				{/*<!-- /Start Nav -->*/}
				
				{/*<!-- End Nav -->*/}
				<div className="nav-end-wrap">
					<ul className="navbar-nav flex-row">
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
										<a href="javascript:void(0);" className="dropdown-item">
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
										<a href="javascript:void(0);" className="dropdown-item">
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
										<a href="javascript:void(0);" className="dropdown-item">
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
										<a href="javascript:void(0);" className="dropdown-item">
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
										<a href="javascript:void(0);" className="dropdown-item">
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
										<a href="javascript:void(0);" className="dropdown-item">
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
						<li className="nav-item">
							<div className="dropdown ps-2">
								<a className=" dropdown-toggle no-caret" href="#" role="button" data-bs-display="static" data-bs-toggle="dropdown" data-dropdown-animation data-bs-auto-close="outside" aria-expanded="false">
									<div className="avatar avatar-rounded avatar-xs">
										<img src="dist/img/avatar12.jpg" alt="user" className="avatar-img"/>
									</div>
								</a>
								<div className="dropdown-menu dropdown-menu-end">
									<div className="p-2">
										<div className="media">
											<div className="media-head me-2">
												<div className="avatar avatar-primary avatar-sm avatar-rounded">
													<span className="initial-wrap">Hk</span>
												</div>
											</div>
											<div className="media-body">
												<div className="dropdown">
													<a href="#" className="d-block dropdown-toggle link-dark fw-medium"  data-bs-toggle="dropdown" data-dropdown-animation data-bs-auto-close="inside">Hencework</a>
													<div className="dropdown-menu dropdown-menu-end">
														<div className="p-2">
															<div className="media align-items-center active-user mb-3">
																<div className="media-head me-2">
																	<div className="avatar avatar-primary avatar-xs avatar-rounded">
																		<span className="initial-wrap">Hk</span>
																	</div>
																</div>
																<div className="media-body">
																	<a href="#" className="d-flex align-items-center link-dark">Hencework <i className="ri-checkbox-circle-fill fs-7 text-primary ms-1"></i></a>
																	<a href="#" className="d-block fs-8 link-secondary"><u>Manage your account</u></a>
																</div>
															</div>
															<div className="media align-items-center mb-3">
																<div className="media-head me-2">
																	<div className="avatar avatar-xs avatar-rounded">
																		<img src="dist/img/avatar12.jpg" alt="user" className="avatar-img"/>
																	</div>
																</div>
																<div className="media-body">
																	<a href="#" className="d-block link-dark">Jampack Team</a>
																	<a href="#" className="d-block fs-8 link-secondary">contact@hencework.com</a>
																</div>
															</div>
															<button className="btn btn-block btn-outline-light btn-sm">
																<span><span className="icon"><span className="feather-icon"><i data-feather="plus"></i></span></span>
																<span>Add Account</span></span>
															</button>
														</div>
													</div>
												</div>
												<div className="fs-7">contact@hencework.com</div>
												<a href="#" className="d-block fs-8 link-secondary"><u>Sign Out</u></a>
											</div>
										</div>
									</div>
									<div className="dropdown-divider"></div>
									<a className="dropdown-item" href="profile.html">Profile</a>
									<a className="dropdown-item" href="#"><span className="me-2">Offers</span><span className="badge badge-sm badge-soft-pink">2</span></a><div className="dropdown-divider"></div>
									<h6 className="dropdown-header">Manage Account</h6>
									<a className="dropdown-item" href="#"><span className="dropdown-icon feather-icon"><i data-feather="credit-card"></i></span><span>Payment methods</span></a>
									<a className="dropdown-item" href="#"><span className="dropdown-icon feather-icon"><i data-feather="check-square"></i></span><span>Subscriptions</span></a>
									<a className="dropdown-item" href="#"><span className="dropdown-icon feather-icon"><i data-feather="settings"></i></span><span>Settings</span></a>
									<div className="dropdown-divider"></div>
									<a className="dropdown-item" href="#"><span className="dropdown-icon feather-icon"><i data-feather="tag"></i></span><span>Raise a ticket</span></a>
									<div className="dropdown-divider"></div>
									<a className="dropdown-item" href="#">Terms & Conditions</a>
									<a className="dropdown-item" href="#">Help & Support</a>
								</div>
							</div>
						</li>
					</ul>
				</div>
				{/*<!-- /End Nav -->*/}
				</div>									
			</nav>
			{/*<!-- /Top Navbar -->*/}

			{/*<!-- Vertical Nav -->*/}
			<div className="hk-menu">
				{/*<!-- Brand -->*/}
				<div className="menu-header">
					<span>
						<a className="navbar-brand" href="index.html">
							<img className="brand-img img-fluid" src="dist/img/brand-sm.svg" alt="brand" />
							<img className="brand-img img-fluid" src="dist/img/Jampack.svg" alt="brand" />
						</a>
						<button className="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover navbar-toggle">
							<span className="icon">
								<span className="svg-icon fs-5">
									<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-bar-to-left" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
				{/*<!-- /Brand -->*/}

				{/*<!-- Main Menu -->*/}
				<div data-simplebar className="nicescroll-bar">
					<div className="menu-content-wrap">
						<div className="menu-group">
							<ul className="navbar-nav flex-column">
								<li className="nav-item active">
									<a className="nav-link" href="index.html">
										<span className="nav-icon-wrap">
											<span className="svg-icon">
												<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-template" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
													<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
													<rect x="4" y="4" width="16" height="4" rx="1" />
													<rect x="4" y="12" width="6" height="8" rx="1" />
													<line x1="14" y1="12" x2="20" y2="12" />
													<line x1="14" y1="16" x2="20" y2="16" />
													<line x1="14" y1="20" x2="20" y2="20" />
												</svg>
											</span>
										</span>
										<span className="nav-link-text">Dashboard</span>
										<span className="badge badge-sm badge-soft-pink ms-auto">Hot</span>
									</a>
								</li>
							</ul>	
						</div>
						<div className="menu-gap"></div>
						<div className="menu-group">
							<div className="nav-header">
								<span>Apps</span>
							</div>
							<ul className="navbar-nav flex-column">
								<li className="nav-item">
									<a className="nav-link" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#dash_chat">
										<span className="nav-icon-wrap">
											<span className="svg-icon">
												<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-message-dots" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
													<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
													<path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
													<line x1="12" y1="11" x2="12" y2="11.01" />
													<line x1="8" y1="11" x2="8" y2="11.01" />
													<line x1="16" y1="11" x2="16" y2="11.01" />
												</svg>
											</span>
										</span>
										<span className="nav-link-text">Chat</span>
									</a>
									<ul id="dash_chat" className="nav flex-column collapse  nav-children">
										<li className="nav-item">
											<ul className="nav flex-column">
												<li className="nav-item">
													<a className="nav-link" href="chats.html"><span className="nav-link-text">Chats</span></a>
												</li>
												<li className="nav-item">
													<a className="nav-link" href="chats-group.html"><span className="nav-link-text">Groups</span></a>
												</li>
												<li className="nav-item">
													<a className="nav-link" href="chats-contact.html"><span className="nav-link-text">Contacts</span></a>
												</li>
											</ul>	
										</li>	
									</ul>	
								</li>	
								<li className="nav-item">
									<a className="nav-link" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#dash_chatpop">
										<span className="nav-icon-wrap">
											<span className="svg-icon">
												<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-message-circle-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
													<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
													<path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1" />
													<line x1="12" y1="12" x2="12" y2="12.01" />
													<line x1="8" y1="12" x2="8" y2="12.01" />
													<line x1="16" y1="12" x2="16" y2="12.01" />
												</svg>
											</span>
										</span>
										<span className="nav-link-text">Chat Popup</span>
										
									</a>
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
									<a className="nav-link" href="calendar.html">
										<span className="nav-icon-wrap">
											<span className="svg-icon">
												<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-time" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
													<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
													<path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
													<circle cx="18" cy="18" r="4" />
													<path d="M15 3v4" />
													<path d="M7 3v4" />
													<path d="M3 11h16" />
													<path d="M18 16.496v1.504l1 1" />
												</svg>
											</span>
										</span>
										<span className="nav-link-text">Calendar</span>
									</a>
								</li>	
								<li className="nav-item">
									<a className="nav-link" href="email.html">
										<span className="nav-icon-wrap">
											<span className="svg-icon">
												<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-inbox" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
													<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
													<rect x="4" y="4" width="16" height="16" rx="2" />
													<path d="M4 13h3l3 3h4l3 -3h3" />
												</svg>
											</span>
										</span>
										<span className="nav-link-text">Email</span>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#dash_scrumboard">
										<span className="nav-icon-wrap position-relative">
											<span className="badge badge-sm badge-primary badge-sm badge-pill position-top-end-overflow">3</span>
											<span className="svg-icon">
												<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-kanban" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
													<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
													<line x1="4" y1="4" x2="10" y2="4" />
													<line x1="14" y1="4" x2="20" y2="4" />
													<rect x="4" y="8" width="6" height="12" rx="2" />
													<rect x="14" y="8" width="6" height="6" rx="2" />
												</svg>
											</span>
										</span>
										<span className="nav-link-text">Scrumboard</span>
									</a>
									<ul id="dash_scrumboard" className="nav flex-column collapse  nav-children">
										<li className="nav-item">
											<ul className="nav flex-column">
												<li className="nav-item">
													<a className="nav-link" href="projects-board.html"><span className="nav-link-text">All Boards</span></a>
												</li>
												
												<li className="nav-item">
													<a className="nav-link" href="kanban-board.html"><span className="nav-link-text">Project Kanban</span></a>
												</li>
												<li className="nav-item">
													<a className="nav-link" href="pipeline.html"><span className="nav-link-text">Pipeline Kanban</span></a>
												</li>
											</ul>	
										</li>	
									</ul>	
								</li>
								<li className="nav-item">
									<a className="nav-link" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#dash_contact">
										<span className="nav-icon-wrap">
											<span className="svg-icon">
												<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-notebook" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
													<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
													<path d="M6 4h11a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-11a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1m3 0v18" />
													<line x1="13" y1="8" x2="15" y2="8" />
													<line x1="13" y1="12" x2="15" y2="12" />
												</svg>
											</span>
										</span>
										<span className="nav-link-text">Contact</span>
									</a>
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
									<a className="nav-link" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#dash_file">
										<span className="nav-icon-wrap">
											<span className="svg-icon">
												<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
													<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
													<path d="M14 3v4a1 1 0 0 0 1 1h4" />
													<path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
													<path d="M9 15l2 2l4 -4" />
												</svg>
											</span>
										</span>
										<span className="nav-link-text">File Manager</span>
									</a>
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
									<a className="nav-link" href="gallery.html">
										<span className="nav-icon-wrap">
											<span className="svg-icon">
												<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-photo" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
													<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
													<line x1="15" y1="8" x2="15.01" y2="8" />
													<rect x="4" y="4" width="16" height="16" rx="3" />
													<path d="M4 15l4 -4a3 5 0 0 1 3 0l5 5" />
													<path d="M14 14l1 -1a3 5 0 0 1 3 0l2 2" />
												</svg>
											</span>
										</span>
										<span className="nav-link-text">Gallery</span>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#dash_task">
										<span className="nav-icon-wrap">
											<span className="svg-icon">
												<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-list-details" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
													<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
													<path d="M13 5h8" />
													<path d="M13 9h5" />
													<path d="M13 15h8" />
													<path d="M13 19h5" />
													<rect x="3" y="4" width="6" height="6" rx="1" />
													<rect x="3" y="14" width="6" height="6" rx="1" />
												</svg>
											</span>
										</span>
										<span className="nav-link-text">Todo</span>
										<span className="badge badge-soft-success ms-2">2</span>
									</a>
									<ul id="dash_task" className="nav flex-column collapse  nav-children">
										<li className="nav-item">
											<ul className="nav flex-column">
												<li className="nav-item">
													<a className="nav-link" href="tasklist.html"><span className="nav-link-text">Tasklist</span></a>
												</li>
												<li className="nav-item">
													<a className="nav-link" href="gantt.html"><span className="nav-link-text">Gantt</span></a>
												</li>
											</ul>	
										</li>	
									</ul>	
								</li>
								<li className="nav-item">
									<a className="nav-link" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#dash_blog">
										<span className="nav-icon-wrap">
											<span className="svg-icon">
												<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-browser" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
													<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
													<rect x="4" y="4" width="16" height="16" rx="1" />
													<line x1="4" y1="8" x2="20" y2="8" />
													<line x1="8" y1="4" x2="8" y2="8" />
												</svg>
											</span>
										</span>
										<span className="nav-link-text">Blog</span>
									</a>
									<ul id="dash_blog" className="nav flex-column collapse  nav-children">
										<li className="nav-item">
											<ul className="nav flex-column">
												<li className="nav-item">
													<a className="nav-link" href="posts.html"><span className="nav-link-text">Posts</span></a>
												</li>
												<li className="nav-item">
													<a className="nav-link" href="add-new-post.html"><span className="nav-link-text">Add New Post</span></a>
												</li>
												<li className="nav-item">
													<a className="nav-link" href="post-detail.html"><span className="nav-link-text">Post Detail</span></a>
												</li>
											</ul>	
										</li>	
									</ul>	
								</li>
								<li className="nav-item">
									<a className="nav-link" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#dash_invoice">
										<span className="nav-icon-wrap">
											<span className="svg-icon">
												<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-digit" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
													<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
													<path d="M14 3v4a1 1 0 0 0 1 1h4" />
													<rect x="9" y="12" width="3" height="5" rx="1" />
													<path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
													<path d="M15 12v5" />
												</svg>
											</span>
										</span>
										<span className="nav-link-text">Invoices</span>
									</a>
									<ul id="dash_invoice" className="nav flex-column collapse  nav-children">
										<li className="nav-item">
											<ul className="nav flex-column">
												<li className="nav-item">
													<a className="nav-link" href="invoice-list.html"><span className="nav-link-text">Invoice List</span></a>
												</li>
												<li className="nav-item">
													<a className="nav-link" href="invoice-templates.html"><span className="nav-link-text">Invoice Templates</span></a>
												</li>
												<li className="nav-item">
													<a className="nav-link" href="create-invoice.html"><span className="nav-link-text">Create Invoice</span></a>
												</li>
												<li className="nav-item">
													<a className="nav-link" href="invoice-preview.html"><span className="nav-link-text">Invoice Preview</span></a>
												</li>
											</ul>	
										</li>	
									</ul>	
								</li>
								<li className="nav-item">
									<a className="nav-link" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#dash_integ">
										<span className="nav-icon-wrap">
											<span className="svg-icon">
												<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
													<path stroke="none" d="M0 0h24v24H0z" fill="none"/>
													<polyline points="7 8 3 12 7 16" />
													<polyline points="17 8 21 12 17 16" />
													<line x1="14" y1="4" x2="10" y2="20" />
												</svg>
											</span>
										</span>
										<span className="nav-link-text">Integrations</span>
									</a>
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
						<div className="menu-gap"></div>
						<div className="menu-group">
							<div className="nav-header">
								<span>Pages</span>
							</div>
							<ul className="navbar-nav flex-column">
								<li className="nav-item">
									<a className="nav-link" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#dash_pages">
										<span className="nav-icon-wrap">
											<span className="svg-icon">
												<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-plus" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
													<a className="nav-link" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#dash_log">
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
													<a className="nav-link" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#dash_sign">
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
									<a className="nav-link" href="javascript:void(0);" data-bs-toggle="collapse" data-bs-target="#dash_profile">
										<span className="nav-icon-wrap">
											<span className="svg-icon">
												<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
												<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-code-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
												<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
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
						<div className="callout card card-flush bg-orange-light-5 text-center mt-5 w-220p mx-auto">
							<div className="card-body">
								<h5 className="h5">Quickly Build Applications</h5>
								<p className="p-sm card-text">Exclusively for webapps Based on Bootstrap</p>
								<a href="https://nubra-ui.hencework.com/" target="_blank" className="btn btn-primary btn-block">Go Nubra-UI</a>
							</div>
						</div>
					</div>
				</div>
				{/*<!-- /Main Menu -->*/}
			</div>
			<div id="hk_menu_backdrop" className="hk-menu-backdrop"></div>
			{/*<!-- /Vertical Nav -->*/}

			{/*<!-- Chat Popup -->*/}
			<div className="hk-chatbot-popup">
				<header>
					<div className="chatbot-head-top">
						<a className="btn btn-sm btn-icon btn-dark btn-rounded" href="javascript:void(0);" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							<span className="icon"><span className="feather-icon"><i data-feather="more-horizontal"></i></span></span>
						</a>
						<div className="dropdown-menu">
							<a className="dropdown-item" href="#"><i className="dropdown-icon zmdi zmdi-notifications-active"></i><span>Send push notifications</span></a>
							<a className="dropdown-item" href="#"><i className="dropdown-icon zmdi zmdi-volume-off"></i><span>Mute Chat</span></a>
						</div>
						<span className="text-white">Chat with Us</span>
						<a id="minimize_chatbot" href="javascript:void(0);" className="btn btn-sm btn-icon btn-dark btn-rounded">
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
								<a className="dropdown-item" href="#">
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
					<div className="footer-copy-text">Powered by <a className="brand-link" href="#"><img src="dist/img/logo-light.png" alt="logo-brand"/></a></div>
				</footer>
			</div>
			<a href="#" className="btn btn-icon btn-floating btn-primary btn-lg btn-rounded btn-popup-open">
				<span className="icon">
					<span className="feather-icon"><i data-feather="message-circle"></i></span>
				</span>
			</a>
			<div className="chat-popover shadow-xl"><p>Try Jampack Chat for free and connect with your customers now!</p></div>
			{/*<!-- /Chat Popup -->*/}

			{/*<!-- Main Content -->*/}
			<div className="hk-pg-wrapper">
				<div className="container-xxl">
					{/*<!-- Page Header -->*/}
					<div className="hk-pg-header pg-header-wth-tab pt-7">
						<div className="d-flex">
							<div className="d-flex flex-wrap justify-content-between flex-1">
								<div className="mb-lg-0 mb-2 me-8">
									<h1 className="pg-title">Welcome back</h1>
									<p>Create pages using a variety of features that leverage jampack components</p>
								</div>
								<div className="pg-header-action-wrap">
									<div className="input-group w-300p">
										<span className="input-affix-wrapper">
											<span className="input-prefix"><span className="feather-icon"><i data-feather="calendar"></i></span></span>
											<input className="form-control form-wth-icon" name="datetimes" value="Aug 18,2020 - Aug 19, 2020"/>
										</span>
									</div>
								</div>
							</div>
						</div>
						<ul className="nav nav-line nav-light nav-tabs">
							<li className="nav-item">
								<a className="nav-link active" data-bs-toggle="tab" href="#">
									<span className="nav-link-text">Overview</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" data-bs-toggle="tab" href="#">
									<span className="nav-link-text">Analytics</span>
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" data-bs-toggle="tab" href="#">
									<span className="nav-link-text">Operations</span>
								</a>
							</li>
						</ul>
					</div>
					{/*<!-- /Page Header -->*/}

					{/*<!-- Page Body -->*/}
					<div className="hk-pg-body">
						<div className="tab-content">
							<div className="tab-pane fade show active" id="tab_block_1">
								<div className="row">
									<div className="col-xxl-9 col-lg-8 col-md-7 mb-md-4 mb-3">
										<div className="card card-border mb-0 h-100">
											<div className="card-header card-header-action">
												<h6>Audience Overview</h6>
												<div className="card-action-wrap">
													<div className="btn-group d-lg-flex d-none" role="group" aria-label="Basic outlined example">
														<button type="button" className="btn btn-outline-light active">All</button>
														<button type="button" className="btn btn-outline-light">Sessions</button>
														<button type="button" className="btn btn-outline-light">Source</button>
														<button type="button" className="btn btn-outline-light">Referrals</button>
													</div>
													<select className="form-select d-lg-none d-flex">
														<option  selected="" value="1">All</option>
														<option value="2">Sessions</option>
														<option value="3">Source</option>
														<option value="4">Referrals</option>
													</select>
												</div>
											</div>
											<div className="card-body">
												<div className="text-center">
													<div className="d-inline-block">
														<span className="badge-status">
															<span className="badge bg-primary badge-indicator badge-indicator-nobdr"></span>
															<span className="badge-label">Direct</span>
														</span>
													</div>
													<div className="d-inline-block ms-3">
														<span className="badge-status">
															<span className="badge bg-primary-light-2 badge-indicator badge-indicator-nobdr"></span>
															<span className="badge-label">Organic search</span>
														</span>
													</div>
													<div className="d-inline-block ms-3">
														<span className="badge-status">
															<span className="badge bg-primary-light-4 badge-indicator badge-indicator-nobdr"></span>
															<span className="badge-label">Referral</span>
														</span>
													</div>
												</div>
												<div id="column_chart_2"></div>
												<div className="separator-full mt-5"></div>
												<div className="flex-grow-1 ms-lg-3">
													<div className="row">
														<div className="col-xxl-3 col-sm-6 mb-xxl-0 mb-3">
															<span className="d-block fw-medium fs-7">Users</span>
															<div className="d-flex align-items-center">
																<span className="d-block fs-4 fw-medium text-dark mb-0">8.8k</span>
																<span className="badge badge-sm badge-soft-success ms-1">
																	<i className="bi bi-arrow-up"></i> 7.5%
																</span>
															</div>
														</div>
														<div className="col-xxl-3 col-sm-6 mb-xxl-0 mb-3">
															<span className="d-block fw-medium fs-7">Sessions</span>
															<div className="d-flex align-items-center">
																<span className="d-block fs-4 fw-medium text-dark mb-0">18.2k</span>
																<span className="badge badge-sm badge-soft-success ms-1">
																	<i className="bi bi-arrow-up"></i> 7.2%
																</span>
															</div>
														</div>
														<div className="col-xxl-3 col-sm-6 mb-xxl-0 mb-3">
															<span className="d-block fw-medium fs-7">Bounce rate</span>
															<div className="d-flex align-items-center">
																<span className="d-block fs-4 fw-medium text-dark mb-0">46.2%</span>
																<span className="badge badge-sm badge-soft-danger ms-1">
																	<i className="bi bi-arrow-down"></i> 0.2%
																</span>
															</div>
														</div>
														<div className="col-xxl-3 col-sm-6">
															<span className="d-block fw-medium fs-7">Session duration</span>
															<div className="d-flex align-items-center">
																<span className="d-block fs-4 fw-medium text-dark mb-0">4m 24s</span>
																<span className="badge badge-sm badge-soft-success ms-1">
																	<i className="bi bi-arrow-up"></i> 10.8%
																</span>
															</div>
														</div>
													</div>	
												</div>
											</div>
										</div>
									</div>
									<div className="col-xxl-3 col-lg-4 col-md-5 mb-md-4 mb-3">
										<div className="card card-border mb-0  h-100">
											<div className="card-header card-header-action">
												<h6>Returning Customers</h6>
												<div className="card-action-wrap">
													<a className="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover dropdown-toggle no-caret" href="#" data-bs-toggle="dropdown"><span className="icon"><span className="feather-icon"><i data-feather="more-vertical"></i></span></span></a>
													<div className="dropdown-menu dropdown-menu-end">
														<a className="dropdown-item" href="#">Action</a>
														<a className="dropdown-item" href="#">Another action</a>
														<a className="dropdown-item" href="#">Something else here</a>
														<div className="dropdown-divider"></div>
														<a className="dropdown-item" href="#">Separated link</a>
													</div>
												</div>
											</div>
											<div className="card-body text-center">
												<div id="radial_chart_2"></div>
												<div className="d-inline-block mt-4">
													<div className="mb-4">
														<span className="d-block badge-status lh-1">
															<span className="badge bg-primary badge-indicator badge-indicator-nobdr d-inline-block"></span>
															<span className="badge-label d-inline-block">Organic</span>
														</span>
														<span className="d-block text-dark fs-5 fw-medium mb-0 mt-1">$243.50</span>
													</div>
													<div>
														<span className="badge-status lh-1">
															<span className="badge bg-primary-light-2 badge-indicator badge-indicator-nobdr"></span>
															<span className="badge-label">Marketing</span>
														</span>
														<span className="d-block text-dark fs-5 fw-medium mb-0 mt-1">$1469</span>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>	
								<div className="row">
									<div className="col-md-12 mb-md-4 mb-3">
										<div className="card card-border mb-0 h-100">
											<div className="card-header card-header-action">
												<h6>Active users</h6>
												<div className="card-action-wrap">
													<button type="button" className="btn btn-outline-light">Real time chart</button>
												</div>
											</div>
											<div className="card-body">
												<div className="row">
													<div className="col-md-8">
														<div id="anim_map_2" className="h-300p"></div>
													</div>
													<div className="col-md-4">
														<div className="media align-items-center mb-3">
															<div className="media-head me-3">
																<div className="avatar avatar-xxs avatar-rounded">
																	<img src="dist/fonts/flags/4x3/us.svg" alt="user" className="avatar-img"/>
																</div>
															</div>
															<div className="media-body">
																<div className="progress-lb-wrap">
																	<label className="progress-label mb-0">United States</label>
																	<div className="d-flex align-items-center">
																		<div className="progress progress-bar-rounded progress-bar-xs flex-1">
																			<div className="progress-bar bg-blue-dark-3 w-80" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
																		</div>
																		<div className="fs-8 mnw-30p ms-3">80%</div>
																	</div>
																</div>
																
															</div>
														</div>
														<div className="media align-items-center mb-3">
															<div className="media-head me-3">
																<div className="avatar avatar-xxs avatar-rounded">
																	<img src="dist/fonts/flags/4x3/in.svg" alt="user" className="avatar-img"/>
																</div>
															</div>
															<div className="media-body">
																<div className="progress-lb-wrap">
																	<label className="progress-label mb-0">India</label>
																	<div className="d-flex align-items-center">
																		<div className="progress progress-bar-rounded progress-bar-xs flex-1">
																			<div className="progress-bar bg-blue w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
																		</div>
																		<div className="fs-8 mnw-30p ms-3">50%</div>
																	</div>
																</div>
																
															</div>
														</div>
														<div className="media align-items-center mb-3">
															<div className="media-head me-3">
																<div className="avatar avatar-xxs avatar-rounded">
																	<img src="dist/fonts/flags/4x3/gb.svg" alt="user" className="avatar-img"/>
																</div>
															</div>
															<div className="media-body">
																<div className="progress-lb-wrap">
																	<label className="progress-label mb-0">United Kingdom</label>
																	<div className="d-flex align-items-center">
																		<div className="progress progress-bar-rounded progress-bar-xs flex-1">
																			<div className="progress-bar bg-primary w-30" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
																		</div>
																		<div className="fs-8 mnw-30p ms-3">30%</div>
																	</div>
																</div>
																
															</div>
														</div>
														<div className="media align-items-center mb-3">
															<div className="media-head me-3">
																<div className="avatar avatar-xxs avatar-rounded">
																	<img src="dist/fonts/flags/4x3/au.svg" alt="user" className="avatar-img"/>
																</div>
															</div>
															<div className="media-body">
																<div className="progress-lb-wrap">
																	<label className="progress-label mb-0">Australia</label>
																	<div className="d-flex align-items-center">
																		<div className="progress progress-bar-rounded progress-bar-xs flex-1">
																			<div className="progress-bar bg-grey-dark-2 w-15" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
																		</div>
																		<div className="fs-8 mnw-30p ms-3">15%</div>
																	</div>
																</div>
																
															</div>
														</div>
														<div className="media align-items-center">
															<div className="media-head me-3">
																<div className="avatar avatar-xxs avatar-rounded">
																	<img src="dist/fonts/flags/4x3/ca.svg" alt="user" className="avatar-img"/>
																</div>
															</div>
															<div className="media-body">
																<div className="progress-lb-wrap">
																	<label className="progress-label mb-0">Canada</label>
																	<div className="d-flex align-items-center">
																		<div className="progress progress-bar-rounded progress-bar-xs flex-1">
																			<div className="progress-bar bg-grey w-10" role="progressbar" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
																		</div>
																		<div className="fs-8 mnw-30p ms-3">10%</div>
																	</div>
																</div>
																
															</div>
														</div>
														
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="row">
									<div className="col-md-12 mb-md-4 mb-3">
										<div className="card card-border mb-0 h-100">
											<div className="card-header card-header-action">
												<h6>New Customers
													<span className="badge badge-sm badge-light ms-1">240</span>
												</h6>
												<div className="card-action-wrap">
													<button className="btn btn-sm btn-outline-light"><span><span className="icon"><span className="feather-icon"><i data-feather="upload"></i></span></span><span className="btn-text">import</span></span></button>
													<button className="btn btn-sm btn-primary ms-3"><span><span className="icon"><span className="feather-icon"><i data-feather="plus"></i></span></span><span className="btn-text">Add new</span></span></button>
												</div>
											</div>
											<div className="card-body">
												<div className="contact-list-view">
													<table id="datable_1" className="table nowrap w-100 mb-5">
														<thead>
															<tr>
																<th><span className="form-check fs-6 mb-0">
																	<input type="checkbox" className="form-check-input check-select-all" id="customCheck1"/>
																	<label className="form-check-label" for="customCheck1"></label>
																</span></th>
																<th>Name</th>
																<th className="w-25">Usage</th>
																<th>Last Update</th>
																<th>Tags</th>
																<th></th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td>
																</td>
																<td>
																	<div className="media align-items-center">
																		<div className="media-head me-2">
																			<div className="avatar avatar-xs avatar-rounded">
																				<img src="dist/img/logo-avatar-1.png" alt="user" className="avatar-img"/>
																			</div>
																		</div>
																		<div className="media-body">
																			<div className="text-high-em">Phone Pay</div> 
																			<div className="fs-7"><a href="#" className="table-link-text link-medium-em">phonepay.in</a></div> 
																		</div>
																	</div>
																</td>
																<td>
																	<div className="progress-lb-wrap">
																		<div className="d-flex align-items-center">
																			<div className="progress progress-bar-rounded progress-bar-xs flex-1">
																				<div className="progress-bar bg-blue-dark-3 w-90" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
																			</div>
																			<div className="fs-8 ms-3">90%</div>
																		</div>
																	</div>
																</td>
																<td>10 June, 2022</td>
																<td>
																	<span className="badge badge-soft-secondary  my-1  me-2">admin</span>
																	<span className="badge badge-soft-secondary my-1  me-2">Finance</span>
																</td>
																<td>
																	<div className="d-flex align-items-center">
																		<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Edit" href="#"><span className="icon"><span className="feather-icon"><i data-feather="edit-2"></i></span></span></a>
																		<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover del-button" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Delete" href="#"><span className="icon"><span className="feather-icon"><i data-feather="trash"></i></span></span></a>
																	</div>
																</td>
															</tr>
															<tr>
																<td>
																</td>
																<td>
																	<div className="media align-items-center">
																		<div className="media-head me-2">
																			<div className="avatar avatar-xs avatar-rounded">
																				<img src="dist/img/logo-avatar-2.png" alt="user" className="avatar-img"/>
																			</div>
																		</div>
																		<div className="media-body">
																			<div className="text-high-em">Swiggy</div> 
																			<div className="fs-7"><a href="#" className="table-link-text link-medium-em">swiggy.com</a></div> 
																		</div>
																	</div>
																</td>
																<td>
																	<div className="progress-lb-wrap">
																		<div className="d-flex align-items-center">
																			<div className="progress progress-bar-rounded progress-bar-xs flex-1">
																				<div className="progress-bar bg-blue w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
																			</div>
																			<div className="fs-8 ms-3">75%</div>
																		</div>
																	</div>
																</td>
																<td>09 July, 2022</td>
																<td>
																	<span className="badge badge-soft-secondary my-1  me-2">customer data</span>
																	<span className="badge badge-soft-secondary  my-1  me-2">admin</span>
																	<span className="badge badge-soft-secondary  my-1  me-2">+4</span>
																</td>
																<td>
																	<div className="d-flex align-items-center">
																		<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Edit" href="#"><span className="icon"><span className="feather-icon"><i data-feather="edit-2"></i></span></span></a>
																		<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover del-button" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Delete" href="#"><span className="icon"><span className="feather-icon"><i data-feather="trash"></i></span></span></a>
																	</div>
																</td>
															</tr>
															<tr>
																<td>
																</td>
																<td>
																	<div className="media align-items-center">
																		<div className="media-head me-2">
																			<div className="avatar avatar-xs avatar-rounded">
																				<img src="dist/img/logo-avatar-3.png" alt="user" className="avatar-img"/>
																			</div>
																		</div>
																		<div className="media-body">
																			<div className="text-high-em">Coursera</div> 
																			<div className="fs-7"><a href="#" className="table-link-text link-medium-em">coursera.com</a></div> 
																		</div>
																	</div>
																</td>
																<td>
																	<div className="progress-lb-wrap">
																		<div className="d-flex align-items-center">
																			<div className="progress progress-bar-rounded progress-bar-xs flex-1">
																				<div className="progress-bar bg-primary w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
																			</div>
																			<div className="fs-8 ms-3">50%</div>
																		</div>
																	</div>
																</td>
																<td>24 Aug, 2022</td>
																<td>
																	<span className="badge badge-soft-secondary my-1  me-2">education</span>
																	<span className="badge badge-soft-secondary  my-1  me-2">admin</span>
																	<span className="badge badge-soft-secondary  my-1  me-2">+3</span>
																</td>
																<td>
																	<div className="d-flex align-items-center">
																		<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Edit" href="#"><span className="icon"><span className="feather-icon"><i data-feather="edit-2"></i></span></span></a>
																		<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover del-button" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Delete" href="#"><span className="icon"><span className="feather-icon"><i data-feather="trash"></i></span></span></a>
																	</div>
																</td>
															</tr>
															<tr>
																<td>
																</td>
																<td>
																	<div className="media align-items-center">
																		<div className="media-head me-2">
																			<div className="avatar avatar-xs avatar-rounded">
																				<img src="dist/img/logo-avatar-4.png" alt="user" className="avatar-img"/>
																			</div>
																		</div>
																		<div className="media-body">
																			<div className="text-high-em">Tinder</div> 
																			<div className="fs-7"><a href="#" className="table-link-text link-medium-em">tinder.com</a></div> 
																		</div>
																	</div>
																</td>
																<td>
																	<div className="progress-lb-wrap">
																		<div className="d-flex align-items-center">
																			<div className="progress progress-bar-rounded progress-bar-xs flex-1">
																				<div className="progress-bar bg-primary-dark-2 w-60" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
																			</div>
																			<div className="fs-8 ms-3">60%</div>
																		</div>
																	</div>
																</td>
																<td>17 May, 2022</td>
																<td>
																	<span className="badge badge-soft-secondary my-1  me-2">Social</span>
																</td>
																<td>
																	<div className="d-flex align-items-center">
																		<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Edit" href="#"><span className="icon"><span className="feather-icon"><i data-feather="edit-2"></i></span></span></a>
																		<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover del-button" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Delete" href="#"><span className="icon"><span className="feather-icon"><i data-feather="trash"></i></span></span></a>
																	</div>
																</td>
															</tr>
															<tr>
																<td>
																</td>
																<td>
																	<div className="media align-items-center">
																		<div className="media-head me-2">
																			<div className="avatar avatar-xs avatar-rounded">
																				<img src="dist/img/logo-avatar-5.png" alt="user" className="avatar-img"/>
																			</div>
																		</div>
																		<div className="media-body">
																			<div className="text-high-em">PCD</div> 
																			<div className="fs-7"><a href="#" className="table-link-text link-medium-em">pcdeals.com</a></div> 
																		</div>
																	</div>
																</td>
																<td>
																	<div className="progress-lb-wrap">
																		<div className="d-flex align-items-center">
																			<div className="progress progress-bar-rounded progress-bar-xs flex-1">
																				<div className="progress-bar bg-grey w-30" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
																			</div>
																			<div className="fs-8 ms-3">30%</div>
																		</div>
																	</div>
																</td>
																<td>13 July, 2022</td>
																<td>
																	<span className="badge badge-soft-secondary my-1  me-2">Portal</span>
																	<span className="badge badge-soft-secondary  my-1  me-2">admin</span>
																	<span className="badge badge-soft-secondary  my-1  me-2">+3</span>
																</td>
																<td>
																	<div className="d-flex align-items-center">
																		<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Edit" href="#"><span className="icon"><span className="feather-icon"><i data-feather="edit-2"></i></span></span></a>
																		<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover del-button" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Delete" href="#"><span className="icon"><span className="feather-icon"><i data-feather="trash"></i></span></span></a>
																	</div>
																</td>
															</tr>
															<tr>
																<td>
																</td>
																<td>
																	<div className="media align-items-center">
																		<div className="media-head me-2">
																			<div className="avatar avatar-xs avatar-rounded">
																				<img src="dist/img/logo-avatar-6.png" alt="user" className="avatar-img"/>
																			</div>
																		</div>
																		<div className="media-body">
																			<div className="text-high-em">Icons 8</div> 
																			<div className="fs-7"><a href="#" className="table-link-text link-medium-em">icons8.com</a></div> 
																		</div>
																	</div>
																</td>
																<td>
																	<div className="progress-lb-wrap">
																		<div className="d-flex align-items-center">
																			<div className="progress progress-bar-rounded progress-bar-xs flex-1">
																				<div className="progress-bar bg-green-dark-1 w-45" role="progressbar" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
																			</div>
																			<div className="fs-8 ms-3">45%</div>
																		</div>
																	</div>
																</td>
																<td>14 July, 2022</td>
																<td>
																	<span className="badge badge-soft-secondary my-1  me-2">Library</span>
																	<span className="badge badge-soft-secondary  my-1  me-2">Asset</span>
																</td>
																<td>
																	<div className="d-flex align-items-center">
																		<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Edit" href="#"><span className="icon"><span className="feather-icon"><i data-feather="edit-2"></i></span></span></a>
																		<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover del-button" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Delete" href="#"><span className="icon"><span className="feather-icon"><i data-feather="trash"></i></span></span></a>
																	</div>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
										</div>
									</div>
								</div>	
							</div>
						</div>
					</div>
					{/*<!-- /Page Body -->*/}		
				</div>
				
				{/*<!-- Page Footer -->*/}
				<div className="hk-footer">
					<footer className="container-xxl footer">
						<div className="row">
							<div className="col-xl-8">
								<p className="footer-text"><span className="copy-text">Jampack © 2022 All rights reserved.</span> <a href="#" className="" target="_blank">Privacy Policy</a><span className="footer-link-sep">|</span><a href="#" className="" target="_blank">T&C</a><span className="footer-link-sep">|</span><a href="#" className="" target="_blank">System Status</a></p>
							</div>
							<div className="col-xl-4">
								<a href="#" className="footer-extr-link link-default"><span className="feather-icon"><i data-feather="external-link"></i></span><u>Send feedback to our help forum</u></a>
							</div>
						</div>
					</footer>
				</div>
				{/*<!-- / Page Footer -->*/}

			</div>
			{/*<!-- /Main Content -->*/}
		

		{/*<!-- /Wrapper -->*/}
		
		</article>
	   
    )
}

export default mainTemplate
