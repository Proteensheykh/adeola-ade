import React from 'react';

function Contact() {
  return (
    <section id="contact" className="bg-pastelGreen py-16 text-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-pastelBlue mb-8">Contact Me</h2>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <input
              type="text"
              className="w-full p-4 rounded bg-lightGray focus:outline-none focus:ring-2 focus:ring-pastelBlue"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              className="w-full p-4 rounded bg-lightGray focus:outline-none focus:ring-2 focus:ring-pastelBlue"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <textarea
              className="w-full p-4 rounded bg-lightGray focus:outline-none focus:ring-2 focus:ring-pastelBlue"
              placeholder="Your Message"
              rows="5"
            ></textarea>
          </div>
          <button type="submit" className="bg-pastelPink text-gray-900 py-3 px-6 rounded-full hover:bg-pastelBlue">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
