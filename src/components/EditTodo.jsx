import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function EditTodo({ todo, onSave, onCancel }) {
  const [editedName, setEditedName] = useState(todo.name);
  const [editedDesc, setEditedDesc] = useState(todo.desc);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...todo, name: editedName, desc: editedDesc });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Task Name</Form.Label>
        <Form.Control
          type="text"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={editedDesc}
          onChange={(e) => setEditedDesc(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Save Changes
      </Button>
      <Button variant="secondary" onClick={onCancel} className="ms-2">
        Cancel
      </Button>
    </Form>
  );
}

export default EditTodo;
