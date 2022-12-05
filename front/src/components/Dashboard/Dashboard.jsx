import React from 'react'
import { useDispatch } from 'react-redux';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { useSelector } from 'react-redux';
import UserRow from './UserRow';
import { deleteUser } from '../../Redux/actions/userActions';
const Dashboard = () => {
  const dispatch = useDispatch();
    const allusers = useSelector((state) => state.userReducer.users);
//select
  return (
    <div>
        
        <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Title</th>
          <th scope='col'>Status</th>
          <th scope='col'>Position</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
            {allusers.map((user) => (
          <tr user={user} key={user._id} >
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
            <MDBBtn color='link' onClick={() => dispatch(deleteUser(user._id))}  rounded size='sm'>
              Delete
            </MDBBtn>
          </td>
          </tr>
        ))}
      </MDBTableBody>
      <> </>
    </MDBTable>
   
    </div>
  )
}

export default Dashboard