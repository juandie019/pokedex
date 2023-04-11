import { useEffect, useState } from 'react';

export const useDebouncedValue = (input: string = '', time: number = 500) => {
    const [debaunceValue, setDebaunceValue] = useState(input);

    useEffect(() => {
      const timeout = setTimeout( () => {
        setDebaunceValue(input);
      }, time);

      return () => {
        clearTimeout(timeout);
      };
    }, [input]);

    return debaunceValue;
};

