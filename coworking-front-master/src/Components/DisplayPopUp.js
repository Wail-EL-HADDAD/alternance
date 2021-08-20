import React from 'react'
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button';
import DialogContent from '@material-ui/core/DialogContent';

const DisplayPopUp = ({open,setOpen,data}) => {
    
const handleClose = () => {
    setOpen(false);
  };
  console.log(data.photo)
    return (
        <div>

<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
  <DialogTitle id="form-dialog-title"><h2>Les infos de réservation</h2></DialogTitle>
  <DialogContent>
        {data && data.length > 0 && 
        data.map(c => 
          <div key={c.address}>
             <ul>
          <li>
            {c.name}
          </li>
          <li>
            {c.city}
          </li>
          <li>
            {c.address}
          </li>
          <li>
            {c.description}
          </li>
          <div>
            <img src={c.photo} alt={"Loading..." + c.photo} />
          </div>
          <li>
            {c.prixDemiJ}
          </li>
          <li>
            {c.prixH}
          </li>
          <li>
            {c.prixJ}
          </li>
          
        
          
        </ul>
          </div>
          )
       
        }
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose}  style={{fontSize : '15px', color :"red"}}>
      Close
    </Button>
   
  </DialogActions>
</Dialog>
</div>
    )
}

export default DisplayPopUp
