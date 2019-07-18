const capitalizeWords = (text) => {
  if (typeof text === 'string' && text.length > 0) {
    return text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }
};

export default capitalizeWords;