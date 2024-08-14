import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { NavLink } from "./navlink";

describe("NavLink", () => {
  it("should highlight the right nav link associated to the current page", () => {
    const wrapper = render(
      <>
        <NavLink to="/">Início</NavLink>
        <NavLink to="/orders">Pedidos</NavLink>
      </>,
      {
        wrapper: ({ children }) => {
          return (
            <MemoryRouter initialEntries={["/orders"]}>{children}</MemoryRouter>
          );
        },
      },
    );

    expect(wrapper.getByText("Início").dataset.current).toEqual("false");
    expect(wrapper.getByText("Pedidos").dataset.current).toEqual("true");
  });
});
