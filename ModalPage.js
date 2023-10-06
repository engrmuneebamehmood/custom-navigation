import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";
function ModalPage()
{
    const [showModal,setShowModal]=useState(false);
    const handleClick=()=>{
    setShowModal(true);
}

const handleClose=()=>
{
    setShowModal(false)
}
const actionBar=<div>
    <Button onClick={handleClose} primary> Accept</Button>
</div>
const modal=<Modal onClose={handleClose} actionBar={actionBar}>
    <p>
        This is react js internship at Rippel Berry.
    </p>

</Modal>


return <div className="relative">
    <Button onClick={handleClick} primary>
    Open Modal
    </Button>
 
   {showModal && modal }
   <p>
    Hi! I am Muneeba Mehmood.
   </p>
   
</div>
}
export default ModalPage;