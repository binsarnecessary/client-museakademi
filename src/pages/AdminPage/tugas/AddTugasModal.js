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


const AddTugasModal = ({ isOpen, onClose }) => {

  const [user_id, setUserId] = useState("");
  const [course_id, setCourseId] = useState("");
  const [judulTugas, setJudulTugas] = useState("");
  const [petunjukPengerjaan, setPetunjukPengerjaan] = useState("");
  const [linkTugas, setLinkTugas] = useState("");
  const [tugasStart, setTugasStart] = useState("");
  const [tugasEnd, setTugasEnd] = useState("");
  

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };
  const handleCourseIdChange = (event) => {
    setCourseId(event.target.value);
  };

  const handleJudulTugasChange = (event) => {
    setJudulTugas(event.target.value);
  };

  const handlePetunjukPengerjaanChange = (event) => {
    setPetunjukPengerjaan(event.target.value);
  };

  const handleLinkTugasChange = (event) => {
    setLinkTugas(event.target.value);
  };

  const handleTugasStartChange = (event) => {
    setTugasStart(event.target.value);
  };

  const handleTugasEndChange = (event) => {
    setTugasEnd(event.target.value);
  };

  const handleAddTugas = () => {
    const formData = new FormData();
    formData.append("user_id", user_id);
    formData.append("course_id", course_id);
    formData.append("judulTugas", judulTugas);
    formData.append("petunjukPengerjaan", petunjukPengerjaan);
    formData.append("linkTugas", linkTugas);
    formData.append("tugasStart", tugasStart);
    formData.append("tugasEnd", handleTugasEndChange);

    axios
      .post("https://server-museakademi-production.up.railway.app/api/tugas", formData)
      .then((response) => {
        Swal.fire({
          title: 'Sukses!',
          text: 'Berhasil Menambahkan Tugas',
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
      <DialogTitle>Add Tugas</DialogTitle>
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
          id="course_id"
          label="Course Id"
          type="number"
          fullWidth
          value={course_id}
          onChange={handleCourseIdChange}
        />
        <TextField
          margin="dense"
          id="judulTugas"
          label="judul Tugas"
          type="text"
          fullWidth
          value={judulTugas}
          onChange={handleJudulTugasChange}
        />
        <TextField
          margin="dense"
          id="petunjukPengerjaan"
          label="Petunjuk Pengerjaan"
          type="text"
          fullWidth
          value={petunjukPengerjaan}
          onChange={handlePetunjukPengerjaanChange}
        />
        <TextField
          margin="dense"
          id="linkTugas"
          label="Link Tugas"
          type="text"
          fullWidth
          value={linkTugas}
          onChange={handleLinkTugasChange}
        />
        <TextField
          margin="dense"
          id="tugasStart"
          label="Tugas Start"
          type="date"
          fullWidth
          value={tugasStart}
          onChange={handleTugasStartChange}
        />
        <TextField
          margin="dense"
          id="tugasEnd"
          label="Tugas End"
          type="date"
          fullWidth
          value={tugasEnd}
          onChange={handleTugasEndChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleAddTugas} color="secondary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTugasModal;
