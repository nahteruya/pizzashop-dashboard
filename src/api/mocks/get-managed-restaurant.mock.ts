import { http, HttpResponse } from "msw";

import { GetManagedRestaurantResponse } from "../get-managed-restaurant";

export const getManagedRestaurantMock = http.get<
  never,
  never,
  GetManagedRestaurantResponse
>("/managed-restaurant", () => {
  return HttpResponse.json({
    name: "Pizza Shop",
    description: "Melhor pizza da região",
    createdAt: new Date(),
    updatedAt: new Date(),
    id: "456",
    managerId: "123",
  });
});
