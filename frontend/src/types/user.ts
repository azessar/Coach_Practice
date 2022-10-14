export interface newUser {
  firstName: string;
  lastName: string;
  email: string;
  zip: string;
  password: string;
  confirmPassword: string;
}

export interface existingUser {
  email: string;
  password: string;
}
