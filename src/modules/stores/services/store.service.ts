import { addStore } from "../repositories/store.repository.js";

export const createStoreService = async (data: any) => {
  const { name, city, district, neighborhood, detail } = data;

  if (!name || !city || !district || !neighborhood || !detail) {
    throw new Error("필수 값 누락");
  }

  const storeId = await addStore(data);

  return { storeId };
};

