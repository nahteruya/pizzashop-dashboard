import { http, HttpResponse } from "msw";

import { RegisterRestaurantsBody } from "../register-restaurants";

export const registerResturantMock = http.post<never, RegisterRestaurantsBody>(
  "/restaurants",
  async ({ request }) => {
    const { restaurantName } = await request.json();

    if (restaurantName === "Pizza Shop") {
      return new HttpResponse(null, { status: 201 });
    }

    return new HttpResponse(null, { status: 401 });
  },
);
