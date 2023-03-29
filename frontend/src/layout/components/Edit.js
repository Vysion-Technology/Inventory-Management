import React,{useState,useEffect} from 'react';
import {useSelector } from 'react-redux';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import swal from 'sweetalert2';
import axios from 'axios';

// const Form = styled.form``;
// const H4 = styled.h4``;
// const Label = styled.label``;
// const Input = styled.input``;

const Button = styled.button`
display:flex;
align-items:center;
  background: ${props => props.primary ? "#338FEB" : "rgba(0, 0, 0, 0.05)"};
  color: ${props => props.primary ? "#FFFFFF" : "#1C1C1C"};
  border: 1px solid #1677FF;
    width: 50px;
    height: 30px;
  border-radius: 8px;
  margin-right:${props => props.primary ? "60px" : "30px"};
  cursor:pointer;
`;


const options = [
    {
      value: 'Consumable',
      label: 'Consumable',
    },
    {
      value: 'Non-Consumable',
      label: 'Non-Consumable',
    },
    {
      value: 'Service',
      label: 'Service',
    }
  ];

  const url = 'http://localhost:8000'
function Edit({selectedClient,setIsEditing}) {
  const [data, setData] = useState([]);
  const {items} = useSelector(state=>state.getItems);
    // console.log(items);
    useEffect(()=>{ 
        setData(items);
  },[items])




  // console.log(data.length);
  //   console.log(selectedClient);
    const id = selectedClient._id;
    console.log(id);
    const [itemCode,setItemCode] = useState(selectedClient.itemCode);
    const [itemName,setItemName] = useState(selectedClient.itemName);
    const [itemPrice,setItemPrice] = useState(selectedClient.itemPrice);
    const [itemQuantity,setItemQuantity] = useState(selectedClient.itemQuantity);
    const [category,setCategory] = useState(selectedClient.category);

    const index = data.findIndex(item=>item._id===id);
    // console.log(index);

    const updateItem = async(id,itemCode,itemName,itemPrice,itemQuantity,category)=>{
      try {
        const response = await axios.put(`${url}/products/${id}`, {
          itemCode,itemName,itemPrice,itemQuantity,category
        });
        console.log(response.data); // Product updated successfully
      } catch (err) {
        console.error(err);
      }
    }


    const handleEdit = (e)=> {
        
        e.preventDefault();
        const client = {
            itemCode:itemCode,
            itemPrice:itemPrice,
            itemQuantity:itemQuantity,
            itemName:itemName,
            category:category
        }
        
        updateItem(id,itemCode,itemName,itemPrice,itemQuantity,category);

        const editData = [...data];
        editData[index] = client;
        setData(editData);
        console.log(data);
        console.log("form submitted")
        swal.fire({
          icon:'success',
          title:'Updated!',
          text:`${client.itemCode} has been Updated successfully`,
          showConfirmButton:false,
          timer:1500,
        })
        
        // setClients(clients);
        // console.log(clients);
        setIsEditing(false);

    }


  return (
    <Box
      component="form"
      sx={{
        marginTop:"15px",
        height: "556px",
        backgroundColor:"#F7F9FB",
        marginLeft:"15px",
        marginRight:"15px",
        // marginTop:"10px"
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleEdit}
    >
        <Box style={{display:"flex",justifyContent: 'center'}} >
        <TextField 
            id="outlined-basic" 
            label="item Name" 
            variant="outlined" 
            placeholder='item Name'
            value={itemName}
            onChange={(e)=>setItemName(e.target.value)}
            rows={8}
            style={{ width:"45ch",margin:"15px",marginTop:"70px"}}

        />
        <TextField 
            id="outlined-basic" 
            label="item Code" 
            variant="outlined" 
            placeholder='item code'
            value={itemCode}
            onChange={(e)=>setItemCode(e.target.value)}
            rows={6}
            style={{ width:"45ch",margin:"15px",marginTop:"70px"}}

        />
        </Box>
        <Box style={{display:"flex",justifyContent: 'center'}} >
        <TextField 
            id="outlined-basic" 
            label="item Price" 
            variant="outlined" 
            placeholder='item Price'
            value={itemPrice}
            onChange={(e)=>setItemPrice(e.target.value)}
            rows={6}
            style={{ width:"45ch",margin:"15px"}}

        />
        <TextField 
            id="outlined-basic" 
            label="item Quantity" 
            variant="outlined" 
            placeholder='item Quantity'
            value={itemQuantity}
            onChange={(e)=>setItemQuantity(e.target.value)}
            rows={6}
            style={{ width:"45ch",margin:"15px"}}

        />
        </Box>
        <Box style={{display:"flex",justifyContent: 'center'}}  >
        <TextField 
            id="outlined-basic" 
            select
            label="select Options" 
            // variant="outlined" 
            defaultValue="Consumable"
            style={{ width:"45ch",margin:"15px"}}

        >
            {
                options.map((option)=>(
                    <MenuItem key={option.value} value={option.value} >
                        {option.label}
                    </MenuItem>
                ))
            }
        </TextField>
        <TextField 
            id="outlined-basic" 
            label="Category" 
            variant="outlined" 
            placeholder='Category'
            rows={6}
            value={category}
            onChange={(e)=>setCategory(e.target.value)}
            style={{ width:"45ch",margin:"15px"}}

        />
        </Box>
        <Box style={{display:"flex",justifyContent: 'flex-end'}} >
            <Button onClick={()=>setIsEditing(false)} >cancel</Button>
            <Button primary type="submit" >Edit</Button>
        </Box>
    </Box>
  )
}

export default Edit;