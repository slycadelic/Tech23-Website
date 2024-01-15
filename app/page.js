import Image from 'next/image';
import pic from '../public/Under Development.jpg';

export default function Home() {
    return (
        <main>
            <div>
                <h1>Tech 23 Gaming</h1>
                <h2>Welcome to Tech 23 Gaming: Where Innovation Fuels Digital Excellence!</h2>
                <p>
                    Embark on a transformative journey with Tech 23 Gaming,
                    a leading force in software services dedicated to crafting exceptional
                    web and mobile applications for businesses.
                    <br />
                    Our expertise extends beyond
                    conventional development, encompassing a rich portfolio of in-house products
                    designed to revolutionize your digital landscape.
                </p>
                <h3>
                    Our Expertise
                </h3>
                <h4>Custom Software Development</h4>
                <p>
                    Tech 23 Gaming specializes in creating tailor-made software solutions
                    that precisely align with your business objectives.
                    Whether you need a robust web application or a feature-rich mobile app,
                    our seasoned developers are ready to bring your vision to life.
                </p>
                <h4>Product Development</h4>
                <p>
                    Explore our innovative suite of in-house products crafted to enhance efficiency,
                    streamline processes, and elevate the overall performance of your business.
                </p>
                <h4>
                    UI/UX Design
                </h4>
                <p>
                    Our dedicated design team collaborates with clients to create
                    intuitive and visually appealing interfaces, ensuring a seamless user experience
                    that captivates and leaves a lasting impression.
                </p>
                <h4>
                    Consulting Services
                </h4>
                <p>
                    Beyond development, Tech 23 Gaming offers strategic consulting services,
                    providing insights and guidance to align your digital initiatives with
                    industry best practices and emerging trends.
                </p>
                <h3>
                    Why Choose Tech 23 Gaming?
                </h3>
                <h4>
                    Proven Track Record
                </h4>
                <p>
                    With a successful history of delivering high-quality solutions,
                    Tech 23 Gaming has earned the trust of businesses large and small.
                </p>
                <h4>
                    Innovation at the Core
                </h4>
                <p>
                    Our commitment to innovation is evident in both the services we provide
                    and the products we develop. Stay ahead of the curve with solutions
                    that stand the test of time.
                </p>
                <h4>
                    Collaborative Approach
                </h4>
                <p>
                    We believe in the power of collaboration.
                    Tech 23 Gaming works closely with clients to
                    understand their goals, challenges, and aspirations,
                    fostering a partnership that goes beyond the project lifecycle.
                </p>
                <h4>
                    Scalability
                </h4>
                <p>
                    Our solutions are designed with scalability in mind.
                    Whether you're a startup or an established enterprise,
                    Tech 23 Gaming's services can adapt to the evolving needs of your business.
                </p>
                <h2>
                    Explore the possibilities with Tech 23 Gaming.
                    Elevate your digital presence, streamline your operations,
                    and embrace the future of technology with confidence. Contact us today to unlock innovation and gaming excellence.
                </h2>
            </div>
            <Image
                src={pic}
                alt={'Under Development'}
                width={700}
                height={200}
                style={{ backgroundColor: 'black', margin: 0 }}
            />
        </main>
    )
}
