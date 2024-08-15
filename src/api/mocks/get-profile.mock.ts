import { http, HttpResponse } from "msw";

import { GetProfileResponse } from "../get-profile";

export const getProfileMock = http.get<never, never, GetProfileResponse>(
  "/me",
  () => {
    return HttpResponse.json({
      email: "nahteruya@gmail.com",
      name: "Naomi",
      phone: "(11) 96456-0535",
      role: "manager",
      id: "123",
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  },
);
