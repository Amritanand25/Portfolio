import React from "react";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const testimonials = [
  {
    name: "Arunava Das",
    role: "Product Manager at RekordBook",
    content:
      "Amrit Anand consistently delivered high-quality, scalable code with strong problem-solving skills and a proactive approach. His collaboration and dedication to learning make him a valuable asset. Highly recommend him for any development team.",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQEN_A0XPupasA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726518919842?e=1738800000&v=beta&t=cMWguMRTy8uOAlOXHTGe5DW-LpaWB8vau_v7ETFhLZo",
  },
  {
    name: "Shyamal Parikh",
    role: "CTO & Co-founder at Smart Task",
    content:
      "Amrit’s expertise and dedication stood out when he successfully developed complex Azure B2C policies at SmartTask. A skilled professional with a strong work ethic, he’s highly recommended for any organization.",
    image:
      "https://media.licdn.com/dms/image/v2/C4E03AQGTtpIUwRsnBw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1637247097342?e=1738800000&v=beta&t=fpUJX-ecwxHJ1Jm2GgneS-b_9XfZefWt-Wrks9PJ1Qo",
  },
  {
    name: "Shubham Shekhar",
    role: "Team lead at s759labs",
    content:
      "Amrit is exceptional at delivering end-to-end features and brings invaluable expertise to any organization. Alongside his technical skills, his teamwork is equally commendable. Highly recommend him for a software engineering role.",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQFTqfLfIfFDkw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1694518808205?e=1738800000&v=beta&t=zW7HCoCyc3Uw1z6mY42Fm5RUi9rJXEFqam6m-8gpMhY",
  },
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
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {testimonial.content}
                    </p>
                    <div className="flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold dark:text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {testimonial.role}
                        </p>
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
