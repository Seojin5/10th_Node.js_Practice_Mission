import { prisma } from "../../../db.config.js";

interface AddUserParams {
  email: string;
  password: string;
  name: string;
  gender: string;
  birth: Date;
  address: string;
  detailAddress: string;
  phoneNumber: string;
}

// 1. 사용자 생성
export const addUser = async (data: AddUserParams) => {
  const existing = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (existing) {
    return null;
  }

  return await prisma.user.create({
    data: {
      email: data.email,
      password: data.password,
      name: data.name,
      gender: data.gender,
      birth: data.birth,
      address: data.address,
      detail: data.detailAddress,
      phoneNumber: data.phoneNumber,
    },
  });
};

// 2. 사용자 조회
export const getUser = async (userId: number) => {
  return await prisma.user.findUnique({
    where: { userId },
  });
};

// 3. 선호 카테고리 설정
export const setPreference = async (
  userId: number,
  foodCategoryId: number,
): Promise<void> => {
  await prisma.userPreference.create({
    data: {
      userId,
      foodCategoryId,
    },
  });
};

// 4. 사용자 선호 조회
export const getUserPreferencesByUserId = async (userId: number) => {
  return await prisma.userPreference.findMany({
    where: { userId },
    orderBy: { foodCategoryId: "asc" },
  });
};