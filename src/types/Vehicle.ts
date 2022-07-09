export interface IVehicle {
  id: number;
  name: string;
  description: string;
  brand: string;
  plate: string;
  is_favorite: boolean;
  year: number;
  color: string;
  price: number;
  created_at: Date;
}
export interface IVehicleCreate {
  name: string;
  description: string;
  brand: string;
  plate: string;
  year: number;
  color: string;
  price: number;
}
