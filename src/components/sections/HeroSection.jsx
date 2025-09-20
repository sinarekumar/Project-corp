import React, { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: "Building Tomorrow's Solutions",
            subtitle: "Leading innovation across industries with sustainable technology and forward-thinking solutions",
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            cta: "Discover More"
        },
        {
            title: "Sustainable Future",
            subtitle: "Committed to environmental responsibility and creating a better world for future generations",
            image: "https://images.unsplash.com/photo-1497436072909-f5e4c7cb1e0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
            cta: "Learn More"
        },
        {
            title: "Innovation Excellence",
            subtitle: "Pioneering breakthrough technologies that transform industries and improve lives worldwide",
            image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
            cta: "Explore Innovation"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Images */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <div
                        className="w-full h-full bg-cover bg-center bg-fixed"
                        style={{ backgroundImage: `url(${slide.image})` }}
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
            ))}

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
                        {slides[currentSlide].title}
                    </h1>
                    <p className="text-xl sm:text-2xl md:text-3xl mb-8 opacity-90 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        {slides[currentSlide].subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center">
                            {slides[currentSlide].cta}
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </button>
                        <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 flex items-center">
                            <Play className="mr-2 h-5 w-5" />
                            Watch Video
                        </button>
                    </div>
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white' : 'bg-white/50'
                            }`}
                    />
                ))}
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 right-8 animate-bounce">
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;