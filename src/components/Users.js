import React, { useState, useEffect } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { useNavigate, useLocation } from "react-router-dom";
import FeatherIcon from 'feather-icons-react';
import LoadingSpinner from "./LoadingSpinner";
import ReactPaginate from "react-paginate"



import Loading from './Loading';
import { useTable } from 'react-table';
import { Modal, Button } from 'react-bootstrap';


	
  


const Users = () => {
    const [users, setUsers] = useState([]);
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();





    const [currentPage,setCurrentPage] =  useState(1)
    const [usersPerPage] =  useState(8)

    const pagesVisited = currentPage * usersPerPage
    const currentUsers = users.slice(pagesVisited,pagesVisited+usersPerPage)
    const pageCount = Math.ceil(users.length/usersPerPage)


    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        const getUsers = async () => {
            try {
                const response = await axiosPrivate.get('/users', {
                    signal: controller.signal
                });
                //console.log(response.data);
                isMounted && setUsers(response.data);
            } catch (err) {
                console.error(err);
                navigate('/login', { state: { from: location }, replace: true });
            }
        }

        getUsers();

        return () => {
            isMounted = false;
            controller.abort();
        }
    }, [])
	
	
	
	
	
	
	
const generateData = (start, length = 20) =>
  Array.from({ length }).map((_, i) => ({
    id: 12,
    name: '33e3e3',
    address: 'wewewewew',
    email: 'wewewew@as.as',
    phone: 'dded',
    dob: 'eededed',
  }));
	
	
	
	
	
	
	
	
	
	//-------------------------
    const handlePageClick = ({ selected: selectedPage }) => {
        setCurrentPage(selectedPage);
    }
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
   
     const fetchMoreData = () => {
       setTimeout(() => {
         setItems((prevItems) => [
           ...prevItems,
           ...generateData(prevItems.length),
         ]);
       }, 1500);
     };
   
     const columns = React.useMemo(
       () => [
         {
           Header: 'Username',
           accessor: 'username',
         },
         {
           Header: 'Firstname',
           accessor: 'firstname',
         },
         {
           Header: 'Lastname',
           accessor: 'lastname',
         },
         {
           Header: 'Email Address',
           accessor: 'email',
         },
         {
           Header: 'Roles',
           accessor: 'roles',
         },
         {
           Header: 'Actions',
           accessor: 'actions',
         },
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
										<h1>Աշխատակիցներ</h1>
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
										
										
                                        <Button onClick={() => setIsOpen(true)}>
                                             <span className="feather-icon dropdown-icon"></span><span>Աշխատակից</span>
                                        </Button>
										
										<Modal show={isOpen} size='xl' onHide={() => setIsOpen(false)}>
										   <Modal.Header closeButton>
											 <Modal.Title style={{ width: '100%', textAlign: 'center' }}>
											   React Scrollable Table Modal
											 </Modal.Title>
										   </Modal.Header>
										   <Modal.Body>
												<div>
													hello
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
                                         <div className="contact-list-view" style={{height:'650px', overflow:"scroll"}}>
 
											
											
											<div id='scrollableDiv' style={{ height: '80vh', overflow: 'auto' }}>
											   <InfiniteScroll
												 dataLength={items.length}
												 next={fetchMoreData}
												 hasMore={true}
												 loader={<Loading />}
												 scrollableTarget='scrollableDiv'
											   >
												 <table {...getTableProps()} className='table table-striped'>
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
												   
												   
												   
												   
												   
												   
												 </table>
											   </InfiniteScroll>
											 </div>
											
											
											
										</div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>

					
					 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	    {/*
   <!-- <div id='scrollableDiv' style={{ height: '80vh', overflow: 'auto' }}>
           <InfiniteScroll
             dataLength={items.length}
             next={fetchMoreData}
             hasMore={true}
             loader={<Loading />}
             scrollableTarget='scrollableDiv'
           >
             <table {...getTableProps()} className='table table-striped'>
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
             </table>
           </InfiniteScroll>
         </div>
   -->
  */}
	 
	 
	 
   </div>



    );
};

export default Users;
