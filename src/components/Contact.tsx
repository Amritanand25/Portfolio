import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface ApiResponse {
  response: "success" | "error";
  data: string;
}

// const api = 'https://script.google.com/macros/s/AKfycbwP7fK4-wFkeqDIr4_AUJgYyHCjNXQW7x6meHf2AGPTG92DPhs8pe4e3FYd5IS30VV0Aw/exec?path=portfolio-response&action=read'

const baseUrl =
  "https://script.google.com/macros/s/AKfycbwP7fK4-wFkeqDIr4_AUJgYyHCjNXQW7x6meHf2AGPTG92DPhs8pe4e3FYd5IS30VV0Aw/exec?path=portfolio-response&action=write";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendToGoogleSheet = async (
    name: string,
    email: string,
    message: string
  ): Promise<ApiResponse> => {
    const queryParams = `&Name=${name}&Email=${email}&Message=${message}`;

    try {
      const response = await fetch(baseUrl + queryParams, {
        method: "GET",
        redirect: "follow",
      });

      // if (!response.ok) {
      //   throw new Error(`HTTP error! Status: ${response.status}`);
      // }

      // Check for 302 Found or successful status
      if (response.ok || response.status === 302) {
        const responseData = await response
          .json()
          .catch(() => "Redirect Success");
        return {
          response: "success",
          data: responseData || "Redirect Success",
        };
      }

      throw new Error(`HTTP error! Status: ${response.status}`);
    } catch (error: unknown) {
      return {
        response: "error",
        data: error instanceof Error ? error.message : "Unknown error",
      };
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Simulate API call
      const response = await sendToGoogleSheet(
        formData.name,
        formData.email,
        formData.message
      );
      if (response?.response === "success") {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" className="py-20 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-12 text-center dark:text-white">
            Get in Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-4"
              >
                <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold dark:text-white">
                    Email
                  </h3>
                  <a
                    href="mailto:amritanand.jnv25@gmail.com"
                    className="text-gray-600 dark:text-gray-300 hover:text-purple-500"
                  >
                    amritanand.jnv25@gmail.com
                  </a>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="flex items-center space-x-4"
              >
                <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold dark:text-white">
                    Phone
                  </h3>
                  <a
                    href="tel:+917903047672"
                    className="text-gray-600 dark:text-gray-300 hover:text-purple-500"
                  >
                    +91 7903047672
                  </a>
                </div>
              </motion.div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center space-x-4"
              >
                <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold dark:text-white">
                    Location
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Bangalore, Karnataka, India
                  </p>
                </div>
              </motion.div>
            </div>
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-4"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium dark:text-white"
                >
                  What's Your Name?
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`mt-1 p-1 px-2 block w-full rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white ${
                    errors.name
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-700"
                  }`}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium dark:text-white"
                >
                  How Can We Reach You?
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-1 p-1 px-2 block w-full rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white ${
                    errors.email
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-700"
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium dark:text-white"
                >
                  Drop Your Thoughts Here
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  placeholder="Message"
                  onChange={handleChange}
                  className={`mt-1 p-1 px-2 block w-full rounded-md shadow-sm focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white ${
                    errors.message
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-700"
                  }`}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center justify-center space-x-2 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors ${
                  isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                }`}
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </motion.button>
              {submitStatus === "success" && (
                <p className="text-green-500 text-center">
                  Message sent successfully!
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-500 text-center">
                  Failed to send message. Please try again.
                </p>
              )}
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
