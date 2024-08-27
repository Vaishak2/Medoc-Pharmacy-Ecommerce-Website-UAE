import React, { useState, useEffect, useRef } from 'react';
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
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false)



  const userToken = localStorage.getItem("userToken")

  const dropdownRef = useRef(null)
  const AllCategoryRef = useRef(null)
  const LanguageRef = useRef(null)
  useEffect(() => {

    //API Calling
    axios.get('http://194.238.23.134:3000/api/categories')
      .then(response => {
        setCategories(response.data.data);
        console.log(response.data.data);
      })
      .catch(error => {
        console.log("NOT WORKING");
      });

    // Function to handle clicks outside the dropdown
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsAccountDropdownOpen(false);
      }
      else if (AllCategoryRef.current && !AllCategoryRef.current.contains(event.target)) {
        setShowSubmenu(false);
      }
      else if(LanguageRef.current && !LanguageRef.current.contains(event.target)){
        setLanguage("")
      }
      
    };

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);


    return () => {
      // Unbind the event listener on cleanup
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef][AllCategoryRef]);

  const handleMouseEnter = () => {
    setShowSubmenu(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {

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
    localStorage.removeItem("userToken")
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };
  const toggleAccountDropdown = () => {
    setIsAccountDropdownOpen(!isAccountDropdownOpen)
  }
  return (
    <div className='main-container  mx-auto sticky top-0 z-50 bg-white'>
      <div className='mx-auto'>
        <div className='logo-section sm:h-[71px] mt-[16px] sm:mx-[120px] justify-between gap-1 sm:flex'>
          <div>
            <div className='logo'>
              <Link to={"/"}> <img className='sm:w-[86px] sm:h-[71px] cursor-pointer' src={Logo} alt="Logo" /></Link>
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
            <div className='cart-fav sm:flex justify-center gap-6 sm:ml-[24px]'>
              <div><Link to={'myaccount?section=2'}><img className='sm:w-[24px] sm:h-[24px] sm:ml-[24px] mt-[24px] cursor-pointer' src={Fav} alt="Favorite" /></Link></div>
              <div><Link to={'cart'}><img className='sm:w-[24px] sm:h-[24px] sm:ml-[24px] mt-[24px] cursor-pointer' src={Cart} alt="Cart" /></Link></div>
            </div>
            <div className='login-section flex cursor-pointer ml-[24px] relative' onClick={toggleAccountDropdown}>
              <img className='sm:w-[24px] sm:h-[24px] sm:ml-[24px] mt-[24px]' src={AccountCircle} alt="Account" />
              {userToken ? null :
                <Link to={'/userLogin'}><div className='text-center justify-center mt-[24px] sm:ml-[8px] text-[14px] font-normal'>Login</div></Link>
              }
              {isAccountDropdownOpen && (
                <ul ref={dropdownRef} className="absolute right-0 mt-[89px] bg-white rounded-lg p-4 sm:w-[224px] sm:h-[276px] shadow-lg text-justify text-sm z-50">

                  <li className="px-4 py-2 cursor-pointer sm:font-medium hover:font-medium border-b">
                    <Link to="/about">Hello User...!</Link>
                  </li>
                  <li className="px-4 py-2 cursor-pointer hover:font-medium">
                    <Link to="myaccount?section=1">My orders</Link>
                  </li>
                  <li className="px-4 py-2 cursor-pointer hover:font-medium">
                    <Link to="myaccount?section=2">My wishlist</Link>
                  </li>
                  <li className="px-4 py-2 cursor-pointer hover:font-medium border-b">
                    <Link to="myaccount?section=3">Saved address</Link>
                  </li>
                  <li className="px-4 py-2 cursor-pointer hover:font-medium">
                    <Link to="/about">Need help !</Link>
                  </li>
                  <li className="px-4 py-2 cursor-pointer hover:font-medium">
                    <Link to="/about">About</Link>
                  </li>
                  {userToken ?
                    <li className="px-4 py-2 cursor-pointer hover:font-medium" onClick={handleLoginClick}>Logout</li> : null
                  }
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className='flex  justify-center sm:h-[72px] sm:mt-[17px] border-t border-b border-#EAEAEA gap-1'>
        {/* All Category Section */}
        <div
          className="category sm:w-[170px] sm:h-[40px] border-[1px] border-[#D4D4D4] rounded-[8px] flex sm:my-auto cursor-pointer relative"
          onClick={() => setShowSubmenu(!showSubmenu)}  // Toggle submenu visibility on click
        >
          <img className='sm:w-[17px] sm:h-[11px] sm:ml-[16px] sm:my-auto justify-center content-center' src={Menu} alt="Menu" />
          <div className='sm:my-auto sm:ml-[16px] sm:text-[14px] sm:leading-[18px] text-center font-normal'>All Categories</div>
          {showSubmenu && (
            <div ref={AllCategoryRef} className="submenu absolute bg-white shadow-lg z-50 border-[#D4D4D4] h-[432px] w-[254px] text-start pt-6 pl-10 pb-[37px] text-[14px] mb-4 leading-4 font-normal sm:mt-[54px]">
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

        {/* Category showing in nav bar */}
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
                className="fixed bg-white shadow-lg z-40 border-[#D4D4D4] w-[1100px] h-[432px] columns-5 gap-24 text-black text-start font-semibold p-8"
                style={{ left: '312px', marginTop: '26px' }}
              >
                {category.subCategories && category.subCategories.map((subcategory) => (
                  <div
                    key={subcategory.id}
                    className="submenu-item p-4 cursor-pointer w-auto"
                  >
                    {subcategory.name}
                    <div className="absolute bg-white z-50 border-[#D4D4D4]  text-black text-start font-normal">
                      <div>
                        {subcategory.subSubCategories.map(subSubcategory => (
                          <div className='hover:text-[#304BA0] py-6 w-36' key={subSubcategory.id}>
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
