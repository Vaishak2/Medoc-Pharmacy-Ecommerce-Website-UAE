import React from 'react'
import './TopCategoriesOfCategory.css'

function TopCategoriesOfCategory() {

    const products = [
        {
            "product_id": 1,
            "product_name": "Wireless Mouse",
            "image_url": "https://via.placeholder.com/200?text=Wireless+Mouse",
            "description": "A sleek and ergonomic wireless mouse with high precision and long battery life."
        },
        {
            "product_id": 2,
            "product_name": "Bluetooth Headphones",
            "image_url": "https://via.placeholder.com/200?text=Bluetooth+Headphones",
            "description": "Noise-cancelling Bluetooth headphones with superior sound quality and comfortable fit."
        },
        {
            "product_id": 3,
            "product_name": "Smart Watch",
            "image_url": "https://via.placeholder.com/200?text=Smart+Watch",
            "description": "A versatile smart watch with fitness tracking, heart rate monitoring, and customizable watch faces."
        },
        {
            "product_id": 4,
            "product_name": "Portable Speaker",
            "image_url": "https://via.placeholder.com/200?text=Portable+Speaker",
            "description": "A compact portable speaker with powerful sound and long-lasting battery for outdoor use."
        },
        {
            "product_id": 5,
            "product_name": "External Hard Drive",
            "image_url": "https://via.placeholder.com/200?text=External+Hard+Drive",
            "description": "A high-capacity external hard drive with fast data transfer speeds and durable design."
        },
        {
            "product_id": 6,
            "product_name": "Wireless Mouse",
            "image_url": "https://via.placeholder.com/200?text=Wireless+Mouse",
            "description": "A sleek and ergonomic wireless mouse with high precision and long battery life."
        },
        {
            "product_id": 7,
            "product_name": "Bluetooth Headphones",
            "image_url": "https://via.placeholder.com/200?text=Bluetooth+Headphones",
            "description": "Noise-cancelling Bluetooth headphones with superior sound quality and comfortable fit."
        },
        {
            "product_id": 8,
            "product_name": "Smart Watch",
            "image_url": "https://via.placeholder.com/200?text=Smart+Watch",
            "description": "A versatile smart watch with fitness tracking, heart rate monitoring, and customizable watch faces."
        },
        {
            "product_id": 9,
            "product_name": "Portable Speaker",
            "image_url": "https://via.placeholder.com/200?text=Portable+Speaker",
            "description": "A compact portable speaker with powerful sound and long-lasting battery for outdoor use."
        },
        {
            "product_id": 10,
            "product_name": "External Hard Drive",
            "image_url": "https://via.placeholder.com/200?text=External+Hard+Drive",
            "description": "A high-capacity external hard drive with fast data transfer speeds and durable design."
        },
        {
            "product_id": 11,
            "product_name": "Portable Speaker",
            "image_url": "https://via.placeholder.com/200?text=Portable+Speaker",
            "description": "A compact portable speaker with powerful sound and long-lasting battery for outdoor use."
        },
        {
            "product_id": 12,
            "product_name": "External Hard Drive",
            "image_url": "https://via.placeholder.com/200?text=External+Hard+Drive",
            "description": "A high-capacity external hard drive with fast data transfer speeds and durable design."
        }
    ];

    return (
        <div className=' w-[1200px] mx-auto pt-[64px]'>

            <div className='text-[32px] leading-[24px]  font-medium text-black text-left'>Top categories of Dermo Cosmetics</div>

            <div className='pt-[24px]'>
                <div className='grid sm:grid-cols-6 gap-6'>
                    {products.map((product) => (
                        <div className='TopCategoryCard text-black rounded-lg border mt-[24px]' key={product.id}>
                            <div className=' flex justify-center items-center'>
                                <img src={product.image_url} className='h-[151px] w-[164px] mt-[8px] rounded-lg' alt={product.product_name} />
                            </div>
                            <div className='flex flex-col justify-center items-center gap-4 p-4'>
                                <p className='text-[16px] font-medium leading-[20px]'>{product.product_name}</p>
                                {/* <p>{product.description}</p> */}
                                {/* <button className='bg-yellow-300 text-white text-lg px-6 py-1 rounded-xl'>Read more</button> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default TopCategoriesOfCategory
