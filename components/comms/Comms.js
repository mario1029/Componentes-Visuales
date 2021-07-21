class Comms {

  async post(url, text) {
    const options = {
      method: "POST",
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(text),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  }
  
  async get(url) {
    const response = await fetch(url)
    return await response.json();
  }

  async put(url, text) {
    const options = {
      method: "PUT",
      headers: {
        'Content-type': 'text/plain'
      },
      body: text,
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  }

  async delete(url) {
    const options = {
      method: "DELETE",
    };
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  }
}

export default Comms;