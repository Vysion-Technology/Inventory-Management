import React from 'react'
import styled from 'styled-components'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFilter } from 'react-icons/bs'
import { RiArrowUpDownFill } from 'react-icons/ri'
const Wrapper = styled.section`
 display:flex;
 justify-content:space-between;
 background:#F7F9FB;
 padding: 8px;
 border-radius: 8px;
`

const Button = styled.button`
display:flex;
align-items:center;
  background: ${props => props.primary ? "white" : "#338FEB"};
  color: ${props => props.primary ? "#1677FF" : "white"};
  border: 1px solid #1677FF;
    width: 130px;
    height: 28px;
  border-radius: 8px;
  margin-right:${props => props.primary ? "inherit" : "none"};
  cursor:pointer;
`;

const AddButton = styled.div`
    display:flex;
`
const SearchButton = styled.div`
 display:flex;
margin-right:35px;
`
const BsButton = styled.button`
background:#F7F9FB;
border:none;
width: 30px;
height: 28px;
cursor:pointer;

`

const UpButton = styled.button`
background:#F7F9FB;
border:none;
width: 30px;
height: 28px;
cursor:pointer;
`
const Input = styled.input`
    border-radius:10px;
`

function EditPage({setIsAdding}) {
    return (
        <Wrapper>
            <AddButton>
                <Button onClick={() =>setIsAdding(true)} ><AiOutlinePlus />Add New Item</Button>
                <BsButton><BsFilter /></BsButton>
                <UpButton><RiArrowUpDownFill /></UpButton>
            </AddButton>
            <SearchButton>
                <Button primary>check Usage</Button>
                <Input placeholder="Search" />
            </SearchButton>
        </Wrapper>
    )
}

export default EditPage
