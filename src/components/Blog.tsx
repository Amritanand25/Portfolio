import React from "react";
import { motion } from "framer-motion";
import { Book, ArrowRight, Clock } from "lucide-react";

const blogs = [
  {
    title: "Data Science Vs Machine Learning",
    excerpt:
      "Data Science vs Machine Learning: Core Concepts, Tools, and Real-World Use Cases",
    date: "Nov 29, 2024",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=60",
    category: "Machine Learning",
    url: "https://www.geeksforgeeks.org/data-science-vs-machine-learning/?itm_source=auth&itm_medium=contributions&itm_campaign=articles",
  },
  {
    title: "Difference between Inner Join and Outer Join in SQL",
    excerpt:
      "nner Join vs Outer Join in SQL: Key Differences, Syntax, and Use Cases",
    date: "Aug 09, 2024",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop&q=60",
    category: "SQL",
    url: "https://www.geeksforgeeks.org/difference-between-inner-join-and-outer-join-in-sql/?itm_source=auth&itm_medium=contributions&itm_campaign=articles",
  },
  {
    title: "How to set a value to an input file using HTML?",
    excerpt:
      "Understanding the File Input Type in HTML: Syntax, Examples, and Limitations",
    date: "Jul 22, 2024",
    readTime: "3 min read",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60",
    category: "HTML",
    url: "https://www.geeksforgeeks.org/how-to-set-a-value-to-an-input-file-using-html/?itm_source=auth&itm_medium=contributions&itm_campaign=articles",
  },
];

export const Blog: React.FC = () => {
  return (
    <section className="py-20 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Book className="w-12 h-12 mx-auto mb-4 text-purple-500" />
          <h2 className="text-4xl font-bold dark:text-white">
            Latest Insights
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Sharing knowledge and experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:mx-12">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg transform transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-purple-500 text-white text-sm rounded-full">
                    {blog.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{blog.date}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 dark:text-white">
                  {blog.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {blog.excerpt}
                </p>
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center text-purple-500 hover:text-purple-600 transition-colors"
                >
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={blog?.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-600 transition-colors flex items-center"
                  >
                    Read More <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.a>
                </motion.button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
