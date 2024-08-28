const apiKey = process.env.REACT_APP_YOUTUBE_KEY;
const regionCode = "IN"; // India's region code
console.log("apiKey", apiKey);
export const YOUTUBE_URL = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=50&regionCode=${regionCode}&key=${apiKey}`;

export const youtubeSearchStart = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=`;
export const youtubeEndUrl = `&type=video&type=channel&type=playlist&key=${apiKey}`;
