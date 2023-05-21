// Handle name field input validations
export const doNameValidations = (name: string): string => {
  if (!name.length) return "Name is required"
  else return ""
};

// Handle email field input validations
export const doEmailValidations = (email: string): string => {
  if (!email) return "Email is required"
  else if (!/^\S+@\S+$/.test(email)) return "Invalid email"
  else return ""
};

// Handle password field input validations
export const doPasswordValidations = (password: string): string => {
  if (!password) return "Password is required"
  else if (password.length < 8) return "Password should be at least 8 characters long"
  else if (!/\d/.test(password)) return "Password should contain at least one number"
  else if (!/[!@#$%^&*]/.test(password)) return "Password should contain at least one special character"
  else return ""
};
