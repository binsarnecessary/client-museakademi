import React, { useState, useEffect } from "react";
import { Box, useTheme, Button } from "@mui/material";
import Header from "../../../components/admin/Header";
import OverviewChart from "../../../components/admin/OverviewChart";
import { DataGrid } from "@mui/x-data-grid";
import AddCourseModal from "./AddCourseModal";
import EditCourseModal from "./EditCourseModal";
import axios from "axios";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

const Course = () => {
  /* const [view, setView] = useState("units");

  return (
    <Box m="1.5rem 2.5rem">
      <Header
        title="OVERVIEW"
        subtitle="Overview of general revenue and profit"
      />
      <Box height="75vh">
        <FormControl sx={{ mt: "1rem" }}>
          <InputLabel>View</InputLabel>
          <Select
            value={view}
            label="View"
            onChange={(e) => setView(e.target.value)}
          >
            <MenuItem value="sales">Sales</MenuItem>
            <MenuItem value="units">Units</MenuItem>
          </Select>
        </FormControl>
        <OverviewChart view={view} />
      </Box>
    </Box>
  ); */

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
          "https://server-museakademi-production.up.railway.app/api/course"
        );

        const dataResp = dataReq.data;

        if (dataResp.status) {
          setData(dataResp.data.course);
        }
      } catch (err) {
        setData(false);
      }
    };


  useEffect(() => {
    
    fetchData();
  }, []);

  const handleDeleteClick = (itemId) => {
    axios.delete(`https://server-museakademi-production.up.railway.app/api/course/${itemId}`)
    .then(response=>{
      Swal.fire({
        title: 'Berhasil!',
        text: "Berhasil Menghapus Course",
        icon: 'success',
        confirmButtonText: 'OK'
      });
      fetchData()
    })
    .catch(error=>{
      Swal.fire({
        title: 'Gagal!',
        text: "Gagal Menghapus Course",
        icon: 'error',
        confirmButtonText: 'OK'
      });
    })
 };

 // EDIT COURSEEEEEEEEEEEEE

 const [dataEdit, setDataEdit] = useState([]);
 const {itemId} = useParams();

 const editDataId = async () => {
  try {
    //Check Valid Token From API
    const dataReq = await axios.get(
      `https://server-museakademi-production.up.railway.app/api/course/${itemId}`
    );

    const dataResp = dataReq.data;

    if (dataResp.status) {
      setDataEdit(dataResp.data.course);
    }
  } catch (err) {
    setDataEdit(false);
  }
};

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.1,
    },
    {
      field: "courseTitle",
      headerName: "Judul",
      flex: 0.5,
    },
    {
      field: "courseDescription",
      headerName: "Deskripsi",
      flex: 0.5,
    },
    {
      field: "courseStartDate",
      headerName: "Tanggal Mulai",
      flex: 0.5,
    },
    {
      field: "courseEndDate",
      headerName: "Tanggal Berakhir",
      flex: 0.5,
    },
    {
      field: "coursePrice",
      headerName: "Harga",
      flex: 0.3,
    },
    {
      field: "courseStatus",
      headerName: "Status",
      flex: 0.3,
    },
    {
      field: "coursePhoto",
      headerName: "Thumbnail",
      flex: 0.5,
    },
    {
      field: "category_id",
      headerName: "Category Id",
      flex: 0.5,
    },
    {
      field: "slugMitra",
      headerName: "Slug Mitra",
      flex: 0.5,
    },
    {
      field: "courseRating",
      headerName: "Rating",
      flex: 0.3,
    },
    {
      field: "namaMentor",
      headerName: "Mentor",
      flex: 0.5,
    },
    {
      field: "option",
      headerName: "Opsi",
      flex: 0.8,
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
          <EditCourseModal isOpen={isEditModalOpen} onClose={handleEditCloseModal} idData={selectedIdEdit} />
          </Box>
        );
      },
    },
  ];

  const handleAddCourseClick = () => {
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
      <Header title="COURSES" subtitle="Here List Of Course Muse Akademi" />
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
                  onClick={handleAddCourseClick}
                >
                  Add Course
                </Button>
              </Box>
            ),
          }}
        />
      </Box>
      <AddCourseModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </Box>
  );

};

export default Course;
