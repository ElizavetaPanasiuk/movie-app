const post = async(url) => {
  let request = await fetch(url);
  return await request.json();
}

export default post;