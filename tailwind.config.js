module.exports = {
    theme: {
      extend: {
        fontFamily: {
          body: ['Inter', 'sans-serif'],
          heading: ['Poppins', 'sans-serif']
        },
        colors: {
          beige: '#f5f5dc',
        },
        animation: {
          'fade-in': 'fadeIn 1s ease-out',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
        },
      },
    },
  };
  