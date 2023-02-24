import React,{useState} from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { addProduct } from '../../services/Api';


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

  const initialValue = {
    itemName:'',
    itemCode:'',
    itemPrice:'',
    itemQuantity:'',
    category:'',
  }


function Add({setIsAdding}) {

  // const [itemCode,setItemCode] = useState('');
  //   const [itemName,setItemName] = useState('');
  //   const [itemPrice,setItemPrice] = useState('');
  //   const [itemQuantity,setItemQuantity] = useState('');
  const [addItem,setAddItem] = useState(initialValue);

  const handleAdd = async()=>{
    console.log(addItem);
    const response = await addProduct(addItem);
    if(!response) return console.log("response not found");
    alert("Item Added");
    setIsAdding(false);
  }

  const InputValue = (e) =>{
    setAddItem({...addItem,[e.target.name]:e.target.value})
    console.log(addItem);
  }

  return (
    <Box
      // component="form"
      sx={{
        marginTop:"15px",
        height: "556px",
        backgroundColor:"#F7F9FB",
        marginLeft:"15px",
        marginRight:"15px",
        // marginTop:"10px"
      }}
      noValidate
      // onSubmit={handleAdd}
      autoComplete="off"
    >
        <Box style={{display:"flex",justifyContent: 'center'}} >
        <TextField 
            id="outlined-basic" 
            label="item Name" 
            variant="outlined" 
            name="itemName"
            placeholder='item Name'
            rows={8}
            // value={itemName}
            onChange={(e)=>InputValue(e)}
            style={{ width:"45ch",margin:"15px",marginTop:"70px"}}

        />
        <TextField 
            id="outlined-basic" 
            label="item Code" 
            variant="outlined" 
            placeholder='item code'
            name="itemCode"
            rows={6}
            // value={itemCode}
            onChange={(e)=>InputValue(e)}
            style={{ width:"45ch",margin:"15px",marginTop:"70px"}}

        />
        </Box>
        <Box style={{display:"flex",justifyContent: 'center'}} >
        <TextField 
            id="outlined-basic" 
            label="item Price" 
            variant="outlined" 
            placeholder='item Price'
            name="itemPrice"
            rows={6}
            // value={itemPrice}
            onChange={(e)=>InputValue(e)}
            style={{ width:"45ch",margin:"15px"}}

        />
        <TextField 
            id="outlined-basic" 
            label="item Quantity" 
            variant="outlined" 
            placeholder='item Quantity'
            name="itemQuantity"
            rows={6}
            // value={itemQuantity}
            onChange={(e)=>InputValue(e)}
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
            name = "category"
            onChange={(e)=>InputValue(e)}
            rows={6}
            style={{ width:"45ch",margin:"15px"}}

        />
        </Box>
        <Box style={{display:"flex",justifyContent: 'flex-end'}} >
            <Button onClick={()=>setIsAdding(false)} >cancel</Button>
            <Button primary onClick={()=>handleAdd()} >Add</Button>
        </Box>
    </Box>
  )
}

export default Add;