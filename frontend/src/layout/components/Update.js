import React,{useState,useEffect} from 'react';
import {useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { RiCloseLine } from 'react-icons/ri';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography, Box, IconButton, TextField } from '@mui/material';
import AddQuantity from './AddQuantity';
import axios from 'axios';

const useStyle = makeStyles({
    box: {
        height: '174px',
        width: '545px'
    },
    boxupdate: {
        height: '250px',
        width: '545px'
    },
    top: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        padding: "10px",
        marginLeft: "25px"
    },
    topUpdate: {
        display: "flex",
        flexDirection: "column",
        padding: "25px"
    },
    bottom: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        margin: "5px",
        padding: "20px",
    },
    bottomUpdate:{
        display: "flex",
        justifyContent: "flex-end ",
        alignItems: "center",
        margin: "5px",
        padding: "10px",
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

// , setAddItem, additem,clients,setClients,selectedClient 
const url = 'http://localhost:8000'
const Update = ({ open, handleClose, setAddItem, additem, selectedClient}) => {
    const classes = useStyle();

    const [data, setData] = useState([]);
    const {items} = useSelector(state=>state.getItems);
    // console.log(items);
    useEffect(()=>{ 
        setData(items);
    },[setData, items])
    const index = data.findIndex(item=>item._id==selectedClient);
    const valueData = data[index];
// console.log("Update Quantity",selectedClient);
    const [addvalue,setAddValue] = useState(null)
    // console.log("Update Quantity",valueData.itemQuantity);
    // const [additem, setAddItem] = useState(false);
    const hanldeAdd = (e) => {
        // e.preventDefault();
        // selectedClient.quantity=addvalue;
        // setClients(clients)
        setAddValue(valueData.itemQuantity)
        // console.log("Update Quantity",clients);
        setAddItem(true);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // selectedClient.quantity=addvalue;
        valueData.itemQuantity=addvalue;
        console.log(valueData);
        try {
            const response = axios.put(`${url}/products/${selectedClient}`, {
                valueData
                // itemQuantity
            });
            console.log(response.data); // Product updated successfully
          } catch (err) {
            console.error(err);
          }

        // setClients(clients)
        console.log("form submitted")
        // console.log("Update Quantity",clients);
        setAddItem(true);
    }
    // const handleaddClose = () => {
    //     setAddItem(false);
    // }
    return (
        <Dialog
            open={open}
            onClose={handleClose}
        >
            <Box  >
                {!additem ?
                    <Box className={classes.box} >
                        <Box className={classes.top} >
                            <Typography
                                // className={classes.text} 
                                style={{
                                    fontWeight: "600",
                                    fontSize: "20px"
                                }}
                            >
                                Choose what you want to do?
                            </Typography>
                            <IconButton onClick={handleClose} ><RiCloseLine /></IconButton>
                        </Box>
                        <Box className={classes.bottom} >
                            <Button variant="contained" onClick={handleClose}
                                // style={{margin:"10px",width:"180px",height:"44px",borderRadius:"8px"}}
                                className={classes.ButtonAdd}
                            >Remove Item</Button>
                            <Button variant="contained"
                                // style={{margin:"10px",width:"180px",height:"44px",borderRadius:"8px"}} 
                                className={classes.ButtonAdd}
                                onClick={hanldeAdd} >Add Item</Button>
                        </Box>
                    </Box> :
                    <Box component="form" onSubmit={handleSubmit} className={classes.boxupdate} >
                        <Box className={classes.topUpdate} >
                            <Typography
                                // className={classes.text} 
                                style={{
                                    fontWeight: "600",
                                    fontSize: "20px"
                                }}
                            >
                                `Enter the quntity you count to`
                            </Typography>
                            <TextField
                                label="Enter the Quantity"
                                id="outlined-basic"
                                variant="outlined"
                                placeholder='Like, 45'
                                rows={6}
                                value={addvalue}
                                onChange={(e)=>setAddValue(e.target.value)}
                                style={{margin: "10px" }}
                            />
                        </Box>
                        <Box className={classes.bottomUpdate} >
                            <Button variant="contained" onClick={handleClose}
                                // style={{margin:"10px",width:"180px",height:"44px",borderRadius:"8px"}}
                                className={classes.ButtonAdd}
                            >No, Back</Button>
                            <Button variant="contained"
                                // style={{margin:"10px",width:"180px",height:"44px",borderRadius:"8px"}} 
                                className={classes.ButtonAdd}
                                // onClick={handleClose} 
                                type="submit" >Yes $variable</Button>
                        </Box>
                    </Box>

                }
            </Box>
        </Dialog>
    )
}

export default Update;