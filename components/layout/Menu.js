'use client'
export default function Menu() {
    return (
        <nav id="main-nav" className="main-nav">
            <ul id="menu-primary-menu" className="menu">
                <li className="menu-item">
                    <a href="#home" className="nav-link">Home</a>
                </li>
                <li className="menu-item">
                    <a href="#feature" className="nav-link">Features</a>
                </li>
                <li className="menu-item">
                    <a href="#step" className="nav-link">Steps</a>
                </li>
                <li className="menu-item">
                    <a href="#chart" className="nav-link">Chart</a>
                </li>
                <li className="menu-item">
                    <a href="#partner" className="nav-link">Partners</a>
                </li>
                <li className="menu-item">
                    <a href="#faq" className="nav-link">FAQ</a>
                </li>
            </ul>
        </nav>
    )
}

