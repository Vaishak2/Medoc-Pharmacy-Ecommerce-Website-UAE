import React, { useEffect, useState } from 'react'
import './TopCategoriesOfCategory.css'
import SubCategoryImg1 from '../../../Assets/Subcategory images/Rectangle 203 (12).png'
import SubCategoryImg2 from '../../../Assets/Subcategory images/Rectangle 203 (13).png'
import SubCategoryImg3 from '../../../Assets/Subcategory images/Rectangle 203 (14).png'
import SubCategoryImg4 from '../../../Assets/Subcategory images/Rectangle 203 (15).png'
import SubCategoryImg5 from '../../../Assets/Subcategory images/Rectangle 203 (16).png'
import SubCategoryImg6 from '../../../Assets/Subcategory images/Rectangle 203 (17).png'
import SubCategoryImg7 from '../../../Assets/Subcategory images/Rectangle 203 (18).png'
import SubCategoryImg8 from '../../../Assets/Subcategory images/Rectangle 203 (19).png'
import SubCategoryImg9 from '../../../Assets/Subcategory images/Rectangle 203 (20).png'
import SubCategoryImg10 from '../../../Assets/Subcategory images/Rectangle 203 (21).png'
import SubCategoryImg11 from '../../../Assets/Subcategory images/Rectangle 203 (22).png'
import SubCategoryImg12 from '../../../Assets/Subcategory images/Rectangle 203 (23).png'
import { useParams } from 'react-router-dom'
import Api from '../../../Services/Api'


function TopCategoriesOfCategory() {
    const {categoryId} = useParams()

    const [categories, setCategories] = useState([])
   

    const products = [
        {
            "product_id": 1,
            "product_name": "Night Cream",
            "image_url": SubCategoryImg1,
            "description": "A sleek and ergonomic wireless mouse with high precision and long battery life."
        },
        {
            "product_id": 2,
            "product_name": "Face Oil",
            "image_url": SubCategoryImg2,
            "description": "Noise-cancelling Bluetooth headphones with superior sound quality and comfortable fit."
        },
        {
            "product_id": 3,
            "product_name": "Medicines",
            "image_url": SubCategoryImg3,
            "description": "A versatile smart watch with fitness tracking, heart rate monitoring, and customizable watch faces."
        },
        {
            "product_id": 4,
            "product_name": "Personal Care",
            "image_url": SubCategoryImg4,
            "description": "A compact portable speaker with powerful sound and long-lasting battery for outdoor use."
        },
        {
            "product_id": 5,
            "product_name": "Medicines",
            "image_url": SubCategoryImg5,
            "description": "A high-capacity external hard drive with fast data transfer speeds and durable design."
        },
        {
            "product_id": 6,
            "product_name": "Face Oil",
            "image_url": SubCategoryImg6,
            "description": "A sleek and ergonomic wireless mouse with high precision and long battery life."
        },
        {
            "product_id": 7,
            "product_name": "Makeup Remover",
            "image_url": SubCategoryImg7,
            "description": "Noise-cancelling Bluetooth headphones with superior sound quality and comfortable fit."
        },
        {
            "product_id": 8,
            "product_name": "Scrub",
            "image_url": SubCategoryImg8,
            "description": "A versatile smart watch with fitness tracking, heart rate monitoring, and customizable watch faces."
        },
        {
            "product_id": 9,
            "product_name": "Shower Gel",
            "image_url": SubCategoryImg9,
            "description": "A compact portable speaker with powerful sound and long-lasting battery for outdoor use."
        },
        {
            "product_id": 10,
            "product_name": "Personal Care",
            "image_url": SubCategoryImg10,
            "description": "A high-capacity external hard drive with fast data transfer speeds and durable design."
        },
        {
            "product_id": 11,
            "product_name": "Medicines",
            "image_url": SubCategoryImg11,
            "description": "A compact portable speaker with powerful sound and long-lasting battery for outdoor use."
        },
        {
            "product_id": 12,
            "product_name": "Face Oil",
            "image_url": SubCategoryImg12,
            "description": "A high-capacity external hard drive with fast data transfer speeds and durable design."
        }
    ];

    useEffect(() => {
        Api.get('categories')
        .then(response => {
            console.log(response.data.data,'catttteeeee')
            setCategories(response.data.data)
            
            console.log(categories.filter((category)=>category.id===categoryId),'mqinCategry')
        })
    },[])

    return (
        <div className=' w-[1200px] mx-auto pt-[64px]'>
            
            <div className='text-[32px] leading-[24px]  font-medium text-black text-left'>Top categories of Dermo Cosmetics</div>

            <div className='pt-[24px]'>
                <div className='grid sm:grid-cols-6 gap-6'>
                    {products.map((product) => (
                        <div className='TopCategoryCard text-black rounded-lg border mt-[24px] cursor-pointer' key={product.id}>
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
