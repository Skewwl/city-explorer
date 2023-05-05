import React, {useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DisplayError(props) {
    let [show, setShow] = useState(false);
    
    let handleClose = () => setShow(false);

    // useEffect(() => {
    //     document.title = `Hi, ${name}`;
    //   }, [props.showValue]);
    
    if (props.showValue){
        setShow(true)
    }

    return (
        props.error &&
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>{props.error}</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DisplayError;