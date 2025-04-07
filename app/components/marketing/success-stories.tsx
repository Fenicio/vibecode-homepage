import Image from 'next/image';

const stories = [
  {
    title: 'Three.js Flight Simulator',
    image: '/flight-sim.jpg',
    type: 'project',
  },
  {
    title: 'MVP Launches',
    image: '/mvp.jpg',
    type: 'project',
  },
  {
    title: 'Testimonials',
    image: '/testimonial1.jpg',
    type: 'testimonial',
  },
  {
    title: 'Testimonials',
    image: '/testimonial2.jpg',
    type: 'testimonial',
  },
];

export function SuccessStories() {
  return (
    <section className="w-full max-w-5xl">
      <h2 className="text-4xl font-bold mb-6">Success Stories</h2>
      <div className="grid grid-cols-2 gap-4">
        {stories.map((story, index) => (
          <div 
            key={index}
            className="relative aspect-[4/3] rounded-lg overflow-hidden"
          >
            <Image
              src={story.image}
              alt={story.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end p-4">
              <h3 className="text-white font-semibold">{story.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
