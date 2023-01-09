export default function authHeader() {
    const userToken = localStorage.getItem('userToken');
  
    if (userToken ) {
      return 'Bearer ' + userToken;
    } else {
      return {};
    }
  }