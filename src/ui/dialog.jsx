import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from './Dialogbox';

const DemoSection = ({ theme, demoVideo }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="demo" className={`py-20 ${theme?.secondary || 'bg-gray-50'}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            See It In Action
          </h2>
          <p className="text-xl text-gray-600">
            Watch how our app can transform your workflow
          </p>
        </div>

        <div className="max-w-4xl mx-auto flex justify-center">
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger onClick={() => setIsModalOpen(true)}>
              <button className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg">
                <Play size={24} />
                <span>Watch Demo</span>
              </button>
            </DialogTrigger>
            {isModalOpen && (
              <DialogContent className="w-full max-w-[90vw] md:max-w-[80vw] lg:max-w-4xl">
                <div className="relative w-full pt-[56.25%] bg-black rounded-lg overflow-hidden">
                  <video
                    className="absolute top-0 left-0 w-full h-full"
                    controls
                    playsInline
                  >
                    <source src={demoVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="absolute top-2 right-2 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
              </DialogContent>
            )}
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;