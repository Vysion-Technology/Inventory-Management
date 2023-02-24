import React,{useState} from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import swal from 'sweetalert2';

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


function Edit({clients,setClients,selectedClient,setIsEditing}) {

    const id = selectedClient.id;

    const [itemCode,setItemCode] = useState(selectedClient.itemCode);
    const [itemName,setItemName] = useState(selectedClient.itemName);
    const [itemPrice,setItemPrice] = useState(selectedClient.price);
    const [itemQuantity,setItemQuantity] = useState(selectedClient.quantity);

    const handleEdit = (e)=> {
        
        e.preventDefault();
        const client = {
            itemCode,
            itemPrice,
            itemQuantity,
            itemName
        }

        for(let i=0;i<clients.length;i++){
            if(clients[i].id===id){
                clients.splice(i,1,client);
                break;
            }
        }
        console.log("form submitted")
        swal.fire({
          icon:'success',
          title:'Updated!',
          text:`${client.itemCode} has been Updated successfully`,
          showConfirmButton:false,
          timer:1500,
        })
        setClients(clients);
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