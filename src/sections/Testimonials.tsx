import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatarUrl: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "UI/UX Client",
    avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: "The team at 404 Not Found transformed our product's user experience. Their design approach was methodical and creative, resulting in a significant increase in user engagement and satisfaction."
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Web Development Client",
    avatarUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: "Their web development skills are top-notch. Our website is not only visually stunning but also performs exceptionally well. The attention to detail and commitment to quality is evident in every aspect of their work."
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Private Class Student",
    avatarUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    content: "The one-on-one mentoring was exactly what I needed to advance my UI/UX design skills. The personalized curriculum and hands-on projects helped me build a portfolio that landed me my dream job."
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-primary-50">
      <div className="container-custom">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">
          Hear from the people who have experienced our services and collaboration.
        </p>
        
        <div className="max-w-4xl mx-auto relative">
          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-md p-8 md:p-12">
            <div className="absolute -top-6 left-8 md:left-12">
              <div className="bg-primary-500 rounded-full p-4">
                <Quote className="h-6 w-6 text-white" />
              </div>
            </div>
            
            <div className="pt-6">
              <p className="text-gray-600 text-lg italic mb-8">
                "{testimonials[currentIndex].content}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonials[currentIndex].avatarUrl} 
                  alt={testimonials[currentIndex].name} 
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-heading font-semibold text-lg">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-primary-500">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-primary-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="bg-white rounded-full w-12 h-12 flex items-center justify-center shadow-md hover:bg-primary-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
          
          {/* Pagination Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-primary-500' : 'bg-gray-300'
                } transition-colors`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;