  // ExpandableBio.js
  import  { useState } from 'react';
  import { motion } from 'framer-motion';

  const ExpandableBio = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <motion.div
        initial={{ height: '100px' }}
        animate={{ height: isOpen ? 'auto' : '100px' }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
      >
        <p>
          {/* Your biography text */}
        </p>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Show Less' : 'Read More'}
        </button>
      </motion.div>
    );
  };

  export default ExpandableBio;
