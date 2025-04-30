import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Activity, Shield, Microscope, Mail, Users, ArrowRight, Github } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Body-shape controls suit
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              An Adaptable, Modular and Posture analysis system for workplace ergonomics and rehabilitation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-gray-900">Project Overview</h2>
              <p className="text-gray-700">
                While modern workplaces often adapt to individual needs through software solutions, physical interventions for posture correction remain largely static. With the Body Shape Control Suit, we explore the potential of an adaptable wearable system, highly customizable in terms of sensing and feedback capabilities to address posture and movement challenges.
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com/LluisV/Z-Anatomy/tree/PC-Version"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  View Original Project
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white shadow-lg"
            >
              <img
                src="/assets/posture.png"
                alt="Posture comparison diagram"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Multimodal Posture Analysis</h3>
              <p className="text-gray-600">
                Integration of Electromyography (EMG) and motion capture technologies to provide detailed insights into muscle activity and body alignment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">E-textile Wearables</h3>
              <p className="text-gray-600">
                A Trapezius suit equipped with EMG sensors for accurate muscle activity monitoring and posture tracking.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Personalized Feedback</h3>
              <p className="text-gray-600">
                Real-time alerts and guidance customized for each position to prevent poor posture and risky movements.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Applications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Office Work</h3>
              <p className="text-gray-600">
                Reducing the impact of prolonged sitting on musculoskeletal health through real-time monitoring and feedback.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Workplace Ergonomics</h3>
              <p className="text-gray-600">
                Helping organizations optimize workstation designs to minimize employee injuries and improve comfort.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Rehabilitation</h3>
              <p className="text-gray-600">
                Assisting physical therapists in tracking and guiding patient recovery through precise movement monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;