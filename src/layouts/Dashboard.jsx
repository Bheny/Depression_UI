import React from 'react';
import SideBar from '../components/SideBar';
import HeaderMenu from '../components/HeaderMenu';
import { Outlet } from 'react-router';


const DashboardPageLayout = () => {
  return (
    <>
        <div className="flex ">
            
        
        <SideBar />
            <div className='w-full p-4 bg-[#ededed]'>
            <HeaderMenu />
            <Outlet />
            </div>

    
        </div>
       
        {/*<!-- Footer Area Start Here --> */}
        <footer className="w-full p-8 text-center">
              <div className="copyright">
                © Copyrights <a href="#">Depression Detector V1.0</a> 2023. All rights reserved.
                Designed by <a href="#">Trebnet</a>
              </div>
            </footer>
            {/* <!-- Footer Area End Here --> */}
    </>
  );
};

export default DashboardPageLayout;
