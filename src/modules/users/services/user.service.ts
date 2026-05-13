import bcrypt from "bcrypt";
import { CustomError } from "../../../errors/custom.error.js";

import {
  addUser,
  getUser,
  getUserPreferencesByUserId,
  setPreference,
} from "../repositories/user.repository.js";

import { UserSignUpRequest} from "../dtos/user.request.dto.js";

import { UserSignUpResponse } from "../dtos/user.response.dto.js";

export const userSignUp = async (
  data: UserSignUpRequest,
): Promise<UserSignUpResponse> => {
  const hashedPassword = await bcrypt.hash(data.password, 10);

  // 1. 유저 생성
  const createdUser = await addUser({
    email: data.email,
    password: hashedPassword,
    name: data.name,
    gender: data.gender,
    birth: new Date(data.birth),
    address: data.address ?? "",
    detailAddress: data.detail ?? "",
    phoneNumber: data.phoneNumber,
  });

  if (!createdUser) {
    throw new CustomError(409, "이미 존재하는 이메일입니다.");
  }

  // 2. 선호 저장
  await Promise.all(
    data.preferences.map((pref) =>
      setPreference(createdUser.userId, pref),
    ),
  );

  // 3. user 조회
  const user = await getUser(createdUser.userId);

  if (!user) {
    throw new CustomError(404, "유저 없음");
  }

  // 4. preference 조회
  const preferences = await getUserPreferencesByUserId(createdUser.userId);

  // 5. DTO 반환
  return {
    userId: user.userId,
    role: user.role,
    name: user.name,
    gender: user.gender,
    birth: user.birth,

    address: user.address ?? "",
    city: user.city ?? "",
    district: user.district ?? "",
    neighborhood: user.neighborhood ?? "",
    detail: user.detail ?? "",

    phoneNumber: user.phoneNumber,
    point: user.point,
    createdAt: user.createdAt,

    preferences: preferences.map((p) => String(p.foodCategoryId)),
  };
};