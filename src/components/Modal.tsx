import React from 'react';

interface ModalButton {
    type: string;
    label: string;
    onClick: () => void;
}

interface ModalProps {
    show: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    buttons?: ModalButton[];
}

const Modal: React.FC<ModalProps> = ({ show, onClose, title, children, buttons }) => {
    if (!show) return null;

    return (
        <div className="modal show d-block" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{title}</h5>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                    <div className="modal-footer">
                        {buttons && buttons.map((button, index) => (
                            <button
                                key={index}
                                type="button"
                                className={`btn btn-${button.type}`}
                                onClick={button.onClick}
                            >
                                {button.label}
                            </button>
                        ))}
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Закрыть</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
