const mq = (breakPoints, styles) => {
  const buildMedia = ({max, min}) => {
    if (max && min) {
      return `@media (min-width: ${min}) and (max-width: ${max})`;
    } else if (min && !max) {
      return `@media (min-width: ${min})`;
    } else {
      return `@media (max-width: ${max})`;
    }
  };

  const query = buildMedia(breakPoints);

  return {
    [query]: {
      ...styles
    }
  };
};

export default mq;
