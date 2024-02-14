import * as React from 'react';
import { AppProps } from 'next/app';
import './global.css'
import Head from 'next/head';

export default function App({ Component, pageProps }  : AppProps) {
	return (
		<div>
			<Head>
				<title>CID 謎解き</title>
			</Head>
			<Component {...pageProps} />
		</div>
	)
}
