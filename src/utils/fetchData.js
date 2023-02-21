
export const exerciseOptions = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };

export const youtubeOptions = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '70d6bc6e39msh92f943e5518667bp199415jsn05efe495c3b6',
          'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
        }
      };


export const fetchData = async (url, options) => {
    const response = await fetch(url, options); 
    const data = await response.json();

    return data;
}
