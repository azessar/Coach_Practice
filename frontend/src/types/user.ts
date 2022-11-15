export interface newUser {
  firstName: string;
  lastName: string;
  email: string;
  zipCode: string;
  password: string;
  confirmPassword: string;
  sports: string[];
}

export interface existingUser {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  zipCode?: string;
  twitter?: string;
  instagram?: string;
  personalSite?: string;
  blurb?: string;
  sports?: string[];
  experience: job[];
}

export interface job {
  startDate: Date | string;
  endDate: Date | string;
  sport: string;
  organization: string;
  summary?: string;
  role: string;
}
