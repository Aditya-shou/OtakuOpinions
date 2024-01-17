import React, {useState, useEffect} from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentPosts, getSimilarPosts   } from '../services';

const PostWidget = ({categories,slug}) => {
  const[relatedPosts, setRelatedPosts]=useState([]);
  useEffect(()=>{
    if(slug){
      getSimilarPosts(categories,slug)
        .then((result)=>setRelatedPosts(result))
    }else{
      getRecentPosts()
        .then((result)=>setRelatedPosts(result))
    }
  },[slug])
  return (
    <div className='text-black bg-white shadow-lg rounded-lg p-8 m-8'>
      <h3 className='text-xl mb-8 font-semibold border-b'>
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post)=>(
        <div key={post.title} className='flex item-center w-full mb-4'>
          <div className='w-16 flex-none'>
            <img
              alt={post.title}
              height="60px"
              className='align-middle rounded-full'
              src={post.featuredImage.url}
            />
          </div>
          <div className='flex-grow ml-4'>
            <p className='text-gray-500 font-xs'>
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>
            <Link href={`/post/${post.slug}`} key={post.title} className='text-md'>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget