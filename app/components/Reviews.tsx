import { Star } from 'lucide-react';

const reviews = [
    {
        id: 1,
        author: "John Doe",
        comment: "Diamond Asphalt transformed our commercial space. The attention to detail was incredible.",
        stars: 5
    },
    {
        id: 2,
        author: "Jane Smith",
        comment: "Professional, timely, and on budget. I highly recommend them for any construction needs.",
        stars: 5
    },
    {
        id: 3,
        author: "Robert Brown",
        comment: "Great team to work with. They kept us informed throughout the entire process.",
        stars: 4
    }
];

const Reviews = () => {
    return (
        <section className="py-20 bg-background-alt">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 text-primary">What Our Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review) => (
                        <div key={review.id} className="bg-background p-10 rounded-lg shadow-lg border border-white/5 flex flex-col gap-4">
                            <div className="text-primary text-xl flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={20}
                                        fill={i < review.stars ? "currentColor" : "none"}
                                        className={i < review.stars ? "text-primary" : "text-gray-600"}
                                    />
                                ))}
                            </div>
                            <p className="italic text-gray-300 leading-relaxed">"{review.comment}"</p>
                            <p className="font-bold text-white mt-2">- {review.author}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
