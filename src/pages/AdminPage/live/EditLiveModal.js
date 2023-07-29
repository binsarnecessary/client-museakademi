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


const EditLiveModal = ({ isOpen, onClose, match, idData }) => {


  const [dataToUpdate, setDataToUpdate] = useState({
    id: '',
    titleLivestreaming: '',
    namaChanel: '',
    thumbnailLivestreaming: null,
    liveStart: '',
    liveEnd: '',
    deskripsiLive:'',
    youtubeUrl: ''

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
        `https://server-museakademi-production.up.railway.app/api/livestreaming/${idData}`
      );

      const dataResp = dataReq.data;

      if (dataResp.status) {
        setDataToUpdate(dataResp.data.live);

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
    axios.patch(`https://server-museakademi-production.up.railway.app/api/livestreaming/${dataId}`, dataToUpdate)
      .then((response) => {
        Swal.fire({
          title: 'Sukses!',
          text: 'Berhasil Mengupdate Livestreaming',
          icon: 'success',
          confirmButtonText: 'OK'
        })
      })
      .catch((error) => {
        Swal.fire({
          title: 'Gagal!',
          text: 'Gagal Mengupdate Livestreaming',
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
      <DialogTitle>Update Livestreaming</DialogTitle>
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
        <span>Title Live</span>
        <TextField
          margin="dense"
          name="titleLivestreaming"
          type="text"
          fullWidth
          /* value={editedEmail} */
          value={dataToUpdate.titleLivestreaming}
          /* onChange={(e) => setEditedEmail(e.target.value)} */
          onChange={handleChange}
        />
        <span>Name Chanel</span>
        <TextField
          margin="dense"
          name="namaChanel"
          type="text"
          fullWidth
          value={dataToUpdate.namaChanel}
          onChange={handleChange} 
        />
        <span>Live Start</span>
        <TextField
          margin="dense"
          name="liveStart"
          type="date"
          fullWidth
          value={dataToUpdate.liveStart}
          onChange={handleChange} 
        />
        <span>Live End</span>
        <TextField
          margin="dense"
          name="liveEnd"
          type="date"
          fullWidth
          value={dataToUpdate.liveEnd}
          onChange={handleChange} 
        />
        <span>Deskripsi Live</span>
        <TextField
          margin="dense"
          name="deskripsiLive"
          type="text"
          fullWidth
          value={dataToUpdate.deskripsiLive}
          onChange={handleChange} 
        />
        <span>URL Youtube</span>
        <TextField
          margin="dense"
          name="youtubeUrl"
          type="text"
          fullWidth
          value={dataToUpdate.youtubeUrl}
          onChange={handleChange} 
        />
        <Box margin="dense">
          <InputLabel htmlFor="profile-picture-input">
           Thumbnail
          </InputLabel>
          <input
            accept="image/*"
            name="thumbnailLivestreaming"
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
        <Button type="submit" onClick={handleSubmit} color="secondary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditLiveModal;
