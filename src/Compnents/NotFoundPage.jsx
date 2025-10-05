
const ConfusedPerson = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    className="w-48 h-48 md:w-64 md:h-64 text-white"
    fill="currentColor"
  >
    <g transform="translate(0 -5)">
      {/* Question Mark */}
      <path
        d="M 90,60 C 90,30 130,30 130,60 C 130,80 100,75 100,95"
        stroke="#FBBF24" // Using a nice amber color for the question mark
        strokeWidth="12"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="100" cy="110" r="6" fill="#FBBF24" />

      {/* Person's Head */}
      <circle cx="100" cy="140" r="18" fill="#E2E8F0" />
      {/* Person's Body (shrugging shape) */}
      <path
        d="M 80 160 C 80 180, 120 180, 120 160 L 110 185 L 90 185 Z"
        fill="#E2E8F0"
      />
    </g>
  </svg>
);


const NotFoundPage = () => {
  // Animation variants for the main container to stagger children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  // Animation variants for child elements
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
  };
  
  // Animation for the floating astronaut
  const astronautVariants = {
      initial: { y: -20 },
      animate: {
          y: 20,
          transition: {
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
          },
      },
  };

  return (
    <div className="bg-gradient-to-b from-slate-900 to-gray-900 min-h-screen flex flex-col items-center justify-center text-white overflow-hidden p-4">
      <motion.div
        className="text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
            variants={astronautVariants}
            initial="initial"
            animate="animate"
        >
            <ConfusedPerson />
        </motion.div>

        <motion.h1
          className="text-6xl md:text-9xl font-bold font-mono mt-4"
          variants={itemVariants}
        >
          404
        </motion.h1>

        <motion.p
          className="text-xl md:text-3xl font-light text-slate-300 mt-4"
          variants={itemVariants}
        >
          Hmm... This page seems to be missing.
        </motion.p>

        <motion.p
          className="text-md md:text-lg text-slate-400 mt-2"
          variants={itemVariants}
        >
          We couldn't find what you were looking for.
        </motion.p>

        <motion.div variants={itemVariants} className="mt-8">
          {/* If you are using React Router, replace the <a> tag with this:
            <Link to="/" className="...">
              Go Back Home
            </Link>
          */}
          <a
            href="/" // Link to your home page
            className="px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-lg hover:bg-green-600 transition-colors duration-300 transform hover:scale-105"
          >
            Go Back Home
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;

