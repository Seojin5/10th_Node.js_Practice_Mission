export interface CreateStoreResponse {
  storeId: number;
  storeName: string;
  address: string;
  city: string;
  district: string;
  neighborhood: string;
  detail: string;
  latitude: number;
  longitude: number;
  createdAt: Date;
}