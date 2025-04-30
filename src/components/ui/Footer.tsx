import React from 'react';
import { Activity } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Activity className="h-5 w-5 text-indigo-400" />
            <span className="text-lg font-medium">Body-shape controls</span>
          </div>
          <div className="text-sm text-gray-400">
            Julien Quenneville. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;