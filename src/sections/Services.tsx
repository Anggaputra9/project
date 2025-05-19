import React from 'react';
import { Palette, Code, Lightbulb } from 'lucide-react';

const ServiceCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}> = ({ icon, title, description, features }) => {
  return (
    <div className="card p-8 group">
      <div className="w-16 h-16 rounded-full bg-primary-100 flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors">
        {icon}
      </div>
      
      <h3 className="font-heading font-semibold text-xl mb-4">{title}</h3>
      
      <p className="text-gray-600 mb-6">{description}</p>
      
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-primary-500 font-bold">•</span>
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Palette className="h-8 w-8 text-primary-500" />,
      title: "UI/UX Design",
      description: "Kami menciptakan pengalaman pengguna yang intuitif dan menarik dengan antarmuka yang estetis..",
      features: [
        "Riset pengguna dan persona",
"Wireframing dan pembuatan prototipe",
"Desain visual dan branding",
"Pengujian kegunaan"
      ]
    },
    {
      icon: <Code className="h-8 w-8 text-primary-500" />,
      title: "Web Development",
      description: "Kami membangun situs web dan aplikasi web yang modern, responsif, dan berkinerja tinggi.",
      features: [
        "Pengembangan frontend",
"Integrasi backend",
"Desain responsif",
"Optimalisasi kinerja"
      ]
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-primary-500" />,
      title: "Private Classes",
      description: "Sesi bimbingan pribadi yang disesuaikan dengan tujuan pembelajaran dan tingkat keterampilan Anda.",
      features: [
        "Rencana pembelajaran yang disesuaikan",
"Proyek praktik",
"Praktik terbaik industri",
"Pengembangan portofolio"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Layanan Kami</h2>
        <p className="section-subtitle">
          Kami menawarkan solusi komprehensif untuk membantu Anda mencapai sasaran digital Anda, dari desain, pengembangan hingga pendidikan.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;