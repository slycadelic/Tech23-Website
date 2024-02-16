import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

// To prevent oversized icons due to default styling.
// import '@fortawesome/fontawesome-svg-core/styles.css';
// import { config } from "@fortawesome/fontawesome-svg-core";
// config.autoAddCss = false;

export const metadata = {
    title: 'Tech23 Gaming',
    description: 'Welcome to Tech Twenty Three Gaming Solutions: Where Innovation Fuels Digital Excellence! Embark on a transformative journey with Tech 23 Gaming, a leading force in software services dedicated to crafting exceptional web and mobile applications for businesses. Our expertise extends beyond conventional development, encompassing a rich portfolio of in-house products designed to revolutionize your digital landscape.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                <main>
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
