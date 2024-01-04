import React from 'react'

function Header() {
  return (
    <header>
        <section>
            <div className='logo'> 
                <a href="#">
                    Logo
                </a>
            </div>
            <ul className='links'>
                <li>
                    <a href="#">Home</a>
                    <a href="#">Serviços</a>
                </li>
            </ul>
        </section>
    </header>
  )
}

export default Header