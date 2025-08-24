export default function Button({ children, loading, ...restProps }) {
  return (
    <>
      <button {...restProps}>{loading ? 'loading...' : children}</button>
    </>
  )
}
