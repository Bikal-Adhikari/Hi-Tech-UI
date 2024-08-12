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
      onUpload(images[0]); // Assuming you want to upload only the first selected image
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
          <Form.Group>
            <Form.Label>Upload Images</Form.Label>
            <Form.Control
              type="file"
              name="images" // Add the name attribute
              required={true} // Make the field required
              accept="image/jpg, image/png, image/gif, image/jpeg" // Accept these file types
              // multiple // Allow multiple file uploads
              onChange={handleOnImgChange} // Handle file change
            />
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
