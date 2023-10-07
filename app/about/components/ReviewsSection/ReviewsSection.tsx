import ReviewCard from "./ReviewCard";


const ReviewsSection = () => {
    return (
        <div className="bg-white py-5 sm:py-32">
            <div className="mx-auto grid max-w-8xl gap-x-4 gap-y-5 px-6 lg:px-8 xl:grid-cols-2">
                <div className="max-w-2xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Client Testimonials</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">Here What Our Client Have To Say About Us.</p>
                </div>
                <ul role="list" className="grid gap-x-8 gap-y-8 sm:grid-cols-3 sm:gap-y-16 xl:col-span-2">
                    <ReviewCard name='Tim Cook' position="CEO" company="Apple" rating={5} imageUrl='/images/anthony.JPG' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Mollis aliquam ut porttitor leo a diam sollicitudin.</ReviewCard>
                    <ReviewCard name='Tim Cook' position="CEO" company="Apple" rating={5} imageUrl='/images/anthony.JPG' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Mollis aliquam ut porttitor leo a diam sollicitudin.</ReviewCard>
                    <ReviewCard name='Tim Cook' position="CEO" company="Apple" rating={4} imageUrl='/images/anthony.JPG' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Mollis aliquam ut porttitor leo a diam sollicitudin.</ReviewCard>
                    <ReviewCard name='Tim Cook' position="CEO" company="Apple" rating={4.5} imageUrl='/images/anthony.JPG' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Mollis aliquam ut porttitor leo a diam sollicitudin.</ReviewCard>
                    <ReviewCard name='Tim Cook' position="CEO" company="Apple" rating={4.8} imageUrl='/images/anthony.JPG' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Mollis aliquam ut porttitor leo a diam sollicitudin.</ReviewCard>
                    <ReviewCard name='Tim Cook' position="CEO" company="Apple" rating={5} imageUrl='/images/anthony.JPG' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Mollis aliquam ut porttitor leo a diam sollicitudin.</ReviewCard>
                    <ReviewCard name='Tim Cook' position="CEO" company="Apple" rating={3.5} imageUrl='/images/anthony.JPG' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Mollis aliquam ut porttitor leo a diam sollicitudin.</ReviewCard>
                    <ReviewCard name='Tim Cook' position="CEO" company="Apple" rating={4} imageUrl='/images/anthony.JPG' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Mollis aliquam ut porttitor leo a diam sollicitudin.</ReviewCard>


                </ul>
            </div>
        </div>
    );
}



export default ReviewsSection


