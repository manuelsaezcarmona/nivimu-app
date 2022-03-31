export const getUsers = async () => {
  const resp = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await resp.json();
  return data;
};
