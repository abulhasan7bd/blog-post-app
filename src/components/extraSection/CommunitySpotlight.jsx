import React from 'react';
import { User, MessageSquareQuote, Github } from 'lucide-react';

const spotlight = [
  {
    name: 'Sarah Kim',
    role: 'Frontend Developer',
    avatar: 'https://i.pravatar.cc/150?img=32',
    comment: '“This blog helped me fix a nasty bug with async React calls. Thank you for the clarity!”',
    github: 'https://github.com/sarahdev',
  },
  {
    name: 'James Walker',
    role: 'Full Stack Engineer',
    avatar: 'https://i.pravatar.cc/150?img=12',
    comment: '“The article on Node.js performance tips was a lifesaver for our backend optimization.”',
    github: 'https://github.com/jameswalker',
  },
  {
    name: 'Aisha Rahman',
    role: 'Junior Web Developer',
    avatar: 'https://i.pravatar.cc/150?img=24',
    comment: '“Love the clean UI and helpful code snippets. Feels like a mentor in my pocket!”',
    github: 'https://github.com/aishar',
  }
];

const CommunitySpotlight = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">👥 Community Spotlight</h2>
        <p className="text-gray-600 mb-12">
          Meet some of our amazing readers and contributors who are shaping the dev world with us.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {spotlight.map((user, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition text-left"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{user.name}</h3>
                  <p className="text-sm text-gray-500">{user.role}</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic relative pl-6">
                <MessageSquareQuote className="absolute left-0 top-1 text-blue-500 w-5 h-5" />
                {user.comment}
              </blockquote>
              <a
                href={user.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 text-sm text-blue-600 hover:underline"
              >
                <Github className="w-4 h-4 mr-1" /> GitHub Profile
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitySpotlight;
