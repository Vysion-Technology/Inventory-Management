import React, { useState } from 'react';
import swal from 'sweetalert2'
import styled from 'styled-components';
import EditPage from '../../layout/components/EditPage';
import ListPage from '../../layout/components/ListPage';
import SampleData from '../../layout/components/SampleData';
import Add from '../../layout/components/Add';
import Edit from '../../layout/components/Edit';
import Update from '../../layout/components/Update';
import { makeStyles } from '@mui/styles';
import { RiCloseLine } from 'react-icons/ri';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography, Box, IconButton } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';



const Wrapper = styled.div`
  display:contents;
`

const List = styled.div`
    padding:10px;
    border-bottom: ${props => props.header ? "1px solid #ddd" : "none"};
`

const useStyle =  makeStyles({
  box: {
    height: '174px',
    width: '545px'
  },
  top: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: "10px",
    marginLeft: "25px"
  },
  bottom: {
    display: "flex",
    justifyContent:"space-evenly",
    alignItems:"center",
    margin:"5px",
    padding:"20px",
  },
  ButtonAdd:{
    width:"180px",
    height:"44px",
    margin:"10px",
    textDecoration:"none",
    // background:"#338FEB",
    // textTransform: "none",
    // color: "#2878f0",
  },
  text:{
    fontWeight:"600",
    fontSize:"1rem",

  }
})


function Home() {
  const [clients, setClients] = useState(SampleData);
  const [selectedClient, setSelectedClient] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isUpdate, setUpdate] = useState(false);

  // Open dialog box to update the quantity

  const [open, setOpen] = useState(false);
  const [additem, setAddItem] = useState(false);


  const handleDelete = (id) => {
    console.log("rohit Delete function called ");
    swal.fire({
      title: 'Sure you want to Delete item this?',
      text: 'Are you sure, you want to do this',
      // showCancelButton: true,
      // buttonsStyling:false,
      showDenyButton: true,
      denyButtonText: 'No, Cancel',
      confirmButtonText: 'Yes, Delete item',
      // customClass:'alert_button'


    }).then(result => {
      if (result.value) {
        const [client] = clients.filter(client => client.id === id);
        swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: `${client.itemCode} has been deleted successfully`,
          showConfirmButton: false,
          timer: 1500,
        })
      }
    })
  };

  const handleUpdate = (id) => {
    const [client] = clients.filter(client => client.id === id);
    setOpen(true);
    console.log(client);
    setSelectedClient(client);
    setUpdate(true);
  };


  const handleEdit = (id) => {
    const [client] = clients.filter(client => client.id === id);
    console.log(client);
    setSelectedClient(client);
    setIsEditing(true);
  };

  // handleClickOpen = () => {
  //   setOpen(true);
  // }

  const handleClose = () => {
    setOpen(false);
    setAddItem(false);
  }

  return (
    <Wrapper >
      <List header className='HeadT' >
        Inventory / Consumable
      </List>
      <List className='HeadT' >
        orderList
      </List>
      {!isAdding && !isEditing && (
        <>
          {/* console.log={"rohit"} */}
          <EditPage
            // clients={clients}
            setIsAdding={setIsAdding}
          />
          <ListPage
            clients={clients}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleUpdate={handleUpdate}
          />
        </>
      )}
      {isAdding && (
        <Add
          setIsAdding={setIsAdding}
        />
      )}

      {isEditing && (
        <Edit
          setIsEditing={setIsEditing}
          clients={clients}
          selectedClient={selectedClient}
          setClients={setClients}
        />
      )}
      {isUpdate && (
        <Update
          open={open}
          handleClose={handleClose}
          additem={additem}
          setAddItem={setAddItem}
          clients={clients}
          selectedClient={selectedClient}
          setClients={setClients}
        />
        
      )}

    </Wrapper>
  )
};

export default Home;



{/* // clients={clients}
          // handleEdit={handleEdit}
          // handleDelete={handleDelete}
          // handleUpdate={handleUpdate} */}