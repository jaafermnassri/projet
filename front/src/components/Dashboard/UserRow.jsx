import React, { useEffect } from 'react'
import { MDBBadge, MDBBtn, MDBTableBody,MDBTable,MDBTableHead } from 'mdb-react-ui-kit';
import { useDispatch } from 'react-redux';
import { deleteUser, detailsUser } from '../../Redux/actions/userActions';
import { useParams } from 'react-router-dom';
const UserRow = ({user}) => {
  // const {id} = useParams()
  // const dispatch = useDispatch();
  // useEffect(() => {
  //    dispatch(detailsUser(id)) 
  //  }, [])
  return (
    <div>
        <MDBTable align='middle'>
        <MDBTableHead>
        </MDBTableHead>
        <MDBTableBody>
        <tr>
          <td >
            <div className='d-flex align-items-center'>
              <img
                src='https://mdbootstrap.com/img/new/avatars/8.jpg'
                alt=''
                style={{ width: '45px', height: '45px' }}
                className='rounded-circle'
              />
              <div className='ms-3'>
                <p className='fw-bold mb-1' >{user.firstName} {user.lastName}</p>
                <p className='text-muted mb-0'>{user.email}</p>
              </div>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Software engineer</p>
            <p className='text-muted mb-0'>IT department</p>
          </td>
          <td>
            <MDBBadge color='success' pill>
              Active
            </MDBBadge>
          </td>
          <td>Senior</td>
          <td>
          {/* onClick={() => dispatch(deleteUser(id))} */}
            <MDBBtn color='link'   rounded size='sm'>
              Delete
            </MDBBtn>
          </td>
        </tr>
       
      </MDBTableBody>
      
      </MDBTable>
    </div>
  )
}

export default UserRow