import React, { useState } from 'react';
import CartImg from '../../../../Assets/Top Product image/pngwing.com (14) 1.png';
import MoveCart from '../../../../Assets/Icons/MoveToCart.svg';
import Remove from '../../../../Assets/Icons/delete_icon (1).svg';
import ConfirmRemove from '../../ConfirmRemove/ConfirmRemove';
import MyWishlishtEmpty from './MyWishlishtEmpty';

function MyWishlist() {
  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);
  const [movedToCart, setMovedToCart] = useState({});
  const [items, setItems] = useState([
    {
      id: 1,
      name: 'Multivitamin Vitality Vitamin Healthkart Veg 2m Tablet',
      price: 405,
      originalPrice: 600,
      discount: '30% OFF',
      size: '250 ml',
      quantity: 2,
      outOfStock: false,
      image: CartImg,
    },
    {
      id: 2,
      name: 'Multivitamin Vitality Vitamin Healthkart Veg 2m Tablet',
      price: 405,
      originalPrice: 600,
      discount: '30% OFF',
      size: '250 ml',
      quantity: 1,
      outOfStock: true,
      image: CartImg,
    },
    {
      id: 3,
      name: 'Multivitamin Vitality Vitamin Healthkart Veg 2m Tablet',
      price: 405,
      originalPrice: 600,
      discount: '30% OFF',
      size: '250 ml',
      quantity: 3,
      outOfStock: false,
      image: CartImg,
    },
  ]);

  const handleOpenRemoveModal = (item) => {
    setItemToRemove(item);
    setIsRemoveModalOpen(true);
  };

  const handleCloseRemoveModal = () => {
    setIsRemoveModalOpen(false);
    setItemToRemove(null);
  };

  const handleRemoveItem = () => {
    setItems(items.filter((item) => item.id !== itemToRemove.id));
    handleCloseRemoveModal();
  };

  const handleMoveToCart = (item) => {
    setMovedToCart((prev) => ({ ...prev, [item.id]: true }));
    // Add logic to actually move the item to the cart if needed.
  };

  return (
    // <div>
    //   <div className={`text-justify ${isRemoveModalOpen ? 'blur-background' : ''}`}>
    //     <div className='sm:text-[16px] sm:leading-6 sm:font-semibold'>My Wishlist</div>
    //     <div className='sm:text-[12px] leading-4 sm:font-normal sm:mt-1'>8 Items</div>
    //   </div>

    //   <div>
    //     <div className='wishlist-items sm:mt-8'>
    //       {items.map((item) => (
    //         <div key={item.id}>
    //           <div className={`wishlist-item flex border-t border-l border-r rounded-t-lg p-4 sm:mt-4 ${item.outOfStock ? 'border-none' : ''} `}>
    //             <img
    //               src={item.image}
    //               alt={item.name}
    //               className={`wishlist-item-image sm:w-[96px] sm:h-[96px] ${item.outOfStock ? 'opacity-25' : ''}`}
    //             />
    //             <div className="wishlist-item-details text-justify sm:ml-4">
    //               <div className={`wishlist-item-name sm:w-[282px] sm:text-[14px] sm:leading-6 sm:font-medium ${item.outOfStock ? 'opacity-25' : ''}`}>
    //                 {item.name}
    //               </div>
    //               <div className={`flex sm:mt-4 ${item.outOfStock ? 'opacity-25' : ''}`}>
    //                 <div className='wishlist-item-price sm:text-[16px] sm:leading-4 font-semibold'>
    //                   AED{item.price}
    //                 </div>

    //                 <div className='wishlist-item-original-price sm:text-[14px] sm:leading-4 text-[#A8A8A8] line-through sm:ml-2 sm:mr-2'>
    //                   AED{item.originalPrice}
    //                 </div>
    //                 <div className='wishlist-item-discount sm:text-[14px] sm:leading-4 text-[#0FB015]'>
    //                   {item.discount}
    //                 </div>
    //               </div>
    //               {item.outOfStock && (
    //                 <div className="text-center text-[#FC5050] py-1 rounded sm:text-[16px] sm:leading-6 font-normal sm:translate-x-[146px] translate-y-[-35px]">
    //                   Out of Stock
    //                 </div>
    //               )}
    //             </div>
    //           </div>
    //           <div className={`flex sm:text-[14px] sm:leading-4 cursor-pointer ${item.outOfStock ? 'opacity-25' : ''}`}>
    //             <div
    //               className='sm:w-[415px] border rounded-bl-lg flex items-center justify-center sm:py-4'
    //               onClick={() => handleMoveToCart(item)}
    //             >
    //               <img className='sm:w-4 sm:h-4 sm:mr-2' src={MoveCart} alt='Move to cart' />
    //               <div className={movedToCart[item.id] ? 'sm:text-[#818180]' : ''}>
    //                 {movedToCart[item.id] ? 'Moved to cart' : 'Move to cart'}
    //               </div>
    //             </div>
    //             <div
    //               className='sm:w-[415px] border rounded-br-lg flex items-center justify-center sm:py-4'
    //               onClick={() => handleOpenRemoveModal(item)}
    //             >
    //               <img className='sm:w-4 sm:h-4 sm:mr-2' src={Remove} alt='Remove' />
    //               <div>Remove</div>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    //   {isRemoveModalOpen && (
    //     <div className="fixed inset-0 flex items-center justify-center bg-[#353533CC] backdrop-blur-sm bg-opacity-95">
    //       <ConfirmRemove
    //         onRemove={handleRemoveItem}
    //         onCancel={handleCloseRemoveModal}
    //       />
    //     </div>
    //   )}
    // </div>
    <div><MyWishlishtEmpty/></div>
  );
}

export default MyWishlist;
