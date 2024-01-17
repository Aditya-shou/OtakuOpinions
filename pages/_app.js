import '@/styles/globals.css';
import '../styles/globals.scss';
import React,{useEffect, useState} from 'react';
import { Layout } from '../components';


export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    
  )
}
