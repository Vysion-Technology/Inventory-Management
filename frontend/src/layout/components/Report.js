import React, { useState,useEffect } from 'react'
import styled from 'styled-components';
import SampleData from './SampleData';
import Divider from '@mui/material/Divider';
import { getProduct } from '../../services/Api';
import axios from 'axios';
import {useDispatch, useSelector } from 'react-redux';
import {usedItem as listItems} from '../../redux/action/itemAction'

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

function Report() {

    const [data,setData] = useState([]);
    const {items} = useSelector(state=>state.usedItem);
    console.log(items)
    const dispatch = useDispatch()
    useEffect(()=>{ 
        dispatch(listItems())
        setData(items)
    },[])

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
                        Quantity Used
                    </Td>
                    <Td>
                        Total Price
                    </Td>
                    <Td>
                        Date
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
                                {item.itemPrice*item.itemQuantity}
                            </Td>
                            <Td>
                                <WrapButton>
                                    <Button update onClick={()=>handleUpdate(item._id)} >Date</Button>
                                    <Button edit onClick={()=>handleEdit(item._id)} >Time</Button>
                                    
                                </WrapButton>
                            </Td>
                        </Tr>
                    // </Label>
                )}
        </Wrapper>

    );
}
export default Report;