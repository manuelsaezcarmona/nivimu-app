export const getUsers = async () => {
  try {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await resp.json();
    return data;
  } catch (error) {
    return error.name;
  }
};
