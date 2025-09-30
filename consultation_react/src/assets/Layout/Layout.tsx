import type { JSX } from "react/jsx-runtime";
import NavBar from "../../NavBar/NavBar";

export default function Layout():JSX.Element {
  return (
    <div>
      <NavBar />
      <Outlet />
      <footer>
        Here will something
      </footer>
    </div>
  )
}
