import { useCallback, useEffect, useState } from "react";

const useAsync = (asyncFunction, immediate = true, defaultLoading = false) => {
  const [error, setError] = useState(undefined);
  const [isLoading, setLoading] = useState(defaultLoading);
  const [value, setValue] = useState(undefined);

  // The execute function wraps asyncFunction and
  // handles setting state for pending, value, and error.
  // useCallback ensures the below useEffect is not called
  // on every render, but only if asyncFunction changes.
  const execute = useCallback(
    ({ isBackground = false, params } = {}) => {
      if (!isBackground) {
        setLoading(true);
        setValue(undefined);
        setError(undefined);
      }

      return asyncFunction(params)
        .then((response) => setValue(response))
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    },
    [asyncFunction],
  );

  // Call execute if we want to fire it right away.
  // Otherwise execute can be called later, such as
  // in an onClick handler.
  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return {
    error,
    execute,
    isLoading,
    value,
  };
};

export default useAsync;
