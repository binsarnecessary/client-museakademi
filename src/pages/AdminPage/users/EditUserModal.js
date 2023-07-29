import React, { useState, useEffect } from "react";
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
import { useParams } from "react-router-dom";


const EditUserModal = ({ isOpen, onClose, match, idData }) => {


  const [dataToUpdate, setDataToUpdate] = useState({
    id: '',
    name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    role: '',
    profilePicture: null,

  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDataToUpdate((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const fetchData = async () => {
    try {
      //Check Valid Token From API
      const dataReq = await axios.get(
        `https://server-museakademi-production.up.railway.app/api/users/${idData}`
      );

      const dataResp = dataReq.data;
      console.log(dataResp)
      if (dataResp.status) {
        setDataToUpdate(dataResp.data.user);
        console.log(setDataToUpdate)
      }
    } catch (err) {
      setDataToUpdate(false);
    }
  };

  useEffect(() => {
    if(isOpen){
      fetchData()
    }
  }, [isOpen]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Assuming you have a valid ID for the data to update
    const dataId = dataToUpdate.id;

    // Perform the Axios PUT/PATCH request to update the data
    axios.patch(`https://server-museakademi-production.up.railway.app/api/users/${dataId}`, dataToUpdate)
      .then((response) => {
        Swal.fire({
          title: 'Sukses!',
          text: 'Berhasil Mengupdate User',
          icon: 'success',
          confirmButtonText: 'OK'
        })
      })
      .catch((error) => {
        console.error('Error updating data:', error);
        // Handle error response here, e.g., show an error message.
      });
  };

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);


  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Update User</DialogTitle>
      <DialogContent>
        <span>Nama</span>
        <TextField
          autoFocus
          margin="dense"
          name="name"
          type="text"
          fullWidth
          /* value={editedName} */
          value={dataToUpdate.name}
          /* onChange={(e) => setEditedName(e.target.value)} */
          onChange={handleChange}
        />
        <span>Email</span>
        <TextField
          margin="dense"
          name="email"
          type="email"
          fullWidth
          /* value={editedEmail} */
          value={dataToUpdate.email}
          /* onChange={(e) => setEditedEmail(e.target.value)} */
          onChange={handleChange}
        />
        <span>Password</span>
        <TextField
          margin="dense"
          name="password"
          type="password"
          fullWidth
          value={dataToUpdate.password}
          onChange={handleChange} 
        />
        <span>Nomor HP</span>
        <TextField
          margin="dense"
          name="phone"
          type="number"
          fullWidth
          value={dataToUpdate.phone}
          onChange={handleChange} 
        />
        <span>Alamat</span>
        <TextField
          margin="dense"
          name="address"
          type="text"
          fullWidth
          value={dataToUpdate.address}
          onChange={handleChange} 
        />
        <FormControl fullWidth margin="dense">
          <span>Role</span>
          <Select
            name="role-select"
            value={dataToUpdate.role}
            onChange={handleChange} 
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
            name="profile-picture-input"
            multiple
            type="file"
            value={dataToUpdate.profilePicture}
            onChange={handleChange} 
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button type="submit" onClick={handleSubmit} color="secondary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditUserModal;
