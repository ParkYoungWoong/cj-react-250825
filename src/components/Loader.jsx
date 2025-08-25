export default function Loader({ color, size, weight }) {
  return (
    <div
      style={{
        '--hloader-color': color,
        '--hloader-size': `${size}px`,
        '--hloader-weight': `${weight}px`
      }}
      className="hloader"></div>
  )
}
