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


const AddLiveModal = ({ isOpen, onClose }) => {

  const [titleLivestreaming, setTitleLivestreaming] = useState("");
  const [namaChanel, setNamaChanel] = useState("");
  const [thumbnailLivestreaming, setThumbnailLivestreaming] = useState("");
  const [liveStart, setLiveStart] = useState("");
  const [liveEnd, setLiveEnd] = useState("");
  const [deskripsiLive, setDeskripsiLive] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  

  const handleTitleLivestreamingChange = (event) => {
    setTitleLivestreaming(event.target.value);
  };

  const handleNamaChanelChange = (event) => {
    setNamaChanel(event.target.value);
  };

  const handleThumbnailLivestreamingChange = (event) => {
    setThumbnailLivestreaming(event.target.files[0]);
  };

  const handleLiveStartChange = (event) => {
    setLiveStart(event.target.value);
  };

  const handleLiveEndChange = (event) => {
    setLiveEnd(event.target.value);
  };

  const handleDeskripsiLiveChange = (event) => {
    setDeskripsiLive(event.target.value);
  };

  const handleYoutubeUrlChange = (event) => {
    setYoutubeUrl(event.target.value);
  };


  const handleAddLivestreaming = () => {
    const formData = new FormData();
    formData.append("titleLivestreaming", titleLivestreaming);
    formData.append("namaChanel", namaChanel);
    formData.append("thumbnailLivestreaming", thumbnailLivestreaming);
    formData.append("liveStart", liveStart);
    formData.append("liveEnd", liveEnd);
    formData.append("deskripsiLive", deskripsiLive);
    formData.append("youtubeUrl", youtubeUrl);

    axios
      .post("https://server-museakademi-production.up.railway.app/api/livestreaming", formData)
      .then((response) => {
        Swal.fire({
          title: 'Sukses!',
          text: 'Berhasil Menambahkan Livestreaming',
          icon: 'success',
          confirmButtonText: 'OK'
        })
        console.error(response)
        onClose();
        window.location.reload()
      })
      .catch((error) => {
        Swal.fire({
          title: 'Gagal!',
          text: 'Gagal Menambahkan Livestreaming',
          icon: 'error',
          confirmButtonText: 'OK'
        })
      });
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Add Livestreaming</DialogTitle>
      <DialogContent>
        <span>Judul</span>
        <TextField
          autoFocus
          margin="dense"
          id="titleLivestreaming"
     
          type="text"
          fullWidth
          value={titleLivestreaming}
          onChange={handleTitleLivestreamingChange}
        />
        <span>Nama Chanel</span>
        <TextField
          margin="dense"
          id="namaChanel"
        
          type="text"
          fullWidth
          value={namaChanel}
          onChange={handleNamaChanelChange}
        />
        <span>LIve Mulai</span>
        <TextField
          margin="dense"
          id="liveStart"
     
          type="datetime-local"
          fullWidth
          value={liveStart}
          onChange={handleLiveStartChange}
        />
        <span>Live Berakhir</span>
        <TextField
          margin="dense"
          id="liveEnd"
    
          type="datetime-local"
          fullWidth
          value={liveEnd}
          onChange={handleLiveEndChange}
        />
        <span>Deskripsi</span>
        <TextField
          margin="dense"
          id="deskripsiLive"

          type="text"
          fullWidth
          value={deskripsiLive}
          onChange={handleDeskripsiLiveChange}
        />
        <span>Link</span>
        <TextField
          margin="dense"
          id="youtubeUrl"
   
          type="text"
          fullWidth
          value={youtubeUrl}
          onChange={handleYoutubeUrlChange}
        />
         <Box margin="dense">
          <InputLabel htmlFor="thumbnailLivestreaming">
            Image Thumbnail
          </InputLabel>
          <input
            accept="image/*"
            id="thumbnailLivestreaming"
            multiple
            type="file"
            onChange={handleThumbnailLivestreamingChange}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleAddLivestreaming} color="secondary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddLiveModal;
