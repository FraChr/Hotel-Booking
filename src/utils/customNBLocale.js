import { nb } from "date-fns/locale";

const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

const customNbLocale = {
  ...nb,
  localize: {
    ...nb.localize,
    day: (n, options) => capitalizeFirstLetter(nb.localize.day(n, options)),
    month: (n, options) => capitalizeFirstLetter(nb.localize.month(n, options)),
  },
};

export default customNbLocale;
