export default {
    general: {
      missing: 'Please provide the required field',
      invalid: 'Provided value is invalid'
    },
    type: {
      email: {
        missing: '请输入您的邮箱地址。',
        invalid: '您输入的邮箱地址无效。'
      },
      phone: {
        missing: '请输入您的手机号码。',
        invalid: '您输入的手机号码无效。'
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
