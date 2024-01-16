import Link from 'next/link';
import NotFoundImage from '@/public/404.jpg'; // Import your 404 image component or specify the image source directly
import Image from 'next/image';

export default function NotFound() {
    return (
        <div>
            <Image src={NotFoundImage} alt="Not Found" width={600} height={400} />
            <Link href="/">
                <button>Return Home</button>
            </Link>
        </div>
    )
}
