import React, { useEffect } from 'react'
import { deleteFoyer, detailsFoyer } from '../../Redux/actions/foyerActions';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import EditDorm from '../EditDorm/EditDorm';
import BookDorm from '../BookDorm/BookDorm';
import ForStudent from '../private/ForStudent';
import ForDirector from '../private/ForDirector';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBTable,
  MDBTableHead,
  MDBTableBody
} from 'mdb-react-ui-kit';
import { getAllBookings } from '../../Redux/actions/bookingActions';
const DormDashboard = ({foyer}) => {
  
    const oneFoyer = useSelector((state)=> state.foyerReducer.oneFoyer);
    const allBookings = useSelector((state)=> state.bookingReducer.bookings);
    
const {id} = useParams()
  const dispatch = useDispatch();
 useEffect(() => {
    dispatch(detailsFoyer(id)) 
  }, []);
  useEffect(() => {
    dispatch(getAllBookings());
    }, []);
    console.log(allBookings);
    console.log(id)






  return (
    <div>
        
        <section style={{ backgroundColor: '#eee' }}>
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol>
            <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
              <MDBBreadcrumbItem>
                <a href='#'>Home</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem>
                <a href="#">User</a>
              </MDBBreadcrumbItem>
              <MDBBreadcrumbItem active>User Profile</MDBBreadcrumbItem>
            </MDBBreadcrumb>
          </MDBCol>
        </MDBRow>

        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://static.vecteezy.com/system/resources/previews/007/241/795/original/easy-to-use-flat-icon-of-building-vector.jpg"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: '150px' }}
                  fluid />
                <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                <div className="d-flex justify-content-center mb-2">
                <ForDirector>
        <EditDorm/>
        <MDBBtn onClick={() => dispatch(deleteFoyer(id))} ><Link to="/">delete</Link></MDBBtn> 
        </ForDirector>
        <ForStudent><BookDorm /></ForStudent>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
            <MDBCardBody>
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Fullname</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{oneFoyer.fullname}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Email</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">example@example.com</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Phone</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">(097) 234-5678</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Available Rooms</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">{oneFoyer.maxCapacity}</MDBCardText>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow>
                  <MDBCol sm="3">
                    <MDBCardText>Address</MDBCardText>
                  </MDBCol>
                  <MDBCol sm="9">
                    <MDBCardText className="text-muted">Bay Area, San Francisco, CA</MDBCardText>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBCard className="mb-4">
          <MDBTable>
      <MDBTableHead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>First</th>
          <th scope='col'>Last</th>
          <th scope='col'>Email</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <th scope='row'>1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        
      </MDBTableBody>
    </MDBTable>
    </MDBCard>
    </MDBCol>
        </MDBRow>
      </MDBContainer>
      
    </section>
    </div>
  )
}

export default DormDashboard