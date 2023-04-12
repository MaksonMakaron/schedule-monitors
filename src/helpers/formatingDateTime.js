export const formatingTime24Clock = (string, type) => {
  const date = new Date(string);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  switch (type) {
    case true:
      return `${hours}:${minutes}:${seconds}`;
    case false:
      let prefix = '';
      if (hours > 12) {
        prefix = 'PM';
        hours = hours - 12;
        hours = hours < 10 ? `0${hours}` : hours;
      } else {
        prefix = 'AM';
        hours = hours < 10 ? `0${hours}` : hours;
      }
      return `${hours}:${minutes}:${seconds} ${prefix}`;
    default:
      return `${hours}:${minutes}:${seconds}`;
  }
};

export const formatingDate = (string, type) => {
  const date = new Date(string);
  const year = date.getFullYear();
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = date.getDate();
  switch (type) {
    case 'm/d/y':
      return `${month}/${day}/${year}`;
    case 'd/m/y':
      return `${day}/${month}/${year}`;
    case 'y/m/d':
      return `${year}/${month}/${day}`;
    default:
      return `${day}/${month}/${year}`;
  }
};
