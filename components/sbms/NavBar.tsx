
import Link from "next/link"

const Navbar = () => {
 

  return (
      <nav>
        <Link href="/" className="logo">SIMA Beauty Expo</Link>
        <ul className="nav-links">
          
          <li><a href="#about">About</a></li>
          <li><Link href="/bbn_directors">BBN Directors</Link></li>
          <li><Link href="/events">Events</Link></li>
          <li><Link href="/gallery">Gallery</Link></li>
          <li><a href="#pageant">Pageant</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><Link href="/signup">Sign Up</Link></li>
          <li><Link href="/login">Login</Link></li>
        </ul>
        <div className="menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
  )
}

export default Navbar