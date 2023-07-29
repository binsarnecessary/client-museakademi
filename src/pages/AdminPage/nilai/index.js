import React, { useState, useEffect } from "react";
import { Box, useTheme, Button } from "@mui/material";
import { useGetAllUserQuery } from "../../../store/apis/admin";
import Header from "../../../components/admin/Header";
import { DataGrid } from "@mui/x-data-grid";
import AddNilaiModal from "./AddNilaiModal";
import EditNilaiModal from "./EditNilaiModal";
import axios from "axios";
import Swal from "sweetalert2";
import { Link, useParams } from "react-router-dom";


const Nilai = () => {
  const theme = useTheme();
  // const { data, isLoading } = useGetAllUserQuery([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedIdEdit, setSelectedIdEdit] = useState(null)
  const [data, setData] = useState([]);



    const fetchData = async () => {
      try {
        //Check Valid Token From API
        const dataReq = await axios.get(
          "https://server-museakademi-production.up.railway.app/api/nilai"
        );

        const dataResp = dataReq.data;

        if (dataResp.status) {
          setData(dataResp.data.nilai);
        }
      } catch (err) {
        setData(false);
      }
    };


  useEffect(() => {
    
    fetchData();
  }, []);

  const handleDeleteClick = (itemId) => {
    axios.delete(`https://server-museakademi-production.up.railway.app/api/nilai/${itemId}`)
    .then(response=>{
      Swal.fire({
        title: 'Berhasil!',
        text: "Berhasil Menghapus Nilai",
        icon: 'success',
        confirmButtonText: 'OK'
      });
      fetchData()
    })
    .catch(error=>{console.log("Error Occured",error)})
 };


  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.3,
    },
    {
      field: "user_id",
      headerName: "ID USER",
      flex: 0.5,
    },
    {
      field: "tugas_id",
      headerName: "ID TUGAS",
      flex: 0.5,
    },
    {
      field: "skorNilai",
      headerName: "SKOR NILAI",
      flex: 0.5,
    },
    {
      field: "option",
      headerName: "OPTION",
      flex: 0.8,
      getActions:(params)=>{},
      renderCell: (params) => {
        const handleEditClick = (id) => {
          setIsEditModalOpen(true);
          setSelectedIdEdit(id)
        };
      
        const handleEditCloseModal = () => {
          setIsEditModalOpen(false);
        };

        return (
          <Box>
          <Box display="flex" alignItems="center">
            <Button
              variant="contained"
              color="primary"
              onClick={()=> handleEditClick (params.row.id)}
            >
              Edit
            </Button>
            <Box mx={1} />
            <Button
              variant="contained"
              color="error"
              onClick={()=>
                handleDeleteClick(params.row.id)
              }
            >
              Delete
            </Button>
          </Box>
          <EditNilaiModal isOpen={isEditModalOpen} onClose={handleEditCloseModal} idData={selectedIdEdit} />
          </Box>
        );
      },
    },
  ];

  const handleAddTugasClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Box
      m="1.5rem 2.5rem"
      sx={{
        "& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none",
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: theme.palette.background.alt,
          color: theme.palette.secondary[100],
          borderBottom: "none",
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: theme.palette.primary.light,
        },
        "& .MuiDataGrid-footerContainer": {
          backgroundColor: theme.palette.background.alt,
          color: theme.palette.secondary[100],
          borderTop: "none",
        },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
          color: `${theme.palette.secondary[200]} !important`,
        },
      }}
    >
      <Header title="NILAI" subtitle="Here List Of Nilai Museakademi" />
      <Box mt="40px" height="75vh">
        <DataGrid
          loading="Loading ..."
          getRowId={(row) => row.id}
          rows={data || []} // use empty array as a fallback
          columns={columns}
          components={{
            Toolbar: () => (
              <Box
                display="flex"
                alignItems="justify"
                justifyContent="space-between"
                width="100%"
                className="mb-4"
              >
                <Button
                  variant="contained"
                  className="primary"
                  onClick={handleAddTugasClick}
                >
                  Add Nilai
                </Button>
              </Box>
            ),
          }}
        />
      </Box>
      <AddNilaiModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </Box>
  );
};

export default Nilai;
