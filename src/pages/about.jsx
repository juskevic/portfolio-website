import React from 'react';
import Head from 'next/head';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'font-awesome/css/font-awesome.min.css';

const Main = () => {
    return (
        <>
            <main>
                <div className="rounded border-border-silver border-2 bg-bg-eerie">
                    <a href="https://www.last.fm/user/makuyoshi"><img
                        src="https://lastfm-recently-played.vercel.app/api?user=makuyoshi&show_user=header&count=5"
                        alt="last.fm scrobbles"/></a>
                </div>
            </main>
        </>
    )
}

const AboutMePage = () => {
    return (
        <>
            <Head>
                <title>About | makuyoshi.dev</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <Main />
        </>
    )
}

export default AboutMePage;
