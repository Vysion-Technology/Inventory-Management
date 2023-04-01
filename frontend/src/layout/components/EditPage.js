import react, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFilter } from 'react-icons/bs'
import { RiArrowUpDownFill } from 'react-icons/ri'
import Searchbar from './Searchbar'
import { useDispatch,useSelector } from 'react-redux';
import ListPage from '../../layout/components/ListPage';
import Report from './Report';
// import {usedItem as listItems} from '../../redux/action/itemAction'


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
    const [isReport,setIsReport] = useState(false)
    const {items} = useSelector(state=>state.getItems);
    // const {useItems} = useSelector(state=>state.usedItem);
    // console.log(items)
    useEffect(()=>{ 
        setData(items)
    },[items])


    // const [useData,setUseData] = useState([]);
    
    // const dispatch = useDispatch()
    // useEffect(()=>{ 
    //     dispatch(listItems())
    //     setUseData(items)
    // },[])




    const search = (records) =>{
        return records.filter(record=>record.itemCode.toLowerCase().includes(query)||record.itemName.toLowerCase().includes(query))
    }
    console.log(data);    

    const handleReport =()=>{
        setIsReport(true);
    }


    return (
        <>
            <Wrapper>
                <AddButton>
                    {!isReport&& <Button onClick={() => setIsAdding(true)} ><AiOutlinePlus />Add New Item</Button>}
                    <BsButton><BsFilter /></BsButton>
                    <UpButton><RiArrowUpDownFill /></UpButton>
                </AddButton>
                {/* <Searchbar /> */}
                <SearchButton>
                    {/* <Link to="/report"> */}
                        <Button primary onClick={()=>handleReport()}>check Usage</Button>
                    {/* </Link> */}
                    <Input placeholder="Search" onChange={(e) => setQuery(e.target.value)} />
                </SearchButton>
            </Wrapper>
            {!isReport && <ListPage
                data={search(data)}
                handleEdit={handleEdit}
                handleUpdate={handleUpdate}
                setIsReport={setIsReport}
            />}
            {isReport && 
                <Report
                    // data={search(data)}
                />
            }
        </>
    )
}

export default EditPage
