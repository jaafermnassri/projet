import React from 'react';
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardImage,
//   MDBBtn
// } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import ForDirector from '../private/ForDirector';
import ForStudent from '../private/ForStudent';
import "./dormcard.css"

export default function DormCard({dorm}) {
  return (
    // <MDBCard>
    //   <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
    //   <MDBCardBody>
    //     <MDBCardTitle>{dorm.fullname}</MDBCardTitle>
    //     <MDBCardText>
    //       Some quick example text to build on the card title and make up the bulk of the card's content.
    //     </MDBCardText>
    //     <MDBBtn ><Link to={`/${dorm._id}`}>Details</Link></MDBBtn>
    //     {/* <MDBBtn ><Link to={`/book/${dorm._id}`}>Book Now</Link></MDBBtn> */}
    //   </MDBCardBody>
    // </MDBCard>
  <>
   <div className="col-md-4">
  
  <div className="profile-card-6"><img src={dorm.image} className="img img-responsive" />
    <div className="profile-name">{dorm.fullname}</div>
    <div className="profile-position">Lorem Ipsum Donor</div>
    <div className="profile-overview">
      <div className="profile-overview">
        <div className="row text-center">
          <div className="col-xs-4">
          <ForStudent><Link to={`/${dorm._id}`}>MORE</Link></ForStudent>
          <ForDirector><Link to={`/dash/${dorm._id}`}>DETAILS</Link></ForDirector>
          </div>
          {/* <div className="col-xs-4">
          <Link to={`/book/${dorm._id}`}>Book Now</Link>
          </div> */}
        </div>
      </div>
    </div>
  </div>
</div>


  </>
  );
}