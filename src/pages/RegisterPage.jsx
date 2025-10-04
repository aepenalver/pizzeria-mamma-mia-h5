import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validarInputs = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      alert("Todos los campos son obligatorios");
      return;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexEmail.test(email)) {
      alert("El email ingresado no tiene un formato válido");
      return;
    }

    if (password.length <= 5) {
      alert("La contraseña debe contener al menos 6 dígitos");
      return;
    }

    if (password !== confirmPassword) {
      alert("Las contraseñas deben ser idénticas");
      return;
    }

    alert("¡Registro Exitoso!");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <section className="d-flex justify-content-center align-items-center p-5">
      <Form className="w-50" onSubmit={validarInputs}>
        <h1 className="mb-5">Registro</h1>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label className="fw-bold">Email</Form.Label>
          <Form.Control type="email" placeholder="Ingrese su email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label className="fw-bold">Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Establezca su contraseña" name="password" onChange={(e) => setPassword(e.target.value)} value={password} />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formGroupConfirmPassword">
          <Form.Label className="fw-bold">Confirmar Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Confirme su contraseña" name="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword} />
        </Form.Group>
        <Button variant="dark" type="submit">
          Enviar
        </Button>
      </Form>
    </section>
  );
};

export default RegisterPage;
