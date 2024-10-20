import React from 'react';

function ServicesSection() {
  return (
    <section className="p-8 bg-white">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">My Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 border rounded-lg bg-gray-100">
          <h3 className="text-xl font-semibold mb-2">Stop-Motion Animation</h3>
          <p>I create captivating stop-motion animations that bring stories to life.</p>
        </div>
        <div className="p-4 border rounded-lg bg-gray-100">
          <h3 className="text-xl font-semibold mb-2">Production Design</h3>
          <p>Innovative design solutions that make productions stand out.</p>
        </div>
        {/* Add more services */}
      </div>
    </section>
  );
}

export default ServicesSection;
