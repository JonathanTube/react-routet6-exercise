import { HashRouter, Link, Route, Routes } from "react-router-dom"
import styled from "styled-components"
import From from "./from"
import To from "./to"
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
        <Routes>
          <Route path="/from" element={<From />} />
          <Route path="/to" element={<To />} />
          <Route path="/to/:param0/:param1?" element={<To />} />
        </Routes>
      </div>
    </HashRouter>
  )
}
