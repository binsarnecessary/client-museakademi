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


const AddCategoryModal = ({ isOpen, onClose }) => {

  const [categoryName, setCategoryName] = useState("");

  const handleCategoryNameChange = (event) => {
    setCategoryName(event.target.value);
  };

  const handleAddCategory = () => {
    const formData = new FormData();
    formData.append("categoryName", categoryName);

    axios
      .post("https://server-museakademi-production.up.railway.app/api/category", formData)
      .then((response) => {
        Swal.fire({
          title: 'Sukses!',
          text: 'Berhasil Menambahkan Kategori',
          icon: 'success',
          confirmButtonText: 'OK'
        })
        onClose();
        window.location.reload()
      })
      .catch((error) => {
        console.log("Error adding livestreaming:", error);
      });
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Add Category</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="titleLivestreaming"
          label="Judul"
          type="text"
          fullWidth
          value={categoryName}
          onChange={handleCategoryNameChange}
        />
   </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleAddCategory} color="secondary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddCategoryModal;
