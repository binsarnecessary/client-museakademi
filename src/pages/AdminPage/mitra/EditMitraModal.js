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


const EditMitraModal = ({ isOpen, onClose, match, idData }) => {


  const [dataToUpdate, setDataToUpdate] = useState({
    id: '',
    emailMitra: '',
    nameMitra: '',
    instagramMitra: '',
    facebookMitra: '',
    waMitra: '',
    alamatMitra: '',
    courseTitle: '',
    logoMitra: '',
    headTagline: '',
    paragraphText: '',

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
        `https://server-museakademi-production.up.railway.app/api/mitra/${idData}`
      );
      console.log(idData)

      const dataResp = dataReq.data;
console.log(dataReq)
      if (dataResp.data.status) {
        setDataToUpdate(dataResp.data.Mitra);

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
    axios.patch(`https://server-museakademi-production.up.railway.app/api/mitra/${dataId}`, dataToUpdate)
    console.log(dataId)
      .then((response) => {
        Swal.fire({
          title: 'Sukses!',
          text: 'Berhasil Mengupdate Mitra',
          icon: 'success',
          confirmButtonText: 'OK'
        })
      })
      .catch((error) => {
        Swal.fire({
          title: 'Gagal!',
          text: 'Gagal Mengupdate Mitra',
          icon: 'success',
          confirmButtonText: 'OK'
        })
        // Handle error response here, e.g., show an error message.
      });
  };




  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Update Mitra</DialogTitle>
      <DialogContent>
        <span>Email</span>
        <TextField
          autoFocus
          margin="dense"
          name="emailMitra"
          type="email"
          fullWidth
     
          value={dataToUpdate.emailMitra}
   
          onChange={handleChange}
        />
        <span>Nama</span>
        <TextField
          margin="dense"
          name="nameMitra"
          type="text"
          fullWidth
          /* value={editedEmail} */
          value={dataToUpdate.nameMitra}
          /* onChange={(e) => setEditedEmail(e.target.value)} */
          onChange={handleChange}
        />
        <span>Instagram</span>
        <TextField
          margin="dense"
          name="instagramMitra"
          type="text"
          fullWidth
          value={dataToUpdate.instagramMitra}
          onChange={handleChange} 
        />
        <span>Facebook</span>
        <TextField
          margin="dense"
          name="facebookMitra"
          type="text"
          fullWidth
          value={dataToUpdate.facebookMitra}
          onChange={handleChange} 
        />
        <span>Whatsapp</span>
        <TextField
          margin="dense"
          name="waMitra"
          type="number"
          fullWidth
          value={dataToUpdate.waMitra}
          onChange={handleChange} 
        />
        <span>Alamat</span>
        <TextField
          margin="dense"
          name="alamatMitra"
          type="text"
          fullWidth
          value={dataToUpdate.alamatMitra}
          onChange={handleChange} 
        />
        <span>Kursus</span>
        <TextField
          margin="dense"
          name="courseTitle"
          type="text"
          fullWidth
          value={dataToUpdate.courseTitle}
          onChange={handleChange} 
        />
        <span>Tagline</span>
        <TextField
          margin="dense"
          name="headTagline"
          type="text"
          fullWidth
          value={dataToUpdate.headTagline}
          onChange={handleChange} 
        />
        <span>Text</span>
        <TextField
          margin="dense"
          name="paragraphText"
          type="text"
          fullWidth
          value={dataToUpdate.paragraphText}
          onChange={handleChange} 
        />
        <Box margin="dense">
          <InputLabel htmlFor="profile-picture-input">
            Logo
          </InputLabel>
          <input
            accept="image/*"
            name="logoMitra"
            multiple
            type="file"
            onChange={handleChange} 
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="secondary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditMitraModal;
