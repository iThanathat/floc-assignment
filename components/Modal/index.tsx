import { ModalProps } from "./types";

const Modal: React.FC<ModalProps> = ({ children, isOpen, onRequestClose }) => {
  return (
    <div
      className={`modal backdrop-blur-sm${isOpen ? " modal-open" : ""}`}
      onClick={onRequestClose}
    >
      <div className="modal-box relative overflow-visible">{children}</div>
    </div>
  );
};

export default Modal;
