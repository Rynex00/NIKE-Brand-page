import React from 'react';

const Heros = () => {
    return (
        <main className='container mx-2 xl:mx-auto my-12'>
            <div className=' flex flex-col md:flex-row lg:flex-row items-center md:h-[800px]  px-4 lg:px-0 justify-between lg:mx-32'>
            <div className=' order-last md:order-first'>
                <h1 className='text-6xl md:text-7xl lg:text-8xl font-extrabold mb-9'>YOUR FEET <br />DESERVE <br /> THE BEST</h1>
                <p className=' font-semibold text-gray-500 mb-9'>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br /> HELP YOU WITH OUR SHOES. 
                YOUR FEET DESERVE THE <br /> BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

                <div className='mb-9 '>
                    <button className='px-4 py-2  font-medium bg-red-500 text-white rounded-md hover:bg-red-700'>Shop Now</button>
                    <button className='ml-10 border border-gray-200 px-4 py-2 text-gray-500 font-semibold
                    ' >Category</button>
                </div>
                <div>
                    <p className='mb-4 text-gray-500'>Also Available On</p>
                    <div className='flex gap-4'>
                        <a target='_blank' href="https://www.amazon.in/"><img src="/public/images/amazon.png" alt="" /></a>
                        <a target='_blank' href="https://www.flipkart.com/"><img src="/public/images/flipkart.png" alt=""/></a>
                        
                    </div>
                </div>
            </div>

            <div className=' '>
                <img src="/public/images/hero-image.png" alt="" />
            </div>
            </div>
        </main>
    );
};

export default Heros;