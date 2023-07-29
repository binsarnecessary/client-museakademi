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


const EditSertifModal = ({ isOpen, onClose, match, idData }) => {
/*   const [editing, setEditing] = useState(false);
  const [dataToUpdate, setDataToUpdate] = useState({
    id: 5,
    email: '',
    password: '',
    name: '',
    phone: '',
    addres: '',
    role: '',
    profilePicture: null,
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDataToUpdate((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
 */

/* 
  const fetchData = async () => {
    try {
      //Check Valid Token From API
      const dataReq = await axios.get(
        `https://server-museakademi-production.up.railway.app/api/users/${userId}`
      );

      const dataResp = dataReq.data.user;

      
        setDataToUpdate(dataResp);
        console.log(setDataToUpdate)

    } catch (err) {
      setDataToUpdate(false);
    }
  };
 */







//UPDATE FORM
/* 
const handleSubmit = (event) => {
  event.preventDefault();
  // Assuming you have a valid ID for the data to update
  const dataId = dataToUpdate.id;
  // Perform the Axios PUT/PATCH request to update the data
  axios.patch(`https://server-museakademi-production.up.railway.app/api/users/${dataId}`, dataToUpdate)
    .then((response) => {
      Swal.fire({
        title: 'Sukses!',
        text: 'Berhasil Mengupdate Profile',
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
}, []); */



  const {userId} = useParams();
  const [data, setData] = useState("");
  const [user_id, setUserId] = useState("");
  const [nameParticipant, setNameParticipant] = useState("");
  const [course_id, setCourseId] = useState("");
  const [nameCourse, setNameCourse] = useState("");
  const [linkSertifikat, setLinkSertifikat] = useState("");

  const [dataToUpdate, setDataToUpdate] = useState({
    id: '',
    user_id: '',
    nameParticipant: '',
    nameCourse: '',
    course_id: '',
    linkSertifikat: ''
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
        `https://server-museakademi-production.up.railway.app/api/sertifikat/${idData}`
      );
        console.log(idData)
      const dataResp = dataReq.data;
   
      if (dataResp.status) {
        setDataToUpdate(dataResp.data.sertifikat);
        console.error(setData)
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
    axios.patch(`https://server-museakademi-production.up.railway.app/api/sertifikat/${dataId}`, dataToUpdate)
      .then((response) => {
        Swal.fire({
          title: 'Sukses!',
          text: 'Berhasil Mengupdate Sertifikat',
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




/*   const [item, setItem] = useState({});
  const [editedName, setEditedName] = useState('');
  const [editedEmail, setEditedEmail] = useState('');
  const {id} = useParams();

  const fetchItem = async () => {
    try {
      const response = await axios.get(`https://server-museakademi-production.up.railway.app/api/users/${idData}`);
      setItem(response.data.user)
    } catch (error) {
      console.log('Error fetching item:', error);
    }
  };
  fetchItem()
  item.map(data=>{console.log(data.name)})
  useEffect(() => {
    // Fetch the data for the specific item by ID when the component mounts
    if(isOpen){
      fetchItem()
    }
  }, {});

  const handleSave = async () => {
    try {
      const updatedItem = {
        id: item.id,
        name: editedName,
        email: editedEmail,
      };

      // Make a PATCH request to update the data by ID
      await axios.patch(`https://server-museakademi-production.up.railway.app/api/users${item.id}`, updatedItem);

      // Optionally, you can redirect to another page or show a success message
      console.log('Item updated successfully!');
    } catch (error) {
      console.error('Error updating item:', error);
    }
  }; */

  return (
    <form onClick={handleSubmit}>
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>Update Sertifikat</DialogTitle>
      
      <DialogContent>
        
        <span> User Id</span>
        <TextField
          autoFocus
          margin="dense"
          name="user_id"
      
          type="number"
          fullWidth
          /* value={editedName} */
          value={dataToUpdate.user_id}
          /* onChange={(e) => setEditedName(e.target.value)} */
          onChange={handleChange}
        />
        <span>Name Participant</span>
        <TextField
          margin="dense"
          name="nameParticipant"
          
          type="text"
          fullWidth
          /* value={editedEmail} */
          value={dataToUpdate.nameParticipant}
          /* onChange={(e) => setEditedEmail(e.target.value)} */
          onChange={handleChange}
        />
        <span>Course Id</span>
        <TextField
          margin="dense"
          name="course_id"
        
          type="text"
          fullWidth
           value={dataToUpdate.course_id}
          onChange={handleChange} 
        />
        <span>Name Course</span>
        <TextField
          margin="dense"
          name="nameCourse"
    
          type="text"
          fullWidth
          value={dataToUpdate.nameCourse}
          onChange={handleChange} 
        />
        <span>Link Sertifikat</span>
        <TextField
          margin="dense"
          name="linkSertifikat"

          type="text"
          fullWidth
          value={dataToUpdate.linkSertifikat}
          onChange={handleChange} 
        />
          
      </DialogContent>
      
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button color="secondary">
          Edit
        </Button>
      </DialogActions>
    
    </Dialog>
    </form>
  );
};

export default EditSertifModal;
