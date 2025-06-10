import Image from "next/image"

// images
import cartIcon from '../assets/cart/cartIcon.svg'
import logo from '../assets/shared/desktop/logo.svg'


export default function Header () {
    return (
        <nav className="flex justify-between text-white pt-4 pb-8 border-b border-gray/5">
            <a className="font-bold text-xl"><Image src={logo} alt="logo" /></a>
            <div className="flex gap-6">
                <a className="hover:text-orange">HOME</a>
                <a className="hover:text-orange">HEADPHONES</a>
                <a className="hover:text-orange">SPEAKERS</a>
                <a className="hover:text-orange">EARPHONES</a>
            </div>
            <a><Image src={cartIcon} alt="cart" /></a>
        </nav>
    )
}