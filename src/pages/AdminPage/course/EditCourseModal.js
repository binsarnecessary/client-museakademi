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


const EditCourseModal = ({ isOpen, onClose, match, idData }) => {


  const [dataToUpdate, setDataToUpdate] = useState({
    id: '',
    courseTitle: '',
    courseDescription: '',
    courseStartDate: '',
    courseEndDate: '',
    coursePrice: '',
    courseStatus: '',
    coursePhoto: '',
    category_id: '',
    courseRating: '',
    nameMentor: '',
    user_id: '',
    mitra_id: '',
    isCoursePaid: '',


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
        `https://server-museakademi-production.up.railway.app/api/course/${idData}`
      );

      const dataResp = dataReq.data;

      if (dataResp.status) {
        setDataToUpdate(dataResp.data.course);

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
    axios.patch(`https://server-museakademi-production.up.railway.app/api/course/${dataId}`, dataToUpdate)
      .then((response) => {
        Swal.fire({
          title: 'Sukses!',
          text: 'Berhasil Mengupdate Course',
          icon: 'success',
          confirmButtonText: 'OK'
        })
      })
      .catch((error) => {
        Swal.fire({
          title: 'Gagal!',
          text: 'Gagal Mengupdate Course',
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
      <DialogTitle>Update Course</DialogTitle>
      <DialogContent>
        <span>Course Title</span>
        <TextField
          autoFocus
          margin="dense"
          name="courseTitle"
          type="text"
          fullWidth
          /* value={editedName} */
          value={dataToUpdate.courseTitle}
          /* onChange={(e) => setEditedName(e.target.value)} */
          onChange={handleChange}
        />
        <span>Course Description</span>
        <TextField
          margin="dense"
          name="courseDescription"
          type="text"
          fullWidth
          /* value={editedEmail} */
          value={dataToUpdate.courseDescription}
          /* onChange={(e) => setEditedEmail(e.target.value)} */
          onChange={handleChange}
        />
        <span>Start Date</span>
        <TextField
          margin="dense"
          name="courseStartDate"
          type="date"
          fullWidth
          value={dataToUpdate.courseStartDate}
          onChange={handleChange} 
        />
        <span>End Date</span>
        <TextField
          margin="dense"
          name="courseEndDate"
          type="date"
          fullWidth
          value={dataToUpdate.courseEndDate}
          onChange={handleChange} 
        />
        <span>Price</span>
        <TextField
          margin="dense"
          name="coursePrice"
          type="number"
          fullWidth
          value={dataToUpdate.coursePrice}
          onChange={handleChange} 
        />
        <span>ID Category</span>
        <TextField
          margin="dense"
          name="category_id"
          type="number"
          fullWidth
          value={dataToUpdate.category_id}
          onChange={handleChange} 
        />
        <span>ID User (Mentor)</span>
        <TextField
          margin="dense"
          name="user_id"
          type="number"
          fullWidth
          value={dataToUpdate.user_id}
          onChange={handleChange} 
        />
        <span>ID Mitra</span>
        <TextField
          margin="dense"
          name="mitra_id"
          type="number"
          fullWidth
          value={dataToUpdate.mitra_id}
          onChange={handleChange} 
        />
        <span>Course Rating</span>
        <TextField
          margin="dense"
          name="courseRating"
          type="number"
          fullWidth
          value={dataToUpdate.courseRating}
          onChange={handleChange} 
        />
        <Box margin="dense">
          <InputLabel htmlFor="profile-picture-input">
            Course Photo
          </InputLabel>
          <input
            accept="image/*"
            name="profile-picture-input"
            multiple
            type="file"
            onChange={handleChange} 
          />
        </Box>
        <FormControl fullWidth margin="dense">
          <span>is Course Paid</span>
          <Select
            name="isCoursePaid"
            value={dataToUpdate.isCoursePaid}
            onChange={handleChange} 
          >
            <MenuItem value="true">true</MenuItem>
            <MenuItem value="false">false</MenuItem>
          </Select>
        </FormControl>
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

export default EditCourseModal;
