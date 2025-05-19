import React from 'react';
import { CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const benefits = [
    "Pendekatan desain yang berpusat pada pengguna",
    "Pemecahan masalah secara kreatif",
    "Kode yang bersih dan dioptimalkan",
    "Jalur pembelajaran yang disesuaikan",
    "Teknologi dan teknik modern",
    "Alur kerja kolaboratif"
  ];

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-100 rounded-full -z-10"></div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-100 rounded-full -z-10"></div>
            
            <img 
              src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Team collaborating" 
              className="rounded-xl shadow-lg w-full h-auto object-cover"
            />
          </div>
          
          {/* Content Column */}
          <div>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
              Tentang <span className="text-primary-500">404 Not Found</span>
            </h2>
            
            <p className="text-gray-600 mb-6">
              404 Not Found adalah ruang digital kreatif yang mempertemukan inovasi dan fungsionalitas. Kami percaya pada kekuatan desain, kode, dan pendidikan untuk mengubah ide menjadi pengalaman digital yang berdampak.
            </p>
            
            <p className="text-gray-600 mb-8">
              Pendekatan kami memadukan visi artistik dengan keunggulan teknis, menciptakan solusi yang tidak hanya terlihat cantik tetapi juga memberikan pengalaman pengguna yang luar biasa. Kami bersemangat untuk berbagi pengetahuan melalui bimbingan dan membantu orang lain mengembangkan keterampilan kreatif dan teknis mereka.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
            
            <a href="#services" className="btn-primary">
              Temukan Layanan Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;