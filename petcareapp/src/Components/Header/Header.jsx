import './header.css'

export default function Header(){


    return(
        <header>
            <nav className='header_nav' >

                <h2 className="header_nav_logo">
                    Meow
                </h2>

                <ul className='header_nav_list'>
                    <li className="header_nav_items">Home</li>
                    <li className="header_nav_items">Pet Care</li>
                    <li className="header_nav_items">Pet Product</li>
                    <li className="header_nav_items">Facility</li>
                </ul>

                <button className='nav__btn-signup'>Sign Up</button>
            </nav>
        </header>
    )
}