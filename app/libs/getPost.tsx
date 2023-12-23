export default async function getPost(id: string) {
  const url = process.env.REACT_APP_API_URL;
  const response = await fetch(`${url}/posts/${id}`);

  if (!response.ok) {
    throw new Error("failed to fetch Post");
  }

  return await response.json();
}
