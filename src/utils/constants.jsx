const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

export const LIVE_CHAT_COUNT=25

export const YOUTUBE_VIDEOES_API = 
  "https://youtube.googleapis.com/youtube/v3/videos?" +
  "part=snippet,contentDetails,statistics&chart=mostPopular" +
  "&maxResults=50&key=" + GOOGLE_API_KEY;
  
export const VIDEO_API = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&key=${GOOGLE_API_KEY}&`;


export const COMMENTS_API=`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&key=${GOOGLE_API_KEY}&maxResults=80&videoId=`


export const YOUTUBE_SEARCH_API=`https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q= `


export const YOUTUBE_SEARCH_RESULT_API=`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=40&key=${GOOGLE_API_KEY}&q=`





