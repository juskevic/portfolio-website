import React from 'react';
import {faArrowUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const LatestBlogPosts = () => {
    return (
        <>
            <div className="flex flex-row justify-between pb-1 text-xl xl:pb-2 xl:text-2xl">
                <h2 className="opacity-90">Latest blog posts</h2>
                <a className="w-8 text-2xl pl-1 rounded hover:text-gray-900 hover:bg-stone-50"
                   href="#">
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
            </div>
            <div className="flex justify-between items-center
            xl:p-2 p-2
            opacity-90">
                <h3 className="text-lg">31.12.2024</h3>
                <div className="xl:w-1/2 w-1/4
                border border-stone-800 rounded-xl"></div>
                <h3 className="text-lg text-right">Coming soon</h3>
            </div>
            <div className="flex justify-between items-center p-2 opacity-70">
                <h3 className="text-lg">31.12.2024</h3>
                <div className="xl:w-1/2 w-1/4
                border border-stone-800 rounded-xl"></div>
                <h3 className="text-lg text-right">Coming soon</h3>
            </div>
            <div className="flex justify-between items-center p-2 opacity-50">
                <h3 className="text-lg">31.12.2024</h3>
                <div className="xl:w-1/2 w-1/4
                border border-stone-800 rounded-xl"></div>
                <h3 className="text-lg text-right">Coming soon</h3>
            </div>
            <div className="flex justify-between items-center p-2 opacity-20">
                <h3 className="text-lg">31.12.2024</h3>
                <div className="xl:w-1/2 w-1/4
                border border-stone-800 rounded-xl"></div>
                <h3 className="text-lg text-right">Coming soon</h3>
            </div>
        </>
    )
}

export default LatestBlogPosts