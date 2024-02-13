import Head from 'next/head';

interface MetaProps {
    pageTitle?: string;
    pageDescription?: string;
    pagePath?: string;
    pageImg?: any;
    pageImgWidth?: number;
    pageImgHeight?: number;
}

const HMeta: React.FC<MetaProps> = ({ pageTitle, pageDescription, pagePath, pageImg, pageImgWidth, pageImgHeight }) => {
    const defaultTitle = 'CID 謎解き';
    const defaultDescription = 'CID 謎解きのページです。';
    const defaultImg = '/favicon.ico';
    const title = pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle;
    const description = pageDescription ? pageDescription : defaultDescription;
    const url = pagePath;
    const imgWidth = pageImgWidth ? pageImgWidth : 1280;
    const imgHeight = pageImgHeight ? pageImgHeight : 640;
    //const imgx = require("/images/favicon.ico");
    return (
        <Head>
            <title>{title}</title>
            <meta
                name='description'
                content={description}
            />
            <meta
                property='og:url'
                content={url}
            />
            <meta
                property='og:title'
                content={title}
            />
            <meta
                property='og:site_name'
                content={title}
            />
            <meta
                property='og:description'
                content={description}
            />
            <meta
                property='og:type'
                content='website'
            />
            <meta
                property='og:image'
                content={`https://cidschool.github.io/cid-expo-quiz/${pageImg}`}
            />
            <meta
                property='og:image:width'
                content={String(imgWidth)}
            />
            <meta
                property='og:image:height'
                content={String(imgHeight)}
            />
    
            
        </Head>
    );
};

export default HMeta;