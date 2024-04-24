// pages/index.jsx
import React from 'react';
import Head from 'next/head';

const Header = () => {
    return (
        <>
            <header>
                <h1>makuyoshi.dev</h1>
                <nav>
                    <button>
                        Button 1
                    </button>
                    <button>
                        Button 2
                    </button>
                </nav>
            </header>
        </>
    )
}

const HomePage = () => {
    return (
        <>
            <Head>
                <title>Home Page | makuyoshi.dev</title>

                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content="Makuyoshi.dev" />
                <meta property="og:description" content="Makuyoshi's portfolio website build using Next.js" />
                <meta property="og:url" content="https://makuyoshi.dev" />
            </Head>
            <Header />
        </>
    );
};

export default HomePage;
