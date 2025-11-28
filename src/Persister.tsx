import { useEffect, useMemo } from 'react';
import { useFormikContext } from 'formik';
import debounce from 'lodash.debounce';

const VALUES_LOCAL_STORAGE_KEY = 'values';

const save = debounce((values: Record<string, unknown>) => {
  window.localStorage.setItem(VALUES_LOCAL_STORAGE_KEY, JSON.stringify(values));
}, 300);

const Persister = () => {
  const { values, setValues } = useFormikContext<Record<string, unknown>>();

  useEffect(() => {
    const saved = window.localStorage.getItem(VALUES_LOCAL_STORAGE_KEY);
    if (saved) {
      setValues(JSON.parse(saved) as Record<string, unknown>);
    }
  }, [setValues]);

  const theValues = useMemo(() => values, [values]);
  useEffect(() => {
    save(theValues);
  }, [theValues]);
  return null;
};

export default Persister;
