import { api } from "@/lib/axios";

interface RegisterRestaurantsBody {
  restaurantName: string;
  managerName: string;
  email: string;
  phone: string;
}

export async function registerRestaurant({
  restaurantName,
  managerName,
  email,
  phone,
}: RegisterRestaurantsBody) {
  await api.post("/restaurants", {
    restaurantName,
    managerName,
    email,
    phone,
  });
}
