export default function TextField({ label, ...restProps }) {
  return (
    <>
      <label className="text-field">
        {label && <span>{label}</span>}
        <input {...restProps} />
      </label>
    </>
  )
}
