import { MDBBtn, MDBInput, MDBModal, MDBModalBody, MDBModalContent, MDBModalDialog, MDBModalFooter, MDBModalHeader, MDBModalTitle, MDBTextArea } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addBook } from '../../Redux/actions/bookingActions';
import { detailsFoyer } from '../../Redux/actions/foyerActions';

const BookDorm = () => {

  const [staticModal, setStaticModal] = useState(false);

  const toggleShow = () => setStaticModal(!staticModal);
  const capacity = useSelector((state)=> state.foyerReducer.oneFoyer.maxCapacity);
  
  const {id} = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [university, setUniversity] = useState("");
  const [birthDate, setBirthDate] = useState("");
  useEffect(() => {
    dispatch(detailsFoyer(id));
    }, []);
  const handleSubmit = (event) => {
    event.preventDefault();

    const data = new FormData();
    
    data.append("university",university);
    data.append("birthDate", birthDate);

    dispatch(addBook(id,{
      university : data.get("university"),
      birthDate : data.get("birthDate")
    } ,navigate));
    
    

  };

  return (
    <div>
      <MDBBtn onClick={toggleShow}>Book</MDBBtn>
  
  <MDBModal staticBackdrop tabIndex='-1' show={staticModal} setShow={setStaticModal}>
    <MDBModalDialog>
      <MDBModalContent>
        <MDBModalHeader>
          <MDBModalTitle>Modal title</MDBModalTitle>
          <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
        </MDBModalHeader>
        <MDBModalBody>
        <form method='POST'  >
              University<MDBInput name="university"  onChange={(e) => {setUniversity(e.target.value);}} label='' type='text' className="mb-4" />
                Birthdate<MDBInput name="birthDate"  onChange={(e) => {setBirthDate(e.target.value);}} label='' type='text' className="mb-4" />
                Email<MDBInput label='' type='text' className="mb-4" />
                Phone<MDBInput label='' type='text' className="mb-4" />
                Additional information<MDBTextArea label='' rows={4} className="mb-4" />

  

        </form>

        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color='secondary' onClick={toggleShow}>
            Close
          </MDBBtn>
          <MDBBtn type="submit"  onClick={(e)=>{toggleShow();handleSubmit(e)}} >Save</MDBBtn>
        </MDBModalFooter>
      </MDBModalContent>
    </MDBModalDialog>
  </MDBModal>

        {/* <form method='POST'  onSubmit={handleSubmit}>
              University<MDBInput name="university"  onChange={(e) => {setUniversity(e.target.value);}} label='' type='text' className="mb-4" />
                Birthdate<MDBInput name="birthDate"  onChange={(e) => {setBirthDate(e.target.value);}} label='' type='text' className="mb-4" />
                Email<MDBInput label='' type='text' className="mb-4" />
                Phone<MDBInput label='' type='text' className="mb-4" />
                Additional information<MDBTextArea label='' rows={4} className="mb-4" />

          <div className="d-grid gap-2 mt-3">
            <button type="submit"  className="btn btn-primary">Add</button>
          </div>

        </form> */}
    </div>
  )
}

export default BookDorm