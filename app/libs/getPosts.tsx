export default async function getPosts() {
  const url = process.env.REACT_APP_API_URL;
  const response = await fetch(`${url}/posts`);

  if (!response.ok) {
    throw new Error("failed to fetch Posts");
  }

  return await response.json();
}
