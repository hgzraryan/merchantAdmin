import React, { useState, useEffect,useRef } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";
import FeatherIcon from 'feather-icons-react';
import LoadingSpinner from "../LoadingSpinner";
import ReactPaginate from "react-paginate"
import MissingAvatar from "../../dist/img/Missing.svg"
import Multiselect from 'multiselect-react-dropdown';
import axios from './../../api/axios';
import Loading from '../Loading';
import { useTable } from 'react-table';
import { Modal, Button } from 'react-bootstrap';










const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const MOBILE_REGEX = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
const REGISTER_URL = '/register';







const Equipments = () => {
	
	
	
	const [researches, setResearches] = useState([]);
	
	
	
	
	const [rolesArray,setRolesArray] = useState([])
	const [currentPage,setCurrentPage] =  useState(1)
	const [usersPerPage,setUsersPerPage] =  useState(12)
	const [hasMore,setHasMore] = useState(true)
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();
	const [image,setImage] = useState('')
	const [imageUrl,setImageUrl] = useState(MissingAvatar)
	const intupAvatarRef = useRef(null)
	const imageMimeType = /image\/(png|jpg|jpeg)/i;
	const fileReader = new FileReader()
	const multiselectRef  = useRef('')	
	let roleState = {
    options: [{name: 'Collaborator', id: 1},
	{name: 'Designer', id: 2},
	{name: 'React Developer', id: 3},
	{name: 'Promotion', id: 4},
	{name: 'Advertisement', id: 5},
]
};
















/*----------------ADD USER---------------------*/
const errRef = useRef('');
const user = useRef('')
const firstname = useRef('')
const lastname = useRef('')
const pwd = useRef('')
const roles = useRef('')

const [validName, setValidName] = useState(false);
const [validPwd, setValidPwd] = useState(false);
const [errMsg, setErrMsg] = useState('');

const formData = new FormData()

useEffect(() => {
    setValidName(USER_REGEX.test(user.current));
}, [user])

useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd.current));
}, [pwd])
const handleSubmit = async (e) => {
	e.preventDefault();

	//if button enabled with JS hack
	// const v1 = USER_REGEX.test(user.current);
	// const v2 = PWD_REGEX.test(pwd.current);
	// if (!v1 || !v2) {
	// 	setErrMsg("Invalid Entry");
	// 	return;
	// }     

	const newUser = {
		user:user.current, 
		pwd:pwd.current,
		firstname:firstname.current,
		lastname:lastname.current,
		roles:roles.current
	}        
	
	formData.append('text', JSON.stringify(newUser))
	formData.append('image',image)
	try {
		const response = await axios.post(REGISTER_URL,
			formData,
			{
				headers: {  "Content-Type": "multipart/form-data", },
				withCredentials: true
			}
		);
		//console.log(JSON.stringify(response?.data));
		//console.log(JSON.stringify(response))

		//clear state and controlled inputs
		debugger
		firstname.current='';
		lastname.current='';
		pwd.current='';
		user.current='';
		user.roles='';
		
	} catch (err) {
		if (!err?.response) {
			setErrMsg('No Server Response');
		} else if (err.response?.status === 409) {
			setErrMsg('Username Taken');
		} else {
			setErrMsg(' Failed')
		}
	}

}
const onRoleSelect = (data) =>{
	let rolesArr = []
	for(let role of data){
		rolesArr.push(Object.values(role)[0])
	}
	setRolesArray(prev => (prev = rolesArr))
}
const onRoleDelete = (data) =>{
	let rolesArr = []
	for(let role of data){
		rolesArr.push(Object.values(role)[0])
	}
	setRolesArray(prev => (prev = rolesArr))
	
	//reset selected options colors
	const elems = document.querySelectorAll(".chips")
	elems.forEach(element => {
		element.classList.remove('chips')
	});
}
const onAdd = (e) => {
	roles.current = rolesArray
	//multiselectRef.current.resetSelectedValues()
	const elems = document.querySelectorAll(".chip")
	elems.forEach(element => {
		element.classList.add('chips')
	});

	
}
/*----------------ADD USER END---------------------*/
	fileReader.onloadend = () => {
		setImageUrl(fileReader.result)
	}
	
	const handleChangeFile = async(event) => {
		const image = event.target.files[0];
		if (!image.type.match(imageMimeType)) {
			alert("Image mime type is not valid");
			return;
		  }
		  debugger
		setImage(image);
		 try{ 
		    formData.append('image',event.target.files[0])
		 }catch(err){
		     console.warn(err)
		 }
	}
	useEffect(() => {
		let fileReader, isCancel = false;
		if (image) {
		  fileReader = new FileReader();
		  fileReader.onload = (e) => {
			const { result } = e.target;
			if (result && !isCancel) {
			  setImageUrl(result)
			}
		  }
		  fileReader.readAsDataURL(image);
		}
		return () => {
		  isCancel = true;
		  if (fileReader && fileReader.readyState === 1) {
			fileReader.abort();
		  }
		}    
	  }, [image]);
	const handleDrop = (event) => {
		event.preventDefault()
		if (event.stopPropagation)
	   { event.stopPropagation()  }
		if(event.dataTransfer.files && event.dataTransfer.files.length){
			setImage(event.dataTransfer.files[0])
			fileReader.readAsDataURL(event.dataTransfer.files[0])
		}
	}
	const handleDragEmpty = (event) => {
		event.preventDefault()
		if (event.stopPropagation)
		{ event.stopPropagation()  }
		   
	}


    const pagesVisited = currentPage * usersPerPage
    const currentUsers = researches.slice(pagesVisited,pagesVisited+usersPerPage)
    const pageCount = Math.ceil(researches.length/usersPerPage)


    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getResearches = async () => {
            try {
                const response = await axiosPrivate.post('/equipmentList', {
                    signal: controller.signal,
					page:currentPage,
					onPage:Math.round(window.innerHeight/100*1.5)
                });
                isMounted && setResearches(prevUsers => [...prevUsers,...response.data.jsonString]);
				setCurrentPage(prev => prev+1)
            } catch (err) {
                console.error(err);
                navigate('/login', { state: { from: location }, replace: true });
            }
        }

        getResearches();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [])

	
	


	
