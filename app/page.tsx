import React from "react";
import Image from "next/image";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section with Video */}
      <section className="pt-20 pb-32 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
              Welcome to <span className="text-blue-600">Neospace</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover a new dimension of possibilities with our innovative
              platform
            </p>
            {/* Buttons links to neospacecanvas.com */}
            <Link
              href="https://neospacecanvas.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
                Get Started
              </button>
            </Link>
          </div>
          <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="video.mov" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center">
                <div className="mb-4 relative h-40 w-40 mx-auto">
                  <Image
                    src={`/${i}.jpg`}
                    alt={`Feature ${i}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  Feature {i}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-blue-600 dark:bg-blue-800">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied users and take your experience to the
            next level
          </p>
          <Link
            href="https://neospacecanvas.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300">
              Get Started
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
