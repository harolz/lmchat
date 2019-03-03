export default {
  general: {
    missing: 'Please provide the required field.',
    invalid: 'Provided value is invalid.'
  },
  type: {
    email: {
      missing: 'Please input your email address.',
      invalid: 'Please input a valid email address.'
    },
    phone: {
      missing: 'Please input your phone number.',
      invalid: 'Please input a valid phone number.'
    },
    name: {
      missing: '请输入您的姓名。',
      invalid: '您输入的姓名不符合规范。'
    }
  },
  name: {
    userEmail: {
      async: ({ value, reason }) => {
        return `The e-mail "${value}" is invalid. Reason: ${reason}`;
      }
    }
  }
};
