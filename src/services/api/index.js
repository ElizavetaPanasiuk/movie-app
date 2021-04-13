const post = async(url) => {
  let request = await fetch(url/* , {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: '',
  } */);
  return await request.json();
}

export default post;