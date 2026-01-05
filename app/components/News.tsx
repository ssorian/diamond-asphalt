import Link from 'next/link';

const articles = [
    {
        id: 1,
        title: "Sustainable Construction Practices",
        excerpt: "Exploring the latest trends in green building and how they impact the environment.",
        image: ""
    },
    {
        id: 2,
        title: "Award Winning Design 2024",
        excerpt: "Diamond Asphalt receives recognition for excellence in architectural design.",
        image: ""
    },
    {
        id: 3,
        title: "Safety First: Our Commitment",
        excerpt: "How we ensure the highest safety standards on every single job site.",
        image: ""
    }
];

const News = () => {
    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 text-primary">Latest News</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <Link
                            href="/resources"
                            key={article.id}
                            className="bg-background-alt rounded-lg overflow-hidden shadow-lg border border-white/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-primary group"
                        >
                            <div className="h-48 w-full bg-gray-800 group-hover:bg-gray-700 transition-colors duration-300"></div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors duration-300">
                                    {article.title}
                                </h3>
                                <p className="text-sm text-gray-400 leading-relaxed">{article.excerpt}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default News;
