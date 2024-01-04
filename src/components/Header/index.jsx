import React from 'react';

function Header() {
  return (
    <header className='bg-gray-900 text-white p-5'>
      <section className='container mx-auto flex items-center justify-between'>
        <div className=''>
          <a href="#" className='text-xl font-bold'>
            Logo
          </a>
        </div>
        <ul className='flex space-x-4'>
          <li>
            <a href="#" className='hover:text-gray-300'>
              Home
            </a>
          </li>
          <li>
            <a href="#" className='hover:text-gray-300'>
              Serviços
            </a>
          </li>
          <li>
            <a href="#" className='hover:text-gray-300'>
              Contato
            </a>
          </li>
        </ul>
        <button className='bg-sky-950 hover:bg-blue-500 text-white px-4 py-2 rounded'>
          Agendar Online
        </button>
      </section>
    </header>
  );
}

export default Header;
