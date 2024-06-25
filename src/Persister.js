import { useEffect, useMemo } from 'react';
import { useFormikContext } from 'formik';
import debounce from 'lodash.debounce';

const VALUES_LOCAL_STORAGE_KEY = 'values';

const save = debounce((values) => {
  window.localStorage.setItem(VALUES_LOCAL_STORAGE_KEY, JSON.stringify(values));
}, 300);

const Persister = () => {
  const { values, setValues } = useFormikContext();

  useEffect(() => {
    const saved = window.localStorage.getItem(VALUES_LOCAL_STORAGE_KEY);
    if (saved) {
      setValues(JSON.parse(saved));
    }
  }, []);

  const theValues = useMemo(() => values, [values]);
  useEffect(() => {
    save(theValues);
  }, [theValues]);
  return null;
};

export default Persister;
