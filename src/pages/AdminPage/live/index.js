import React, { useState, useEffect } from "react";
import { Box, useTheme, Button } from "@mui/material";
import Header from "../../../components/admin/Header";
import OverviewChart from "../../../components/admin/OverviewChart";
import { DataGrid } from "@mui/x-data-grid";
import AddLiveModal from "./AddLiveModal";
import EditLiveModal from "./EditLiveModal";
import axios from "axios";
import Swal from "sweetalert2";

const Live = () => {

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
          "https://server-museakademi-production.up.railway.app/api/livestreaming"
        );

        const dataResp = dataReq.data;

        if (dataResp.status) {
          setData(dataResp.data.live);
        }
      } catch (err) {
        setData(false);
      }
    };

    useEffect(() => {
    fetchData();
  }, []);

  const handleDeleteClick = (itemId) => {
    axios.delete(`https://server-museakademi-production.up.railway.app/api/livestreaming/${itemId}`)
    .then(response=>{
      Swal.fire({
        title: 'Berhasil!',
        text: "Berhasil Menghapus Live",
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
      flex: 0.1,
    },
    {
      field: "titleLivestreaming",
      headerName: "Judul",
      flex: 0.5,
    },
    {
      field: "namaChanel",
      headerName: "Nama Chanel",
      flex: 0.5,
    },
    {
      field: "thumbnailLivestreaming",
      headerName: "Thumbnail",
      flex: 0.5,
    },
    {
      field: "liveStart",
      headerName: "Live Dimulai",
      flex: 0.5,
    },
    {
      field: "liveEnd",
      headerName: "Live Berakhir",
      flex: 0.3,
    },
    {
      field: "deskripsiLive",
      headerName: "Deskripsi",
      flex: 0.3,
    },
    {
      field: "youtubeUrl",
      headerName: "Url",
      flex: 0.3,
    },
    
    {
      field: "option",
      headerName: "Opsi",
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
            <EditLiveModal isOpen={isEditModalOpen} onClose={handleEditCloseModal} idData={selectedIdEdit} />
          </Box>
        );
      },
    },
  ];

  const handleAddLiveClick = () => {
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
      <Header title="LIVESTREAMING" subtitle="Here List Of Livestreaming Muse Akademi" />
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
                  onClick={handleAddLiveClick}
                >
                  Add Livestreaming
                </Button>
              </Box>
            ),
          }}
        />
      </Box>
      <AddLiveModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </Box>
  );

};

export default Live;
