import React, { useState } from "react";
import { Button, Col, Container, Form, ListGroup, Row } from "react-bootstrap";
import { uid } from "uid";

const TodoApp = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [errorStatus, setErrorStatus] = useState(false);

  const [updId, setUpdId] = useState();
  const [updValue, setUpdValue] = useState();

  // const todoRef = useRef();

  const handleAddTodo = () => {
    if (inputValue) {
      setTodos([...todos, { todoId: uid(12), todoText: inputValue }]);
      setInputValue("");
    } else {
      setErrorStatus(true);
    }
  };
  const handleDelete = (e) => {
    // console.log(e.target.parentNode.parentNode.children[0].id);
    let updatedTodos = todos.filter(
      (todo) => todo.todoId !== e.target.parentNode.parentNode.children[0].id
    );
    setTodos(updatedTodos);
  };

  const handleEdit = (e) => {
    setUpdId(e.target.parentNode.parentNode.children[0].id);
    setUpdValue(e.target.parentNode.parentNode.children[0].innerText);
    setInputValue(e.target.parentNode.parentNode.children[0].innerText);
  };

  const handleUpdate = () => {
    todos.forEach((element) => {
      if (element.todoText === updValue && element.todoId === updId) {
        element.todoText = inputValue;
      }
    });
    setTodos([...todos]);
    setInputValue("");
  };

  return (
    <div>
      <Container className="mt-4 text-primary">
        <h1>TODO APP</h1>
        <Row className="my-4">
          <Col xs={2}></Col>
          <Col xs={7}>
            <Form.Control
              onChange={(e) => {
                setInputValue(e.target.value);
                setErrorStatus(false);
              }}
              value={inputValue}
              placeholder="add todos here.."
              aria-label="Username"
              aria-describedby="basic-addon1"
              className={errorStatus && "border border-danger"}
            />

            {errorStatus && (
              <p className="error-message text-danger">
                Input can not be empty!!
              </p>
            )}
          </Col>
          <Col className="d-flex ps-0" xs={3}>
            <Button
              className="me-2"
              variant="primary"
              onClick={() => handleAddTodo()}
            >
              Add
            </Button>
            <Button variant="info" onClick={() => handleUpdate()}>
              Update
            </Button>
          </Col>
        </Row>

        {todos.map((element) => {
          return (
            <ListGroup key={element.todoId} className="mb-3">
              <Row className="d-flex justify-content-center">
                <Col xs={8}>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center">
                    <p id={element.todoId} className="m-0">
                      {element.todoText}
                    </p>
                    <div className="d-flex gap-2">
                      <Button variant="success" onClick={(e) => handleEdit(e)}>
                        Edit
                      </Button>
                      <Button variant="danger" onClick={(e) => handleDelete(e)}>
                        Delete
                      </Button>
                    </div>
                  </ListGroup.Item>
                </Col>
              </Row>
            </ListGroup>
          );
        })}
      </Container>
    </div>
  );
};

export default TodoApp;
