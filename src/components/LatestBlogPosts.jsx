import React from 'react';

const LatestBlogPosts = () => {
    return (
        <>
            <div className="flex flex-row justify-between pb-2 text-2xl
            opacity-80">
                <h2 className="opacity-90">Latest blog posts</h2>
                <a className="outline outline-1 rounded-2xl w-8 text-2xl pl-1 hover:text-gray-900 hover:bg-stone-50"
                   href="#">
                    <i className="bi bi-arrow-up-right"></i>
                </a>
            </div>
            <div className="flex justify-between items-center p-2
            opacity-90">
                <h3 className="text-lg">31.12.2024</h3>
                <div className="w-1/2
                border border-stone-800 rounded-xl"></div>
                <h3 className="text-lg text-right">Coming soon</h3>
            </div>
            <div className="flex justify-between items-center p-2 opacity-70">
                <h3 className="text-lg">31.12.2024</h3>
                <div className="w-1/2
                border border-stone-800 rounded-xl"></div>
                <h3 className="text-lg text-right">Coming soon</h3>
            </div>
            <div className="flex justify-between items-center p-2 opacity-50">
                <h3 className="text-lg">31.12.2024</h3>
                <div className="w-1/2
                border border-stone-800 rounded-xl"></div>
                <h3 className="text-lg text-right">Coming soon</h3>
            </div>
            <div className="flex justify-between items-center p-2 opacity-20">
                <h3 className="text-lg">31.12.2024</h3>
                <div className="w-1/2
                border border-stone-800 rounded-xl"></div>
                <h3 className="text-lg text-right">Coming soon</h3>
            </div>
        </>
    )
}

export default LatestBlogPosts