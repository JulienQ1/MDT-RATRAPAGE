import React from 'react';
import { motion } from 'framer-motion';
import { Info, Activity, Target, AlertCircle } from 'lucide-react';
import { MuscleGroup } from '../../data/muscleData';

interface MuscleInfoPanelProps {
  muscle: MuscleGroup;
}

const MuscleInfoPanel: React.FC<MuscleInfoPanelProps> = ({ muscle }) => {
  return (
    <motion.div 
      className="bg-white rounded-xl shadow-md overflow-hidden"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div 
        className="h-2" 
        style={{ backgroundColor: muscle.color }}
      />
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">{muscle.name}</h2>
        
        <div className="mb-4">
          <div className="flex items-start mb-2">
            <Info className="w-5 h-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
            <p className="text-gray-700">{muscle.description}</p>
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex items-start mb-2">
            <Activity className="w-5 h-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
            <p className="text-gray-700">{muscle.function}</p>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-md font-medium text-gray-800 mb-2 flex items-center">
            <Target className="w-4 h-4 text-gray-500 mr-2" />
            Anatomy Points
          </h3>
          <ul className="list-disc pl-8 text-gray-700 space-y-1">
            {muscle.anatomyPoints.map((point, index) => (
              <li key={index} className="text-sm">{point}</li>
            ))}
          </ul>
        </div>

        {muscle.ergonomics && (
          <div>
            <h3 className="text-md font-medium text-gray-800 mb-2 flex items-center">
              <AlertCircle className="w-4 h-4 text-gray-500 mr-2" />
              Ergonomic Tips
            </h3>
            <ul className="list-disc pl-8 text-gray-700 space-y-1">
              {muscle.ergonomics.map((tip, index) => (
                <li key={index} className="text-sm">{tip}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default MuscleInfoPanel;