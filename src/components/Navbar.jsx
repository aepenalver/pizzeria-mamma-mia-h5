import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import convertedAmount from "../utils/convert";

const NavMenu = () => {
  const total = 25000;
  const token = false;
  const navigate = useNavigate();

  return (
    <Navbar className="bg-dark">
      <Container fluid className="m-1 gap-2">
        <Navbar.Brand as={Link} to="/" className="text-light fs-4 fw">
          Pizzería Mamma Mia!
        </Navbar.Brand>

        <Button variant="outline-light" onClick={() => navigate("/")}>
          🍕 Home
        </Button>

        {token ? (
          <>
            <Button variant="outline-light" onClick={() => navigate("/profile")}>
              🔓 Profile
            </Button>
            <Button variant="outline-light">🔒 Logout</Button>
          </>
        ) : (
          <>
            <Button variant="outline-light" onClick={() => navigate("/login")}>
              🔐 Login
            </Button>
            <Button variant="outline-light" onClick={() => navigate("/register")}>
              🔐 Register
            </Button>
          </>
        )}

        <Button className="ms-auto" variant="outline-info" onClick={() => navigate("/cart")}>
          🛒 Total: ${convertedAmount(total)}
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavMenu;
