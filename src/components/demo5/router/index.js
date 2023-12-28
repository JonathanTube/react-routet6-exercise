// import { lazy } from "react"
import { Navigate, useRoutes } from "react-router-dom"
import From from "../from"
import To from "../to"
import To0 from "../to0"

export default function AutoRoutes() {
  const config = useRoutes([
    {
      path: "/",
      element: <Navigate to="/from" />
    },
    {
      path: "/from",
      element: <From />
    },
    {
      path: "/to",
      element: <To />,
      children: [
        {
          path: "to0",
          element: <To0 />
        }
      ]
    }
  ])
  return config
}
