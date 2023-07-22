import { useState, useEffect } from 'react';

export function useFetch( {url, initialData}) {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    const fetchFunction = async () => {    
      try {
        const response = await fetch(url);
        const json = await response.json();
        setLoading(false);
        setData(json);    
      } catch (error) {
        setError(error);
        setLoading(false); 
      }
    };
    fetchFunction();
  }, [url]);

  // Return the state variables as an object
  return [data, loading, error] ;
}


