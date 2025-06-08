import Image from "next/image"

// images
import cartIcon from '../assets/cart/cartIcon.svg'
import logo from '../assets/shared/desktop/logo.svg'


export default function Header () {
    return (
        <nav className="flex justify-between text-white pt-4 pb-8 border-b border-gray/5">
            <a className="font-bold text-xl"><Image src={logo} alt="logo" /></a>
            <div className="flex gap-6">
                <a>HOME</a>
                <a>HEADPHONES</a>
                <a>SPEAKERS</a>
                <a>EARPHONES</a>
            </div>
            <a><Image src={cartIcon} alt="cart" /></a>
        </nav>
    )
}