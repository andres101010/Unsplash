import axios from 'axios';
export const sendAllImage = () => {
   const result = axios.get('https://unplash.onrender.com/sendImage')
   return result
}