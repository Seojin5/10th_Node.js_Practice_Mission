import { prisma } from "../../../db.config.js";

interface AddStoreParams {
  storeName: string;
  address: string;
  city: string;
  district: string;
  neighborhood: string;
  detail: string;
  latitude: number;
  longitude: number;
}

// 가게 생성
export const addStore = async (
  data: AddStoreParams
) => {

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
};

// 가게 조회
export const getStoreById = async (storeId: number) => {

  return await prisma.store.findUnique({
    where: { storeId },
  });
};