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


const AddSertifikatModal = ({ isOpen, onClose }) => {


  const [user_id, setUserId] = useState("");
  const [nameParticipant, setNameParticipant] = useState("");
  const [course_id, setCourseId] = useState("");
  const [nameCourse, setNameCourse] = useState("");
  const [linkSertifikat, setLinkSertifikat] = useState("");


  
  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handleNameParticipantChange = (event) => {
    setNameParticipant(event.target.value);
  };

  const handleCourseIdChange = (event) => {
    setCourseId(event.target.value);
  };

  const handleNameCourseChange = (event) => {
    setNameCourse(event.target.value);
  };

  const handleLinkSertifikatChange = (event) => {
    setLinkSertifikat(event.target.value);
  };

  const handleAddSertifikat = () => {
    const formData = new FormData();

    formData.append("user_id", user_id);
    formData.append("nameParticipant", nameParticipant);
    formData.append("course_id", course_id);
    formData.append("nameCourse", nameCourse);
    formData.append("linkSertifikat", linkSertifikat);

    axios
      .post("https://server-museakademi-production.up.railway.app/api/sertifikat", formData)
      .then((response) => {
        Swal.fire({
          title: 'Sukses!',
          text: 'Berhasil Menambahkan Sertifikat',
          icon: 'success',
          confirmButtonText: 'OK'
        })
        onClose();
        window.location.reload()
      })
      .catch((error) => {
        Swal.fire({
          title: 'Gagal!',
          text: 'Gagal Menambahkan Sertifikat',
          icon: 'error',
          confirmButtonText: 'OK'
        })
      });
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Add User</DialogTitle>
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
          margin="dense"
          id="nameParticipant"
          label="Name Participant"
          type="text"
          fullWidth
          value={nameParticipant}
          onChange={handleNameParticipantChange}
        />
        <TextField
          margin="dense"
          id="course_id"
          label="Id Course"
          type="number"
          fullWidth
          value={course_id}
          onChange={handleCourseIdChange}
        />
        <TextField
          margin="dense"
          id="nameCourse"
          label="Name Course"
          type="text"
          fullWidth
          value={nameCourse}
          onChange={handleNameCourseChange}
        />
        <TextField
          margin="dense"
          id="linkSertifikat"
          label="Link Sertifikat"
          type="text"
          fullWidth
          value={linkSertifikat}
          onChange={handleLinkSertifikatChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleAddSertifikat} color="secondary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddSertifikatModal;
