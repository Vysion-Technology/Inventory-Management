import React, { useState,useEffect } from 'react'
import styled from 'styled-components';
import SampleData from './SampleData';
import Divider from '@mui/material/Divider';
import { getProduct } from '../../services/Api';
import axios from 'axios';
import {useSelector } from 'react-redux';


const Wrapper = styled.div`
  display:table;
  width:100%;
// column-count: 3;
//   column-gap: 80px;
`

// const Label = styled.table`
//     display:flex;
//     // align-item:center;
//     justify-content:space-between;
// `

const Td = styled.td`
// display: flex;
//   align-items: center;
//   margin-left:${props => props.primary ? "12px" : "75px"};
//   margin-right:${props => props.primary ? "12px" : "50px"};
    padding: 15px;
    width:20%;
//   text-align: left;


`

const Tr = styled.tr`
justify-content:space-between;
display:table-header-group;
// padding: 15px;
//   text-align: left;
//   padding: 8px;
//   text-align: left;
  border-bottom: 1px solid #ddd;
  
`;
const Checkbox = styled.input`
    // display:none;
    // type:checkbox;
`
const Button = styled.button`
// display:flex;
// align-items:center;
//   background: ${props => props.primary ? "white" : "#338FEB"};
color: ${props => props.update ? "#27AB1C" : props.edit ? "#35A3E0" :props.delete ? "#FC3903": "white"};
// color: ${props => props.edit ? "#35A3E0" : "white"};
// color: ${props => props.delete ? "#FC3903" : "white"};
//   border: 1px solid #1677FF;
//     width: 130px;
//     height: 28px;
//   border-radius: 8px;
//   margin-right:${props => props.primary ? "inherit" : "none"};
background:none;
border:none;
font-size:10px;
width: 85px;
height: 28px;
cursor:pointer;
`;

const WrapButton = styled.div`
    display:flex;
    width:253px;
`

const url = 'http://localhost:8000'

function ListPage({handleEdit,handleUpdate,data}) {
    console.log(data);
    // const [data, setData] = useState([]);

    // const {items} = useSelector(state=>state.getItems);
    // console.log(items);
    // useEffect(()=>{ 
    //     setData(items);
    // },[items])


    const handleDelete = async (ProductId) => {
        console.log("rohit Delete function called: ", ProductId);
        const index = data.findIndex(item=>item._id===ProductId);
        console.log(index);
        try {
          await axios.delete(`${url}/products/${ProductId}`);
          
        } catch (error) {
          console.log("error while calling delete api", error)
        }
        const updatedData = [...data];
        updatedData.splice(index,1)
        setData(updatedData);
        // swal.fire({
        //   title: 'Sure you want to Delete item this?',
        //   text: 'Are you sure, you want to do this',
        //   // showCancelButton: true,
        //   // buttonsStyling:false,
        //   showDenyButton: true,
        //   denyButtonText: 'No, Cancel',
        //   confirmButtonText: 'Yes, Delete item',
        //   // customClass:'alert_button'
    
    
        // }).then(result => {
        //   if (result.value) {
        //     const [client] = clients.filter(client => client.id === id);
        //     swal.fire({
        //       icon: 'success',
        //       title: 'Deleted!',
        //       text: `Item has been deleted successfully`,
        //       showConfirmButton: false,
        //       timer: 1500,
        //     })
        //   }
        // })
        console.log("Item deleted successfully");
      };



    return (
        <Wrapper>
            {/* <Label> */}
                <Tr  >
                    <Td primary >
                        <Checkbox type="checkbox" />
                    </Td>
                    <Td>
                        item code
                    </Td>
                    <Td>
                        item Name
                    </Td>
                    <Td>
                        Quantity
                    </Td>
                    <Td>
                        Price
                    </Td>
                    <Td>
                        Action
                    </Td>
                </Tr>

            {/* </Label> */}
            <Divider variant="fullWidth" />
            {
                data.map((item) =>
                    // <Label>
                        <Tr key={item._id} >
                            <Td primary >
                                <Checkbox type="checkbox" />
                            </Td>
                            <Td>
                                {item.itemCode}
                            </Td>
                            <Td>
                                {item.itemName}
                            </Td>
                            <Td>
                                {item.itemQuantity}
                            </Td>
                            <Td>
                                {item.itemPrice}
                            </Td>
                            <Td>
                                <WrapButton>
                                    <Button update onClick={()=>handleUpdate(item._id)} >Update Quantity</Button>
                                    <Button edit onClick={()=>handleEdit(item._id)} >Edit</Button>
                                    <Button delete onClick={()=>handleDelete(item._id)} >Delete</Button>
                                </WrapButton>
                            </Td>
                        </Tr>
                    // </Label>
                )}
        </Wrapper>

    );
}
export default ListPage;