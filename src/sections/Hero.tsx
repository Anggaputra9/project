import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative w-full overflow-x-hidden pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-to-b from-primary-50 to-white"
    >
      <div className="container-custom">
        <div className="flex flex-col items-center text-center">
          <div className="animate-slide-up">
            <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 max-w-4xl mx-auto px-4">
              Creative digital <span className="text-primary-500">UI/UX, Web Development, and Mentorship.</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 px-4">
              Kami menciptakan pengalaman digital yang menginspirasi, mendidik, dan mengubah ide menjadi kenyataan.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <a href="#contact" className="btn-primary w-full sm:w-auto">
                Mari berkolaborasi <ArrowRight size={20} />
              </a>
              
              <a href="#services" className="btn-outline w-full sm:w-auto">
                Layanan Kami
              </a>
            </div>
          </div>
          
          <div className="mt-16 md:mt-20 w-full max-w-4xl mx-auto relative px-4">
            <div className="absolute inset-0 bg-gradient-to-t from-primary-100 to-transparent rounded-xl -z-10"></div>
            <img 
              src="https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Creative workspace" 
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;