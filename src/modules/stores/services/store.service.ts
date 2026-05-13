import { CustomError } from "../../../common/errors/custom.error.js";
import { addStore } from "../repositories/store.repository.js";

import { CreateStoreRequest } from "../dtos/store.request.dto.js";
import { CreateStoreResponse } from "../dtos/store.response.dto.js";

export const createStoreService = async (
  data: CreateStoreRequest,
): Promise<CreateStoreResponse> => {
  const {
    storeName,
    address,
    city,
    district,
    neighborhood,
    detail,
    latitude,
    longitude,
  } = data;

  // 1. 필수값 검증
  if (
    !storeName ||
    !address ||
    !city ||
    !district ||
    !neighborhood ||
    !detail ||
    latitude == null ||
    longitude == null
  ) {
    throw new CustomError(
      400, 
      "필수 값 누락"
    );
  }

  // 2. 생성
  const store = await addStore(data);

  // 3. DTO 반환
  return {
    storeId: store.storeId,
    storeName: store.storeName,
    address: store.address,
    city: store.city,
    district: store.district,
    neighborhood: store.neighborhood,
    detail: store.detail,
    latitude: store.latitude,
    longitude: store.longitude,
    createdAt: store.createdAt,
  };
};