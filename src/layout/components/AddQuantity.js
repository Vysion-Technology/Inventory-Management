import react from 'react';


const AddQuantity =()=> {
    return (
        <Dialog
          open={open}
          onClose={handleaddClose}
        >
          <Box className={classes.box} >
            <Box className={classes.top} >
              <Typography
                // className={classes.text} 
                style={{fontWeight:"600",
                fontSize:"20px"}}
              >
                `Enter the quntity you count to`
              </Typography>
              <TextField
                label="Enter the Quantity"
              />
            </Box>
            <Box className={classes.bottom} >
              <Button variant="contained" onClick={handleClose} 
              // style={{margin:"10px",width:"180px",height:"44px",borderRadius:"8px"}}
              className={classes.ButtonAdd} 
              >Remove Item</Button>
              <Button  variant="contained" 
              // style={{margin:"10px",width:"180px",height:"44px",borderRadius:"8px"}} 
              className={classes.ButtonAdd} 
              onClick={handleClose} >Add Item</Button>
            </Box>
          </Box>
        </Dialog>
    )
}

export default AddQuantity;