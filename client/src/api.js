export const addUser = async (user) => {
  const result = await fetch('/api/user', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(user)
  });
  return result;
}