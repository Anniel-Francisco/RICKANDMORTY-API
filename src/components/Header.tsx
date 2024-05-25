import { useNavigate, useLocation } from "react-router-dom";
//
type RouteT = {
  name: string;
  path: string;
};
export function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const routes: Array<RouteT> = [
    { name: "Home", path: "/" },
    { name: "Characters", path: "/characters" },
    { name: "Locations", path: "/locations" },
  ];

  const goToPage = (route: string) => {
    navigate(route);
  };

  return (
    <>
      <div
        style={{
          height: "80px",
          backgroundColor: "#262c3a",
          padding: "10px 20px 0 20px",
        }}
        className="flex items-center justify-between sticky top-0 z-10"
      >
        <div className="flex items-center" style={{ width: "100%" }}>
          <img
            style={{ width: "70px" }}
            onClick={() => goToPage("/")}
            src="rickImage.png"
            alt="rick-image"
            className="cursor-pointer hover:-translate-y-1 duration-300"
          />
        </div>
        {/* Routes */}
        <div className="flex gap-5 text-white">
          {routes.map((route, index) => {
            return (
              <a
                key={index}
                onClick={() => goToPage(route.path)}
                className="cursor-pointer hover:underline text-xl font-medium"
                style={{
                  textDecoration:
                    location.pathname == route.path ? "underline" : "",
                }}
              >
                {route.name}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
