
import { useEffect } from 'react';

const ImportScript = ()=> {
useEffect(() => {
    const script = document.createElement('script');
    script.src = "/path/to/Globe.tsx";
    script.async = true;
    document.body.appendChild(script);
  return () => {
      document.body.removeChild(script);
    }
  }, []);
};
    export default ImportScript;
