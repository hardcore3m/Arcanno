function capitalizeFirstLetter(str) {
    str.toLowerCase();
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  module.exports = capitalizeFirstLetter;