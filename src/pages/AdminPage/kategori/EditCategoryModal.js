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


const EditUserModal = ({ isOpen, onClose, match, idData }) => {


  const [dataToUpdate, setDataToUpdate] = useState({
    id: '',
    categoryName: '',
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
        `https://server-museakademi-production.up.railway.app/api/category/${idData}`
      );

      const dataResp = dataReq.data;
      console.log(dataResp)
      if (dataResp.status) {
        setDataToUpdate(dataResp.data.Category);
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
    axios.patch(`https://server-museakademi-production.up.railway.app/api/category/${dataId}`, dataToUpdate)
      .then((response) => {
        Swal.fire({
          title: 'Sukses!',
          text: 'Berhasil Mengupdate Category',
          icon: 'success',
          confirmButtonText: 'OK'
        })
      })
      .catch((error) => {
        console.error('Error updating data:', error);
        // Handle error response here, e.g., show an error message.
      });
  };

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);


  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Update Category</DialogTitle>
      <DialogContent>
        <span>Category Name</span>
        <TextField
          autoFocus
          margin="dense"
          name="categoryName"
          type="text"
          fullWidth
          /* value={editedName} */
          value={dataToUpdate.categoryName}
          /* onChange={(e) => setEditedName(e.target.value)} */
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

export default EditUserModal;
