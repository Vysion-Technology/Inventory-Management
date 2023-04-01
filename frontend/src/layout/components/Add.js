import React,{useState} from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import {addProduct} from '../../services/Api'
import swal from 'sweetalert2';
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

  // const itemInitialValue = {
  //   itemCode:'',
  //   itemName:'',
  //   itemPrice:'',
  //   itemQuantity:'',
  //   category:''
  // }

function Add({setIsAdding}) {

  const [addItem,setAddItem] = useState({});

  const onInputChange = (e)=>{
    setAddItem({...addItem,[e.target.name]:e.target.value});
    console.log(addItem);
  }

  const handleAdd = async()=>{
    // alert("Item Added");
    const response = await addProduct(addItem);
    if(!response){
      return console.log('error while adding product');
    }
    swal.fire({
      icon:'success',
      title:'Added',
      text:`Record has been Added to Database successfully`,
      showConfirmButton:false,
      timer:1500,
    })
    console.log(response);
    setIsAdding(false);
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
      onSubmit={handleAdd}
      autoComplete="off"
    >
        <Box style={{display:"flex",justifyContent: 'center'}} >
        <TextField 
            id="outlined-basic" 
            label="item Name" 
            variant="outlined" 
            placeholder='item Name'
            rows={8}
            name="itemName"
            onChange={(e)=>onInputChange(e)}
            style={{ width:"45ch",margin:"15px",marginTop:"70px"}}

        />
        <TextField 
            id="outlined-basic" 
            label="item Code" 
            variant="outlined" 
            placeholder='item code'
            rows={6}
            name="itemCode"
            // value={itemCode}
            onChange={(e)=>onInputChange(e)}
            style={{ width:"45ch",margin:"15px",marginTop:"70px"}}

        />
        </Box>
        <Box style={{display:"flex",justifyContent: 'center'}} >
        <TextField 
            id="outlined-basic" 
            label="item Price" 
            variant="outlined" 
            placeholder='item Price'
            rows={6}
            name="itemPrice"
            // value={itemPrice}
            onChange={(e)=>onInputChange(e)}
            style={{ width:"45ch",margin:"15px"}}

        />
        <TextField 
            id="outlined-basic" 
            label="item Quantity" 
            variant="outlined" 
            placeholder='item Quantity'
            rows={6}
            name="itemQuantity"
            // value={itemQuantity}
            onChange={(e)=>onInputChange(e)}
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
            name="category"
            onChange={(e)=>onInputChange(e)}
            style={{ width:"45ch",margin:"15px"}}

        />
        </Box>
        <Box style={{display:"flex",justifyContent: 'flex-end'}} >
            <Button onClick={()=>setIsAdding(false)} >cancel</Button>
            <Button primary type="submit" >Add</Button>
        </Box>
    </Box>
  )
}

export default Add;