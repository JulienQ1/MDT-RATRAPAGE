export interface MuscleGroup {
  id: string;
  name: string;
  color: string;
  description: string;
  function: string;
  anatomyPoints: string[];
  modelTarget: string;
  ergonomics?: string[];
}

export const muscleGroups: MuscleGroup[] = [
  {
    id: 'chest',
    name: 'Chest (Pectorals)',
    color: '#EF4444',
    description: 'The pectoral muscles are a group of muscles located in the chest. They consist of the pectoralis major and pectoralis minor.',
    function: 'The pectoral muscles are responsible for movement of the shoulder joint, specifically adduction, internal rotation, and flexion of the humerus.',
    anatomyPoints: [
      'Pectoralis Major - large, fan-shaped muscle covering the upper chest',
      'Pectoralis Minor - thin, triangular muscle underneath the pectoralis major',
      'Connects the ribs to the shoulder complex',
    ],
    modelTarget: 'chest',
    ergonomics: [
      'Keep shoulders back and chest open when sitting',
      'Avoid hunching forward which can tighten chest muscles',
      'Regular stretching can help prevent muscle tightness'
    ]
  },
  {
    id: 'back',
    name: 'Back (Latissimus Dorsi)',
    color: '#3B82F6',
    description: 'The latissimus dorsi is a large, flat muscle that covers the width of the middle and lower back.',
    function: 'The latissimus dorsi is responsible for extension, adduction, and internal rotation of the shoulder joint.',
    anatomyPoints: [
      'Originates from the spinous processes of T7-T12, thoracolumbar fascia, iliac crest, and lower ribs',
      'Inserts at the intertubercular groove of the humerus',
      'Forms the posterior fold of the axilla',
    ],
    modelTarget: 'back',
    ergonomics: [
      'Maintain natural curve of spine when sitting',
      'Use lumbar support to prevent lower back strain',
      'Take regular breaks to prevent muscle fatigue'
    ]
  },
  {
    id: 'shoulders',
    name: 'Shoulders (Deltoids)',
    color: '#F59E0B',
    description: 'The deltoid muscle is a triangular-shaped muscle that covers the shoulder joint and gives the shoulder its rounded form.',
    function: 'The deltoid is responsible for arm abduction, flexion, and extension.',
    anatomyPoints: [
      'Anterior deltoid - assists with forward flexion of the arm',
      'Lateral deltoid - assists with lateral raising of the arm',
      'Posterior deltoid - assists with extension of the arm',
    ],
    modelTarget: 'shoulders',
    ergonomics: [
      'Keep shoulders relaxed and down',
      'Avoid elevating shoulders while typing',
      'Position monitor at arm\'s length to reduce shoulder tension'
    ]
  },
  {
    id: 'arms',
    name: 'Arms (Biceps & Triceps)',
    color: '#10B981',
    description: 'The arms consist primarily of the biceps brachii on the front and the triceps brachii on the back.',
    function: 'The biceps flex the elbow and supinate the forearm, while the triceps extend the elbow.',
    anatomyPoints: [
      'Biceps brachii - two-headed muscle on the front of the upper arm',
      'Triceps brachii - three-headed muscle on the back of the upper arm',
      'Brachialis - located underneath the biceps',
      'Brachioradialis - located on the forearm',
    ],
    modelTarget: 'arms',
    ergonomics: [
      'Keep elbows close to body while typing',
      'Maintain 90-degree elbow angle',
      'Support forearms on desk or armrests'
    ]
  },
  {
    id: 'abs',
    name: 'Abdominals (Core)',
    color: '#6366F1',
    description: 'The abdominal muscles form the anterior and lateral walls of the abdominal cavity.',
    function: 'The abdominal muscles support the trunk, hold organs in place, and assist in breathing.',
    anatomyPoints: [
      'Rectus abdominis - "six-pack" muscle running down the middle of the abdomen',
      'External obliques - located on the sides and front of the abdomen',
      'Internal obliques - located underneath the external obliques',
      'Transversus abdominis - deepest abdominal muscle',
    ],
    modelTarget: 'abs',
    ergonomics: [
      'Engage core muscles while sitting',
      'Maintain good posture to support abdominal muscles',
      'Regular movement helps prevent core muscle weakness'
    ]
  },
  {
    id: 'legs',
    name: 'Legs (Quadriceps & Hamstrings)',
    color: '#8B5CF6',
    description: 'The legs consist of multiple muscle groups including the quadriceps on the front of the thigh and the hamstrings on the back.',
    function: 'The quadriceps extend the knee while the hamstrings flex the knee and extend the hip.',
    anatomyPoints: [
      'Quadriceps - group of four muscles on the front of the thigh',
      'Hamstrings - group of three muscles on the back of the thigh',
      'Gastrocnemius and Soleus - calf muscles',
      'Tibialis anterior - located on the front of the shin',
    ],
    modelTarget: 'legs',
    ergonomics: [
      'Keep feet flat on floor or footrest',
      'Maintain proper knee angle (90-110 degrees)',
      'Avoid crossing legs to prevent circulation issues'
    ]
  },
  {
    id: 'glutes',
    name: 'Glutes (Gluteal Muscles)',
    color: '#EC4899',
    description: 'The gluteal muscles are a group of three muscles that make up the buttocks.',
    function: 'The gluteal muscles are responsible for hip extension, abduction, and external rotation.',
    anatomyPoints: [
      'Gluteus maximus - largest and outermost of the gluteal muscles',
      'Gluteus medius - located partially underneath the gluteus maximus',
      'Gluteus minimus - smallest and deepest of the gluteal muscles',
    ],
    modelTarget: 'glutes',
    ergonomics: [
      'Sit back fully in chair to support glutes',
      'Take regular walking breaks to activate muscles',
      'Avoid prolonged sitting without movement'
    ]
  },
];