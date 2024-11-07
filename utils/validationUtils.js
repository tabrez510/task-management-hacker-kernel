class ValidationUtils {
    static emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    static mobilePattern = /^[0-9]{10}$/;
  
    static validateEmail(email) {
      return this.emailPattern.test(email);
    }
  
    static validateMobile(mobile) {
      return this.mobilePattern.test(mobile);
    }
  }
  
  module.exports = ValidationUtils;
  