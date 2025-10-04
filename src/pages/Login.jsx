import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validarInputs = (e) => {
    e.preventDefault();
    if (!email.trim() || !password.trim()) {
      alert("Todos los campos son obligatorios");
      return;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email)) {
      alert("El email no tiene un formato válido");
      return;
    }

    if (password.length <= 5) {
      alert("La contraseña debe contener al menos 6 dígitos");
      return;
    }

    alert(`¡Bienvenido ${email}!`);
    setEmail("");
    setPassword("");
  };

  return (
    <section className="d-flex justify-content-center align-items-center p-5">
      <Form className="w-50" onSubmit={validarInputs}>
        <h1 className="mb-5">Login</h1>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2} className="fw-bold">
            Email
          </Form.Label>
          <Col sm={8}>
            <Form.Control type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-4" controlId="formHorizontalPassword">
          <Form.Label column sm={2} className="fw-bold">
            Contraseña
          </Form.Label>
          <Col sm={8}>
            <Form.Control type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button variant="dark" type="submit">
              Enviar
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </section>
  );
};

export default Login;
