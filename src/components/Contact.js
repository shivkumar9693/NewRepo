import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
   emailjs.sendForm(
  process.env.REACT_APP_EMAILJS_SERVICE_ID,
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  form.current,
  process.env.REACT_APP_EMAILJS_PUBLIC_KEY
)

      .then(() => {
        setSent(true);
        form.current.reset();
      })
      .catch((error) => console.error(error));
  };

  return (
    <motion.section
      id="contact"
      className="p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-500 text-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-lg mx-auto space-y-4"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-white"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-white"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="4"
          className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded text-black dark:text-white"
        ></textarea>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Send
        </button>
        {sent && (
          <p className="text-green-500 dark:text-green-400 mt-2">
            Message sent successfully!
          </p>
        )}
      </form>
    </motion.section>
  );
};

export default Contact;
