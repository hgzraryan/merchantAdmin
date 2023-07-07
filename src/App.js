import Register from './components/Register';
import Login from './components/Login';
import PrivacyPolicy from './components/PrivacyPolicy';
import Home from './components/Home';
import Users from './components/views/Users';
import Layout from './components/layouts/Layout';
import Editor from './components/Editor';
import Admin from './components/Admin';
import UserAdd from './components/UserAdd';
import Missing from './components/Missing';
import Unauthorized from './components/Unauthorized';
import Lounge from './components/Lounge';
import LinkPage from './components/LinkPage';
import RequireAuth from './components/RequireAuth';
import PersistLogin from './components/PersistLogin';
import MainTemplate from './components/layouts/MainTemplate';

import Patients from './components/views/Patients';
import Agents from './components/views/Agents';
import Organizations from './components/views/Organizations';
import Prices from './components/views/Prices';
import DiscountCards from './components/views/DiscountCards';
import Reagents from './components/views/Reagents';
import Equipments from './components/views/Equipments';
import Researchlists from './components/views/Researchlists';

import { Routes, Route } from 'react-router-dom';
//import React, { useState, useEffect } from "react";


const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Approver': 6010,
  'Admin': 5150,
}

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="register" element={<Register />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />
 


        {/* we want to protect these routes */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
            <Route path="/" element={<MainTemplate />} >
              
              
              
              <Route index element={<Home />} />
              <Route path="agents" element={<Agents />} />
              <Route path="organizations" element={<Organizations />} />
			  

              <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
                <Route path="patients" element={<Patients />} />
				<Route path="admin/useradd" element={<UserAdd />} />
				<Route path="users" element={<Users />} />
				<Route path="admin" element={<Admin />} />
				<Route path="settings/prices" element={<Prices />} />
				<Route path="settings/discountCards" element={<DiscountCards />} />
				<Route path="settings/reagents" element={<Reagents />} />
				<Route path="settings/equipments" element={<Equipments />} />
				<Route path="settings/researchlists" element={<Researchlists />} />
              </Route>


              <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
                <Route path="editor" element={<Editor />} />
              </Route>


              <Route element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />}>
                <Route path="lounge" element={<Lounge />} />
              </Route>
              
              {/* catch all */}
              <Route path="*" element={<Missing />} />
            </Route>


            </Route>
          </Route>

          

          

      </Route>
    </Routes>
  );
}

export default App;