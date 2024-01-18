import Link from 'next/link';
import NotFoundImage from '@/public/404.jpg'; // Import your 404 image component or specify the image source directly
import Image from 'next/image';
import styles from './NotFound.module.css';

export default function NotFound() {
    return (
        <div className={styles.notFound}>
            <div className={styles.vh}>
                <div>
                    <div className={styles.wrap}>
                        <h1>Page Not Found</h1>
                        <h2>The page you are looking for does not exist.</h2>
                        <div>
                            <button className={styles.button}>
                                <div className={styles.buttonInner}>
                                    <div className={styles.buttonContent}>
                                        <Link href="/">
                                            <button>Return Home</button>
                                        </Link>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
