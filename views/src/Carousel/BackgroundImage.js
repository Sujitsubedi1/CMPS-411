// import React from "react";
import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from
  "mdbreact";
import seluImage1 from "../image/1.jpg";
import seluImage2 from "../image/2.jpg";
import seluImage3 from "../image/3.jpg";

const BackgroundImage = () => {
  return (

    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">

        <div className="carousel-item active">
          <img className="d-block w-100" src={seluImage3} alt="First slide"></img>
        </div>

        <div className="carousel-item">
          <img className="d-block w-100" src={seluImage2} alt="Second slide"></img>
        </div>

        <div className="carousel-item">
          <img className="d-block w-100" src={seluImage1} alt="Third slide"></img>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default BackgroundImage;


// const BackgroundImage = () => {
//   return (
//     <MDBContainer>
//       <MDBCarousel
//         activeItem={1}
//         length={3}
//         showControls={true}
//         showIndicators={true}
//         className="z-depth-1"
//       >
//         <MDBCarouselInner>
//           <MDBCarouselItem itemId="1">
//             <MDBView>
//               <img
//                 className="d-block w-100"
//                 src={seluImage1}
//                 alt="First slide"
//               />
//               <MDBMask overlay="black-light" />
//             </MDBView>
//             <MDBCarouselCaption>
//               <h3 className="h3-responsive">Light mask</h3>
//               <p>First text</p>
//             </MDBCarouselCaption>
//           </MDBCarouselItem>
//           <MDBCarouselItem itemId="2">
//             <MDBView>
//               <img
//                 className="d-block w-100"
//                 src={seluImage2}
//                 alt="Second slide"
//               />
//               <MDBMask overlay="black-light" />
//             </MDBView>
//             <MDBCarouselCaption>
//               <h3 className="h3-responsive">Strong mask</h3>
//               <p>Second text</p>
//             </MDBCarouselCaption>
//           </MDBCarouselItem>
//           <MDBCarouselItem itemId="3">
//             <MDBView>
//               <img
//                 className="d-block w-100"
//                 src={seluImage3}
//                 alt="Third slide"
//               />
//               <MDBMask overlay="black-slight" />
//             </MDBView>
//             <MDBCarouselCaption>
//               <h3 className="h3-responsive">Slight Mast</h3>
//               <p>Third text</p>
//             </MDBCarouselCaption>
//           </MDBCarouselItem>
//         </MDBCarouselInner>
//       </MDBCarousel>
//     </MDBContainer>
//   );
// }

// export default BackgroundImage;