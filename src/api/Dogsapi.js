const headers = new Headers({
    "Content-Type": "application/json",
    "x-api-key": "live_fcPTTuRra510TTDxVzbb9t17TtM6dWaH575KTXsKVceN5z0OPsVF7EvjiD5tnWnx"
  });
  
  const requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
  };
  //using fetch api to get the json data.
  const fetchDogs = async () => {
    try {
      const response = await fetch("https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10", requestOptions);
      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Error fetching data:', error);
      return [];
    }
  };
  
  export default fetchDogs;
  