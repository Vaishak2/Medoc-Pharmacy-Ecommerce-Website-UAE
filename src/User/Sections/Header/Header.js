import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Logo from "../../../Assets/Logos/MedopharmaLogo.png";
import SearchIcon from "../../../Assets/Icons/search.png";
import Cart from "../../../Assets/Icons/shopping_cart.png";
import Fav from "../../../Assets/Icons/favorite.png";
import AccountCircle from "../../../Assets/Icons/account_circle.png";
import Menu from "../../../Assets/Icons/menu.png";
import DropDownArrow from "../../../Assets/Icons/chevron_forward.png";
import LogoutConfirmation from '../../Components/LogoutConfirmation/LogoutConfirmation';
import { Link } from 'react-router-dom';

function Header() {
  const [categories, setCategories] = useState([]);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [language, setLanguage] = useState('ENG');
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const [subSubcategories, setSubSubcategories] = useState([]);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  useEffect(() => {
    axios.get('http://194.238.23.134:3000/api/categories')
      .then(response => {
        setCategories(response.data.data);
        console.log(response.data.data);
      })
      .catch(error => {
        console.log("NOT WORKING");
      });
  }, []);

  const handleMouseEnter = () => {
    setShowSubmenu(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setShowSubmenu(false);
      setActiveCategory(null);
      setActiveSubcategory(null);
      setSubSubcategories([]);
    }, 300);

    setHoverTimeout(timeout);
  };

  const handleCategoryMouseEnter = (categoryId) => {
    clearTimeout(hoverTimeout);
    setActiveCategory(categoryId);
  };

  const handleSubcategoryMouseEnter = (subcategory) => {
    setActiveSubcategory(subcategory.id);
    setSubSubcategories(subcategory.subSubCategories || []);
  };

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  const handleLoginClick = () => {
    setIsModalOpen(true); // Show the modal
  };

  const handleLogoutConfirm = () => {
    setIsModalOpen(false);
    // Add your logout logic here
    console.log("User logged out");
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  return (
    <div className='main-container sm:w-[1440px] mx-auto sticky top-0 z-50 bg-white'>
      <div className='sm:w-[1440px]'>
        <div className='logo-section sm:h-[71px] mt-[16px] sm:mx-[120px] justify-between gap-1 sm:flex'>
          <div>
            <div className='logo'>
              <img className='sm:w-[86px] sm:h-[71px] cursor-pointer' src={Logo} alt="Logo" />
            </div>
          </div>
          <div className='search-bar sm:w-[512px] sm:h-[56px] border border-opacity-5 border-[#EBEBEB] rounded-[15px] bg-[#F9F9F9] sm:mt-[8px] sm:ml-[32px] sm:flex'>
            <img className='sm:w-[24px] sm:h-[24px] sm:ml-[16px] sm:my-[16px] cursor-pointer' src={SearchIcon} alt="Search" />
            <input className='w-[332px] focus:outline-none ml-[8px] bg-[#F9F9F9]' type="text" placeholder='Search for Medicines & Wellness Products' />
          </div>
          <div className='sm:w-[447px] sm:h-[56px] flex'>
            <div className='btn sm:w-[299px] sm:h-[56px] rounded-[8px] bg-[#304BA0] sm:mt-[8px] text-white content-center cursor-pointer sm:leading-[18px] sm:text-[14px]'>
              Book An Appointment
            </div>
            <div className="relative sm:ml-[40px] sm:my-auto py-[22px] flex">
              <div
                className="my-auto focus:outline-none cursor-pointer"
                onClick={handleDropdownToggle}
              >
                {language === 'ENG' ? 'ENG' : 'عربي'}
              </div>
              {isOpen && (
                <ul className="absolute left-0 mt-8 bg-white rounded shadow sm:w-[184px] sm:h-[117px] text-start z-50">
                  <li
                    className="px-4 pt-[24px] pb-[11px] cursor-pointer border-b"
                    onClick={() => handleLanguageChange('ENG')}
                  >
                    English
                  </li>
                  <li
                    className="px-4 pt-[9px] cursor-pointer"
                    onClick={() => handleLanguageChange('AR')}
                  >
                    عربي
                  </li>
                </ul>
              )}
              <img onClick={handleDropdownToggle} className='sm:w-[16px] sm:h-[9px] sm:ml-[7px] sm:my-auto' src={DropDownArrow} alt="Arrow" />
            </div>
            <div className='cart-fav sm:flex justify-center sm:ml-[24px]'>
              <img className='sm:w-[24px] sm:h-[24px] sm:ml-[24px] mt-[24px] cursor-pointer' src={Fav} alt="Favorite" />
              <img className='sm:w-[24px] sm:h-[24px] sm:ml-[24px] mt-[24px] cursor-pointer' src={Cart} alt="Cart" />
            </div>
            <div className='login-section flex cursor-pointer ml-[24px]'>
              <img className='sm:w-[24px] sm:h-[24px] sm:ml-[24px] mt-[24px]' src={AccountCircle} alt="Account" />
              <Link to={'/userLogin'}><div className='text-center justify-center mt-[24px] sm:ml-[8px] text-[14px] font-normal'>Login</div></Link>
            </div>
          </div>
        </div>
      </div>
      <div className='flex sm:w-[1440px] justify-center sm:h-[72px] sm:mt-[17px] border-t border-b border-#EAEAEA gap-1'>
        <div
          className="category sm:w-[170px] sm:h-[40px] border-[1px] border-[#D4D4D4] rounded-[8px] flex sm:my-auto relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img className='sm:w-[17px] sm:h-[11px] sm:ml-[16px] sm:my-auto justify-center content-center' src={Menu} alt="Menu" />
          <div className='sm:my-auto sm:ml-[16px] sm:text-[14px] sm:leading-[18px] text-center font-normal'>All Categories</div>
          {showSubmenu && (
            <div className="submenu absolute bg-white border z-50 border-[#D4D4D4]  w-[254px] text-start pt-6 pl-10 pb-[37px] text-[14px] mb-4 leading-4 font-normal sm:mt-12">
              {categories.length > 0 ? (
                categories.map(category => (
                  <div key={category.id} className="submenu-item p-2 hover:text-[#304ba0] hover:underline cursor-pointer">
                    {category.name}
                  </div>
                ))
              ) : (
                <div className="submenu-item p-2">Loading...</div>
              )}
            </div>
          )}
        </div>
       
        {categories && categories.map((category) => (
          <div
            key={category.id}
            className="relative flex font-normal sm:text-[14px] sm:leading-[16px] sm:my-auto sm:ml-[24px] cursor-pointer hover:text-[#304BA0] hover:underline hover:underline-offset-[28px]"
            onMouseEnter={() => handleCategoryMouseEnter(category.id)}
            onMouseLeave={handleMouseLeave}
          >
            {category.name}
            <img
              className="sm:w-[16px] sm:h-[9px] sm:ml-[7px] sm:my-auto"
              src={DropDownArrow}
              alt="Arrow"
            />
            {activeCategory === category.id && (
              <div
                className="fixed bg-white border z-50 border-[#D4D4D4] w-[1020px] columns-5 gap-24 text-black text-start font-semibold p-8"
                style={{ left: '312px', marginTop:'40px' }}
              >
                {category.subCategories && category.subCategories.map((subcategory) => (
                  <div
                    key={subcategory.id}
                    className="submenu-item p-2 cursor-pointer w-auto"
                  >
                    {subcategory.name}
                    <div className="absolute bg-white z-50 border-[#D4D4D4] text-black text-start font-normal">
                      <div>
                        {subcategory.subSubCategories.map(subSubcategory => (
                          <div className='hover:text-[#304BA0] w-36' key={subSubcategory.id}>
                            {subSubcategory.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#353533CC] backdrop-blur-sm bg-opacity-95">
        <LogoutConfirmation
          onConfirm={handleLogoutConfirm}
          onClose={handleModalClose}
        />
        </div>
      )}
     
    </div>
  );
}

export default Header;
