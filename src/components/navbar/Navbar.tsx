import './Navbar.css';

export const Navbar = () => {
    return (
        <header className="main-header">
            <div className="main-header__title">
                <a href="/">Durlabh Sharma</a>
            </div>
            <nav className="main-header__nav">
                <ul className="main-header__nav-items">
                    <li className="main-header__nav-item">
                        <a href="/portfolio">Portfolio</a>
                    </li>
                    <li className="main-header__nav-item">
                        <a href="/blog">Blog</a>
                    </li>
                    <li className="main-header__nav-item">
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
} 