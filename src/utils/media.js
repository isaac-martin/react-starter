const mq = ({max, min = 0}, styles) => {
  return {
    [`@media (min-width: ${min}) and (max-width: ${max})`]: {
      ...styles
    }
  };
};

export default mq;
