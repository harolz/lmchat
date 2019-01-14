import isEmail from 'validator/lib/isEmail';
import isPhone from 'validator/lib/isMobilePhone';
import isAlpha from 'validator/lib/isAlpha';

export default {
  type: {
    email: ({ value }) => isEmail(value),
    phone: ({ value }) => isPhone(value),
    name: ({ value }) => isAlpha(value)
  }
};
