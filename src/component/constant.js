const apiKey = process.env.REACT_APP_YOUTUBE_KEY;
const regionCode = "IN"; // India's region code
console.log("apiKey", apiKey);
export const YOUTUBE_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&regionCode=${regionCode}&key=${apiKey}`;
