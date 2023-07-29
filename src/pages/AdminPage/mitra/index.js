import React, { useState, useEffect } from "react";
import { Box, useTheme, Button } from "@mui/material";
import { useGetGeographyQuery } from "../../../store/apis/admin";
import Header from "../../../components/admin/Header";
import { DataGrid } from "@mui/x-data-grid";
import AddMitraModal from "./AddMitraModal";
import EditMitraModal from "./EditMitraModal";
import axios from "axios";
import Swal from "sweetalert2";

const Mitra = () => {
  const theme = useTheme();
  // const { data, isLoading } = useGetAllUserQuery([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIdEdit, setSelectedIdEdit] = useState(null)
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [data, setData] = useState([]);


    const fetchData = async () => {
      try {
        //Check Valid Token From API
        const dataReq = await axios.get(
          "https://server-museakademi-production.up.railway.app/api/mitra"
        );

        const dataResp = dataReq.data;

        if (dataResp.status) {
          setData(dataResp.data.Mitra);
        }
      } catch (err) {
        setData(false);
      }
    };

  useEffect(() => {
    
    fetchData();
  }, []);

  const handleDeleteClick = (itemId) => {
    axios.delete(`https://server-museakademi-production.up.railway.app/api/mitra/${itemId}`)
    .then(response=>{
      Swal.fire({
        title: 'Berhasil!',
        text: "Berhasil Menghapus Mitra",
        icon: 'success',
        confirmButtonText: 'OK'
      });
      fetchData()
    })
    .catch(error=>{
      Swal.fire({
        title: 'Gagal!',
        text: "Gagal Menghapus Mitra",
        icon: 'error',
        confirmButtonText: 'OK'
    })})
 };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.3,
    },
    {
      field: "emailMitra",
      headerName: "Email",
      flex: 0.5,
    },
    {
      field: "nameMitra",
      headerName: "Nama",
      flex: 0.5,
    },
    {
      field: "instagramMitra",
      headerName: "Instagram",
      flex: 0.7,
    },
    {
      field: "facebookMitra",
      headerName: "Facebook",
      flex: 0.5,
    },
    {
      field: "waMitra",
      headerName: "Whatsapp",
      flex: 0.5,
    },
    {
      field: "alamatMitra",
      headerName: "Alamat",
      flex: 0.5,
    },
    {
      field: "courseTitle",
      headerName: "Kursus",
      flex: 0.5,
    },
    {
      field: "logoMitra",
      headerName: "Logo",
      flex: 0.5,
    },
    {
      field: "headTagline",
      headerName: "Tagline",
      flex: 0.5,
    },
    {
      field: "paragraphText",
      headerName: "Text",
      flex: 0.5,
    },
    {
      field: "slug",
      headerName: "Slug",
      flex: 0.5,
    },
    {
      field: "option",
      headerName: "Option",
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
          <EditMitraModal isOpen={isEditModalOpen} onClose={handleEditCloseModal} idData={selectedIdEdit} />
          </Box>
        );
      },
    },
  ];

  const handleAddMitraClick = () => {
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
      <Header title="MITRA" subtitle="Here List Of Mitra Muse Akademi" />
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
                  onClick={handleAddMitraClick}
                >
                  Add Mitra
                </Button>
              </Box>
            ),
          }}
        />
      </Box>
      <AddMitraModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </Box>
  );
};

export default Mitra;
