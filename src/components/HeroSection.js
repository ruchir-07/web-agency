// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';
// import '../styles/HeroSection.module.css'

// const words = ['websites', 'brands', 'experiences', 'growth'];
// const images = [
//   '/api/placeholder/300/200',
//   '/api/placeholder/300/200',
//   '/api/placeholder/300/200',
//   '/api/placeholder/300/200'
// ];

// const AnimatedText = ({ text }) => {
//   return (
//     <span className="inline-block">
//       {text.split('').map((char, index) => (
//         <span 
//           key={index} 
//           className="inline-block animate-flip"
//           style={{ animationDelay: `${index * 50}ms` }}
//         >
//           {char}
//         </span>
//       ))}
//     </span>
//   );
// };

// const HeroSection = () => {
//   const [currentWordIndex, setCurrentWordIndex] = useState(0);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const [isFlipping, setIsFlipping] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIsFlipping(true);
//       setTimeout(() => {
//         setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
//         setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//         setIsFlipping(false);
//       }, 500);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//       <div className="flex flex-col lg:flex-row bg-transparent m-5" style={{ height: "85vh" }}>
//         <div className="w-full lg:w-3/5 p-8 flex flex-col bg-accent-teal rounded-3xl m-5 justify-center relative">
//           <h1 className="text-4xl sm:text-5xl font-bold mb-8">
//             Designing the future of
//             <br />
//             {isFlipping ? (
//               <span className="inline-block min-h-[1.2em]">{words[currentWordIndex]}</span>
//             ) : (
//               <AnimatedText text={words[currentWordIndex]} />
//             )}
//             <br />
//             <AnimatedText text="Together" />
//           </h1>
//           <img
//             src={images[currentImageIndex]}
//             alt="Floating image"
//             className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/3 h-auto object-cover z-10"
//           />
//           <div className="mt-12 border-t pt-8">
//             <p className="text-xl mb-4">Transforming Ideas into Stunning Online Experiences</p>
//             <div className="flex space-x-4">
//               <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
//                 Get Started
//               </button>
//               <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded hover:bg-blue-100 transition-colors">
//                 Learn More
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="w-full lg:w-2/5 bg-gray-200 p-4 flex items-center justify-center">
//           <div className="relative w-full h-3/4 bg-gray-300 rounded-lg overflow-hidden">
//             <div className="absolute inset-0 flex items-center justify-center text-gray-500">
//               Video Carousel Placeholder
//             </div>
//             <button className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors">
//               <ChevronLeft size={24} />
//             </button>
//             <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors">
//               <ChevronRight size={24} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;



import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import styles from '../styles/HeroSection.module.css'; // Import CSS

const words = ['web', 'video', 'logos', 'tech'];
const images = [
  '/images/websites.png',
  '/images/brands.png',
  '/images/experiences.png',
  '/images/growth.png'
];

const AnimatedText = ({ text }) => {
  return (
    <span className={styles.animatedText}>
      {text.split('').map((char, index) => (
        <span key={index} className={styles.flipChar} style={{ animationDelay: `${index * 50}ms` }}>
          {char}
        </span>
      ))}
    </span>
  );
};

const HeroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsFlipping(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.heroContent}>
        <div className={styles.textSection}>
          <h1 className={styles.heroTitle}>
            <span className={styles.firstLine}>Designing the</span> <br />
            <span className={styles.secondLine}>Future of</span> <br />
            <span className={styles.thirdLine}>
              {isFlipping ? (
                <span className={styles.staticText}>{words[currentWordIndex]}</span>
              ) : (
                <AnimatedText text={words[currentWordIndex]} />
              )}
              &nbsp;today
              <img
                src={images[currentImageIndex]}
                alt=""
                className={styles.heroImage}
              />
            </span>
          </h1>
          <div className={styles.separator}>
            <p>Transforming Ideas into <br/> Stunning Online Experiences</p>
            <div className={styles.buttonGroup}>
              <button className={styles.primaryButton}>Browse Services</button>
              <button className={styles.secondaryButton}>Learn More</button>
            </div>
          </div>
        </div>
        <div className={styles.carouselSection}>
          <div className={styles.carouselPlaceholder}>
            <button className={styles.carouselControlLeft}>
              <ChevronLeft size={24} />
            </button>
            <button className={styles.carouselControlRight}>
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

