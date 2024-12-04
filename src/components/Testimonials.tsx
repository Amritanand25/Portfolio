import React from 'react';
import { motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const testimonials = [
  {
    name: "John Smith",
    role: "Tech Lead at RekordBook",
    content: "Amrit is an exceptional developer who consistently delivers high-quality code. His attention to detail and problem-solving skills are outstanding.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&auto=format&fit=crop&q=60"
  },
  {
    name: "Sarah Johnson",
    role: "Project Manager at Smart Task",
    content: "Working with Amrit was a pleasure. His technical expertise and ability to meet deadlines made him an invaluable team member.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60"
  },
  {
    name: "Michael Chen",
    role: "CTO at s759labs",
    content: "Amrit's innovative approach to problem-solving and dedication to learning new technologies sets him apart. He's a true asset to any team.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60"
  }
];

export const Testimonials: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-20 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold mb-12 text-center dark:text-white"
        >
          Testimonials
        </motion.h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 pl-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg relative mx-4"
                  >
                    <Quote className="w-8 h-8 text-purple-500 mb-4" />
                    <p className="text-gray-600 dark:text-gray-300 mb-6">{testimonial.content}</p>
                    <div className="flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold dark:text-white">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 text-purple-500" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 p-2 rounded-full shadow-lg"
          >
            <ChevronRight className="w-6 h-6 text-purple-500" />
          </button>
        </div>
      </div>
    </section>
  );
};