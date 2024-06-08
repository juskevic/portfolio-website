import React from "react";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="flex flex-col justify-center
                    p-2 text-sm bottom-0 opacity-80 space-y-2 pt-40 text-center
                    xl:p-4 xl:w-full xl:space-x-8 xl:text-lg xl:bottom-0 xl:opacity-80 xl:space-y-3 xl:pt-40">
                    <p className="text-center">
                        This website has been built using <span className="text-gray-200">Next.js</span>, React and Tailwind CSS. <br />
                        Check out the <a href="https://github.com/makuyoshi/makuyoshi-web" className="text-gray-200 underline underline-offset-2">source-code on my GitHub page.
                        <i className="bi bi-box-arrow-up-right"></i></a>
                    </p>
                    <p className="text-center">
                        &copy; {new Date().getFullYear()} Max Yushkevich. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer;
