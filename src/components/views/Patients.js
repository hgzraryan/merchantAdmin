import React, { useState, useEffect,useRef } from "react";
import FeatherIcon from 'feather-icons-react';

import Loading from '../Loading';
import { useTable } from 'react-table';
import { Modal, Button } from 'react-bootstrap';



export default function Patients() {
    const [isOpen, setIsOpen] = useState(false);
	//-------------------
    const [showCreateNew, setIsActive] = useState(false);
    const CreateNew = event => {
        setIsActive(current => !current);
    };
	
	
	
	
  return (
    <div>
   
   <div className="contactapp-wrap">
					
					<div className="contactapp-content">
						<div className="contactapp-detail-wrap">
							<header className="contact-header">
								<div className="d-flex align-items-center">
									<div className="dropdown">
										<a className="contactapp-title link-dark" href="#" role="button" aria-haspopup="true" aria-expanded="false">
											<h1>Հաճախորդներ</h1>
										</a>
										<div className="dropdown-menu">
											<a className="dropdown-item" href="#"><span className="feather-icon dropdown-icon"><FeatherIcon icon="users" /></span><span>All Contacts</span></a>
											<a className="dropdown-item" href="#"><span className="feather-icon dropdown-icon"><FeatherIcon icon="star" /></span><span>Important</span></a>
											<a className="dropdown-item" href="#"><span className="feather-icon dropdown-icon"><FeatherIcon icon="archive" /></span><span>Archive</span></a>
											<a className="dropdown-item" href="#"><span className="feather-icon dropdown-icon"><FeatherIcon icon="edit" /></span><span>Pending</span></a>
											<a className="dropdown-item" href="#"><span className="feather-icon dropdown-icon"><FeatherIcon icon="trash-2" /></span><span>Deleted</span></a>
										</div>
									</div>
									{/*
									<div className="dropdown ms-3">
										<button className="btn btn-sm btn-outline-secondary flex-shrink-0 dropdown-toggle d-lg-inline-block d-none" data-bs-toggle="dropdown">Գրանցել հետազոտություն</button>
										<div className="dropdown-menu">
											<a className="dropdown-item" href="#">Add New Contact</a>
											<a className="dropdown-item" href="#">Add New Department</a>
											<a className="dropdown-item" href="#">Add Category</a>
											<a className="dropdown-item" href="#">Add New Tag</a>
										</div>
									</div>
									*/}
									
									
									<div className="dropdown ms-3">
									<button className="btn btn-sm btn-outline-secondary flex-shrink-0 dropdown-toggle d-lg-inline-block d-none" data-bs-toggle="dropdown" onClick={CreateNew}>Գրանցել նոր հաճախորդ</button>
									<div className={showCreateNew ? 'dropdown-menu show' : 'dropdown-menu'} data-popper-placement="bottom">
										
										
                                        <a href="#" onClick={() => setIsOpen(true)}>
                                             <span className="feather-icon dropdown-icon"></span><span>Հաճախորդ</span>
                                        </a>
										
										<Modal show={isOpen} size='xl' onHide={() => setIsOpen(false)}>
										   <Modal.Header closeButton>
											 <Modal.Title style={{ width: '100%', textAlign: 'center' }}>
											   Ավելացնել նոր հաճախորդ
											 </Modal.Title>
										   </Modal.Header>
										   <Modal.Body>
	
												Modal
	
										   </Modal.Body>
										 </Modal>
                                        
                                        {/*
										<a className="dropdown-item" href="#">Type2</a>
										<a className="dropdown-item" href="#">Type3</a>
										<a className="dropdown-item" href="#">Type4</a>
										*/}
									</div>
								</div>
									
									
									
									
								</div>
								<div className="contact-options-wrap">	
									<a className="btn btn-icon btn-flush-dark flush-soft-hover dropdown-toggle no-caret active" href="#" data-bs-toggle="dropdown"><span className="icon"><span className="feather-icon"><FeatherIcon icon="list" /></span></span></a>
									<div className="dropdown-menu dropdown-menu-end">
										<a className="dropdown-item active" href="contact.html"><span className="feather-icon dropdown-icon"><FeatherIcon icon="list" /></span><span>List View</span></a>
										<a className="dropdown-item" href="contact-cards.html"><span className="feather-icon dropdown-icon"><FeatherIcon icon="grid" /></span><span>Grid View</span></a>
										<a className="dropdown-item" href="#"><span className="feather-icon dropdown-icon"><FeatherIcon icon="server" /></span><span>Compact View</span></a>
									</div>
									<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret d-sm-inline-block d-none" href="#" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Refresh"><span className="icon"><span className="feather-icon"><FeatherIcon icon="refresh-cw" /></span></span></a>
									<div className="v-separator d-lg-block d-none"></div>
									<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret  d-lg-inline-block d-none  ms-sm-0" href="#" data-bs-toggle="dropdown"><span className="icon" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Manage Contact"><span className="feather-icon"><FeatherIcon icon="settings" /></span></span></a>
									<div className="dropdown-menu dropdown-menu-end">
										<a className="dropdown-item" href="#">Manage Contact</a>
										<a className="dropdown-item" href="#">Import</a>
										<a className="dropdown-item" href="#">Export</a>
										<div className="dropdown-divider"></div>
										<a className="dropdown-item" href="#">Send Messages</a>
										<a className="dropdown-item" href="#">Delegate Access</a>
									</div>
									<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret d-lg-inline-block d-none" href="#" data-bs-toggle="dropdown"><span className="icon" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="More"><span className="feather-icon"><FeatherIcon icon="moe-vertical" /></span></span></a>
									<div className="dropdown-menu dropdown-menu-end">
										<a className="dropdown-item" href="profile.html"><span className="feather-icon dropdown-icon"><FeatherIcon icon="star" /></span><span>Stared Contacts</span></a>
										<a className="dropdown-item" href="#"><span className="feather-icon dropdown-icon"><FeatherIcon icon="archive" /></span><span>Archive Contacts</span></a>
										<div className="dropdown-divider"></div>
										<a className="dropdown-item" href="email.html"><span className="feather-icon dropdown-icon"><FeatherIcon icon="slash" /></span><span>Block Content</span></a>
										<a className="dropdown-item" href="email.html"><span className="feather-icon dropdown-icon"><FeatherIcon icon="external-link" /></span><span>Feedback</span></a>
									</div>
									<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover hk-navbar-togglable d-sm-inline-block d-none" href="#" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Collapse">
										<span className="icon">
											<span className="feather-icon"><FeatherIcon icon="chevron-up" /></span>
											<span className="feather-icon d-none"><FeatherIcon icon="chevron-down" /></span>
										</span>
									</a>
								</div>
							</header>
							<div className="contact-body">
								<div data-simplebar className="nicescroll-bar">
									<div className="collapse" id="collapseQuick">
										<div className="quick-access-form-wrap">
											<form className="quick-access-form border">
												<div className="row gx-3">
													<div className="col-xxl-10">
														<div className="position-relative">
															<div className="dropify-square">
																<input type="file"  className="dropify-1"/>
															</div>
															<div className="col-md-12">
																<div className="row gx-3">
																	<div className="col-lg-4">
																		<div className="form-group">
																			<input className="form-control" placeholder="First name*" value="" type="text"/>
																		</div>
																		<div className="form-group">
																			<input className="form-control" placeholder="Last name*" value="" type="text"/>
																		</div>
																	</div>
																	<div className="col-lg-4">
																		<div className="form-group">
																			<input className="form-control" placeholder="Email Id*" value="" type="text"/>
																		</div>
																		<div className="form-group">
																			<input className="form-control" placeholder="Phone" value="" type="text"/>
																		</div>
																	</div>
																	<div className="col-lg-4">
																		<div className="form-group">
																			<input className="form-control"  placeholder="Department" value="" type="text"/>
																		</div>
																		<div className="form-group">
																			<select id="input_tags" className="form-control" multiple="multiple">
																				<option selected="selected">Collaborator</option>
																				<option>Designer</option>
																				<option selected="selected">Developer</option>
																			</select>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div className="col-xxl-2">
														<div className="form-group">
															<button data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false"  className="btn btn-block btn-primary ">Create New
															</button>
														</div>
														<div className="form-group">
															<button data-bs-toggle="collapse" disabled  data-bs-target="#collapseExample" aria-expanded="false"  className="btn btn-block btn-secondary">Discard
															</button>
														</div>
													</div>
												</div>
											</form>
										</div>
									</div>
									<div className="contact-list-view">
										<table id="datable_1" className="table nowrap w-100 mb-5">
											<thead>
												<tr>
													<th><span className="form-check mb-0">
														<input type="checkbox" className="form-check-input check-select-all" id="customCheck1"/>
														<label className="form-check-label" for="customCheck1"></label>
													</span></th>
													<th>Name</th>
													<th>Email Address</th>
													<th>Phone</th>
													<th>Tags</th>
													<th>Labels</th>
													<th>Date Created</th>
													<th>Actions</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														<div className="d-flex align-items-center">
															<span className="contact-star marked"><span className="feather-icon"><FeatherIcon icon="star" /></span></span>
														</div>
													</td>
													<td>
														<div className="media align-items-center">
															<div className="media-head me-2">
																<div className="avatar avatar-xs avatar-rounded">
																	<img src="dist/img/avatar1.jpg" alt="user" className="avatar-img"/>
																</div>
															</div>
															<div className="media-body">
																<span className="d-block text-high-em">Morgan Freeman</span> 
															</div>
														</div>
													</td>
													<td className="text-truncate">morgan@jampack.com</td>
													<td>+145 52 5689</td>
													<td><span className="badge badge-soft-violet my-1  me-2">Promotion</span><span className="badge badge-soft-danger  my-1  me-2">Collaborator</span></td>
													<td>Design</td>
													<td>13 Jan, 2020</td>
													<td>
														<div className="d-flex align-items-center">
															<div className="d-flex">
																<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Archive" href="#"><span className="icon"><span className="feather-icon"><FeatherIcon icon="archive" /></span></span></a>
																<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Edit" href="edit-contact.html"><span className="icon"><span className="feather-icon"><FeatherIcon icon="edit" /></span></span></a>
																<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover del-button" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Delete" href="#"><span className="icon"><span className="feather-icon"><FeatherIcon icon="trash" /></span></span></a>
															</div>
															<div className="dropdown">
																<button className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret" aria-expanded="false" data-bs-toggle="dropdown"><span className="icon"><span className="feather-icon"><i data-feather="more-vertical"></i></span></span></button>
																<div className="dropdown-menu dropdown-menu-end">
																	<a className="dropdown-item" href="edit-contact.html"><span className="feather-icon dropdown-icon"><FeatherIcon icon="edit" /></span><span>Edit Contact</span></a>
																	<a className="dropdown-item" href="#"><span className="feather-icon dropdown-icon"><FeatherIcon icon="trash-2" /></span><span>Delete</span></a>
																	<a className="dropdown-item" href="#"><span className="feather-icon dropdown-icon"><FeatherIcon icon="copy" /></span><span>Duplicate</span></a>
																	<div className="dropdown-divider"></div>
																	<h6 className="dropdown-header dropdown-header-bold">Change Labels</h6>
																	<a className="dropdown-item" href="#">Design</a>
																	<a className="dropdown-item" href="#">Developer</a>
																	<a className="dropdown-item" href="#">Inventory</a>
																	<a className="dropdown-item" href="#">Human Resource</a>
																</div>
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div className="d-flex align-items-center">
															<span className="contact-star marked"><span className="feather-icon">
                              <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 17H8M12 17H20M4 12H20M4 7H12M16 7H20" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                              </svg>  
                              </span></span>
														</div>
													</td>
													<td>
														<div className="media align-items-center">
															<div className="media-head me-2">
																<div className="avatar avatar-xs avatar-rounded">
																	<img src="dist/img/avatar9.jpg" alt="user" className="avatar-img"/>
																</div>
															</div>
															<div className="media-body">
																<span className="d-block text-high-em">Huma Therman</span> 
															</div>
														</div>
													</td>
													<td className="text-truncate">huma@clariesup.au</td>
													<td>+234 48 2365</td>
													<td><span className="badge badge-soft-danger my-1  me-2">Collaborator</span><span className="badge badge-soft-success  my-1  me-2">Angular Developer</span></td>
													<td>Developer</td>
													<td>13 Jan, 2020</td>
													<td>
														<div className="d-flex align-items-center">
															<div className="d-flex">
																<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Archive" href="#"><span className="icon"><span className="feather-icon"><FeatherIcon icon="archive" /><FeatherIcon icon="archive" /></span></span></a>
																<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Edit" href="edit-contact.html"><span className="icon"><span className="feather-icon"><FeatherIcon icon="edit" /><i data-feather="edit"></i></span></span></a>
																<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover del-button" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Delete" href="#"><span className="icon"><span className="feather-icon"><FeatherIcon icon="trash" /><i data-feather="trash"></i></span></span></a>
															</div>
															<div className="dropdown">
																<button className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret" aria-expanded="false" data-bs-toggle="dropdown"><span className="icon"><span className="feather-icon"><FeatherIcon icon="more-vertical" /></span></span></button>
																<div className="dropdown-menu dropdown-menu-end">
																	<a className="dropdown-item" href="edit-contact.html"><span className="feather-icon dropdown-icon"><FeatherIcon icon="edit" /></span><span>Edit Contact</span></a>
																	<a className="dropdown-item" href="#"><span className="feather-icon dropdown-icon"><FeatherIcon icon="trash-2" /></span><span>Delete</span></a>
																	<a className="dropdown-item" href="#"><span className="feather-icon dropdown-icon"><FeatherIcon icon="copy" /></span><span>Duplicate</span></a>
																	<div className="dropdown-divider"></div>
																	<h6 className="dropdown-header dropdown-header-bold">Change Labels</h6>
																	<a className="dropdown-item" href="#">Design</a>
																	<a className="dropdown-item" href="#">Developer</a>
																	<a className="dropdown-item" href="#">Inventory</a>
																	<a className="dropdown-item" href="#">Human Resource</a>
																</div>
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div className="d-flex align-items-center">
															<span className="contact-star"><span className="feather-icon"><FeatherIcon icon="list" /><i data-feather="star"></i></span></span>
														</div>
													</td>
													<td>
														<div className="media align-items-center">
															<div className="media-head me-2">
																<div className="avatar avatar-xs avatar-soft-info avatar-rounded">
																	<span className="initial-wrap">C</span>
																</div>
															</div>
															<div className="media-body">
																<span className="d-block text-high-em">Charlie Chaplin</span> 
															</div>
														</div>
													</td>
													<td className="text-truncate">charlie@leernoca.monster</td>
													<td>+741 56 7896</td>
													<td><span className="badge badge-soft-danger my-1  me-2">Collaborator</span></td>
													<td>Inventory</td>
													<td>13 Jan, 2019</td>
													<td>
														<div className="d-flex align-items-center">
															<div className="d-flex">
																<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Archive" href="#"><span className="icon"><span className="feather-icon"><FeatherIcon icon="archive" /></span></span></a>
																<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Edit" href="edit-contact.html"><span className="icon"><span className="feather-icon"><i data-feather="edit"></i></span></span></a>
																<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover del-button" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Delete" href="#"><span className="icon"><span className="feather-icon"><i data-feather="trash"></i></span></span></a>
															</div>
															<div className="dropdown">
																<button className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret" aria-expanded="false" data-bs-toggle="dropdown"><span className="icon"><span className="feather-icon"><i data-feather="more-vertical"></i></span></span></button>
																<div className="dropdown-menu dropdown-menu-end">
																	<a className="dropdown-item" href="edit-contact.html"><span className="feather-icon dropdown-icon"><FeatherIcon icon="list" /><i data-feather="edit"></i></span><span>Edit Contact</span></a>
																	<a className="dropdown-item" href="#"><span className="feather-icon dropdown-icon"><FeatherIcon icon="list" /><i data-feather="trash-2"></i></span><span>Delete</span></a>
																	<a className="dropdown-item" href="#"><span className="feather-icon dropdown-icon"><FeatherIcon icon="list" /><i data-feather="copy"></i></span><span>Duplicate</span></a>
																	<div className="dropdown-divider"></div>
																	<h6 className="dropdown-header dropdown-header-bold">Change Labels</h6>
																	<a className="dropdown-item" href="#">Design</a>
																	<a className="dropdown-item" href="#">Developer</a>
																	<a className="dropdown-item" href="#">Inventory</a>
																	<a className="dropdown-item" href="#">Human Resource</a>
																</div>
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div className="d-flex align-items-center">
															<span className="contact-star marked"><span className="feather-icon"><FeatherIcon icon="list" /><i data-feather="star"></i></span></span>
														</div>
													</td>
													<td>
														<div className="media align-items-center">
															<div className="media-head me-2">
																<div className="avatar avatar-xs avatar-rounded">
																	<img src="dist/img/avatar10.jpg" alt="user" className="avatar-img"/>
																</div>
															</div>
															<div className="media-body">
																<span className="d-block text-high-em">Winston Churchil</span> 
															</div>
														</div>
													</td>
													<td className="text-truncate">winston@worthniza.ga</td>
													<td>+145 52 5463</td>
													<td><span className="badge badge-soft-danger my-1  me-2">Promotion</span><span className="badge badge-soft-light my-1  me-2">Advertisement</span></td>
													<td>Human Resource</td>
													<td>13 Jan, 2020</td>
													<td>
														<div className="d-flex align-items-center">
															<div className="d-flex">
																<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Archive" href="#"><span className="icon"><span className="feather-icon"><FeatherIcon icon="archive" /></span></span></a>
																<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Edit" href="edit-contact.html"><span className="icon"><span className="feather-icon"><i data-feather="edit"></i></span></span></a>
																<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover del-button" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Delete" href="#"><span className="icon"><span className="feather-icon"><i data-feather="trash"></i></span></span></a>
															</div>
															<div className="dropdown">
																<button className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret" aria-expanded="false" data-bs-toggle="dropdown"><span className="icon"><span className="feather-icon"><i data-feather="more-vertical"></i></span></span></button>
																<div className="dropdown-menu dropdown-menu-end">
																	<a className="dropdown-item" href="edit-contact.html"><span className="feather-icon dropdown-icon"><FeatherIcon icon="list" /><i data-feather="edit"></i></span><span>Edit Contact</span></a>
																	<a className="dropdown-item" href="#"><span className="feather-icon dropdown-icon"><FeatherIcon icon="list" /><i data-feather="trash-2"></i></span><span>Delete</span></a>
																	<a className="dropdown-item" href="#"><span className="feather-icon dropdown-icon"><FeatherIcon icon="list" /><i data-feather="copy"></i></span><span>Duplicate</span></a>
																	<div className="dropdown-divider"></div>
																	<h6 className="dropdown-header dropdown-header-bold">Change Labels</h6>
																	<a className="dropdown-item" href="#">Design</a>
																	<a className="dropdown-item" href="#">Developer</a>
																	<a className="dropdown-item" href="#">Inventory</a>
																	<a className="dropdown-item" href="#">Human Resource</a>
																</div>
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div className="d-flex align-items-center">
															<span className="contact-star"><span className="feather-icon"><FeatherIcon icon="list" /><i data-feather="star"></i></span></span>
														</div>
													</td>
													<td>
														<div className="media align-items-center">
															<div className="media-head me-2">
																<div className="avatar avatar-xs avatar-rounded">
																	<img src="dist/img/avatar3.jpg" alt="user" className="avatar-img"/>
																</div>
															</div>
															<div className="media-body">
																<span className="d-block text-high-em">Jaquiline Joker</span> 
															</div>
														</div>
													</td>
													<td className="text-truncate">jaquljoker@jampack.com</td>
													<td>+145 53 4715</td>
													<td><span className="badge badge-soft-violet my-1  me-2">Promotion</span><span className="badge badge-soft-danger  my-1  me-2">Collaborator</span></td>
													<td>Design</td>
													<td>3 July, 2020</td>
													<td>
														<div className="d-flex align-items-center">
															<div className="d-flex">
																<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Archive" href="#"><span className="icon"><span className="feather-icon"><FeatherIcon icon="archive" /></span></span></a>
																<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Edit" href="edit-contact.html"><span className="icon"><span className="feather-icon"><i data-feather="edit"></i></span></span></a>
																<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover del-button" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Delete" href="#"><span className="icon"><span className="feather-icon"><i data-feather="trash"></i></span></span></a>
															</div>
															<div className="dropdown">
																<button className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret" aria-expanded="false" data-bs-toggle="dropdown"><span className="icon"><span className="feather-icon"><i data-feather="more-vertical"></i></span></span></button>
																<div className="dropdown-menu dropdown-menu-end">
																	<a className="dropdown-item" href="edit-contact.html"><span className="feather-icon dropdown-icon"><FeatherIcon icon="list" /><i data-feather="edit"></i></span><span>Edit Contact</span></a>
																	<a className="dropdown-item" href="#"><span className="feather-icon dropdown-icon"><FeatherIcon icon="list" /><i data-feather="trash-2"></i></span><span>Delete</span></a>
																	<a className="dropdown-item" href="#"><span className="feather-icon dropdown-icon"><FeatherIcon icon="list" /><i data-feather="copy"></i></span><span>Duplicate</span></a>
																	<div className="dropdown-divider"></div>
																	<h6 className="dropdown-header dropdown-header-bold">Change Labels</h6>
																	<a className="dropdown-item" href="#">Design</a>
																	<a className="dropdown-item" href="#">Developer</a>
																	<a className="dropdown-item" href="#">Inventory</a>
																	<a className="dropdown-item" href="#">Human Resource</a>
																</div>
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div className="d-flex align-items-center">
															<span className="contact-star marked"><span className="feather-icon"><FeatherIcon icon="list" /><i data-feather="star"></i></span></span>
														</div>
													</td>
													<td>
														<div className="media align-items-center">
															<div className="media-head me-2">
																<div className="avatar avatar-xs avatar-rounded">
																	<img src="dist/img/avatar7.jpg" alt="user" className="avatar-img"/>
																</div>
															</div>
															<div className="media-body">
																<span className="d-block text-high-em">Tom Cruz</span> 
															</div>
														</div>
													</td>
													<td className="text-truncate">tomcz@jampack.com</td>
													<td>+456 52 4862</td>
													<td><span className="badge badge-soft-danger my-1  me-2">Collaborator</span><span className="badge badge-soft-warning my-1  me-2">Angular Developer</span></td>
													<td>Inventory</td>
													<td>24 Jun, 2019</td>
													<td>
														<div className="d-flex align-items-center">
															<div className="d-flex">
																<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Archive" href="#"><span className="icon"><span className="feather-icon"><FeatherIcon icon="archive" /></span></span></a>
																<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Edit" href="edit-contact.html"><span className="icon"><span className="feather-icon"><i data-feather="edit"></i></span></span></a>
																<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover del-button" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Delete" href="#"><span className="icon"><span className="feather-icon"><i data-feather="trash"></i></span></span></a>
															</div>
															<div className="dropdown">
																<button className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret" aria-expanded="false" data-bs-toggle="dropdown"><span className="icon"><span className="feather-icon"><i data-feather="more-vertical"></i></span></span></button>
																<div className="dropdown-menu dropdown-menu-end">
																	<a className="dropdown-item" href="edit-contact.html"><span className="feather-icon dropdown-icon"><FeatherIcon icon="list" /><i data-feather="edit"></i></span><span>Edit Contact</span></a>
																	<a className="dropdown-item" href="#"><span className="feather-icon dropdown-icon"><FeatherIcon icon="list" /><i data-feather="trash-2"></i></span><span>Delete</span></a>
																	<a className="dropdown-item" href="#"><span className="feather-icon dropdown-icon"><FeatherIcon icon="list" /><i data-feather="copy"></i></span><span>Duplicate</span></a>
																	<div className="dropdown-divider"></div>
																	<h6 className="dropdown-header dropdown-header-bold">Change Labels</h6>
																	<a className="dropdown-item" href="#">Design</a>
																	<a className="dropdown-item" href="#">Developer</a>
																	<a className="dropdown-item" href="#">Inventory</a>
																	<a className="dropdown-item" href="#">Human Resource</a>
																</div>
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div className="d-flex align-items-center">
															<span className="contact-star"><span className="feather-icon"><FeatherIcon icon="list" /><i data-feather="star"></i></span></span>
														</div>
													</td>
													<td>
														<div className="media align-items-center">
															<div className="media-head me-2">
																<div className="avatar avatar-xs avatar-rounded">
																	<img src="dist/img/avatar2.jpg" alt="user" className="avatar-img"/>
																</div>
															</div>
															<div className="media-body">
																<span className="d-block text-high-em">Danial Craig</span> 
															</div>
														</div>
													</td>
													<td className="text-truncate">danialc@jampack.com</td>
													<td>+145 52 5689</td>
													<td><span className="badge badge-soft-danger my-1  me-2">Collaborator</span></td>
													<td>Developer</td>
													<td>24 Jun, 2019</td>
													<td>
														<div className="d-flex align-items-center">
															<div className="d-flex">
																<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Archive" href="#"><span className="icon"><span className="feather-icon"><FeatherIcon icon="archive" /></span></span></a>
																<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Edit" href="edit-contact.html"><span className="icon"><span className="feather-icon"><i data-feather="edit"></i></span></span></a>
																<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover del-button" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Delete" href="#"><span className="icon"><span className="feather-icon"><i data-feather="trash"></i></span></span></a>
															</div>
															<div className="dropdown">
																<button className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret" aria-expanded="false" data-bs-toggle="dropdown"><span className="icon"><span className="feather-icon"><i data-feather="more-vertical"></i></span></span></button>
																<div className="dropdown-menu dropdown-menu-end">
																	<a className="dropdown-item" href="edit-contact.html"><span className="feather-icon dropdown-icon"><FeatherIcon icon="list" /><i data-feather="edit"></i></span><span>Edit Contact</span></a>
																	<a className="dropdown-item" href="#"><span className="feather-icon dropdown-icon"><FeatherIcon icon="list" /><i data-feather="trash-2"></i></span><span>Delete</span></a>
																	<a className="dropdown-item" href="#"><span className="feather-icon dropdown-icon"><FeatherIcon icon="list" /><i data-feather="copy"></i></span><span>Duplicate</span></a>
																	<div className="dropdown-divider"></div>
																	<h6 className="dropdown-header dropdown-header-bold">Change Labels</h6>
																	<a className="dropdown-item" href="#">Design</a>
																	<a className="dropdown-item" href="#">Developer</a>
																	<a className="dropdown-item" href="#">Inventory</a>
																	<a className="dropdown-item" href="#">Human Resource</a>
																</div>
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div className="d-flex align-items-center">
															<span className="contact-star"><span className="feather-icon"><FeatherIcon icon="list" /><i data-feather="star"></i></span></span>
														</div>
													</td>
													<td>
														<div className="media align-items-center">
															<div className="media-head me-2">
																<div className="avatar avatar-xs avatar-rounded">
																	<img src="dist/img/avatar8.jpg" alt="user" className="avatar-img"/>
																</div>
															</div>
															<div className="media-body">
																<span className="d-block text-high-em">Katharine Jones</span> 
															</div>
														</div>
													</td>
													<td className="text-truncate">joneskath@jampack.com</td>
													<td>+741 56 7896</td>
													<td><span className="badge badge-soft-violet my-1  me-2">Promotion</span></td>
													<td>Inventory</td>
													<td>24 Jun, 2019</td>
													<td>
														<div className="d-flex align-items-center">
															<div className="d-flex">
																<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Archive" href="#"><span className="icon"><span className="feather-icon"><FeatherIcon icon="archive" /></span></span></a>
																<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Edit" href="edit-contact.html"><span className="icon"><span className="feather-icon"><i data-feather="edit"></i></span></span></a>
																<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover del-button" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Delete" href="#"><span className="icon"><span className="feather-icon"><i data-feather="trash"></i></span></span></a>
															</div>
															<div className="dropdown">
																<button className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret" aria-expanded="false" data-bs-toggle="dropdown"><span className="icon"><span className="feather-icon"><i data-feather="more-vertical"></i></span></span></button>
																<div className="dropdown-menu dropdown-menu-end">
																	<a className="dropdown-item" href="edit-contact.html"><span className="feather-icon dropdown-icon"><FeatherIcon icon="list" /><i data-feather="edit"></i></span><span>Edit Contact</span></a>
																	<a className="dropdown-item" href="#"><span className="feather-icon dropdown-icon"><FeatherIcon icon="list" /><i data-feather="trash-2"></i></span><span>Delete</span></a>
																	<a className="dropdown-item" href="#"><span className="feather-icon dropdown-icon"><FeatherIcon icon="list" /><i data-feather="copy"></i></span><span>Duplicate</span></a>
																	<div className="dropdown-divider"></div>
																	<h6 className="dropdown-header dropdown-header-bold">Change Labels</h6>
																	<a className="dropdown-item" href="#">Design</a>
																	<a className="dropdown-item" href="#">Developer</a>
																	<a className="dropdown-item" href="#">Inventory</a>
																	<a className="dropdown-item" href="#">Human Resource</a>
																</div>
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div className="d-flex align-items-center">
															<span className="contact-star marked"><span className="feather-icon"><FeatherIcon icon="list" /><i data-feather="star"></i></span></span>
														</div>
													</td>
													<td>
														<div className="media align-items-center">
															<div className="media-head me-2">
																<div className="avatar avatar-xs avatar-primary avatar-rounded">
																	<span className="initial-wrap">H</span>
																</div>
															</div>
															<div className="media-body">
																<span className="d-block text-high-em">Hence Work</span> 
															</div>
														</div>
													</td>
													<td className="text-truncate">contact@hencework.com</td>
													<td>+145 52 5463</td>
													<td><span className="badge badge-soft-violet my-1  me-2">Promotion</span></td>
													<td>Design</td>
													<td>30 Mar, 2019</td>
													<td>
														<div className="d-flex align-items-center">
															<div className="d-flex">
																<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Archive" href="#"><span className="icon"><span className="feather-icon"><FeatherIcon icon="archive" /></span></span></a>
																<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Edit" href="edit-contact.html"><span className="icon"><span className="feather-icon"><i data-feather="edit"></i></span></span></a>
																<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover del-button" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Delete" href="#"><span className="icon"><span className="feather-icon"><i data-feather="trash"></i></span></span></a>
															</div>
															<div className="dropdown">
																<button className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret" aria-expanded="false" data-bs-toggle="dropdown"><span className="icon"><span className="feather-icon"><i data-feather="more-vertical"></i></span></span></button>
																<div className="dropdown-menu dropdown-menu-end">
																	<a className="dropdown-item" href="edit-contact.html"><span className="feather-icon dropdown-icon"><FeatherIcon icon="list" /><i data-feather="edit"></i></span><span>Edit Contact</span></a>
																	<a className="dropdown-item" href="#"><span className="feather-icon dropdown-icon"><FeatherIcon icon="list" /><i data-feather="trash-2"></i></span><span>Delete</span></a>
																	<a className="dropdown-item" href="#"><span className="feather-icon dropdown-icon"><FeatherIcon icon="list" /><i data-feather="copy"></i></span><span>Duplicate</span></a>
																	<div className="dropdown-divider"></div>
																	<h6 className="dropdown-header dropdown-header-bold">Change Labels</h6>
																	<a className="dropdown-item" href="#">Design</a>
																	<a className="dropdown-item" href="#">Developer</a>
																	<a className="dropdown-item" href="#">Inventory</a>
																	<a className="dropdown-item" href="#">Human Resource</a>
																</div>
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div className="d-flex align-items-center">
															<span className="contact-star marked"><span className="feather-icon"><FeatherIcon icon="list" /><i data-feather="star"></i></span></span>
														</div>
													</td>
													<td>
														<div className="media align-items-center">
															<div className="media-head me-2">
																<div className="avatar avatar-xs avatar-rounded">
																	<img src="dist/img/avatar13.jpg" alt="user" className="avatar-img"/>
																</div>
															</div>
															<div className="media-body">
																<span className="d-block text-high-em">Dean Shaw</span> 
															</div>
														</div>
													</td>
													<td className="text-truncate">dean-shaw@poww.me</td>
													<td>+234 48 2365</td>
													<td><span className="badge badge-soft-danger my-1  me-2">Collaborator</span><span className="badge badge-soft-success  my-1  me-2">Angular Developer</span></td>
													<td>Design</td>
													<td>21 Feb, 2019</td>
													<td>
														<div className="d-flex align-items-center">
															<div className="d-flex">
																<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Archive" href="#"><span className="icon"><span className="feather-icon"><FeatherIcon icon="archive" /></span></span></a>
																<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Edit" href="edit-contact.html"><span className="icon"><span className="feather-icon"><i data-feather="edit"></i></span></span></a>
																<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover del-button" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Delete" href="#"><span className="icon"><span className="feather-icon"><i data-feather="trash"></i></span></span></a>
															</div>
															<div className="dropdown">
																<button className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret" aria-expanded="false" data-bs-toggle="dropdown"><span className="icon"><span className="feather-icon"><i data-feather="more-vertical"></i></span></span></button>
																<div className="dropdown-menu dropdown-menu-end">
																	<a className="dropdown-item" href="edit-contact.html"><span className="feather-icon dropdown-icon"><FeatherIcon icon="list" /><i data-feather="edit"></i></span><span>Edit Contact</span></a>
																	<a className="dropdown-item" href="#"><span className="feather-icon dropdown-icon"><FeatherIcon icon="list" /><i data-feather="trash-2"></i></span><span>Delete</span></a>
																	<a className="dropdown-item" href="#"><span className="feather-icon dropdown-icon"><FeatherIcon icon="list" /><i data-feather="copy"></i></span><span>Duplicate</span></a>
																	<div className="dropdown-divider"></div>
																	<h6 className="dropdown-header dropdown-header-bold">Change Labels</h6>
																	<a className="dropdown-item" href="#">Design</a>
																	<a className="dropdown-item" href="#">Developer</a>
																	<a className="dropdown-item" href="#">Inventory</a>
																	<a className="dropdown-item" href="#">Human Resource</a>
																</div>
															</div>
														</div>
													</td>
												</tr>
												<tr>
													<td>
														<div className="d-flex align-items-center">
															<span className="contact-star"><span className="feather-icon"><FeatherIcon icon="list" /><i data-feather="star"></i></span></span>
														</div>
													</td>
													<td>
														<div className="media align-items-center">
															<div className="media-head me-2">
																<div className="avatar avatar-xs avatar-soft-danger avatar-rounded">
																	<span className="initial-wrap">J</span>
																</div>
															</div>
															<div className="media-body">
																<span className="d-block text-high-em">John Brother</span> 
															</div>
														</div>
													</td>
													<td className="text-truncate">john@cryodrakon.info</td>
													<td>+456 52 4862</td>
													<td><span className="badge badge-soft-violet my-1  me-2">Promotion</span><span className="badge badge-soft-danger  my-1  me-2">Collaborator</span></td>
													<td>Human Resource</td>
													<td>14 Jan, 2019</td>
													<td>
														<div className="d-flex align-items-center">
															<div className="d-flex">
																<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Archive" href="#"><span className="icon"><span className="feather-icon"><FeatherIcon icon="archive" /></span></span></a>
																<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Edit" href="edit-contact.html"><span className="icon"><span className="feather-icon"><i data-feather="edit"></i></span></span></a>
																<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover del-button" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Delete" href="#"><span className="icon"><span className="feather-icon"><i data-feather="trash"></i></span></span></a>
															</div>
															<div className="dropdown">
																<button className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret" aria-expanded="false" data-bs-toggle="dropdown"><span className="icon"><span className="feather-icon"><i data-feather="more-vertical"></i></span></span></button>
																<div className="dropdown-menu dropdown-menu-end">
																	<a className="dropdown-item" href="edit-contact.html"><span className="feather-icon dropdown-icon"><FeatherIcon icon="list" /><i data-feather="edit"></i></span><span>Edit Contact</span></a>
																	<a className="dropdown-item" href="#"><span className="feather-icon dropdown-icon"><FeatherIcon icon="list" /><i data-feather="trash-2"></i></span><span>Delete</span></a>
																	<a className="dropdown-item" href="#"><span className="feather-icon dropdown-icon"><FeatherIcon icon="list" /><i data-feather="copy"></i></span><span>Duplicate</span></a>
																	<div className="dropdown-divider"></div>
																	<h6 className="dropdown-header dropdown-header-bold">Change Labels</h6>
																	<a className="dropdown-item" href="#">Design</a>
																	<a className="dropdown-item" href="#">Developer</a>
																	<a className="dropdown-item" href="#">Inventory</a>
																	<a className="dropdown-item" href="#">Human Resource</a>
																</div>
															</div>
														</div>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
						{/*<!-- Edit Info -->*/}
						<div id="add_new_contact" className="modal fade add-new-contact" tabindex="-1" role="dialog" aria-hidden="true">
							<div className="modal-dialog modal-dialog-centered modal-lg" role="document">
								<div className="modal-content">
									<div className="modal-body">
										<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
											<span aria-hidden="true">×</span>
										</button>
										<h5 className="mb-5">Create New Conatct</h5>
										<form>
											<div className="row gx-3">
												<div className="col-sm-2 form-group">
													<div className="dropify-square">
														<input type="file"  className="dropify-1"/>
													</div>
												</div>
												<div className="col-sm-10 form-group">
													<textarea className="form-control mnh-100p" rows="4" placeholder="Add Biography"></textarea>
												</div>
											</div>
											<div className="title title-xs title-wth-divider text-primary text-uppercase my-4"><span>Basic Info</span></div>
											<div className="row gx-3">
												<div className="col-sm-4">
													<div className="form-group">
														<label className="form-label">First Name</label>
														<input className="form-control" type="text"/>
													</div>
												</div>
												<div className="col-sm-4">
													<div className="form-group">
														<label className="form-label">Middle Name</label>
														<input className="form-control" type="text"/>
													</div>
												</div>
												<div className="col-sm-4">
													<div className="form-group">
														<label className="form-label">Last Name</label>
														<input className="form-control" type="text"/>
													</div>
												</div>
											</div>
											<div className="row gx-3">
												<div className="col-sm-6">
													<div className="form-group">
														<label className="form-label">Email ID</label>
														<input className="form-control" type="text"/>
													</div>
												</div>
												<div className="col-sm-6">
													<div className="form-group">
														<label className="form-label">Phone</label>
														<input className="form-control" type="text"/>
													</div>
												</div>
											</div>
											<div className="row gx-3">
												<div className="col-sm-4">
													<div className="form-group">
														<label className="form-label">City</label>
														<select className="form-select">
															<option selected="">--</option>
															<option value="1">One</option>
															<option value="2">Two</option>
															<option value="3">Three</option>
														</select>
													</div>
												</div>
												<div className="col-sm-4">
													<div className="form-group">
														<label className="form-label">State</label>
														<select className="form-select">
															<option selected="">--</option>
															<option value="1">One</option>
															<option value="2">Two</option>
															<option value="3">Three</option>
														</select>
													</div>
												</div>
												<div className="col-sm-4">
													<div className="form-group">
														<label className="form-label">Country</label>
														<select className="form-select">
															<option selected="">--</option>
															<option value="1">One</option>
															<option value="2">Two</option>
															<option value="3">Three</option>
														</select>
													</div>
												</div>
											</div>
											<div className="title title-xs title-wth-divider text-primary text-uppercase my-4"><span>Company Info</span></div>
											<div className="row gx-3">
												<div className="col-sm-6">
													<div className="form-group">
														<label className="form-label">Company Name</label>
														<input className="form-control" type="text"/>
													</div>
												</div>
												<div className="col-sm-6">
													<div className="form-group">
														<label className="form-label">Designation</label>
														<input className="form-control" type="text"/>
													</div>
												</div>
												<div className="col-sm-6">
													<div className="form-group">
														<label className="form-label">Website</label>
														<input className="form-control" type="text"/>
													</div>
												</div>
												<div className="col-sm-6">
													<div className="form-group">
														<label className="form-label">Work Phone</label>
														<input className="form-control" type="text"/>
													</div>
												</div>
											</div>
											<div className="title title-xs title-wth-divider text-primary text-uppercase my-4"><span>Additional Info</span></div>
											<div className="row gx-3">
												<div className="col-sm-12">
													<div className="form-group">
														<label className="form-label">Tags</label>
														<select id="input_tags_2" className="form-control" multiple="multiple">
														</select>
														<small className="form-text text-muted">
														   You can add upto 4 tags per contact
														</small>
													</div>
												</div>
											</div>
											<div className="row gx-3">
												<div className="col-sm-6">
													<div className="form-group">
														<input className="form-control" type="text" placeholder="Facebook"/>
													</div>
												</div>
												<div className="col-sm-6">
													<div className="form-group">
														<input className="form-control" type="text" placeholder="Twitter"/>
													</div>
												</div>
												<div className="col-sm-6">
													<div className="form-group">
														<input className="form-control" type="text" placeholder="LinkedIn"/>
													</div>
												</div>
												<div className="col-sm-6">
													<div className="form-group">
														<input className="form-control" type="text" placeholder="Gmail"/>
													</div>
												</div>
											</div>
										</form>
									</div>
									<div className="modal-footer align-items-center">
										<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Discard</button>
										<button type="button" className="btn btn-primary" data-bs-dismiss="modal">Create Contact</button>
									</div>
								</div>
							</div>
						</div>
						{/*<!-- /Edit Info -->*/}
						
						{/*<!-- Add Label -->*/}
						<div id="add_new_label" className="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
							<div className="modal-dialog modal-dialog-centered modal-sm" role="document">
								<div className="modal-content">
									<div className="modal-body">
										<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
											<span aria-hidden="true">×</span>
										</button>
										<h6 className="text-uppercase fw-bold mb-3">Add Label</h6>
										<form>
											<div className="row gx-3">
												<div className="col-sm-12">
													<div className="form-group">
														<input className="form-control" type="text" placeholder="Label Name"/>
													</div>
												</div>
											</div>
											<button type="button" className="btn btn-primary float-end" data-bs-dismiss="modal">Add</button>
										</form>
									</div>
								</div>
							</div>
						</div>
						{/*<!-- Add Label -->*/}
						
						{/*<!-- Add Tag -->*/}
						<div id="add_new_tag" className="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
							<div className="modal-dialog modal-dialog-centered modal-sm" role="document">
								<div className="modal-content">
									<div className="modal-body">
										<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
											<span aria-hidden="true">×</span>
										</button>
										<h6 className="text-uppercase fw-bold mb-3">Add Tag</h6>
										<form>
											<div className="row gx-3">
												<div className="col-sm-12">
													<div className="form-group">
														<select id="input_tags_3" className="form-control" multiple="multiple">
															<option selected="selected">Collaborator</option>
															<option selected="selected">Designer</option>
															<option selected="selected">React Developer</option>
															<option selected="selected">Promotion</option>
															<option selected="selected">Advertisement</option>
														</select>
													</div>
												</div>
											</div>
											<button type="button" className="btn btn-primary float-end" data-bs-dismiss="modal">Add</button>
										</form>
									</div>
								</div>
							</div>
						</div>
						{/*<!-- Add Tag -->*/}
					</div>
				</div>
		</div>


  )
}
