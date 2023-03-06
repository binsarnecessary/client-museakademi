import React from "react";
import "../../assets/css/auth.css";
import "../../assets/css/style.css";
import "../../assets/css/bootstrap.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {useRef, useState} from 'react';
import {Form, Container, Alert} from 'react-bootstrap';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import { login } from "../../store/slices/authSlice";
import { useDispatch } from "react-redux";
// import {GoogleOAuthProvider} from '@react-oauth/google';
// import {GoogleLogin} from '@react-oauth/google';;

function Login({}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();


    const emailField = useRef("");
    const passwordField = useRef("");

    const [errorResponse, setErrorResponse] = useState({
        isError: false,
        message: "",
    });

    const onLogin = async (e) => {
        e.preventDefault();

        try {
            const userToLoginPayload = {
                email: emailField.current.value,
                password: passwordField.current.value,
            };

            const loginRequest = await axios.post('http://localhost:7000/auth/login', userToLoginPayload);

            const loginResponse = loginRequest.data;

            if (loginResponse.status) {
              localStorage.setItem("token_key", loginResponse.data.token);
              
              dispatch(login({
                isLoggedIn: true,
                user: loginResponse.data,
              }));
              
              if (loginResponse.data.role === "mentor") {
                navigate("/mentor/dashboard");
              } else if (loginResponse.data.role === "admin") {
                navigate("/admin/dashboard");
              } else {
                navigate("/");
              }
            }
        } catch (err) {
            console.log(err);
            const response = err.response.data;

            setErrorResponse({
                isError: true,
                message: response.message,
            });
        }
    };

    // const onLoginGoogleSuccess = async (credentialsResponse) => {
    //     try {
    //         const userToLoginPayload = {
    //             google_credentials: credentialsResponse.credential,
    //         };

    //         const loginGoogleRequest = await axios.post("http://localhost:8000/auth/login-google", userToLoginPayload);

    //         const loginGoogleResponse = loginGoogleRequest.data;

    //         if(loginGoogleResponse.status) {
    //             localStorage.setItem("token_key", loginGoogleResponse.data.token);

    //             navigate("/");
    //         }
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };
  return (
    <>
    <Navbar />
      <div class="container my-5">
        <div class="row justify-content-center align-items-center h-75">
          <div class="col-12 col-lg-4">
            <div class="text-center">
              <h5>Masuk</h5>
              <p class="small text-muted">
                Gunakan nama pengguna dan kata sandi Anda untuk masuk ke
                aplikasi
              </p>
            </div>
            <Form onSubmit={(e) => onLogin(e)}>

            <Form.Group className='mb-3'>
                    <Form.Control type='text' ref={emailField} placeholder='Masukkan Email'/>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Control type='password' ref={passwordField} placeholder='Masukkan Password'/>
                </Form.Group>

              <input type="hidden" name="next" value="" />
              <button type="submit" class="btn btn-sm btn-block btn-primary">
                Masuk
              </button>
            </Form>
            <div class="text-muted text-center small py-2">atau</div>

            <a href="" class="btn-google btn btn-sm btn-block">
              <i class="fa fa-google"></i>
              <span class="ml-2">Masuk dengan Google</span>
            </a>

            <div class="text-center small py-3">
              <a href="">Lupa Kata Sandi?</a>
              <br />
              Belum punya akun ?<a href="/registration"> Daftarkan segera !</a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;
