// import React from "react";
// import "../../assets/css/auth.css";
// import "../../assets/css/style.css";
// import "../../assets/css/bootstrap.css";
// import NavbarLogin from "../../components/NavbarLogin";
// import FooterLogin from "../../components/FooterLogin";
// import {useRef, useState} from 'react';
// import {Form, Container, Alert} from 'react-bootstrap';
// import axios from 'axios';
// import {Link, useNavigate} from 'react-router-dom';


// function Login({setIsLoggedIn}) {
//   const navigate = useNavigate();

//     const emailField = useRef("");
//     const passwordField = useRef("");

//     const [errorResponse, setErrorResponse] = useState({
//         isError: false,
//         message: "",
//     });

//     const onLogin = async (e) => {
//         e.preventDefault();

//         try {
//             const userToLoginPayload = {
//                 email: emailField.current.value,
//                 password: passwordField.current.value,
//             };

//             const loginRequest = await axios.post('https://server-museakademi-production.up.railway.app/auth/login', userToLoginPayload);

//             const loginResponse = loginRequest.data;

//             if(loginResponse.status) {
//                 localStorage.setItem("token_key", loginResponse.data.token);

//                 setIsLoggedIn(true); 
//                 navigate("/");
//             }
//         } catch (err) {
//             console.log(err);
//             const response = err.response.data;

//             setErrorResponse({
//                 isError: true,
//                 message: response.message,
//             });
//         }
//     };

//   return (
//     <>
//     <NavbarLogin />
//       <div class="container my-5">
//         <div class="row justify-content-center align-items-center h-75">
//           <div class="col-12 col-lg-4">
//             <div class="text-center">
//               <h5>Masuk</h5>
//               <p class="small text-muted">
//                 Gunakan nama pengguna dan kata sandi Anda untuk masuk ke
//                 aplikasi
//               </p>
//             </div>
//             <Form onSubmit={(e) => onLogin(e)}>

//             <Form.Group className='mb-3'>
//                     <Form.Control type='text' ref={emailField} placeholder='Masukkan Email'/>
//                 </Form.Group>

//                 <Form.Group className='mb-3'>
//                     <Form.Control type='password' ref={passwordField} placeholder='Masukkan Password'/>
//                 </Form.Group>

//               <input type="hidden" name="next" value="" />
//               <button type="submit" class="btn btn-sm btn-block btn-primary">
//                 Masuk
//               </button>
//             </Form>
//             <div class="text-muted text-center small py-2">atau</div>

//             <a href="" class="btn-google btn btn-sm btn-block">
//               <i class="fa fa-google"></i>
//               <span class="ml-2">Masuk dengan Google</span>
//             </a>

//             <div class="text-center small py-3">
//               <a href="">Lupa Kata Sandi?</a>
//               <br />
//               Belum punya akun ?<a href="/registration"> Daftarkan segera !</a>
//             </div>
//           </div>
//         </div>
//       </div>

//       <FooterLogin />
//     </>
//   );
// }

// export default Login;
