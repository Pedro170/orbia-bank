import React from "react";

type ModalProps = {
  isOpen: boolean;
  title?: string;
  onClose: () => void;
  children: React.ReactNode;
};

const Modal = ({
  isOpen,
  title,
  onClose,
  children,
}: ModalProps) => {
  React.useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="modal-overlay"
      onClick={handleOverlayClick}
    >
      <div className="modal-lateral">
        <div className="header-modal">
          {title && <h2>{title}</h2>}

          <button
            className="fechar"
            onClick={onClose}
            aria-label="Fechar modal"
          >
            ✕
          </button>
        </div>

        <div className="modal-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
