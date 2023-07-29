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


const EditTugasModal = ({ isOpen, onClose, match, idData }) => {


  const [dataToUpdate, setDataToUpdate] = useState({
    id: '',
    user_id: '',
    course_id: '',
    judulTugas: '',
    petunjukPengerjaan: '',
    linkTugas: '',
    tugasStart: '',
    tugasEnd: '',
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
        `https://server-museakademi-production.up.railway.app/api/tugas/${idData}`
      );

      const dataResp = dataReq.data;
      console.log(dataResp)
      if (dataResp.status) {
        setDataToUpdate(dataResp.data.tugas);
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
    axios.patch(`https://server-museakademi-production.up.railway.app/api/tugas/${dataId}`, dataToUpdate)
      .then((response) => {
        Swal.fire({
          title: 'Sukses!',
          text: 'Berhasil Mengupdate Tugas',
          icon: 'success',
          confirmButtonText: 'OK'
        })
      })
      .catch((error) => {
        Swal.fire({
          title: 'Gasagal!',
          text: 'Gagal Mengupdate Tugas',
          icon: 'error',
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
      <DialogTitle>Update Tugas</DialogTitle>
      <DialogContent>
        <span>ID USER</span>
        <TextField
          autoFocus
          margin="dense"
          name="user_id"
          type="number"
          fullWidth
          /* value={editedName} */
          value={dataToUpdate.user_id}
          /* onChange={(e) => setEditedName(e.target.value)} */
    
        />
        <span>ID COURSE</span>
        <TextField
          margin="dense"
          name="course_id"
          type="number"
          fullWidth
          /* value={editedEmail} */
          value={dataToUpdate.course_id}
          /* onChange={(e) => setEditedEmail(e.target.value)} */
     
        />
        <span>JUDUL TUGAS</span>
        <TextField
          margin="dense"
          name="judulTugas"
          type="text"
          fullWidth
          value={dataToUpdate.judulTugas}
          onChange={handleChange} 
        />
        <span>PETUNJUK PENGERJAAN</span>
        <TextField
          margin="dense"
          name="petunjukPengerjaan"
          type="text"
          fullWidth
          value={dataToUpdate.petunjukPengerjaan}
          onChange={handleChange} 
        />
        <span>LINK TUGAS</span>
        <TextField
          margin="dense"
          name="linkTugas"
          type="text"
          fullWidth
          value={dataToUpdate.linkTugas}
          onChange={handleChange} 
        />
        <span>TUGAS START</span>
        <TextField
          margin="dense"
          name="tugasStart"
          type="datetime-local"
          fullWidth
          value={dataToUpdate.tugasStart}
          onChange={handleChange} 
        />
        <span>TUGAS END</span>
        <TextField
          margin="dense"
          name="tugasEnd"
          type="datetime-local"
          fullWidth
          value={dataToUpdate.tugasEnd}
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

export default EditTugasModal;
