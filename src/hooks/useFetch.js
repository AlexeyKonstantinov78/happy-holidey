import { useEffect,  useState } from "react";

export const useFeatch = (url) => {
  const [data, setData] = useState({});
  const [error, setError] = useState({});

  useEffect(() => {
    if (!url) return;

    (async () => {
      try {
        const response = await fetch(url);
        if (response.ok) {
          setData(await response.json());
        } else {
          throw new Error(response.status);
        }
      } catch (err) {
        setError(err);
      }      
    })();    
  }, [url]);

  return [data, error];
}