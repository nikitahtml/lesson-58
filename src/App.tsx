import React, { useState } from 'react';
import Modal from './components/Modal';
import Alert from './components/Alert';
import './App.css';

const App: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [showAlert, setShowAlert] = useState(true);

    const handleModalClose = () => setShowModal(false);
    const handleAlertDismiss = () => setShowAlert(false);

    return (
        <div className="App container">
            <h1 className="my-4">Demo App</h1>

            <button className="btn btn-primary" onClick={() => setShowModal(true)}>
                Show Modal
            </button>

            {showAlert && (
                <Alert type="warning" onDismiss={handleAlertDismiss}>
                    This is a warning type alert
                </Alert>
            )}

            <Modal
                show={showModal}
                onClose={handleModalClose}
                title="Some kinda modal title"
                buttons={[
                    { type: 'primary', label: 'Continue', onClick: () => alert('clicked continue') },
                    { type: 'danger', label: 'Close', onClick: handleModalClose },
                ]}
            >
                <p>This is modal content</p>
            </Modal>
        </div>
    );
}

export default App;
