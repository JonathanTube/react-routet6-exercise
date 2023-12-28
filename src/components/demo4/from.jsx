export default function A({ navigate }) {
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
