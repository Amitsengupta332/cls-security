import { useEffect } from "react";

export default function Modal({ open, onClose, title, children }) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      {/* Overlay */}
      <button
        aria-label="Close modal overlay"
        onClick={onClose}
        className="absolute inset-0 bg-black/60"
      />

      {/* Modal panel */}
      <div className="relative z-[1] w-[min(1000px,92vw)] h-[min(700px,90vh)] bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <div className="font-semibold text-gray-800">{title}</div>
          <button
            onClick={onClose}
            className="h-9 w-9 grid place-items-center rounded-md hover:bg-gray-100"
            aria-label="Close">
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="h-[calc(100%-52px)]">{children}</div>
      </div>
    </div>
  );
}
