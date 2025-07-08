import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';


export const YouTubeSection = () => {
  const videos = [
    'https://www.youtube.com/embed/WDSdEXw_ZXQ?si=CKVQHHmBrj9FzHFK',
    'https://www.youtube.com/embed/OvID4rut7Ik?si=cYn-jVIh6_DANI8J',
    'https://www.youtube.com/embed/oMD8NJJ6BlA?si=eXcxcv1duhIi4u-D',
  ];

 return (
    <section id="youtube"className="py-16 bg-zinc-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header with Icon & Profile */}
        <div className="flex items-center gap-4 mb-8">
          <a
            href="https://www.youtube.com/@AlhussienAyman"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/Avatar.jpg"
              alt="Channel Profile"
              className="w-16 h-16 rounded-full border-2 border-red-600 hover:scale-105 transition"
            />
          </a>

          <div>
            <a
              href="https://www.youtube.com/@AlhussienAyman"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:opacity-80 transition"
            >
              <FaYoutube className="text-red-600 text-3xl" />
              <h2 className="text-2xl font-bold">My YouTube Channel</h2>
            </a>
            <p className="text-zinc-400 text-sm mt-1">
              Latest Videos from My Channel
            </p>
          </div>
        </div>

        {/* Videos Grid with Scroll Animation */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              className="aspect-video rounded-xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <iframe
                src={video}
                title={`YouTube video ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};