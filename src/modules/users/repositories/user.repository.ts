import { prisma } from "../../../db.config.js";

// 1. 사용자 생성
export const addUser = async (data: any): Promise<number | null> => {
  // 이메일 중복 체크
  try {
    const existing = await prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existing) return null;

  // 생성
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
  } catch (err) {
    throw new Error(`유저 생성 오류: ${err}`);
  }
};

// 2. 사용자 조회
export const getUser = async (userId: number) => {
  try {
    return await prisma.user.findUnique({
      where: { userId },
    });
  } catch (err) {
    throw new Error(`유저 조회 오류: ${err}`);
  }
};

// 3. 선호 카테고리 설정
export const setPreference = async (
  userId: number, 
  foodCategoryId: number
): Promise<void> => {
  try {
    await prisma.userPreference.create({    
      data: {
      userId: userId,
      foodCategoryId: foodCategoryId,
    },
    });
  } catch (err) {
    throw new Error(`선호 저장 오류: ${err}`);
  }
};

// 4. 사용자 선호 조회
export const getUserPreferencesByUserId = async (userId: number) => {
  try {
    return await prisma.userPreference.findMany({    
      where: { userId: userId },
      orderBy: { foodCategoryId: 'asc' },
  });
  } catch (err) {
    throw new Error(`선호 조회 오류: ${err}`);
  }
};