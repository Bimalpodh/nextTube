const GOOGLE_API_KEY = "AIzaSyCK1PY7dOQeCF-iu_lE1kIEjD3AumVg6IY";

export const YOUTUBE_VIDEOES_API = 
  "https://youtube.googleapis.com/youtube/v3/videos?" +
  "part=snippet,contentDetails,statistics&chart=mostPopular" +
  "&maxResults=50&key=" + GOOGLE_API_KEY;
  
export const VIDEO_API = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&key=${GOOGLE_API_KEY}&`;


export const COMMENTS_API=`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&key=${GOOGLE_API_KEY}&maxResults=80&videoId=`
