  // MorphingGallery.js
  import { motion } from 'framer-motion';

  const images = [
    '/path/to/image1.jpg',
    '/path/to/image2.jpg',
    // Add more images
  ];

  const MorphingGallery = () => (
    <div className="grid grid-cols-3 gap-4">
      {images.map((src, index) => (
        <motion.img
          key={index}
          src={src}
          className="w-full h-auto"
          whileHover={{ borderRadius: ['0%', '50%', '0%'], rotate: [0, 360, 0] }}
          transition={{ duration: 1 }}
        />
      ))}
    </div>
  );

  export default MorphingGallery;
