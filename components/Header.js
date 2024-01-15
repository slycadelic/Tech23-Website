import Image from 'next/image';
import Logo from '../public/logo.png';
import Link from "next/link";

const Header = () => {
    return (
        <div className='header'>
            <Link href='/'>
                <Image
                    src={Logo}
                    alt={'Tech 23 Gaming Logo'}
                    width={80}
                    height={80}
                />
            </Link>
            <div>
                <span>Home</span>
                <span>About</span>
                <span>Services</span>
                <span>Portfolio</span>
                <span>Careers</span>
                <span>Contact Us</span>
            </div>
        </div>
    )
}

export default Header