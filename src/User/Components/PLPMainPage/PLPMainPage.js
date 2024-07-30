import React, { useEffect, useState } from 'react'
import searchIcon from '../../../Assets/Icons/PLP-filter-search.png'
import tagclose from '../../../Assets/Icons/close.png'
import productsData from './data.js';
import ProductImage from "../../../Assets/Top Product image/pngwing.com (14) 1.png";

import FavLogo from "../../../Assets/Icons/heart-svgrepo-com 1.svg";
import FavLogoFilled from "../../../Assets/Icons/heart-svgrepo.svg";
import Star from "../../../Assets/Icons/star.png";
import Cart from "../../../Assets/Icons/shopping_cart_svg.svg";
import PriceRangeSlider from './PriceRangeSlider.js';

//vnshcode
import axios from 'axios';
import DropDown from "../../../Assets/Icons/chevron_forward.png";

//vnshcode
const sortingOptions = [
    { id: 1, name: 'Newest' },
    { id: 2, name: 'Low to High' },
    { id: 3, name: 'High to Low' },
    { id: 4, name: 'Rating' },
];

function PLPMainPage() {

    const [products, setProducts] = useState(productsData);
    const [selectedBrands, setSelectedBrands] = useState([]);

    //vnshcode
    const [showSubcategoryDropdown, setShowSubcategoryDropdown] = useState(false);
    const [selectedSubcategory, setSelectedSubcategory] = useState('');
    const [showSortDropdown, setShowSortDropdown] = useState(false);
    const [selectedSortOption, setSelectedSortOption] = useState(sortingOptions[0].name);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        applyFilters();
    }, [selectedBrands])

    const handleBrandSelection = (brand) => {
        setSelectedBrands((prevSelectedBrands) =>
            prevSelectedBrands.includes(brand) ? prevSelectedBrands.filter((b) => b !== brand) : [...prevSelectedBrands, brand]);
    }

    const removeFilter = (type, value) => {
        if (type === 'brand') {
            setSelectedBrands((prevSelectedBrands) => prevSelectedBrands.filter((b) => b !== value));
        }
    }

    const applyFilters = () => {
        let filteredProducts = productsData.filter((product) => {
            if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
                return false;
            }
            return true;
        })

        setProducts(filteredProducts);
    }


    //vnshcode
    const toggleSubcategoryDropdown = () => {
        setShowSubcategoryDropdown(!showSubcategoryDropdown);
    };

    const toggleSortDropdown = () => {
        setShowSortDropdown(!showSortDropdown);
    };

    const handleSubcategoryClick = (subcategory) => {
        setSelectedSubcategory(subcategory);
        setShowSubcategoryDropdown(false);
        fetchProducts(subcategory, selectedSortOption);
    };

    const handleSortOptionClick = (option) => {
        setSelectedSortOption(option);
        setShowSortDropdown(false);
        fetchProducts(selectedSubcategory, option);
    };

    const fetchProducts = async (subcategory, sortOption) => {
        try {
            const response = await axios.get('http://194.238.23.134:3000/api/categories', {
                params: {
                    subcategory: subcategory,
                    sort: sortOption
                }

            });

            setProducts(response.data);

        } catch (error) {
           
        }
    };

    const fetchCategories = async () => {
        try {
            const response = await axios.get('');
            setCategories(response.data);
            if (response.data.length > 0) {
                setSelectedSubcategory(response.data[0].name);
                fetchProducts(response.data[0].name, selectedSortOption);
            }
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };




    //for product listing
    const [favorite, setFavorite] = useState(Array(8).fill(false)); // Array to hold favorite status for each product
    const toggleFavorite = (index) => {
        const newFavorite = [...favorite];
        newFavorite[index] = !newFavorite[index];
        setFavorite(newFavorite);
    };




    const brands = [
        { id: 1, name: "Dr Batra's", count: 1254 },
        { id: 2, name: 'Maxisoft', count: 1254 },
        { id: 3, name: 'Dr. Rashel', count: 1254 },
        { id: 4, name: 'Khadi Pure', count: 1254 },
        { id: 5, name: 'Foxtale', count: 1254 },
        { id: 6, name: 'CGG Cosmetics', count: 1254 },
        { id: 7, name: 'Vi-John', count: 1254 },
        { id: 8, name: 'Nivea', count: 1254 },

    ];

    const productList = [
        {
            "id": 1,
            "name": "Multivitamin Vitality Vitamin Healthkart Veg 2m Tablet",
            "image": ProductImage,
            "rating": "3.5",
            "price": "AED 600",
            "discount": "30% OFF",
            "offerPrice": "AED 405"
        },
        {
            "id": 2,
            "name": "Multivitamin Vitality Vitamin Healthkart Veg 2m Tablet",
            "image": ProductImage,
            "rating": "3.5",
            "price": "AED 600",
            "discount": "30% OFF",
            "offerPrice": "AED 405"
        },
        {
            "id": 3,
            "name": "Multivitamin Vitality Vitamin Healthkart Veg 2m Tablet",
            "image": ProductImage,
            "rating": "3.5",
            "price": "AED 600",
            "discount": "30% OFF",
            "offerPrice": "AED 405"
        },
        {
            "id": 4,
            "name": "Multivitamin Vitality Vitamin Healthkart Veg 2m Tablet",
            "image": ProductImage,
            "rating": "3.5",
            "price": "AED 600",
            "discount": "30% OFF",
            "offerPrice": "AED 405"
        },
        {
            "id": 1,
            "name": "Multivitamin Vitality Vitamin Healthkart Veg 2m Tablet",
            "image": ProductImage,
            "rating": "3.5",
            "price": "AED 600",
            "discount": "30% OFF",
            "offerPrice": "AED 405"
        },
        {
            "id": 2,
            "name": "Multivitamin Vitality Vitamin Healthkart Veg 2m Tablet",
            "image": ProductImage,
            "rating": "3.5",
            "price": "AED 600",
            "discount": "30% OFF",
            "offerPrice": "AED 405"
        },
        {
            "id": 3,
            "name": "Multivitamin Vitality Vitamin Healthkart Veg 2m Tablet",
            "image": ProductImage,
            "rating": "3.5",
            "price": "AED 600",
            "discount": "30% OFF",
            "offerPrice": "AED 405"
        },
        {
            "id": 4,
            "name": "Multivitamin Vitality Vitamin Healthkart Veg 2m Tablet",
            "image": ProductImage,
            "rating": "3.5",
            "price": "AED 600",
            "discount": "30% OFF",
            "offerPrice": "AED 405"
        },


    ]

    //vnshcode
    useEffect(() => {
        fetchCategories();
    }, []);


    return (
        <div className='w-[1200px] mx-auto mt-[19px]'>

        
            <div className='flex'>
                <div
                    className="w-[282px] h-12 relative"
                    onClick={toggleSubcategoryDropdown}
                >
                    <div className="w-[282px] h-12 left-0 top-0 absolute rounded-lg border border-gray-200 flex">
                        <div className="left-[16px] top-[12px] absolute text-black text-sm font-normal font-['Poppins'] leading-normal">Categories</div>
                        <img className='sm:w-[16px] sm:h-[9px] sm:mr-[16px] sm:ml-[242px] sm:mt-[19px] sm:mb-[11px]' src={DropDown} alt="Dropdown" />
                    </div>
                    {showSubcategoryDropdown && (
                        <div className="absolute top-12 left-0 w-[282px] bg-white border border-gray-200 rounded-lg shadow-lg">
                            <ul className="py-2">
                                {categories.map((category) => (
                                    <li
                                        key={category.id}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleSubcategoryClick(category.name)}
                                    >
                                        {category.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
                <div className='sm:ml-[24px] my-auto sm:w-[400px] text-start'>
                    <span className='sm:text-[16px] sm:text-black font-medium leading-[16px]'>{selectedSubcategory} -</span>
                    <span className='sm:text-[16px] sm:text-[#A8A8A8] font-normal leading-[16px]'>{products.length} products</span>
                </div>

                <div
                    className="w-[282px]  top-0 rounded-lg border border-gray-200 flex sm:ml-[261px] relative"
                    onClick={toggleSortDropdown}
                >
                    <div className='sm:ml-[16px] text-start  flex items-center'>
                        <span className="text-neutral-400 text-sm font-normal leading-normal">Sort by :</span>
                        <span className="text-black text-sm font-medium leading-normal sm:ml-[16px]">{selectedSortOption}</span>
                    </div>
                    <img className='sm:w-[16px] sm:h-[9px] sm:mt-[19px] sm:ml-[auto] sm:mr-[16px]' src={DropDown} alt="Dropdown" />
                    {showSortDropdown && (
                        <div className="absolute top-12 left-0 w-[282px] bg-white border border-gray-200 rounded-lg shadow-lg">
                            <ul className="py-2">
                                {sortingOptions.map((option) => (
                                    <li
                                        key={option.id}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                        onClick={() => handleSortOptionClick(option.name)}
                                    >
                                        {option.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>


            <div className='flex justify-between mt-[48px]'>

                <div className='w-[282px] h-auto flex flex-col items-center p-4 border border-[#EAEAEA] rounded-lg'>

                    <div className='w-[250px] h-[400px]'>
                        <div className='flex justify-between'>
                            <div className='text-[16px] font-medium leading-4'>Brands</div>
                            <div className='sm:w-[24px] sm:h-[24px]'><img className='sm:w-[16px] sm:h-[16px] text-black' src={searchIcon} alt=''></img></div>
                        </div>
                        <div className=''>
                            {brands.map((brand, index) => (
                                <div className="w-full h-6 flex justify-left items-center gap-2 mt-2">
                                    <input
                                        key={index}
                                        type='checkbox'
                                        className="w-4 h-4 rounded border border-neutral-400"
                                        onChange={() => handleBrandSelection(brand.name)}
                                        checked={selectedBrands.includes(brand.name)}
                                    />
                                    <div className="text-black text-sm font-normal font-['Poppins'] leading-normal">{brand.name}</div>
                                    <div className="text-neutral-400 text-xs font-normal font-['Poppins'] leading-normal">({brand.count})</div>
                                </div>
                            ))}
                        </div>
                        <div className='text-[14px] font-normal text-[#304BA0] text-left mt-[9px]'>+ 241 more</div>
                    </div>


                    <div className='w-[240px]'>
                        <div className='text-[16px] font-medium leading-4 text-left'>Price Range</div>
                        <PriceRangeSlider />
                    </div>


                </div>

                <div className='w-[894px]'>

                    <div className='selected-filters flex flex-wrap gap-4'>
                        {selectedBrands.map((brand) => (
                            <div className='pb-[24px]'>
                                <div key={brand} className='flex justify-center items-center p-2 gap-4 filter-tag w-auto h-[32px] border border-[#EAEAEA] rounded text-[12px] font-normal leading-4'>
                                    <div>{brand}</div>
                                    <img className='w-4 h-4 hover:cursor-pointer' src={tagclose} onClick={() => removeFilter('brand', brand)}></img>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='products-list grid sm:grid-cols-3 gap-[24px]'>
                        {productList.map((product, index) => (

                            <div className='sm:w-[282px] sm:h-[421px] '>
                                <div className='sm:w-[282px] sm:h-[213px] bg-[#ececec] rounded-[8px] pt-[11px] '>
                                    <img
                                        className='ml-[242px] cursor-pointer  '
                                        src={favorite[index] ? FavLogoFilled : FavLogo}
                                        alt=""
                                        onClick={() => toggleFavorite(index)}
                                    />
                                    <img className='sm:w-[103] sm:h-[132px] mx-auto ' src={product.image} alt="" />
                                    <div className='sm:w-[69px] sm:h-[28px] border bg-[#ffff] rounded-[4px] flex ml-[10px] mt-[4px]  '>
                                        <div className=' flex text-center ml-[12px] '>
                                            <img className='sm:w-[16px] sm:h-[16px] mt-[6px] ' src={Star} alt="" />
                                            <div className='sm:w-[23px] sm:h-[16px] text-[16px] translate-y-[2px] ml-[6px] '>{product.rating}</div>

                                        </div>

                                    </div>

                                </div>
                                <div className='sm:text-start sm:text-[16px] sm:leading-[24px] font-normal sm:mt-[16px] mb-[16px] '>
                                    {product.name}
                                </div>
                                <div className='sm:w-[281px] sm:h-[128] '>
                                    <div className='flex sm:text-start sm:text-[16px] sm:leading-[28px] '>
                                        <h1 className='line-through text-[#A8A8A8]'>{product.price}</h1>
                                        <h1 className='ml-[8px] text-[#0FB015]'>{product.discount} </h1>
                                    </div>
                                    <h1 className='sm:text-[18px] sm:leading-[28px] font-medium text-start mb-[16px]  '> {product.offerPrice} </h1>
                                    <div className='sm:w-[281px] sm:h-[48px] bg-[#304BA0] rounded-[8px] pt-[12px] cursor-pointer '>

                                        <img className='sm:w-[24px] sm:h-[24px]  ml-[83px]  ' src={Cart} alt="" />
                                        <div className='text-white ml-[42px] mt-[-23px]  '>Add To Cart</div>

                                    </div>

                                </div>

                            </div>
                        ))
                        }
                    </div>

                </div>

            </div>
        </div>
    )
}

export default PLPMainPage
