import { prisma } from "../../../db.config.js";

// 가게 생성
export const addStore = async (data: any) => {

  try {
    const store = await prisma.store.create({
      data: {
        storeName: data.storeName,
        address: data.address,
        city: data.city,
        district: data.district,
        neighborhood: data.neighborhood,
        detail: data.detail,
        latitude: data.latitude,
        longitude: data.longitude,
      },
  });

    return store.storeId;
  } catch (err) {
    throw new Error(`가게 생성 오류: ${err}`);
  }
};

// 가게 조회
export const getStoreById = async (storeId: number) => {

  try {
    return await prisma.store.findUnique({
      where: { storeId },
    });

    } catch (err) {
    throw new Error(`가게 조회 오류: ${err}`);
  }
};