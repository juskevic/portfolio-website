import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBluesky } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="flex flex-row justify-center p-4 w-full space-x-8 text-2xl bottom-0 sticky">
                    <a href="https://github.com/makuyoshi" className="hover:scale-110"><i className="bi bi-github"></i></a>
                    <a href="https://twitter.com/makuyoshi_dev" className="hover:scale-110"><i className="bi bi-twitter-x"></i></a>
                    <a href="https://bsky.app/profile/makuyoshi.bsky.socia" className="hover:scale-110"><FontAwesomeIcon icon={faBluesky} /></a>
                </div>
                <div className="text-center mb-5">
                    <p>© {new Date().getFullYear()} makuyoshi.dev. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;