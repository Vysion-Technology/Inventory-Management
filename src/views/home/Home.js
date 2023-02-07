import React, { useState } from 'react';
import styled from 'styled-components';
import EditPage from '../../layout/components/EditPage';
import ListPage from '../../layout/components/ListPage';
import SampleData from '../../layout/components/SampleData';
import Add from '../../layout/components/Add';
import Edit from '../../layout/components/Edit';

const Wrapper = styled.div`
  display:contents;
`

const List = styled.div`
    padding:10px;
    border-bottom: ${props => props.header ? "1px solid #ddd":"none"};
`



function Home() {
  const [clients, setClients] = useState(SampleData);
  const [selectedClient, setSelectedClient] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete=()=>{console.log("Delete called")};
  const handleUpdate=()=>{console.log("handleUpdate called")};
  const handleEdit=(id)=>{
    const [client] = clients.filter(client=>client.id === id);
    console.log(client);
    setSelectedClient(client);
    setIsEditing(true);
  };


  return (
    <Wrapper >
      <List header className='HeadT' >
        Inventory / Consumable
      </List>
      <List className='HeadT' >
        orderList
      </List>
        {!isAdding&& !isEditing&&(
          <>
          {/* console.log={"rohit"} */}
            <EditPage 
                // clients={clients}
                setIsAdding={setIsAdding}

            />
            <ListPage
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                handleUpdate={handleUpdate}
            />
          </>
        )}
        {isAdding&&(
          <Add
              setIsAdding={setIsAdding}
          />
        )}

        {isEditing&&(
          <Edit
              setIsEditing={setIsEditing}
              clients={clients}
              selectedClient={selectedClient}
              setClients={setClients}
          />
        )}

      
    </Wrapper>
  )
};

export default Home;



          {/* // clients={clients}
          // handleEdit={handleEdit}
          // handleDelete={handleDelete}
          // handleUpdate={handleUpdate} */}