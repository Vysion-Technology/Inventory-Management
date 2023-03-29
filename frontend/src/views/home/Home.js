import React, { useState, useEffect } from 'react';
import swal from 'sweetalert2'
import styled from 'styled-components';
import EditPage from '../../layout/components/EditPage';
import ListPage from '../../layout/components/ListPage';
import Add from '../../layout/components/Add';
import Edit from '../../layout/components/Edit';
import Update from '../../layout/components/Update';
import { makeStyles } from '@mui/styles';
import { RiCloseLine } from 'react-icons/ri';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography, Box, IconButton } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
// import { getProduct } from '../../services/Api'
import { useDispatch,useSelector } from 'react-redux';
import {getItems as listItems} from '../../redux/action/itemAction'




const Wrapper = styled.div`
  display:contents;
`

const List = styled.div`
    padding:10px;
    border-bottom: ${props => props.header ? "1px solid #ddd" : "none"};
`

const useStyle = makeStyles({
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
    justifyContent: "space-evenly",
    alignItems: "center",
    margin: "5px",
    padding: "20px",
  },
  ButtonAdd: {
    width: "180px",
    height: "44px",
    margin: "10px",
    textDecoration: "none",
    // background:"#338FEB",
    // textTransform: "none",
    // color: "#2878f0",
  },
  text: {
    fontWeight: "600",
    fontSize: "1rem",

  }
})
const url = 'http://localhost:8000'
function Home() {

  const [data, setData] = useState([]);

  const {items} = useSelector(state=>state.getItems);
  // console.log(items);
  // setData(items);
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(listItems());
      setData(items);
  }, [])
//   useEffect(() => {
//     setData(items);
// }, [])
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  // Open dialog box to update the quantity
  // console.log(data);
  const [open, setOpen] = useState(false);
  const [additem, setAddItem] = useState(false);


  

  const handleUpdate = (id) => {
    // const [client] = clients.filter(client => client._id === id);
    setOpen(true);
    console.log(id);
    setSelectedClient(id);
    setIsUpdate(true);
  };


  const handleEdit = (id) => {
    console.log(id);
    const client = data.filter(client => client._id === id);
    console.log(client[0]);
    setSelectedClient(client[0]);
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
            handleEdit={handleEdit}
            handleUpdate={handleUpdate}
          />
          {/* <ListPage
            // handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleUpdate={handleUpdate}
          /> */}
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
          // clients={data}
          selectedClient={selectedClient}
          // setClients={setClients}
        />
      )}
      {isUpdate && (
        <Update
          open={open}
          handleClose={handleClose}
          additem={additem}
          setAddItem={setAddItem}
        // data={data}
        selectedClient={selectedClient}
        // setClients={setClients}
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