export interface UserSignUpRequest {
  email: string;
  password: string;

  name: string;
  gender: string;
  birth: string;

  address?: string;
  city?: string;
  district?: string;
  neighborhood?: string;
  detail?: string;

  phoneNumber: string;

  preferences: number[];
}