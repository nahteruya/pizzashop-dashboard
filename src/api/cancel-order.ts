import { api } from "@/lib/axios";

interface cancelOrderBody {
  orderId: string;
}

export async function cancelOrder({ orderId }: cancelOrderBody) {
  await api.patch(`/orders/${orderId}/cancel`);
}
