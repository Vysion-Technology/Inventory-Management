import react, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch,useSelector } from 'react-redux';
const SearchButton = styled.div`
    display:flex;
    margin-right:35px;
`
const Input = styled.input`
    border-radius:10px;
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


const Searchbar = () => {

    const [query, setQuery] = useState("");
    
    const {items} = useSelector(state=>state.getItems);
    console.log(items.filter(item=>item.itemCode.toLowerCase().includes(query)));
    return (
        <SearchButton>
            <Button primary>check Usage</Button>
            <Input placeholder="Search" onChange={(e)=>setQuery(e.target.value)} />
        </SearchButton>
    )
}

export default Searchbar;