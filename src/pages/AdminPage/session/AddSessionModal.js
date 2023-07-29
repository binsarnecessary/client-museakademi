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


const AddSessionModal = ({ isOpen, onClose }) => {

  const [course_id, setCourseId] = useState("");
  const [nameSession, setNameSession] = useState("");
  const [linkvideo, setLinkVideo] = useState("");
  const [linkpdf, setLinkPdf] = useState("");
  const [linkppt, setLinkPpt] = useState("");
  const [linkzoom, setLinkZoom] = useState("");

  const handleCourseIdChange = (event) => {
    setCourseId(event.target.value);
  };

  const handleNameSessionChange = (event) => {
    setNameSession(event.target.value);
  };

  const handleLinkVideoChange = (event) => {
    setLinkVideo(event.target.value);
  };

  const handleLinkPdfChange = (event) => {
    setLinkPdf(event.target.value);
  };

  const handleLinkPptChange = (event) => {
    setLinkPpt(event.target.value);
  };

  const handleLinkZoomChange = (event) => {
    setLinkZoom(event.target.value);
  };

  const handleAddSession = () => {
    const formData = new FormData();
    formData.append("course_id", course_id);
    formData.append("nameSession", nameSession);
    formData.append("linkvideo", linkvideo);
    formData.append("linkpdf", linkpdf);
    formData.append("linkppt", linkppt);
    formData.append("linkzoom", linkzoom);

    axios
      .post("https://server-museakademi-production.up.railway.app/api/session", formData)
      .then((response) => {
        Swal.fire({
          title: 'Sukses!',
          text: 'Berhasil Menambahkan Sesi',
          icon: 'success',
          confirmButtonText: 'OK'
        })
        onClose();
        window.location.reload()
      })
      .catch((error) => {
        Swal.fire({
          title: 'Sukses!',
          text: 'Gagal Menambahkan Sesi',
          icon: 'error',
          confirmButtonText: 'OK'
        })
      });
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Add Session</DialogTitle>
      <DialogContent>
        <span>Course Id</span>
        <TextField
          autoFocus
          margin="dense"
          id="course_id"
          type="text"
          fullWidth
          value={course_id}
          onChange={handleCourseIdChange}
        />
        <span>Name Session</span>
        <TextField
          autoFocus
          margin="dense"
          id="nameSession"
          type="text"
          fullWidth
          value={nameSession}
          onChange={handleNameSessionChange}
        />
        <span>Link Video</span>
        <TextField
          margin="dense"
          id="linkvideo"
          type="text"
          fullWidth
          value={linkvideo}
          onChange={handleLinkVideoChange}
        />
        <span>Link PDF Modul</span>
        <TextField
          margin="dense"
          id="linkpdf"
          type="text"
          fullWidth
          value={linkpdf}
          onChange={handleLinkPdfChange}
        />
        <span>Link PPT Modul</span>
        <TextField
          margin="dense"
          id="linkppt"
          type="text"
          fullWidth
          value={linkppt}
          onChange={handleLinkPptChange}
        />
        <span>Link Zoom</span>
        <TextField
          margin="dense"
          id="linkzoom"
          type="text"
          fullWidth
          value={linkzoom}
          onChange={handleLinkZoomChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleAddSession} color="secondary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddSessionModal;
