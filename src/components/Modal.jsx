export default function Modal({ children, offModal = () => {} }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div
        onClick={offModal}
        className="absolute inset-0 bg-black/70"></div>
      <div className="relative max-h-[calc(100%-100px)] max-w-[600px] overflow-y-auto rounded-lg bg-white p-5 shadow-lg">
        {children}
      </div>
    </div>
  )
}
