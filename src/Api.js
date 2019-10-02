import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';

export default class TempApi {
  constructor() {
    this.config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }

  async fetchPost() {
    try {
      const {data} = await axios.get('posts');
      return data;
    } catch (e) {
      throw e;
    }
  }
}
