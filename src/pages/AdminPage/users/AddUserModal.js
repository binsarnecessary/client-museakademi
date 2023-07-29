import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";


const AddUserModal = ({ isOpen, onClose }) => {


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("user");
  const [profilePicture, setProfilePicture] = useState(null);


  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleProfilePictureChange = (event) => {
    setProfilePicture(event.target.files[0]);
  };

  const handleAddUser = () => {
    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("role", role);
    formData.append("profile_picture", profilePicture);

    axios
      .post("https://server-museakademi-production.up.railway.app/auth/register", formData)
      .then((response) => {
        Swal.fire({
          title: 'Sukses!',
          text: 'Berhasil Menambahkan User',
          icon: 'success',
          confirmButtonText: 'OK'
        })
        onClose();
        window.location.reload()
      })
      .catch((error) => {
        console.log("Error adding user:", error);
      });
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Add User</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          type="text"
          fullWidth
          value={name}
          onChange={handleNameChange}
        />
        <TextField
          margin="dense"
          id="email"
          label="Email Address"
          type="email"
          fullWidth
          value={email}
          onChange={handleEmailChange}
        />
        <TextField
          margin="dense"
          id="password"
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={handlePasswordChange}
        />
        <TextField
          margin="dense"
          id="phone"
          label="Phone Number"
          type="number"
          fullWidth
          value={phone}
          onChange={handlePhoneChange}
        />
        <TextField
          margin="dense"
          id="address"
          label="Address"
          type="text"
          fullWidth
          value={address}
          onChange={handleAddressChange}
        />
        <FormControl fullWidth margin="dense">
          <InputLabel id="role-select-label">Role</InputLabel>
          <Select
            labelId="role-select-label"
            id="role-select"
            value={role}
            onChange={handleRoleChange}
          >
            <MenuItem value="user">User</MenuItem>
            <MenuItem value="mentor">Mentor</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
          </Select>
        </FormControl>
        <Box margin="dense">
          <InputLabel htmlFor="profile-picture-input">
            Profile Picture
          </InputLabel>
          <input
            accept="image/*"
            id="profile-picture-input"
            multiple
            type="file"
            onChange={handleProfilePictureChange}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleAddUser} color="secondary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddUserModal;
