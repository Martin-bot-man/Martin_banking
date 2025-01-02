import React from 'react'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className= "flex flex-col md:flex-row items-center justify-between px-4 py-2 bg-gray-100">
      <div className="flex items-center">
        <h1 className="text-xl font-bold">Logo</h1>
      </div>
      <nav className='hidden sm:flex'>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:text-gray-500">Home</a></li>
          <li><a href="#" className="hover:text-gray-500">Product</a></li>
          <li><a href="#" className="hover:text-gray-500">About</a></li>
          <li><a href="#" className="hover:text-gray-500">Contact</a></li>

        </ul>
      </nav>
      <div className="sm:hidden">

      </div>
    </header>
  )
}

export default Header