import { HashRouter, Link } from "react-router-dom"
import styled from "styled-components"
import AutoRoutes from "./router"
const NavBox = styled.nav`
  a {
    margin: 20px 10px;
  }
`

export default function Main() {
  return (
    <HashRouter>
      <NavBox>
        <Link to="/from">From Component</Link>
        <Link to="/to">To Component</Link>
      </NavBox>
      <div>
        <AutoRoutes />
      </div>
    </HashRouter>
  )
}
