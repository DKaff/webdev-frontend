import { useState } from 'react';

function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    try {
      const res = await fetch('https://webdev-backend-0bwn.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus(data.error || 'Something went wrong.');
      }
    } catch (error) {
      console.error('Network error:', error);
      setStatus('Network error. Please try again later.');
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="py-20 px-4 text-center bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-6">Beautiful, Affordable Websites</h2>
          <p className="text-lg text-gray-600 mb-8">
            I help small businesses stand out with fast, responsive websites tailored to your brand.
          </p>
          <a href="#contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
            Get a Free Quote
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-12">Services</h3>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-2">Custom Website Design</h4>
              <p className="text-gray-600">
                Mobile-friendly, fast-loading, and designed for your brand.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-2">Search Engine Optimization</h4>
              <p className="text-gray-600">
                Help your site show up on Google with optimized structure and metadata.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-2">Ongoing Maintenance</h4>
              <p className="text-gray-600">
                Keep your website updated, secure, and running smoothly month to month.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Contact Me</h3>
          <p className="mb-8 text-gray-600">
            Ready to get started? Fill out the form below or email me at{' '}
            <a href="mailto:your.email@example.com" className="text-blue-600 underline">
              your.email@example.com
            </a>
            .
          </p>
          <form className="max-w-xl mx-auto text-left" onSubmit={handleSubmit}>
            <label className="block mb-2 font-semibold" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="w-full mb-4 p-3 border rounded"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label className="block mb-2 font-semibold" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your email"
              className="w-full mb-4 p-3 border rounded"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label className="block mb-2 font-semibold" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Your message"
              className="w-full mb-4 p-3 border rounded"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
          {status && <p className="mt-4 text-center text-green-600">{status}</p>}
        </div>
      </section>
    </>
  );
}

export default Home;
