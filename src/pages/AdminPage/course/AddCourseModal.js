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


const formatRupiah = (number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(number);
}


  

const AddCourseModal = ({ isOpen, onClose }) => {

  const [isCoursePaid, setIsCoursePaid] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [price, setPrice] = useState([0]);
  const [status, setStatus] = useState("");
  const [timeStart, setTimeStart] = useState("");
  const [timeEnd, setTimeEnd] = useState("");
  const [photo, setPhoto] = useState("");
  const [rating, setRating] = useState("");
  const [deadline, setDeadline] = useState("");
  const [mentor, setMentor] = useState("");
  const [category_id, setCategoryId] = useState("");
  const [slugMitra, setSlugMitra] = useState("");
  
  const handleIsCoursePaidChange = (event) => {
    setIsCoursePaid(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleTimeStartChange = (event) => {
    setTimeStart(event.target.value);
  };

  const handleTimeEndChange = (event) => {
    setTimeEnd(event.target.value);
  };
  
  const handlePhotoChange = (event) => {
    setPhoto(event.target.files[0]);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleDeadlineChange = (event) => {
    setDeadline(event.target.value);
  };

  const handleMentorChange = (event) => {
    setMentor(event.target.value);
  };

  const handleCategoryIdChange = (event) => {
    setCategoryId(event.target.value);
  };

  const handleSlugMitraChange = (event) => {
    setSlugMitra(event.target.value);
  };

  const formattedPrice = formatRupiah(price);

  const handleAddCourse = () => {
    const formData = new FormData();
    formData.append("isCoursePaid", isCoursePaid);
    formData.append("courseTitle", title);
    formData.append("courseDescription", description);
    formData.append("courseStartDate", startDate);
    formData.append("courseEndDate", endDate);
    formData.append("coursePrice", price);
    formData.append("courseStatus", status);
    formData.append("courseTimeStart", timeStart);
    formData.append("courseTimeEnd", timeEnd);
    formData.append("coursePhoto", photo);
    formData.append("courseRating", rating);
    formData.append("courseDeadline", deadline);
    formData.append("namaMentor", mentor);
    formData.append("category_id", category_id);
    formData.append("slugMitra", slugMitra);


    axios
      .post("https://server-museakademi-production.up.railway.app/api/course", formData)
      .then((response) => {
        Swal.fire({
          title: 'Sukses!',
          text: 'Berhasil Menambahkan Kursus',
          icon: 'success',
          confirmButtonText: 'OK'
        })
        onClose();
        window.location.reload()
      })
      .catch((error) => {
        console.log("Error adding course:", error);
      });
  };

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Add Course</DialogTitle>
      <DialogContent>
        <span>Judul</span>
        <TextField
          autoFocus
          margin="dense"
          id="courseTitle"
       
          type="text"
          fullWidth
          value={title}
          onChange={handleTitleChange}
        />
        <span>Deskripsi</span>
        <TextField
          margin="dense"
          id="courseDescription"
      
          type="text"
          fullWidth
          value={description}
          onChange={handleDescriptionChange}
        />
        <span>Tanggal Mulai</span>
        <TextField
          margin="dense"
          id="courseStartDate"
        
          type="date"
          fullWidth
          value={startDate}
          onChange={handleStartDateChange}
        />
        <span>Tanggal Berakhir</span>
        <TextField
          margin="dense"
          id="courseEndDate"
   
          type="date"
          fullWidth
          value={endDate}
          onChange={handleEndDateChange}
        />
        <span>Harga</span>
        <TextField
          margin="dense"
          id="coursePrice"
        
          type="number"
          fullWidth
          value={price}
          onChange={handlePriceChange}
        />
        <span>Jam Mulai</span>
        <TextField
          margin="dense"
          id="courseTimeStart"
   
          type="time"
          fullWidth
          value={timeStart}
          onChange={handleTimeStartChange}
        />
        <span>Jam Berakhir</span>
        <TextField
          margin="dense"
          id="courseTimeEnd"
        
          type="time"
          fullWidth
          value={timeEnd}
          onChange={handleTimeEndChange}
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
        <span>Rating</span>
        <TextField
          margin="dense"
          id="courseRating"
    
          type="number"
          fullWidth
          value={rating}
          onChange={handleRatingChange}
        />
        <span>Nama Mentor</span>
        <TextField
          margin="dense"
          id="namaMentor"

          type="text"
          fullWidth
          value={mentor}
          onChange={handleMentorChange}
        />
        <span>ID Category</span>
        <TextField
          margin="dense"
          id="namaMentor"
       
          type="text"
          fullWidth
          value={category_id}
          onChange={handleCategoryIdChange}
        />

        <FormControl fullWidth margin="dense">
          <InputLabel id="role-select-label">Status</InputLabel>
          <Select
            labelId="role-select-label"
            id="role-select"
            value={status}
            onChange={handleStatusChange}
          >
            <MenuItem value="aktif">Aktif</MenuItem>
            <MenuItem value="tidakAktif">Tidak Aktif</MenuItem>
            <MenuItem value="tidakAktif">Akan Datang</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="dense">
          <InputLabel id="role-select-label">Is Course Paid</InputLabel>
          <Select
            labelId="role-select-label"
            id="role-select"
            value={isCoursePaid}
            onChange={handleIsCoursePaidChange}
          >
            <MenuItem value="true">true</MenuItem>
            <MenuItem value="false">false</MenuItem>
          </Select>
        </FormControl>
         <Box margin="dense">
          <InputLabel htmlFor="profile-picture-input">
            Image Thumbnail
          </InputLabel>
          <input
            accept="image/*"
            id="profile-picture-input"
            multiple
            type="file"
            onChange={handlePhotoChange}
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleAddCourse} color="secondary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddCourseModal;
