import { useNavigate } from "react-router-dom"
export default function A() {
  // react-router-dom V6版本中是无法从props中获得路由相关对象的
  // 只能使用Hook函数
  // Hook函数也只有所在组件包含在XXRouter中（HashRouter或者BrowserRouter）
  // 只要在XXRouter中，不管是不是基于<Router>渲染，都可以通过Hook拿到

  // 如果是函数组件，V6中已经去掉了withRouter，需要自己实现HOC组件

  // V6版本中的编程式导航=====>
  // 取消了history对象
  const navigate = useNavigate()
  return (
    <>
      <h1>A Component</h1>
      <button
        onClick={() => {
          navigate("/to")
        }}
      >
        1.编程式导航-默认
      </button>

      <br />

      <button
        onClick={() => {
          navigate("/to", {
            replace: true
          })
        }}
      >
        1.编程式导航-replace
      </button>

      <br />

      <button
        onClick={() => {
          navigate({
            pathname: "/to",
            search: "param0=x&param1=y"
          })
        }}
      >
        1.编程式导航-传递url参数
      </button>

      <br />

      <button
        onClick={() => {
          navigate("/to/x/y")
        }}
      >
        2.编程式导航-传递路由路径参数
      </button>

      <br />

      {/* 这种方式传递与V5版本不一样，V5中刷新就没了，但是V6中还会有 */}
      <button
        onClick={() => {
          navigate("/to", {
            state: {
              param0: "x",
              param1: "y"
            }
          })
        }}
      >
        3.编程式导航-hide方式传参
      </button>
    </>
  )
}