const generateData = (start, length = 1) =>
  Array.from({ length }).map((_, i) => ({
    username: 'hgzraryan',
    firstname: 'Hartyun',
    lastname: 'Gzraryan',
    email: 'hgzraryan@yandex.ru',
    roles: 'dded',
  }));
	
	const getUsers = async () => {
		try {
			const response = await axiosPrivate.post('/equipmentList', {
				page:currentPage,
				onPage:usersPerPage
			});
			
			
			//console.log(response);
			
			setTimeout(() => {
				if(response.data.jsonString.length === 0 || response.data.jsonString.length < 12){
					setHasMore(false)
				}
				setResearches(prevUsers => [...prevUsers,...response.data.jsonString]);
				setCurrentPage(prev => prev+1)
			}, 500);
		} catch (err) {
			console.error(err);
			navigate('/login', { state: { from: location }, replace: true });
		}
	}

	
	
	
	
	//-------------------------

    const refreshPage = () => {
        let paglink = document.querySelectorAll('.page-item');
        paglink[0].firstChild.click();
    }
    //-------------------

    //-------------------
    const [showCreateNew, setIsActive] = useState(false);
    const CreateNew = event => {
        setIsActive(current => !current);
    };

  
    //-------------------



    const setUserTypeStyle = (userType) => {

        switch (userType) {
         case "Admin":
         return "badge badge-soft-success  my-1  me-2"
         case "Editor":
         return "badge badge-soft-violet my-1  me-2"
         case "User":
         return "badge badge-soft-danger my-1  me-2"
         case "Approver":
         return "badge badge-soft-light my-1  me-2"
         
         default:
             break;
        }
     }







     const [items, setItems] = useState(generateData(0));
     const [isOpen, setIsOpen] = useState(false);
   /*
     const fetchMoreData = () => {
       setTimeout(() => {
         setItems((prevItems) => [
           ...prevItems,
           ...generateData(prevItems.length),
         ]);
       }, 1500);
     };
	 */
	 
     const columns = React.useMemo(
       () => [
	     {
           Header: ' ',
           //accessor: 'select',
         },
         {
           Header: 'Հետազոտության տեսակը',
           accessor: 'username',
         },
         {
           Header: 'Դասակարգ',
           accessor: 'firstname',
         }
       ],
       []
     );
   
     const tableInstance = useTable({ columns, data: items });
   
     const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
       tableInstance;
	   

	   
	   
	   
	   
	   
	   
	   
  return (
     <div>
			<div className="contactapp-wrap">                
                <div className="contactapp-content">
					<div className="contactapp-detail-wrap">
						<header className="contact-header">
							<div className="d-flex align-items-center">
								<div className="dropdown">
									<a className="contactapp-title link-dark" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
										<h1>Հետ․ տեսակներ</h1>
									</a>
									{/*
									<div className={showUserMenu ? 'dropdown-menu show' : 'dropdown-menu'} >
										<a className="dropdown-item" href="#"><span className="feather-icon dropdown-icon"><FeatherIcon icon="users" /></span><span>Users1</span></a>
										<a className="dropdown-item" href="#"><span className="feather-icon dropdown-icon"><FeatherIcon icon="star" /></span><span>Users2</span></a>
										<a className="dropdown-item" href="#"><span className="feather-icon dropdown-icon"><FeatherIcon icon="archive" /></span><span>Users3</span></a>
										<a className="dropdown-item" href="#"><span className="feather-icon dropdown-icon"><FeatherIcon icon="edit" /></span><span>Users4</span></a>
									</div>
									*/}
								</div>
								<div className="dropdown ms-3">
									<button className="btn btn-sm btn-outline-secondary flex-shrink-0 dropdown-toggle d-lg-inline-block d-none" data-bs-toggle="dropdown" onClick={CreateNew}>Գրանցել նոր</button>
									<div className={showCreateNew ? 'dropdown-menu show' : 'dropdown-menu'} data-popper-placement="bottom">
										
										

										
										<a className="dropdown-item" href="#" onClick={() => setIsOpen(true)}>
                                             <span className="feather-icon dropdown-icon"></span><span>Հետ․ տեսակ</span>
                                        </a>
										
										<Modal show={isOpen} size='xl' onHide={() => setIsOpen(false)}>
										   <Modal.Header closeButton>
											 <Modal.Title style={{ width: '100%', textAlign: 'center' }}>
											   Ավելացնել նոր աշխատակից
											 </Modal.Title>
										   </Modal.Header>
										   <Modal.Body>
												<div>
													<div className="contact-body contact-detail-body">
														<div data-simplebar className="nicescroll-bar">
															<div className="d-flex flex-xxl-nowrap flex-wrap">
																<div className="contact-info w-100">
																	
																	<div className="text-center mt-5">
																		<div className="dropify-circle edit-img">
																		<img
                    														width={'100px'}
                    														height={'100px'}
                    														style={{borderRadius:"50%", cursor:"pointer"}}
                    														onClick={()=>intupAvatarRef.current.click()}
                    														src = {imageUrl}
                    														className = "avatar_upload_preview"
                    														alt = "preview"
                    														onDrop={handleDrop}
                    														onDragEnter={handleDragEmpty}
                    														onDragOver={handleDragEmpty}
                    													/> 
																		<input 
																			hidden 
																			type="file" 
																			ref={intupAvatarRef} 
																			onChange={handleChangeFile} 
																			className="dropify-1" 
																			//data-default-file="dist/img/avatar2.jpg"
																		/>
																		</div>
																		<div className="cp-name text-truncate mt-3">Mendaline Shane</div>
																		<p>No phone calls Always busy</p>
																		<div className="rating rating-yellow my-rating-4" data-rating="3"></div>
																		<ul className="hk-list hk-list-sm justify-content-center mt-2">
																			<li>
																				<a className="btn btn-icon btn-soft-primary btn-rounded" href="#"><span className="icon"><span className="feather-icon"><FeatherIcon icon="mail" /></span></span></a>
																			</li>
																			<li>
																				<a className="btn btn-icon btn-soft-success btn-rounded" href="#"><span className="icon"><span className="feather-icon"><FeatherIcon icon="phone" /></span></span></a>
																			</li>
																			<li>
																				<a className="btn btn-icon btn-soft-danger btn-rounded" href="#"><span className="icon"><span className="feather-icon"><FeatherIcon icon="video" /></span></span></a>
																			</li>
																		</ul>
																	</div>
																	<div className="card">
																		<div className="card-header">
																			<a href="#">Անձնական տվյալներ</a>
																			<button className="btn btn-xs btn-icon btn-rounded btn-light" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Edit"><span className="icon" data-bs-toggle="modal" data-bs-target="#editInfo"><span class="feather-icon"><FeatherIcon icon="edit-2" /></span></span></button>
																		</div>
																		<div className="card-body">
																			
																			
																			<div className="modal-body">
																				<form>
																					<div className="row gx-3">
																						<div className="col-sm-6">
																							<div className="form-group">
																								<label className="form-label"  htmlFor="firstname">Անուն</label>
																								<input 
																								type="text" 
																								name="name"
																								placeholder="Անուն"
																								id="firstname" 
																								className="form-control"
																								autoComplete="off"
																								value={firstname.current.value}
																								onChange={(e) => (firstname.current=e.target.value)} 
																								required 
																								/>
																							</div>
																						</div>
																						<div className="col-sm-6">
																							<div className="form-group">
																								<label className="form-label" htmlFor="lastname">Ազգանուն</label>
																								<input 
																								type="text" 
																								name="lastname" 
																								placeholder="Ազգանուն"
																								id="lastname" 
																								className="form-control"
																								autoComplete="off" 
																								value={lastname.current.value} 
																								onChange={(e) => (lastname.current=e.target.value)}
																								required
																								/>
																							</div>
																						</div>
																					</div>
																					<div className="row gx-3">
																						<div className="col-sm-6">
																							<div className="form-group">
																								<label className="form-label">Էլ․ հասցե</label>
																								<input className="form-control" type="email" value="" placeholder="Email" name="email" />
																							</div>
																						</div>
																						<div className="col-sm-6">
																							<div className="form-group">
																								<label className="form-label">Հեռախոս</label>
																								<input className="form-control" type="text" value="" placeholder="Հեռախոս" name="phone" />
																							</div>
																						</div>
																					</div>
																					<div className="row gx-3">
																						<div className="col-sm-6">
																							<div className="form-group">
																								<label className="form-label" htmlFor="username">Ծածկանուն</label>
																								<input 
																								type="text" 
																								name="username" 
																								placeholder="Ծածկանուն" 
																								id="username"
																								className="form-control" 
																								autoComplete="off"
																								value={user?.current.value}
																								onChange={(e) => (user.current = e.target.value)}
																								required 
																								/>
																							</div>
																						</div>
																						<div className="col-sm-6">
																							<div className="form-group">
																								<label className="form-label" htmlFor="password">Ծածկագիր</label>
																								<input 
																								type="password" 
																								name="password" 
																								placeholder="Ծածկագիր" 
																								id="password"
																								className="form-control" 
																								autoComplete="off"
																								value={pwd.current.value}
																								onChange={(e) => (pwd.current = e.target.value)}
																								required 
																								/>
																							</div>
																						</div>
																					</div>
																					<div className="row gx-3">
																						<div className="col-sm-12">
																							<label className="form-label">Location</label>
																							<div className="form-group">
																								<input className="form-control" type="text" value="Lane 1" placeholder="Line 1" name="add1" />
																							</div>	
																							<div className="form-group">
																								<input className="form-control" type="text" value="Newyork" placeholder="Line 2" name="add2" />
																							</div>
																						</div>
																					</div>
																				</form>
																			</div>
									
																			
																			
																		</div>
																	</div>
																	<div className="separator-full"></div>
																	<div className="card">
																		<div className="card-header">
																			<a href="#">Հավելյալ տվյալներ</a>
																			<button className="btn btn-xs btn-icon btn-rounded btn-light" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Edit"><span class="icon"  data-bs-toggle="modal" data-bs-target="#moreContact"><span class="feather-icon"><FeatherIcon icon="edit-2" /></span></span></button>
																		</div>
																		<div className="card-body">
																			<div className="modal-body">
																				<form>
																					<div className="row gx-3">
																						<div className="col-sm-6">
																							<div className="form-group">
																								<label className="form-label">Designation</label>
																								<input className="form-control" type="text" value="Mandaline" placeholder="First Name" name="name1" />
																							</div>
																						</div>
																						<div className="col-sm-6">
																							<div className="form-group">
																								<label className="form-label">Company</label>
																								<input className="form-control" type="text" value="Shane" placeholder="Last Name" name="lastname1" />
																							</div>
																						</div>
																					</div>
																					<div className="row gx-3">
																						<div className="col-sm-6">
																							<div className="form-group">
																								<label className="form-label">Language</label>
																								<input className="form-control" type="email" value="contct@hencework.com" placeholder="Email Id" name="emailid1" />
																							</div>
																						</div>
																						<div className="col-sm-6">
																							<div className="form-group">
																								<label className="form-label">Birthday</label>
																								<input className="form-control" type="text" value="10/24/1984" placeholder="Phone No" name="birthday1"/>
																							</div>
																						</div>
																					</div>
																					
																				</form>
																			</div>
																		</div>
																	</div>
																	<div className="separator-full"></div>
																	<div className="card">
																		<div className="card-header">
																			<a href="#">Դերեր</a>
																			<button className="btn btn-xs btn-icon btn-rounded btn-light" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Add Tags"><span className="icon" data-bs-toggle="modal" data-bs-target="#tagsInput"><span className="feather-icon"><FeatherIcon icon="edit-2" /></span></span></button>
																		</div>
																		<div className="card-body">
																			<div className="modal-body">
																				<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
																					<span aria-hidden="true">×</span>
																				</button>
																				<h6 className="text-uppercase fw-bold mb-3">Add Tag</h6>
																				<form>
																					<div className="row gx-3">
																						<div className="col-sm-12">
																							<div className="form-group">
																								<Multiselect
																									options={roleState.options} // Options to display in the dropdown
																									displayValue="name" // Property name to display in the dropdown options
																									//selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
																									onSelect={onRoleSelect} // Function will trigger on select event
																									onRemove={onRoleDelete} // Function will trigger on remove event
																									closeOnSelect = {true}
																									id="input_tags_3"
																									className="form-control"
																									ref={multiselectRef}
																									hidePlaceholder={true}
																									placeholder = "Select Role"
																								/>
																								{/* <select id="input_tags_3" className="form-control" multiple="multiple">
																									<option selected="selected">Collaborator</option>
																									<option selected="selected">Designer</option>
																									<option selected="selected">React Developer</option>
																									<option selected="selected">Promotion</option>
																									<option selected="selected">Advertisement</option>
																								</select> */}
																							</div>
																						</div>
																					</div>
																					<button type="button" className="btn btn-primary float-end" onClick={onAdd} data-bs-dismiss="modal">Add</button>
																				</form>
																			</div>
																		</div>
																	</div>


																	<div className="modal-footer align-items-center">
																		<button type="button" className="btn btn-secondary" onClick={() => setIsOpen(false)}>Չեղարկել</button>
																		<button type="button" onClick={handleSubmit} className="btn btn-primary" data-bs-dismiss="modal">Ավելացնել</button>
																	</div>
																</div>
																
															</div>
														</div>
													</div>
												</div>
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
								<a className="btn btn-icon btn-flush-dark flush-soft-hover dropdown-toggle no-caret active" href="#" data-bs-toggle="dropdown">
									<span className="icon">
										<span className="feather-icon">
											<FeatherIcon icon="list" />
										</span>
									</span>
								</a>
								<div className="dropdown-menu dropdown-menu-end">
									<a className="dropdown-item active" href="contact.html"><span className="feather-icon dropdown-icon"><FeatherIcon icon="list" /></span><span>List View</span></a>
									<a className="dropdown-item" href="contact-cards.html"><span className="feather-icon dropdown-icon"><FeatherIcon icon="grid" /></span><span>Grid View</span></a>
									<a className="dropdown-item" href="#"><span className="feather-icon dropdown-icon"><FeatherIcon icon="server" /></span><span>Compact View</span></a>
								</div>
								<a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover no-caret d-sm-inline-block d-none" href="#" data-bs-toggle="tooltip" data-placement="top" onClick={ refreshPage } title="" data-bs-original-title="Refresh"><span className="icon"><span className="feather-icon"><FeatherIcon icon="refresh-cw" /></span></span></a>
									<div className="v-separator d-lg-block d-none"></div>
                                         <a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret  d-lg-inline-block d-none  ms-sm-0" href="#" data-bs-toggle="dropdown"><span className="icon" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Manage Contact"><span className="feather-icon"><FeatherIcon icon="settings" /></span></span></a>
                                         <div className="dropdown-menu dropdown-menu-end">
                                             <a className="dropdown-item" href="#">Manage User</a>
                                             <a className="dropdown-item" href="#">Import</a>
                                             <a className="dropdown-item" href="#">Export</a>
                                             <div className="dropdown-divider"></div>
                                             <a className="dropdown-item" href="#">Send Messages</a>
                                             <a className="dropdown-item" href="#">Delegate Access</a>
                                         </div>
                                         <a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret d-lg-inline-block d-none" href="#" data-bs-toggle="dropdown"><span className="icon" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="More"><span className="feather-icon"><FeatherIcon icon="more-vertical" /></span></span></a>
                                         <div className="dropdown-menu dropdown-menu-end">
                                             <a className="dropdown-item" href="profile.html"><span className="feather-icon dropdown-icon"><FeatherIcon icon="star" /><i data-feather="star"></i></span><span>Stared Contacts</span></a>
                                             <a className="dropdown-item" href="#"><span className="feather-icon dropdown-icon"><FeatherIcon icon="archive" /><i data-feather="archive"></i></span><span>Archive Contacts</span></a>
                                             <div className="dropdown-divider"></div>
                                             <a className="dropdown-item" href="email.html"><span className="feather-icon dropdown-icon"><FeatherIcon icon="slash" /><i data-feather="slash"></i></span><span>Block Content</span></a>
                                             <a className="dropdown-item" href="email.html"><span className="feather-icon dropdown-icon"><FeatherIcon icon="external-link" /><i data-feather="external-link"></i></span><span>Feedback</span></a>
                                         </div>
                                         <a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover hk-navbar-togglable d-sm-inline-block d-none" href="#" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Collapse">
                                             <span className="icon">
                                                 <span className="feather-icon"><FeatherIcon icon="list" /><i data-feather="chevron-up"></i></span>
                                                 <span className="feather-icon d-none"><FeatherIcon icon="list" /><i data-feather="chevron-down"></i></span>
                                             </span>
                                         </a>
                                     </div>
                                 </header>
                                 <div className="contact-body">
                                     <div data-simplebar className="nicescroll-bar">
                                         <div className="contact-list-view" >
 
											
											
											<div id='scrollableDiv' style={{ height: '80vh', overflow: 'auto' }}>
											   <InfiniteScroll
												 dataLength={researches.length}
												 next={getUsers}
												 hasMore={hasMore}
												 loader={<Loading />}
												 scrollableTarget='scrollableDiv'
												 endMessage={<p>Տվյալներ չեն հայտնաբերվել բեռնելու համար:</p>}
											   >
												 <table  className='table table-striped'>
												   <thead>
													 {headerGroups.map((headerGroup) => (
													   <tr {...headerGroup.getHeaderGroupProps()}>
														 {headerGroup.headers.map((column) => (
														   <th {...column.getHeaderProps()}>
															 {column.render('Header')}
														   </th>
														 ))}
													   </tr>
													 ))}
												   </thead>
												   
												   
												   
												   {/*
												   <tbody {...getTableBodyProps()}>
													 {rows.map((row, i) => {
													   prepareRow(row);
													   return (
														 <tr {...row.getRowProps()}>
														   {row.cells.map((cell) => {
															 return (
															   <td {...cell.getCellProps()}>
																 {cell.render('Cell')}
															   </td>
															 );
														   })}
														 </tr>
													   );
													 })}
												   </tbody>
												   */}
												   
												   
												  {researches?.length &&
                                                  (<tbody {...getTableBodyProps()}>
                                                     {researches.map((user,i) => 
                                                     (<tr>
                                                        <td><input type="checkbox" className="form-check-input check-select-all" id="customCheck1"/></td>
                                                        
                                                         <td>
                                                             <div className="media align-items-center">
                                                                 <div className="media-head me-2">
                                                                     <div className="avatar avatar-xs avatar-rounded">
																	 {/*<img src={user.img ?? "dist/img/avatar1.jpg"} alt="user" className="avatar-img"/>*/}
                                                                     </div>
                                                                 </div>
                                                                 <div className="media-body">
                                                                     <span className="d-block text-high-em">{user.research}</span> 
                                                                 </div>
                                                             </div>
                                                         </td>
                                                         <td>{user.category_name}</td>
                                                        

                                                         <td>
                                                             <div className="d-flex align-items-center">
                                                                 <div className="d-flex">
                                                                     <a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Archive" href="#"><span className="icon"><span className="feather-icon"><FeatherIcon icon="archive" /></span></span></a>
                                                                     <a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Edit" href="edit-contact.html"><span className="icon"><span className="feather-icon"><FeatherIcon icon="edit" /></span></span></a>
                                                                     <a className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover del-button" data-bs-toggle="tooltip" data-placement="top" title="" data-bs-original-title="Delete" href="#"><span className="icon"><span className="feather-icon"><FeatherIcon icon="trash" /></span></span></a>
                                                                 </div>
                                                                 <div className="dropdown">
                                                                     <button className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret" aria-expanded="false" data-bs-toggle="dropdown"><span className="icon"><span className="feather-icon"><FeatherIcon icon="more-vertical" /></span></span></button>
                                                                     <div className="dropdown-menu dropdown-menu-end">
                                                                         <a className="dropdown-item" href="edit-contact.html"><span className="feather-icon dropdown-icon"><FeatherIcon icon="list" /><FeatherIcon icon="edit" /></span><span>Edit Contact</span></a>
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
                                                     ))}
                                                     
                                                 </tbody>
                                                 )}
												   
												   
												   
												   
												   
												   
												   
												 </table>
											   </InfiniteScroll>
											 </div>
											
											
											
										</div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>


	 
	 
	 
   </div>
  )
};

export default Equipments;





