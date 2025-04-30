import React, { createContext, useState, ReactNode } from 'react';
import { MuscleGroup, muscleGroups } from '../data/muscleData';

interface MuscleContextType {
  selectedMuscle: MuscleGroup | null;
  setSelectedMuscle: (muscle: MuscleGroup | null) => void;
  allMuscleGroups: MuscleGroup[];
}

export const MuscleContext = createContext<MuscleContextType>({
  selectedMuscle: null,
  setSelectedMuscle: () => {},
  allMuscleGroups: [],
});

export const MuscleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedMuscle, setSelectedMuscle] = useState<MuscleGroup | null>(null);

  return (
    <MuscleContext.Provider
      value={{
        selectedMuscle,
        setSelectedMuscle,
        allMuscleGroups: muscleGroups,
      }}
    >
      {children}
    </MuscleContext.Provider>
  );
};