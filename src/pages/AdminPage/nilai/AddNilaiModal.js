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


const AddNilaiModal = ({ isOpen, onClose }) => {

  const [user_id, setUserId] = useState("");
  const [tugas_id, setTugasId] = useState("");
  const [skorNilai, setSkorNilai] = useState("");
  

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };
  const handleTugasIdChange = (event) => {
    setTugasId(event.target.value);
  };

  const handleSkorNilaiChange = (event) => {
    setSkorNilai(event.target.value);
  };

  const handleAddNilai = () => {
    const formData = new FormData();
    formData.append("user_id", user_id);
    formData.append("tugas_id", tugas_id);
    formData.append("skorNilai", skorNilai);


    axios
      .post("https://server-museakademi-production.up.railway.app/api/nilai", formData)
      .then((response) => {
        Swal.fire({
          title: 'Sukses!',
          text: 'Berhasil Menambahkan Nilai',
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
      <DialogTitle>Add Nilai</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="user_id"
          label="User Id"
          type="number"
          fullWidth
          value={user_id}
          onChange={handleUserIdChange}
        />
        <TextField
          autoFocus
          margin="dense"
          id="tugas_id"
          label="Tugas Id"
          type="number"
          fullWidth
          value={tugas_id}
          onChange={handleTugasIdChange}
        />
        <TextField
          margin="dense"
          id="judulTugas"
          label="Skor Nilai"
          type="number"
          fullWidth
          value={skorNilai}
          onChange={handleSkorNilaiChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleAddNilai} color="secondary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddNilaiModal;
