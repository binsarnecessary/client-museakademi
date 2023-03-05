import React, { useRef, useState } from "react";
import "../../assets/css/auth.css";
import "../../assets/css/style.css";
import "../../assets/css/bootstrap.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Form, Container, Button, Alert } from "react-bootstrap";

function Registration() {
  const navigate = useNavigate();

  const nameField = useRef("");
  const emailField = useRef("");
  const roleField = useRef("");
  const passwordField = useRef("");
  const [profile_pictureField, setPictureField] = useState();
  const addressField = useRef("");
  const phoneField = useRef("");

  const [errorResponse, setErrorResponse] = useState({
    isError: false,
    message: "",
  });

  const onRegister = async (e) => {
    e.preventDefault();

    try {
      const userToRegisterPayload = new FormData();

      userToRegisterPayload.append("name", nameField.current.value);
      userToRegisterPayload.append("email", emailField.current.value);
      userToRegisterPayload.append("role", roleField.current.value);
      userToRegisterPayload.append("password", passwordField.current.value);
      userToRegisterPayload.append("profile_picture", profile_pictureField);
      userToRegisterPayload.append("address", addressField.current.value);
      userToRegisterPayload.append("phone", phoneField.current.value);

      const registerRequest = await axios.post(
        "http://localhost:7000/auth/register",
        userToRegisterPayload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const registerResponse = registerRequest.data;

      if (registerResponse.status) navigate("/login");
    } catch (err) {
      console.log(err);
      const response = err.response.data;

      setErrorResponse({
        isError: true,
        message: response.message,
      });
    }
  };

  return (
    <>
      <Navbar />
      <div class="container my-5">
        <div class="row justify-content-center align-items-center h-75">
          <div class="col-12 col-lg-4">
            <div class="text-center">
              <h5>Mendaftar</h5>
              <p class="small text-muted">
                Lengkapi data untuk dapat melanjutkan proses pendaftaran akun
              </p>
            </div>

            <Form onSubmit={onRegister}>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  ref={nameField}
                  placeholder="Masukkan nama"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  ref={emailField}
                  placeholder="Masukkan Email"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="password"
                  ref={passwordField}
                  placeholder="Masukkan Password"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  ref={addressField}
                  placeholder="Masukkan Alamat"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  ref={phoneField}
                  placeholder="Masukkan Nomor Telepon"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="file"
                  onChange={(e) => setPictureField(e.target.files[0])}
                />
              </Form.Group>

              {errorResponse.isError && (
                <Alert variant="danger">{errorResponse.message}</Alert>
              )}
              <Button className="w-100" type="submit">
                Daftar Akun
              </Button>
            </Form>
            <div class="text-muted text-center small py-2">atau</div>
            <a href="" class="btn-google btn btn-sm btn-block">
              <i class="fa fa-google"></i>
              <span class="ml-2">Masuk dengan Google</span>
            </a>

            <div class="text-center small py-3">
              <a href="">Lupa Kata Sandi?</a>
              <br />
              Sudah punya akun?
              <p>
                <a href="/login"> Masuk</a> disini
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Registration;
