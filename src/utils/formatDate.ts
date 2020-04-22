import { format, parseISO } from 'date-fns';

const formatDate = (date: string): string =>
  format(parseISO(date), 'dd/MM/yyyy');

export default formatDate;
