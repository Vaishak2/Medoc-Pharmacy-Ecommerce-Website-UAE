import React, { useState } from 'react';
import CartImg from '../../../Assets/Top Product image/pngwing.com (14) 1.png';
import Wishlist from '../../../Assets/Icons/favorite (1).svg';
import Delete from '../../../Assets/Icons/delete_icon (1).svg';
import BuyThisNow from '../../../Assets/Icons/shopping_basket (1).svg';
import Coupons from "../../../Assets/Icons/coupons.svg";
import Continue from "../../../Assets/Icons/continue.svg";
import Cart_Choose from "../../Components/Cart_Choose/Cart_Choose";
import RemoveConformation from "../../Components/RemoveConformation/RemoveConformation"; // Import the RemoveConformation component
import MoveToWishlist from '../MoveToWishlist/MoveToWishlist';

function CartItem() {
  const [isCartChooseOpen, setIsCartChooseOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
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

  const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false);
  const [itemToRemove, setItemToRemove] = useState(null);

  const [isMoveToWishlistModalOpen, setIsMoveToWishlistModalOpen] = useState(false);
  const [itemToMoveToWishlist, setItemToMoveToWishlist] = useState(null);


  const handleQuantityChange = (id, newQuantity) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const handleSizeChange = (id, newSize) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, size: newSize } : item
    ));
  };

  const calculateSubTotal = () => {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const calculateTotalDiscount = () => {
    return items.reduce((acc, item) => acc + (item.originalPrice - item.price) * item.quantity, 0);
  };

  const handleOpenCartChoose = (item) => {
    setSelectedItem(item);
    setIsCartChooseOpen(true);
  };

  const handleCloseCartChoose = () => {
    setIsCartChooseOpen(false);
    setSelectedItem(null);
  };

  const handleOpenRemoveModal = (item) => {
    setItemToRemove(item);
    setIsRemoveModalOpen(true);
  };

  const handleCloseRemoveModal = () => {
    setIsRemoveModalOpen(false);
    setItemToRemove(null);
  };

  const handleRemoveItem = () => {
    setItems(items.filter(item => item.id !== itemToRemove.id));
    handleCloseRemoveModal();
  };
  const handleMoveToWishlistOpenModal = (item) => {
    setItemToMoveToWishlist(item);
    setIsMoveToWishlistModalOpen(true);
  };

  const handleCloseMoveToWishlistModal = () => {
    setIsMoveToWishlistModalOpen(false);
    setItemToMoveToWishlist(null);
  };

  const handleMoveToWishlistItem = () => {
    setItems(items.filter(item => item.id !== itemToMoveToWishlist.id));
    handleCloseMoveToWishlistModal();
  };

  const calculateDeliveryCharges = () => {
    return 20; // Assuming a flat rate for delivery charges
  };

  const calculateTaxes = () => {
    return 10; // Assuming a flat rate for taxes
  };

  const calculateTotalAmount = () => {
    return calculateSubTotal() - calculateTotalDiscount() + calculateDeliveryCharges() + calculateTaxes();
  };

  return (
    <div className={`cart-section flex ml-[120px] ${isCartChooseOpen || isRemoveModalOpen ? 'blur-background' : ''}`}>
      <div className="cart-first-section sm:mt-16">
        <h1 className="sm:text-[18px] sm:leading-6 font-semibold text-start">
          Cart <span className="font-normal">({items.length} items)</span>
        </h1>
        {items.map((item) => (
          <div key={item.id}>
            <div className={`cart-item sm:w-[792px] border-t border-x rounded-t-lg sm:text-[14px] sm:p-4 sm:mt-12 ${item.outOfStock ? 'border-none' : ''}`}>
              <div className="flex">
                <img className={`sm:w-[96px] sm:ml-4 ${item.outOfStock ? 'opacity-25' : ''}`} src={item.image} alt={item.name} />
                <div className="sm:ml-4">
                  <div>
                    <h1 className={`text-justify ${item.outOfStock ? 'opacity-25' : ''}`}>{item.name}</h1>
                  </div>
                  <div className="flex sm:mt-4">
                    <div className={`flex items-center ${item.outOfStock ? 'opacity-25' : ''}`}>
                      <h1 className="flex">Size:</h1>
                      <button onClick={() => handleOpenCartChoose(item)} className="ml-2 focus:outline-none">
                        {item.size}
                      </button>
                    </div>
                    <div className={`flex items-center ml-4 ${item.outOfStock ? 'opacity-25' : ''}`}>
                      <h1 className="flex">Qty:</h1>
                      <button onClick={() => handleOpenCartChoose(item)} className="ml-2 focus:outline-none">
                        {item.quantity}
                      </button>
                    </div>
                    {item.outOfStock && (
                      <div className="ml-4 text-[#FC5050] sm:text-[16px] sm:leading-6 font-normal opacity-100">
                        Out of Stock
                      </div>
                    )}
                  </div>
                </div>
                <div className={`sm:ml-32 ${item.outOfStock ? 'opacity-25' : ''}`}>
                  <h1 className="text-end font-semibold">AED {item.price * item.quantity}</h1>
                  <div className="flex sm:mt-2">
                    <div className="sm:text-[14px] sm:leading-4 font-normal text-[#A8A8A8] line-through">
                      AED {item.originalPrice * item.quantity}
                    </div>
                    <div className="sm:text-[#0FB015] sm:text-[14px] sm:leading-4 font-normal sm:ml-2">
                      {item.discount}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`border-t border-b border-x rounded-b-lg sm:w-[792px] py-4 px-[65px] grid grid-cols-3 gap-8 ${item.outOfStock ? 'opacity-25' : ''}`}>
              <div className="flex items-center text-[14px] leading-4 font-normal mx-auto cursor-pointer" onClick={() => handleMoveToWishlistOpenModal(item)}>
                <img className="sm:w-4 sm:h-4 mr-2" src={Wishlist} alt="Move to wishlist" />
                Move to wishlist
              </div>
              <div className="flex items-center text-[14px] leading-4 font-normal mx-auto cursor-pointer" onClick={() => handleOpenRemoveModal(item)}>
                <img className="sm:w-4 sm:h-4 mr-2" src={Delete} alt="Remove" />
                Remove
              </div>
              <div className="flex items-center text-[14px] leading-4 font-normal mx-auto cursor-pointer">
                <img className="sm:w-4 sm:h-4 mr-2" src={BuyThisNow} alt="Buy this now" />
                Buy this now
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="coupon-price-section sm:mt-[138px] sm:ml-6">
        <div className="coupon sm:w-[384px] sm:h-[128px] rounded-lg border p-4 ">
          <div className='sm:text-[16px] sm:leading-6 font-semibold text-start'>Coupons</div>
          <img className='sm:mt-4' src={Coupons} alt="Coupons" />
        </div>
        <div className="orderSummery sm:w-[384px] sm:h-[72px] border rounded-t-lg flex sm:mt-4 sm:p-4">
          <div className='sm:text-[16px] leading-6 font-semibold my-auto text-start'>Order Summary</div>
          <div className='sm:text-[14px] leading-6 font-normal my-auto text-end sm:ml-[162px]'>{items.length} Items</div>
        </div>
        <div className='sm:w-[384px] border-x border-b rounded-b-lg p-4'>
          <div className='flex border-b py-6 justify-between'>
            <div className='text-justify'>
              <h1 className='sm:text-[14px] leading-4 font-normal'>Sub Total </h1>
              <span className='sm:text-[12px] leading-4 font-normal sm:text-[#A8A8A8]'>(Incl. of Taxes)</span>
            </div>
            <h1 className='sm:text-[14px] leading-4 font-semibold'>$ {calculateSubTotal()}.00</h1>
          </div>
          <div className='flex border-b py-6 justify-between'>
            <div>
              <h1 className='sm:text-[14px] leading-4 font-normal'>Total Discount </h1>
              <span className='sm:text-[12px] leading-4 font-normal sm:text-[#A8A8A8]'></span>
            </div>
            <h1 className='sm:text-[14px] leading-4 font-semibold text-[#1BA177]'>-$ {calculateTotalDiscount()}.00</h1>
          </div>
          <div className='flex border-b py-6 justify-between'>
            <div className='text-justify'>
              <h1 className='sm:text-[14px] leading-4 font-normal'>Delivery Charges </h1>
              <span className='sm:text-[12px] leading-4 font-normal sm:text-[#A8A8A8]'>(Incl. of Taxes)</span>
            </div>
            <h1 className='sm:text-[14px] leading-4 font-semibold text-[#DC0073]'>-AED {calculateDeliveryCharges()}.00</h1>
          </div>
          <div className='flex border-b py-6 justify-between'>
            <div className='text-justify'>
              <h1 className='sm:text-[14px] leading-4 font-normal'>Taxes </h1>
              <span className='sm:text-[12px] leading-4 font-normal sm:text-[#A8A8A8]'></span>
            </div>
            <h1 className='sm:text-[14px] leading-4 font-semibold'>AED {calculateTaxes()}.00</h1>
          </div>
          <div className='flex py-6 justify-between'>
            <div>
              <h1 className='sm:text-[14px] leading-4 font-semibold'>Total Amount</h1>
              <span className='sm:text-[12px] leading-4 font-normal sm:text-[#A8A8A8]'></span>
            </div>
            <h1 className='sm:text-[14px] leading-4 font-semibold'>AED {calculateTotalAmount()}.00</h1>
          </div>
          <img src={Continue} alt="Continue" />
        </div>
      </div>
      {isCartChooseOpen && selectedItem && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#353533CC] backdrop-blur-sm bg-opacity-95">
          <Cart_Choose 
            item={selectedItem} 
            onClose={handleCloseCartChoose}  
            onQuantityChange={handleQuantityChange}
            onSizeChange={handleSizeChange}
          />
        </div>
      )}
      {isRemoveModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#353533CC] backdrop-blur-sm bg-opacity-95">
          <RemoveConformation 
            onRemove={handleRemoveItem}
            onCancel={handleCloseRemoveModal}
          />
        </div>
      )}

      {isMoveToWishlistModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-[#353533CC] backdrop-blur-sm bg-opacity-95">
        <MoveToWishlist
          item={itemToMoveToWishlist}
          onClose={handleCloseMoveToWishlistModal}
          onConfirm={handleMoveToWishlistItem}
        />
        </div>
      )}
    </div>
  );
}

export default CartItem;
