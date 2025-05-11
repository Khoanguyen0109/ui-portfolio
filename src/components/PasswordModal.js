import React, { useState } from 'react';
import { Modal, Form, Button, InputGroup } from 'react-bootstrap';
import { EyeFill, EyeSlashFill } from 'react-bootstrap-icons';
import { PASSWORD } from '../constants';

export const PasswordModal = ({ show, onHide, onSuccess }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can change this password or implement more secure authentication
    if (password === PASSWORD) {
      setError('');
      onSuccess();
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title style={{ color: 'black' }}>Project Access</Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label style={{ color: 'black' }}>Enter password to view project details</Form.Label>
            <InputGroup>
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isInvalid={!!error}
              />
              <Button 
                variant="outline-secondary"
                onClick={() => setShowPassword(!showPassword)}
                style={{ borderColor: '#dee2e6' }}
              >
                {showPassword ? <EyeSlashFill /> : <EyeFill />}
              </Button>
              <Form.Control.Feedback type="invalid">
                {error}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Cancel
          </Button>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
