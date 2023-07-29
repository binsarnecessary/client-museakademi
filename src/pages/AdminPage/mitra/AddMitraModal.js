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


const AddMitraModal = ({ isOpen, onClose }) => {

  const [emailMitra, setEmailMitra] = useState("");
  const [nameMitra, setNameMitra] = useState("");
  const [instagramMitra, setInstagramMitra] = useState("");
  const [facebookMitra, setFacebookMitra] = useState("");
  const [waMitra, setWaMitra] = useState("");
  const [alamatMitra, setAlamatMitra] = useState("");
  const [courseTitle, setCourseTitle] = useState("");
  const [logoMitra, setLogoMitra] = useState("");
  const [headTagline, setHeadTagline] = useState("");
  const [paragraphText, setParagraphText] = useState("");
  const [slug, setSlug] = useState("");

  

  const handleEmailChange = (event) => {
    setEmailMitra(event.target.value);
  };

  const handleNameMitraChange = (event) => {
    setNameMitra(event.target.value);
  };

  const handleInstagramMitraChange = (event) => {
    setInstagramMitra(event.target.value);
  };

  const handleFacebookMitraChange = (event) => {
    setFacebookMitra(event.target.value);
  };

  const handleWaMitraChange = (event) => {
    setWaMitra(event.target.value);
  };

  const handleAlamatMitraChange = (event) => {
    setAlamatMitra(event.target.value);
  };

  const handleCourseTitleChange = (event) => {
    setCourseTitle(event.target.value);
  };

  const handleLogoMitraChange = (event) => {
    setLogoMitra(event.target.files[0]);
  };
  
  const handleHeadTaglineChange = (event) => {
    setHeadTagline(event.target.value);
  };

  const handleParagraphTextChange = (event) => {
    setParagraphText(event.target.value);
  };

  const handleSlugChange = (event) => {
    setSlug(event.target.value);
  };

  const handleAddMitra = () => {
    const formData = new FormData();
    formData.append("emailMitra", emailMitra);
    formData.append("nameMitra", nameMitra);
    formData.append("instagramMitra", instagramMitra);
    formData.append("facebookMitra", facebookMitra);
    formData.append("waMitra", waMitra);
    formData.append("alamatMitra", alamatMitra);
    formData.append("courseTitle", courseTitle);
    formData.append("logoMitra", logoMitra);
    formData.append("headTagline", headTagline);
    formData.append("paragraphText", paragraphText);


    axios
      .post("https://server-museakademi-production.up.railway.app/api/mitra", formData)

      .then((response) => {
        Swal.fire({
          title: 'Sukses!',
          text: 'Berhasil Menambahkan Mitra',
          icon: 'success',
          confirmButtonText: 'OK'
        })
     
        onClose();
        window.location.reload()
      })
      .catch((error) => {
        Swal.fire({
          title: 'Gagal!',
          text: 'Gagal Menambahkan Mitra',
          icon: 'error',
          confirmButtonText: 'OK'
        })
        console.error(error)
      });
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Add Mitra</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="emailMitra"
          label="Email"
          type="email"
          fullWidth
          value={emailMitra}
          onChange={handleEmailChange}
        />
        <TextField
          margin="dense"
          id="nameMitra"
          label="Nama Mitra"
          type="text"
          fullWidth
          value={nameMitra}
          onChange={handleNameMitraChange}
        />
        <TextField
          margin="dense"
          id="instagramMitra"
          label="Instagram"
          type="text"
          fullWidth
          value={instagramMitra}
          onChange={handleInstagramMitraChange}
        />
        <TextField
          margin="dense"
          id="facebookMitra"
          label="Facebook"
          type="text"
          fullWidth
          value={facebookMitra}
          onChange={handleFacebookMitraChange}
        />
        <TextField
          margin="dense"
          id="waMitra"
          label="Whatsapp"
          type="number"
          fullWidth
          value={waMitra}
          onChange={handleWaMitraChange}
        />
        <TextField
          margin="dense"
          id="alamatMitra"
          label="Alamat Mitra"
          type="text"
          fullWidth
          value={alamatMitra}
          onChange={handleAlamatMitraChange}
        />
        <TextField
          margin="dense"
          id="courseTimeEnd"
          label="Judul Kursus"
          type="text"
          fullWidth
          value={courseTitle}
          onChange={handleCourseTitleChange}
        />
        {/* <TextField
          margin="dense"
          id="coursePhoto"
          label="Thumbnail"
          type="file"
          fullWidth
          value={photo}
          onChange={handlePhotoChange}
        /> */}
        <TextField
          margin="dense"
          id="headTagline"
          label="Head Tagline"
          type="text"
          fullWidth
          value={headTagline}
          onChange={handleHeadTaglineChange}
        />
        <TextField
          margin="dense"
          id="paragraphText"
          label="Paragraph text"
          type="text"
          fullWidth
          value={paragraphText}
          onChange={handleParagraphTextChange}
        />
         <Box margin="dense">
          <InputLabel htmlFor="profile-picture-input">
            Logo Mitra
          </InputLabel>
          <input
            accept="image/*"
            id="profile-picture-input"
            multiple
            type="file"
            onChange={handleLogoMitraChange}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleAddMitra} color="secondary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddMitraModal;
