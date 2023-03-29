import react, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFilter } from 'react-icons/bs'
import { RiArrowUpDownFill } from 'react-icons/ri'
import Searchbar from './Searchbar'
import { useDispatch,useSelector } from 'react-redux';
import ListPage from '../../layout/components/ListPage';


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
const SearchButton = styled.div`
    display:flex;
    margin-right:35px;
`
const Input = styled.input`
    border-radius:10px;
`

function EditPage({ setIsAdding,handleEdit,handleUpdate }) {

    const [query, setQuery] = useState("");
    const [data,setData] = useState([]);
    const {items} = useSelector(state=>state.getItems);
    useEffect(()=>{ 
        setData(items)
    },[items])
    // setData(items.filter(item=>item.itemCode.toLowerCase().includes(query)))
    const search = (records) =>{
        return records.filter(record=>record.itemCode.toLowerCase().includes(query)||record.itemName.toLowerCase().includes(query))
    }
    console.log(data);    

    return (
        <>
            <Wrapper>
                <AddButton>
                    <Button onClick={() => setIsAdding(true)} ><AiOutlinePlus />Add New Item</Button>
                    <BsButton><BsFilter /></BsButton>
                    <UpButton><RiArrowUpDownFill /></UpButton>
                </AddButton>
                {/* <Searchbar /> */}
                <SearchButton>
                    <Button primary>check Usage</Button>
                    <Input placeholder="Search" onChange={(e) => setQuery(e.target.value)} />
                </SearchButton>
            </Wrapper>
            <ListPage
                data={search(data)}
                handleEdit={handleEdit}
                handleUpdate={handleUpdate}
            />
        </>
    )
}

export default EditPage
