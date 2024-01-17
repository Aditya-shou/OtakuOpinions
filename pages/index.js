import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import { PostCart, Categories, PostWidget } from '../components';
import {getPosts} from '../services'

export default function Home({posts}) {
  return (
    <div className= "container mx-9 px-10 mb-20">
      <Head>
        <title>Anime Blog</title>
        <link rel="icon" href='/favicon.ico'/>
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-7 col-span-1 lg:mx-5 lg:my-2'>
        {posts.map((post) => (<PostCart post={post.node} key={post.title}/>))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories/>
          </div>
        </div>
      </div>

    </div>
  )
}

export async function getStaticProps(){
  const posts = (await getPosts()) || ([]);

  return { props : {posts}}
}
