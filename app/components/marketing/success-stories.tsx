import Image from 'next/image';

const stories = [
  {
    title: 'Three.js Flight Simulator by Peter Levels',
    image: '/flight-sim.jpg',
    type: 'project',
    description: 'Complete flight simulator built using vibe coding principles',
  },
  {
    title: 'Startup MVP Development',
    image: '/mvp.jpg',
    type: 'project',
    description: 'Rapid prototyping success cases in startup environment',
  },
  {
    title: 'David Andre\'s Startup Development',
    image: '/startup-dev.jpg',
    type: 'project',
    description: 'Documentation of vibe coding implementation in startup',
  },
  {
    title: 'Matthew Berman\'s Tutorial Success',
    image: '/tutorial-success.jpg',
    type: 'testimonial',
    description: 'Best practices implementation case study',
  },
  {
    title: 'Andrej Karpathy\'s Original Implementation',
    image: '/karpathy-demo.jpg',
    type: 'project',
    description: 'First documented vibe coding project by the methodology creator',
  },
  {
    title: 'Game Development Showcase',
    image: '/game-dev.jpg',
    type: 'project',
    description: 'Visual applications built with AI assistance',
  },
  {
    title: 'Community Success Stories',
    image: '/community.jpg',
    type: 'testimonial',
    description: 'Collection of developer experiences and transformations',
  }
];

export function SuccessStories() {
  return (
    <section className="w-full max-w-5xl py-12">
      <h2 className="text-4xl font-bold mb-8 text-center">Success Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((story, index) => (
          <div 
            key={index}
            className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="relative aspect-[16/9]">
              <Image
                src={story.image}
                alt={story.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3">
                <span className="px-3 py-1 text-xs font-medium bg-black/60 text-white rounded-full">
                  {story.type}
                </span>
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">{story.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{story.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
