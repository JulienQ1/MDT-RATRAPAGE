import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { MuscleContext } from '../../contexts/MuscleContext';
import { MuscleGroup } from '../../data/muscleData';

interface MuscleSelectorProps {
  onSelectMuscle: (muscle: MuscleGroup | null) => void;
  selectedMuscle: MuscleGroup | null;
}

const MuscleSelector: React.FC<MuscleSelectorProps> = ({ onSelectMuscle, selectedMuscle }) => {
  const { allMuscleGroups } = useContext(MuscleContext);

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Muscle Groups</h2>
      <p className="text-gray-600 mb-6">Select a muscle group to view details and see it highlighted on the 3D model.</p>
      
      <div className="grid grid-cols-2 gap-3">
        {allMuscleGroups.map((muscle) => (
          <button
            key={muscle.id}
            onClick={() => onSelectMuscle(muscle.id === selectedMuscle?.id ? null : muscle)}
            className={`relative overflow-hidden rounded-lg p-4 text-left transition-all duration-200 ${
              selectedMuscle?.id === muscle.id
                ? 'ring-2 ring-offset-2'
                : 'hover:bg-gray-50'
            }`}
            style={{ 
              backgroundColor: selectedMuscle?.id === muscle.id ? `${muscle.color}15` : undefined,
              ringColor: muscle.color
            }}
          >
            <div 
              className="h-2 w-2 rounded-full absolute top-4 right-4"
              style={{ backgroundColor: muscle.color }}
            />
            <h3 className="font-medium text-gray-900 text-sm">{muscle.name}</h3>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MuscleSelector;