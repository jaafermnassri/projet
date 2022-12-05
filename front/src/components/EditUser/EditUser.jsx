import React, { useEffect, useState } from 'react';
import {MDBBtn,MDBModal,MDBModalDialog,MDBModalContent,MDBModalHeader,MDBModalTitle,MDBModalBody,MDBModalFooter, MDBInput, MDBTextArea} from 'mdb-react-ui-kit';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editFoyer } from '../../Redux/actions/foyerActions';
import { editUser, getCurrentUser } from '../../Redux/actions/userActions';
const EditUser = () => {

    const [staticModal, setStaticModal] = useState(false);

    const toggleShow = () => setStaticModal(!staticModal);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const {id} = useParams();
  const oldUser = useSelector((state)=> state.userReducer.user)
  const [updatedUser, setUpdatedUser] = useState(oldUser)
  
  useEffect(() => {
  dispatch(getCurrentUser(id));
  }, []);
  useEffect(() => {
    setUpdatedUser(oldUser);
    }, [oldUser]);
    
  const handleSubmit = (event) => {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    
    dispatch(editUser(id,updatedUser,navigate));
  };
    return (
      <>
        <MDBBtn onClick={toggleShow}>Edit</MDBBtn>
  
        <MDBModal staticBackdrop tabIndex='-1' show={staticModal} setShow={setStaticModal}>
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Modal title</MDBModalTitle>
                <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody>
                <form method='POST' >
              Firstname<MDBInput name="firstName" value={updatedUser.firstName} onChange={(e)=>setUpdatedUser({...updatedUser,firstName:e.target.value})}  label='' type='text' className="mb-4" />
                Lastname<MDBInput name="lastName" value={updatedUser.lastName} onChange={(e)=>setUpdatedUser({...updatedUser,lastName:e.target.value})}  label='' type='text' className="mb-4" />
                Email<MDBInput name="email" value={updatedUser.email} onChange={(e)=>setUpdatedUser({...updatedUser,email:e.target.value})} label='' type='text' className="mb-4" />
                Phone<MDBInput label='' type='text' className="mb-4" />
                Additional information<MDBTextArea label='' rows={4} className="mb-4" />
                </form>

              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color='secondary' onClick={toggleShow}>
                  Close
                </MDBBtn>
                <MDBBtn type="submit" onClick={(e)=>{toggleShow();handleSubmit(e)}}>Save</MDBBtn>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </>
    )
}

export default EditUser