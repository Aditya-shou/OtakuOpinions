import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import { getCategories } from '../services'

const Categories = () => {
  const[categories,setCategories]=useState([]);
  useEffect(()=>{
    getCategories()
      .then((newCategories)=>setCategories(newCategories));
  },[]);
  return (
    <div className='text-black bg-white shadow-lg rounded-lg p-8 m-8'>
      <h3 className='text-xl mb-8 font-semibold border-b'>
        Categories
      </h3>
      {categories.map((category)=>(
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className='cursor-pointer block pb-3 mb-3 font-semibold transition duration-500 transform hover:-translate-y-1'>
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories