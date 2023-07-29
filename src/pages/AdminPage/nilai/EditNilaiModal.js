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


const EditNilaiModal = ({ isOpen, onClose, match, idData }) => {


  const [dataToUpdate, setDataToUpdate] = useState({
    id: '',
    user_id: '',
    tugas_id: '',
    skorNilai: '',
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
        `https://server-museakademi-production.up.railway.app/api/nilai/${idData}`
      );

      const dataResp = dataReq.data;

      if (dataResp.status) {
        setDataToUpdate(dataResp.data.nilai);

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
    axios.patch(`https://server-museakademi-production.up.railway.app/api/nilai/${dataId}`, dataToUpdate)
      .then((response) => {
        Swal.fire({
          title: 'Sukses!',
          text: 'Berhasil Mengupdate Nilai',
          icon: 'success',
          confirmButtonText: 'OK'
        })
      })
      .catch((error) => {
        Swal.fire({
          title: 'Gagal!',
          text: 'Gagal Mengupdate Nilai',
          icon: 'success',
          confirmButtonText: 'OK'
        })
        // Handle error response here, e.g., show an error message.
      });
  };

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);


  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Update Nilai</DialogTitle>
      <DialogContent>
        <span>ID</span>
        <TextField
          autoFocus
          margin="dense"
          name="id"
          type="number"
          fullWidth
          /* value={editedName} */
          value={dataToUpdate.id}
          /* onChange={(e) => setEditedName(e.target.value)} */
   
        />
        <span>ID User</span>
        <TextField
          margin="dense"
          name="user_id"
          type="number"
          fullWidth
          /* value={editedEmail} */
          value={dataToUpdate.user_id}
          /* onChange={(e) => setEditedEmail(e.target.value)} */
          onChange={handleChange}
        />
        <span>ID Tugas</span>
        <TextField
          margin="dense"
          name="tugas_id"
          type="number"
          fullWidth
          value={dataToUpdate.tugas_id}
          onChange={handleChange} 
        />
        <span>Skor Nilai</span>
        <TextField
          margin="dense"
          name="skorNilai"
          type="number"
          fullWidth
          value={dataToUpdate.skorNilai}
          onChange={handleChange} 
        />
        
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

export default EditNilaiModal;
