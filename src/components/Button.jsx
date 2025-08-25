import Loader from '@/components/Loader.jsx'

export default function Button({ children, loading, ...restProps }) {
  return (
    <>
      <button
        className="btn"
        {...restProps}>
        {loading ? (
          <Loader
            color="white"
            size={24}
            weight={3}
          />
        ) : (
          children
        )}
      </button>
    </>
  )
}
