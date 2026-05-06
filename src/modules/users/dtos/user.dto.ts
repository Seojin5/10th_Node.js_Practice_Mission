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

export const bodyToUser = (body: UserSignUpRequest) => {
  return {
    email: body.email,
    password: body.password,
    name: body.name,
    gender: body.gender,
    birth: new Date(body.birth),
    address: body.address || "",
    city: body.city || "",
    district: body.district || "",
    neighborhood: body.neighborhood || "",
    detail: body.detail || "",
    phoneNumber: body.phoneNumber,
  };
};

export const responseFromUser = ({
  user,
  preferences,
}: {
  user: any;
  preferences: any[];
}) => {
  return {
    userId: user.user_id,
    role: user.role,
    name: user.name,
    gender: user.gender,
    birth: user.birth,
    address: user.address,
    city: user.city,
    district: user.district,
    neighborhood: user.neighborhood,
    detail: user.detail,
    point: user.point,
    createdAt: user.created_at,
    preferences,
  };
};