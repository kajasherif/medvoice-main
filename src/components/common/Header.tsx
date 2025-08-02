import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="absolute top-[13px] left-[336px] w-[1078px] h-[67px]">
      <div className="flex items-center justify-between w-full h-full bg-global-4 rounded-[10px] px-6">
        <div className="flex items-center gap-6">
          <span className="text-[19px] font-raleway font-medium leading-[23px] text-global-1">
            Thu, 3 April
          </span>
          <span className="text-[19px] font-raleway font-medium leading-[23px] text-global-1">
            4:34 pm
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <img 
            src="/images/img_ellipse_1.png" 
            alt="Profile"
            className="w-[42px] h-[42px] rounded-[21px] cursor-pointer"
            onClick={() => navigate('/profile')}
          />
          
          <div className="flex flex-col">
            <span className="text-[16px] font-raleway font-semibold leading-[19px] text-global-1">
              Dr. Jhon Doe
            </span>
            <span className="text-[14px] font-raleway font-normal leading-[17px] text-header-1">
              Doctor
            </span>
          </div>
          
          <div className="w-[1px] h-[34px] bg-global-1 opacity-30"></div>
          
          <img 
            src="/images/img_famiconsnotificationsoutline.svg" 
            alt="Notifications"
            className="w-[31px] h-[31px] cursor-pointer hover:opacity-80"
          />
          
          <img 
            src="/images/img_weuisettingoutlined.svg" 
            alt="Settings"
            className="w-[31px] h-[31px] cursor-pointer hover:opacity-80"
          />
          
          <img 
            src="/images/img_iconoirlogout.svg" 
            alt="Logout"
            className="w-[28px] h-[28px] cursor-pointer hover:opacity-80"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;