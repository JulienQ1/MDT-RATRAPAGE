import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import ModelViewer from './3d/ModelViewer';
import MuscleSelector from './ui/MuscleSelector';
import MuscleInfoPanel from './ui/MuscleInfoPanel';
import { MuscleContext } from '../contexts/MuscleContext';

const MuscleExplorer: React.FC = () => {
  const { selectedMuscle, setSelectedMuscle } = useContext(MuscleContext);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <motion.div 
          className="lg:w-2/3 bg-white rounded-xl shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ModelViewer />
        </motion.div>
        
        <div className="lg:w-1/3 flex flex-col gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <MuscleSelector 
              onSelectMuscle={setSelectedMuscle} 
              selectedMuscle={selectedMuscle}
            />
          </motion.div>
          
          {selectedMuscle && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              key={selectedMuscle.id}
            >
              <MuscleInfoPanel muscle={selectedMuscle} />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MuscleExplorer;