// import { useState, useEffect } from 'react';

// function useFetchData(apiUrl, apiKey) {
//   const [gifUrl, setGifUrl] = useState('');
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchGif = async () => {
//       setIsLoading(true);
//       try {
//         const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
//         const response = await fetch(proxyUrl + apiUrl, {
//           headers: {
//             'X-Api-Key': apiKey,
//           },
//         });
//         if (!response.ok) {
//           throw new Error('Failed to fetch Your FIle');
//         }
//         const blob = await response.blob();
//         setGifUrl(URL.createObjectURL(blob));
//       } catch (error) {
//         setError(error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchGif();
//   }, [apiUrl, apiKey]);

//   return { gifUrl, isLoading, error };
// }

// export default useFetchData;
import { useState, useEffect } from 'react';

function useFetchData(apiUrl = [], apiKey = '') {
  const [gifUrls, setGifUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

        if (Array.isArray(apiUrl)) {
          const requests = apiUrl.map((url, index) =>
            fetch(proxyUrl + url, {
              headers: {
                'X-Api-Key': apiKey[index] || apiKey, 
              },
            })
          );
          const responses = await Promise.all(requests);
          const blobs = await Promise.all(responses.map(response => response.blob()));
          const urls = blobs.map(blob => URL.createObjectURL(blob));
          setGifUrls(urls);
        } else {
          const response = await fetch(proxyUrl + apiUrl, {
            headers: {
              'X-Api-Key': apiKey,
            },
          });
          if (!response.ok) {
            throw new Error('Failed to fetch GIF');
          }
          const blob = await response.blob();
          setGifUrls([URL.createObjectURL(blob)]);
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [apiUrl, apiKey]);

  return { gifUrls, isLoading, error };
}

export default useFetchData;
