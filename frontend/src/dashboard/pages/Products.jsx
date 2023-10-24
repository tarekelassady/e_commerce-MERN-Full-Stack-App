import { useEffect, useState } from "react";
import "./products.scss";
import Box from '@mui/material/Box';
import {DataGrid} from "@mui/x-data-grid";
import axios from "axios";
const Products = () => {
  const backendURL=process.env.REACT_APP_BACKEND_URL;
  const [getUserRows,setUserRows]=useState([]);
  const fetchUsers=async()=>{
    try{
      const res=await axios.get(`${backendURL}/users/`).then(response => response.data)
      .then((data) => {
        setUserRows(data)
      });
      // setUserRows(res.data);
      
      console.log(res.data)
    }catch(err){
      console.log(err);
    }

  }
  useEffect(()=>{
    
    fetchUsers();
  },[]);

  const columns = [
    { field: "_id", headerName: "ID", width: 10 },
    { field: "username", headerName: "Username", width: 170 },
    { field: "email", headerName: "Email", width: 70 },
    { field: "Admin", headerName: "Admin", width: 100 },
    ];
  
  return (
    <div>
      products
      <Box sx={{ height: 400, width: '1100px' }}>
      <DataGrid 
      rows={getUserRows} 
      comlumns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5]}
      checkboxSelection
      disableRowSelectionOnClick
      />
</Box>

    </div>
  )
}

export default Products
