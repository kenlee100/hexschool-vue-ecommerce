const animation = {
  // animation_name: "BounceIn 1s linear 1",
  animation_compass: "compass-rotate 2s linear infinite",
};

const keyframes = {
  "compass-rotate": {
    "0%": {
      transform: "rotate(45deg)",
    },
    "30%,50%,70%": {
      transform: "rotate(230deg)",
    },
    "40%,60%,80%": {
      transform: "rotate(240deg)",
    },
    "100%": {
      transform: "rotate(245deg)",
    },
  },
  // BounceIn: {
  //   "0%,20%,40%,60%,80%,100%": {
  //     animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  //   },

  //   "0%": {
  //     opacity: "0",
  //     transform: "scale3d(0.3, 0.3, 0.3)",
  //   },

  //   "20%": {
  //     transform: "scale3d(1.1, 1.1, 1.1)",
  //   },

  //   "40%": {
  //     transform: "scale3d(0.9, 0.9, 0.9)",
  //   },

  //   "60%": {
  //     opacity: "1",
  //     transform: "scale3d(1.03, 1.03, 1.03)",
  //   },

  //   "80%": {
  //     transform: "scale3d(0.97, 0.97, 0.97)",
  //   },

  //   "100%": {
  //     opacity: "1",
  //     transform: "scale(1, 1, 1)",
  //   },
  // },
  // FadeIn: {
  //   "0%": {
  //     opacity: "0",
  //   },
  //   "100%": {
  //     opacity: "1",
  //   },
  // },
  // FadeOut: {
  //   "0%": {
  //     opacity: "1",
  //   },
  //   "100%": {
  //     opacity: "0",
  //   },
  // },
  // slideOutDown: {
  //   "0%": {
  //     transform: "translateZ(0)",
  //   },
  //   "100%": {
  //     transform: "translate3d(0,100%,0)",
  //     visibility: "hidden",
  //   },
  // },
  // SlideInUp: {
  //   "0%": {
  //     transform: "translate3d(0,100%,0)",
  //     visibility: "visible",
  //   },
  //   "100%": {
  //     transform: "translateZ(0)",
  //   },
  // },
  // BounceInUp: {
  //   "0%, 70%,80%, 90%, 100%": {
  //     animationTimingFunction: "ease-in",
  //   },
  //   "0%": {
  //     opacity: "0",
  //     transform: "translate3d(0, 3000px, 0)",
  //   },
  //   "70%": {
  //     opacity: "1",
  //     transform: "translate3d(0, -16px, 0)",
  //   },
  //   "80%": {
  //     transform: "translate3d(0, 4px, 0)",
  //   },
  //   "90%": {
  //     transform: "translate3d(0, -2px, 0)",
  //   },
  //   "100%": {
  //     transform: "translateZ(0)",
  //   },
  // },
};

// export const transitionProperty = {
//   top: "top",
//   right: "right",
//   bottom: "bottom",
//   left: "left",
// };

module.exports = { animation, keyframes };
