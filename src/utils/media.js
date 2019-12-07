const mq = ({max, min}, styles) => {
  const query = min ? `@media min-width: ${min}) and (max-width: ${max})` : `@media (max-width: ${max})`;

  return {
    [query]: {
      ...styles
    }
  };
};

export default mq;
