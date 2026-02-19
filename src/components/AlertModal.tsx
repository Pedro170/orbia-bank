import React from "react";

export type AlertModalVariant = "error" | "success" | "info";

type AlertModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message: React.ReactNode;
  closeLabel?: string;
  variant?: AlertModalVariant;
};

const defaultTitles: Record<AlertModalVariant, string> = {
  error: "Ops! Algo deu errado",
  success: "Tudo certo!",
  info: "Informação",
};

const AlertModal = ({
  isOpen,
  onClose,
  title,
  message,
  closeLabel = "Entendi",
  variant = "error",
}: AlertModalProps) => {
  React.useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
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

  const displayTitle = title ?? defaultTitles[variant];

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) onClose();
  };

  return (
    <div
      className="modal-overlay modal-alert-overlay"
      onClick={handleOverlayClick}
      role="alertdialog"
      aria-labelledby="alert-modal-title"
      aria-describedby="alert-modal-message"
    >
      <div className={`modal-alert modal-alert--${variant}`}>
        <div className="modal-alert__header">
          <h2 id="alert-modal-title" className="modal-alert__title">
            {displayTitle}
          </h2>
          <button
            type="button"
            className="modal-alert__close"
            onClick={onClose}
            aria-label="Fechar"
          >
            ✕
          </button>
        </div>
        <div id="alert-modal-message" className="modal-alert__message">
          {typeof message === "string" ? <p>{message}</p> : message}
        </div>
        <div className="modal-alert__actions">
          <button
            type="button"
            className="modal-alert__btn"
            onClick={onClose}
          >
            {closeLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
