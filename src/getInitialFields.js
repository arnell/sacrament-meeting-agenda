import { addDays, format } from 'date-fns';

const getNextSundayStr = () => {
  const today = new Date();
  const daysUntilSunday = (7 - today.getDay()) % 7;
  const sunday = addDays(today, daysUntilSunday);
  return format(sunday, 'LLLL d, yyyy');
};

export default () => ({
  date: getNextSundayStr(),
  'announcement-count': 2,
  'ward-business-count': 2,
  'content-item-section-count': 3,
  'release-section-count': 1,
  'calling-section-count': 1,
});
