import React from 'react';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="flex flex-row justify-center absolute bottom p-4 w-full space-x-8 text-2xl">
                    <a href="https://github.com/makuyoshi"><i className="bi bi-github"></i></a>
                    <a href="https://twitter.com/makuyoshi_dev"><i className="bi bi-twitter-x"></i></a>
                    <a className="opacity-50"><i className="bi bi-linkedin"></i></a>
                    <a className="opacity-50"><i className="bi bi-mastodon"></i></a>
                    <a className="opacity-50"><i className="bi bi-telegram"></i></a>
                </div>
            </footer>
        </>
    )
}

export default Footer;