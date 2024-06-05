import React, { useState } from 'react';

function ExtendedContacts() {
    const [isExtended, setIsExtended] = useState(false);

    return (
        <>
            {!isExtended && (
                <div className="text-center">
                    <button
                        onClick={() => setIsExtended(true)}
                        className="outline outline-1 outline-stone-600 rounded-2xl p-2 shadow-2xl shadow-stone-500/20 hover:outline-stone-300">
                        View more
                    </button>
                </div>
            )}
            {isExtended && (
                <div className="flex flex-row justify-center space-x-14 w-6/7 text-xl break-words p-5">
                    {/*Right extended*/}
                    <div className="space-y-5 text-left">
                        <div className="animate-fade-down animate-once animate-delay-100 animate-ease-out">
                            <i className="bi bi-github"></i>
                            <span className="opacity-90"> ... </span>
                        </div>
                        <div className="animate-fade-down animate-once animate-delay-200 animate-ease-out">
                            <i className="bi bi-stack-overflow"></i>
                            <span className="opacity-90"> ... </span>
                        </div>
                        <div className="animate-fade-down animate-once animate-delay-300 animate-ease-out">
                            <i className="bi bi-linkedin"></i>
                            <span className="opacity-90"> ... </span>
                        </div>
                    </div>
                    {/*Left extended*/}
                    <div className="space-y-5 text-right">
                        <div className="animate-fade-down animate-once animate-delay-100 animate-ease-out">
                            <a className="hover:underline text-right " href="https://github.com/makuyoshi">
                                <button
                                    className="outline outline-1 pl-3 pr-3 rounded-2xl align-middle hover:text-gray-900 hover:bg-stone-50">
                                    CODEPEN <i className="bi bi-arrow-up-right"></i>
                                </button>
                            </a>
                        </div>
                        <div className="animate-fade-down animate-once animate-delay-200 animate-ease-out">
                            <a className="hover:underline"
                               href="https://stackoverflow.com/users/21579330/makuyoshi">
                                <button
                                    className="outline outline-1 pl-3 pr-3 rounded-2xl align-middle hover:text-gray-900 hover:bg-stone-50">
                                    LEETCODE <i className="bi bi-arrow-up-right"></i>
                                </button>
                            </a>
                        </div>
                        <div className="animate-fade-down animate-once animate-delay-300 animate-ease-out">
                            <a className="hover:underline" href="#">
                                <button
                                    className="outline outline-1 pl-3 pr-3 rounded-2xl align-middle hover:text-gray-900 hover:bg-stone-50">
                                    HACKERRANK <i className="bi bi-arrow-up-right"></i>
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ExtendedContacts;