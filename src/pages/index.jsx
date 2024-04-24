import React from 'react';
import Head from 'next/head';

const Header = () => {
    return (
        <>
            <header className="flex justify-between items-center p-6">
                <h1 id="header-brand" className="text-4xl m-3 text-amber-50">makuyoshi.dev</h1>
                <nav className="flex space-x-12">
                    <a className="text-amber-50 py-2 px-4 text-2xl hover:underline" href="#">
                        About Me
                    </a>
                    <a className="text-amber-50 py-2 px-4 text-2xl hover:underline" href="#">
                        Projects
                    </a>
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
