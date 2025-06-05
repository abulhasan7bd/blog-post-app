import React from 'react';
import { Lightbulb, Wrench, Clock ,Table, Code2, TerminalSquare} from 'lucide-react';

const tips = [
  {
    icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
    title: 'Use Git Aliases',
    description: 'Speed up your workflow by creating short Git commands like `git co` for `git checkout`.',
  },
  
  {
    icon: <Wrench className="w-8 h-8 text-green-500" />,
    title: 'Try Postman Alternatives',
    description: 'Use tools like Hoppscotch for a lightweight API testing experience right in the browser.',
  },
    {
    icon: <Table className="w-8 h-8 text-purple-500" />,
    title: 'Debug with console.table()',
    description: 'Use console.table() instead of console.log() to print arrays and objects in a readable table format.',
  },
  {
    icon: <Code2 className="w-8 h-8 text-red-500" />,
    title: 'Auto-Format with Prettier + Husky',
    description: 'Format your code automatically on every commit using Prettier and Husky Git hooks.',
  },
  {
    icon: <TerminalSquare className="w-8 h-8 text-indigo-500" />,
    title: 'Upgrade Your Terminal with Oh My Zsh',
    description: 'Boost your terminal with auto-suggestions, themes, and plugins using zsh + Oh My Zsh.',
  }
,
  {
    icon: <Clock className="w-8 h-8 text-blue-500" />,
    title: 'Master VS Code Shortcuts',
    description: 'Learning a few essential VS Code shortcuts can save you hours each week. Try `Ctrl + D` to multi-select.',
  },
];

const Trips = () => {
  return (
    <section className="bg-gray-50 py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">💡 Developer Tips</h2>
        <p className="text-gray-600 mb-10">
          Boost your productivity and development experience with these hand-picked tips and tools.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <div key={index} className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition">
              <div className="mb-4 flex justify-center">{tip.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
              <p className="text-gray-600">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trips;
