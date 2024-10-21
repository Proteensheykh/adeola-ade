import React from "react";  

const ContactForm = () => {
    
    const handleSubmit = (event) => {
        console.log("in event")
        event.preventDefault();
        console.log(event)
      
        const formData = new FormData(event.target);
        
        fetch("https://script.google.com/macros/s/AKfycbxqUbv6xx5t_75ML9AIYVWxXB4IJe1e5OfETOX_EsaNc9ergrur1dYxSyAMzYOqMq9_Gw/exec", {
          method: "POST",
          body: formData,
        })
        .then((response) => response.json())
        .then((data) => {
          if (data.status === "success") {
            alert("Form submitted successfully!");
          } else {
            alert("Something went wrong, please try again.");
          }
        })
        .catch((error) => console.error("Error:", error));
      };

  return (
    <section className="py-16 px-4 md:px-20 bg-fefae0 text-purple-800" id="contact">
      <h2 className="text-4xl font-semibold text-center mb-8">Want to work together?</h2>
      <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-8">
        
        {/* Left side: Image */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 hidden md:block">
          <img
            src="https://i.ibb.co/tMnm82H/pexels-cottonbro-5053842.jpg"
            alt="Adeola"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>

        {/* Right side: Contact form */}
        <div className="w-full lg:w-1/2 bg-white p-8 rounded-lg border-none">
          <form onSubmit={handleSubmit}>
            {/* First Name */}
            <div className="mb-6">
              <label htmlFor="full-name" className="block mb-2 text-lg text-purple-800 font-semibold">
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400"
                placeholder="Please provide your first name"
                required
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 text-lg text-purple-800 font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400"
                placeholder="Please provide your email address"
                required
              />
            </div>

            {/* Company */}
            <div className="mb-6">
              <label htmlFor="company" className="block mb-2 text-lg text-purple-800 font-semibold">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400"
                placeholder="Please provide your company name"
                required
              />
            </div>

            {/* Project type */}
            <div className="mb-6">
              <label htmlFor="project-type" className="block mb-2 text-lg text-purple-800 font-semibold">
                What kind of project?
              </label>
              <select
                id="project-type"
                name="project-type"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400"
                required
              >
                <option value="" disabled selected>Select a project</option>
                <option value="creative direction & consultation">Creative Direction and consultation</option>
                <option value="stop motion">Stop-motion animation</option>
                <option value="production design">Production design</option>
                <option value="video production">Video production</option>
              </select>
            </div>


            {/* Project Description */}
            <div className="mb-6">
              <label htmlFor="project-description" className="block mb-2 text-lg text-purple-800 font-semibold">
                Briefly describe what you're looking for
              </label>
              <textarea
                id="project-description"
                name="project-description"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400"
                placeholder="Describe your project needs"
                required
              ></textarea>
            </div>

            {/* Timeline */}
            <div className="mb-6">
              <label htmlFor="timeline" className="block mb-2 text-lg text-purple-800 font-semibold">
                What’s your tentative timeline for this project?
              </label>
              <input
                type="text"
                id="timeline"
                name="timeline"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400"
                placeholder="Enter timeline (e.g., 3 months)"
                required
              />
            </div>

            {/* Budget Range */}
            <div className="mb-6">
              <label htmlFor="budget" className="block mb-2 text-lg text-purple-800 font-semibold">
                What budget range do you fall in for the overall project?
              </label>
              <select
                id="budget"
                name="budget"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-400"
                required
              >
                <option value="" disabled selected>Select your budget range</option>
                <option value="less_than_5000">Less than $5,000</option>
                <option value="5000_10000">$5,000 - $10,000</option>
                <option value="10000_20000">$10,000 - $20,000</option>
                <option value="20000_40000">$20,000 - $40,000</option>
                <option value="40000_70000">$40,000 - $70,000</option>
                <option value="70000_100000">$70,000 - $100,000</option>
                <option value="100000+">More than $100,000</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-green-400 text-white text-lg font-semibold py-2 px-6 rounded-lg hover:bg-green-500 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
