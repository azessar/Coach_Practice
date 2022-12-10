export interface newUser {
  firstName: string;
  lastName: string;
  email: string;
  city: string;
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
  city?: string;
  twitter?: string;
  linkedIn?: string;
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
