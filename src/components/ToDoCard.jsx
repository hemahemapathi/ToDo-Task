import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import EditTodo from "./EditTodo";

function ToDoCard({ toDo, setToDo, name, setName, desc, setDesc, button, setButton, toDoid, getId }) {
  const [editingId, setEditingId] = useState(null);

  const handleDelete = (id) => {
    const updatedTodos = toDo.filter(item => item.id !== id);
    setToDo(updatedTodos);
  };

  const handleEdit = (id) => {
    setEditingId(id);
  };

  const handleSave = (editedTodo) => {
    const updatedTodos = toDo.map(item =>
       item.id === editedTodo.id ? editedTodo : item
    );
    setToDo(updatedTodos);
    setEditingId(null);
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  const handleStatusChange = (statusId, toDoId) => {
    const updatedTodos = toDo.map(item =>
       item.id === toDoId ? { ...item, status: statusId } : item
    );
    setToDo(updatedTodos);
  };

  return (
    <div className="todo-list">
      {toDo.map((item) => (
        <Card key={item.id} className="mb-7">
          <Card.Body>
            {editingId === item.id ? (
              <EditTodo todo={item} onSave={handleSave} onCancel={handleCancel} />
            ) : (
              <>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.desc}</Card.Text>
                <Button variant="primary" onClick={() => handleEdit(item.id)}>Edit</Button>
                <Button variant="danger" onClick={() => handleDelete(item.id)} className="ms-2">Delete</Button>
                <div className="mt-2">
                  <Button variant={item.status === 'not-completed' ? 'secondary' : 'outline-secondary'} onClick={() => handleStatusChange('not-completed', item.id)} className="me-2">Not Completed</Button>
                  <Button variant={item.status === 'completed' ? 'success' : 'outline-success'} onClick={() => handleStatusChange('completed', item.id)}>Completed</Button>
                </div>
              </>
            )}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default ToDoCard;