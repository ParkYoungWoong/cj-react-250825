import { clsx } from 'clsx'

export default function Loader({
  color = 'royalblue',
  size = 80,
  weight = 6,
  fixed = false
}) {
  return (
    <div
      style={{
        '--hloader-color': color,
        '--hloader-size': `${size}px`,
        '--hloader-weight': `${weight}px`
      }}
      className={clsx({
        'fixed top-0 right-0 bottom-0 left-0 m-auto': fixed,
        hloader: true
      })}></div>
  )
}
