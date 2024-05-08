import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="flex flex-row justify-center p-4 w-full space-x-8 text-2xl bottom-0 sticky">
                    <a href="https://github.com/makuyoshi"><i className="bi bi-github"></i></a>
                    <a href="https://twitter.com/makuyoshi_dev"><i className="bi bi-twitter-x"></i></a>
                </div>
            </footer>
        </>
    )
}

export default Footer;