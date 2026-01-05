import Image from 'next/image';
import Link from 'next/link';

const projects = [
    {
        id: 1,
        title: "Skyline Tower",
        image: "/images/project_3_1767638986151.png",
        height: "h-[600px]"
    },
    {
        id: 2,
        title: "River Bridge",
        image: "/images/project_4_1767639002333.png",
        height: "h-[400px]"
    },
    {
        id: 3,
        title: "Modern Residence",
        image: "/images/placeholder_project_1.png",
        height: "h-[500px]"
    },
    {
        id: 4,
        title: "Industrial Hub",
        image: "/images/placeholder_project_2.png",
        height: "h-[450px]"
    }
];

const Projects = () => {
    return (
        <section className="py-20 bg-background" id="projects">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-16 text-white">Featured Projects</h2>
                <div className="columns-1 md:columns-2 gap-8 space-y-8">
                    {projects.map((project) => (
                        <Link
                            href={`/projects/#${project.id}`}
                            key={project.id}
                            className="block relative rounded-lg overflow-hidden cursor-pointer group break-inside-avoid"
                        >
                            <div className={`relative w-full ${project.height}`}>
                                {project.image.includes('placeholder') ? (
                                    <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-500 font-medium">
                                        Project Image Placeholder
                                    </div>
                                ) : (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
