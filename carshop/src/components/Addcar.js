import React from "react";
import { Button, Dialog, TextField, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import '../App.css';
import SendIcon from '@mui/icons-material/Send';

export default function Addcar(props){

    const [open, setOpen] = React.useState(false)
    const [car, setCar] = React.useState({
        brand:'', model:'', color:'', fuel:'', year:'', price:''
    });

    const handleClickOpen = () =>{
        setOpen(true)
    };
    const handleClose = () =>{
        setOpen(false)
    };
    const handleInputChange = (event) =>{
        setCar({...car, [event.target.name]: event.target.value})
        console.log(car)
    }
    const addCar = () =>{
        props.saveCar(car)
        handleClose()
    }

    return (
    <div>
      <Button size="small" variant="contained" color="success"  onClick={handleClickOpen}
      style={{justifyContent: 'center', marginTop: 5}}
      >
        Add new car
      </Button>
      <Dialog open={open} onClose={handleClose}>
         <DialogTitle>New car</DialogTitle>
         <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="brand"
            value={car.brand}
            onChange={e => handleInputChange(e)}
            label="Brand"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            name="model"
            value={car.model}
            onChange={e => handleInputChange(e)}
            label="Model"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            name="color"
            value={car.color}
            onChange={e => handleInputChange(e)}
            label="Color"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            name="fuel"
            value={car.fuel}
            onChange={e => handleInputChange(e)}
            label="Fuel"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            name="year"
            value={car.year}
            onChange={e => handleInputChange(e)}
            label="Year"
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            name="price"
            value={car.price}
            onChange={e => handleInputChange(e)}
            label="Price"
            fullWidth
            variant="standard"
          />
          </DialogContent>
          <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button endIcon={<SendIcon />} onClick={addCar}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
    )

}