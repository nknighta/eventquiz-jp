import * as React from 'react';
import { AppProps } from 'next/app';
import './global.css'

export default function App ({Component, pageProps}) {
	return <Component {...pageProps}/>
}
