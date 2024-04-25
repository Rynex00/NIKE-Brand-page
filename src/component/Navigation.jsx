

const Navigation = () => {
    return (
        <div className='shadow'>
        <nav className='flex justify-between items-center w-[92%] h-20 mx-auto container'>
  
          <div className='logo '>
            <img src="/public/images/brand_logo.png" alt="" />
          </div>
  
          <div className=' md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] w-full md:w-auto flex items-center px-5 '>
          <ul className=' flex md:flex-row flex-col md:items-center md:gap-8 gap-8'>
            <li><a className=' hover:text-gray-500' href="#">Menu</a></li>
            <li><a className=' hover:text-gray-500' href="#">Location</a></li>
            <li><a className=' hover:text-gray-500' href="#">About</a></li>
            <li><a className=' hover:text-gray-500' href="#">Contact</a></li>
          </ul>
          </div>
  
          <div className='flex items-center gap-6 '>
          <button className='px-4 py-2  font-medium bg-red-500 text-white rounded-full hover:bg-red-700'>Login</button>
          <div className='text-3xl cursor-pointer mt-2 md:hidden'>
          <ion-icon name="menu-outline"></ion-icon>
          </div>
          </div>
        </nav>
      </div>
    );
};

export default Navigation;