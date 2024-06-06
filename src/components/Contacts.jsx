import React from 'react';

const Contacts = () => {

    return (
        <div className="flex flex-row justify-center space-x-14 w-6/7 text-xl break-words p-5">
            {/*Left side*/}
            <div className="space-y-5 text-left">
                <div className="pb-1">
                    <i className="bi bi-envelope"> </i>
                    <span className="opacity-90"> Drop me an email for collaboration or just to say hello. </span>
                </div>
                <div>
                    <i className="bi bi-github"></i>
                    <span className="opacity-90"> Take a look at my code and projects. </span>
                </div>
                <div>
                    <i className="bi bi-stack-overflow"></i>
                    <span
                        className="opacity-90"> Visit my Stack Overflow for my coding contributions and queries. </span>
                </div>
                <div>
                    <i className="bi bi-linkedin"></i>
                    <span
                        className="opacity-90"> Let’s connect on LinkedIn and expand our professional networks. </span>
                </div>
                <div>
                    <i className="bi bi-telegram"></i>
                    <span className="opacity-90"> Contact me on Telegram for direct messaging. </span>
                </div>
            </div>
            {/*Right side*/}
            <div className="space-y-5 text-right">
                <div className="pb-1">
                    <a>
                        contact@makuyoshi.dev
                    </a>
                </div>
                <div>
                    <a className="hover:underline text-right" href="https://github.com/makuyoshi">
                        <button
                            className="outline outline-1 pl-3 pr-3 rounded-2xl align-middle hover:text-gray-900 hover:bg-stone-50">
                            GITHUB <i className="bi bi-arrow-up-right"></i>
                        </button>
                    </a>
                </div>
                <div>
                    <a className="hover:underline"
                       href="https://stackoverflow.com/users/21579330/makuyoshi">
                        <button
                            className="outline outline-1 pl-3 pr-3 rounded-2xl align-middle hover:text-gray-900 hover:bg-stone-50">
                            STACK OVERFLOW <i className="bi bi-arrow-up-right"></i>
                        </button>
                    </a>
                </div>
                <div>
                    <a className="hover:underline" href="#">
                        <button
                            className="outline outline-1 pl-3 pr-3 rounded-2xl align-middle hover:text-gray-900 hover:bg-stone-50">
                            LINKED IN <i className="bi bi-arrow-up-right"></i>
                        </button>
                    </a>
                </div>
                <div>
                    <a className="hover:underline" href="#">
                        <button
                            className="outline outline-1 pl-3 pr-3 rounded-2xl align-middle hover:text-gray-900 hover:bg-stone-50">
                            TELEGRAM <i className="bi bi-arrow-up-right"></i>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Contacts;