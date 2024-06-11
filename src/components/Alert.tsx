import React from 'react';

interface AlertProps {
    type: 'primary' | 'success' | 'danger' | 'warning';
    onDismiss?: () => void;
    children: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({ type, onDismiss, children }) => {
    return (
        <div className={`alert alert-${type}`} role="alert">
            {children}
            {onDismiss && (
                <button type="button" className="btn-close" onClick={onDismiss}></button>
            )}
        </div>
    );
};

export default Alert;
