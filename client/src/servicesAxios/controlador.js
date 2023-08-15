import axios from 'axios';
export const sendAllImage = async () => {
   const result = await axios.get('https://unplash.onrender.com/sendImage')
   return result
}