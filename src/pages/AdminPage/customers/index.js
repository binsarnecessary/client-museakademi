import React, { useState, useEffect } from "react";
import { Box, useTheme, Button } from "@mui/material";
import { useGetAllUserQuery } from "../../../store/apis/admin";
import Header from "../../../components/admin/Header";
import { DataGrid } from "@mui/x-data-grid";
import AddUserModal from "./AddUserModal";
import axios from "axios";

const Customers = () => {
  const theme = useTheme();
  // const { data, isLoading } = useGetAllUserQuery([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //Check Valid Token From API
        const dataReq = await axios.get(
          "https://server-museakademi-production-456b.up.railway.app/api/users"
        );

        const dataResp = dataReq.data;

        if (dataResp.status) {
          setData(dataResp.data.user);
        }
      } catch (err) {
        setData(false);
      }
    };

    fetchData();
  }, []);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.3,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 0.5,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 0.5,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 0.7,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 0.5,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 0.5,
    },
    {
      field: "#",
      headerName: "#",
      flex: 0.8,
      renderCell: (params) => {
        const handleEditClick = () => {
          // Code to handle edit button click
        };

        const handleDeleteClick = () => {
          // Code to handle delete button click
        };

        return (
          <Box display="flex" alignItems="center">
            <Button
              variant="contained"
              color="primary"
              onClick={handleEditClick}
            >
              Edit
            </Button>
            <Box mx={1} />
            <Button
              variant="contained"
              color="error"
              onClick={handleDeleteClick}
            >
              Delete
            </Button>
          </Box>
        );
      },
    },
  ];

  const handleAddUserClick = () => {
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
      <Header title="USERS" subtitle="Here List Of Users Museakademi" />
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
                  onClick={handleAddUserClick}
                >
                  Add User
                </Button>
              </Box>
            ),
          }}
        />
      </Box>
      <AddUserModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </Box>
  );
};

export default Customers;
