const path = 'https://api.covid19api.com/summary';

export const request = () => {
  return fetch(path)
    .then(response => response.json())
};