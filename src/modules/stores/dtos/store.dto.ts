export interface CreateStoreRequest {
  storeName: string;
  address: string;
  city: string;
  district: string;
  neighborhood: string;
  detail: string;
  latitude: number;
  longitude: number;
}

export const bodyToStore = (body: CreateStoreRequest) => {
  return {
    storeName: body.storeName,
    address: body.address,
    city: body.city,
    district: body.district,
    neighborhood: body.neighborhood,
    detail: body.detail,
    latitude: body.latitude,
    longitude: body.longitude,
  };
};

export const responseFromStore = (store: any) => {
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