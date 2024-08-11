import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import useForm from "../../../Hooks/useForm";

const ProfilePicUploader = ({ onUpload, buttonText }) => {
  const [show, setShow] = useState(false);
  const { images, handleOnImgChange } = useForm();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpload = () => {
    if (images.length) {
      onUpload(images[0]);
      handleClose();
    } else {
      alert("Please select an image to upload.");
    }
  };

  return (
    <>
      <Button variant="outline-secondary" className="mt-2" onClick={handleShow}>
        {buttonText}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Profile Picture</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="formFile">
            <Form.Label>Select an image to upload:</Form.Label>
            <Form.Control type="file" onChange={handleOnImgChange} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpload}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProfilePicUploader;
