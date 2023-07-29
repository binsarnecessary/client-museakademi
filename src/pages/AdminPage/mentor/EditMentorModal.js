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


const EditMentorModal = ({ isOpen, onClose, match, idData }) => {


  const [dataToUpdate, setDataToUpdate] = useState([]);

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
        `https://server-museakademi-production.up.railway.app/api/mentor/${idData}`
      );
   

      const dataResp = dataReq.data;
     
      if (dataResp.status) {
        setDataToUpdate(dataResp.data.posts);

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

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Assuming you have a valid ID for the data to update
  //   const dataId = dataToUpdate.id;

  //   // Perform the Axios PUT/PATCH request to update the data
  //   axios.patch(`https://server-museakademi-production.up.railway.app/api/mentor/${dataId}`, dataToUpdate)
  //     .then((response) => {
  //       Swal.fire({
  //         title: 'Sukses!',
  //         text: 'Berhasil Mengupdate mentor',
  //         icon: 'success',
  //         confirmButtonText: 'OK'
  //       })
  //     })
  //     .catch((error) => {
  //       console.error('Error updating data:', error);
  //       // Handle error response here, e.g., show an error message.
  //     });
  // };

  // useEffect(() => {
  //   // Fetch data when the component mounts
  //   fetchData();
  // }, []);


  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Update User</DialogTitle>
      <DialogContent>
        <span>User ID</span>
        <TextField
          autoFocus
          margin="dense"
          name="user_id"
          type="number"
          fullWidth
          value={dataToUpdate.user_id}
          // onChange={handleChange}
        />
        <span>Skill</span>
        <TextField
          margin="dense"
          name="skill"
          type="text"
          fullWidth

          value={dataToUpdate.skill}
  
          // onChange={handleChange}
        />
        <span>Nomor KTP</span>
        <TextField
          margin="dense"
          name="nomorKTP"
          type="number"
          fullWidth
          value={dataToUpdate.nomorKTP}
          // onChange={handleChange} 
        />
        <span>Scan KTP</span>
        <TextField
          margin="dense"
          name="scanKTP"
          type="text"
          fullWidth
          value={dataToUpdate.scanKTP}
          // onChange={handleChange} 
        />
        <span>File CV</span>
        <TextField
          margin="dense"
          name="fileCV"
          type="text"
          fullWidth
          value={dataToUpdate.fileCV}
          // onChange={handleChange} 
        />
        <span>Link Video</span>
        <TextField
          margin="dense"
          name="linkVideo"
          type="text"
          fullWidth
          value={dataToUpdate.linkVideo}
          // onChange={handleChange} 
        />
        <span>About Me</span>
        <TextField
          margin="dense"
          name="aboutMe"
          type="text"
          fullWidth
          value={dataToUpdate.aboutMe}
          // onChange={handleChange} 
        />
        
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Close
        </Button>
        {/* <Button type="submit" onClick={handleSubmit} color="secondary">
          Save
        </Button> */}
      </DialogActions>
    </Dialog>
  );
};

export default EditMentorModal;
