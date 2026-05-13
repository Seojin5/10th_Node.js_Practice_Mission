export interface UserSignUpResponse {
  userId: number;

  role: string;

  name: string;
  gender: string;
  birth: Date;

  address: string;
  city: string;
  district: string;
  neighborhood: string;
  detail: string;

  phoneNumber: string;

  point: number;

  createdAt: Date;

  preferences: string[];
}