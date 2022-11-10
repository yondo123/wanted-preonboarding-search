import React, { useEffect, useState } from 'react';

type CallbackType = (arg: string) => void;

const useDebounce = (callback: CallbackType, delay: number) => {
  const [dependentValue, setDependentValue] = useState('');

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setDependentValue(e.currentTarget.value);
  };

  useEffect(() => {
    const _debounceTimer = setTimeout(() => {
      callback(dependentValue);
    }, delay);
    return () => {
      clearTimeout(_debounceTimer);
    };
  }, [dependentValue]);

  return handleChange;
};

export default useDebounce;
