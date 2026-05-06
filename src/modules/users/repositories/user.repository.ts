import { prisma } from "../../../db.config.js";
// 1. User 생성

export const addUser = async (data: any) => {
  const existing = await prisma.user.findUnique({
    where: { email: data.email },
  });

  if (existing) return null;

  const user = await prisma.user.create({
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

  return user.userId;
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
  foodCategoryId: number
) => {
  await prisma.userFavorCategory.create({
    data: {
      userId,
      foodCategoryId,
    },
  });
};

// 4. 사용자 선호 조회
export const getUserPreferencesByUserId = async (userId: number) => {
  return await prisma.userFavorCategory.findMany({
    where: { userId },
    orderBy: { foodCategoryId: "asc" },
  });
};