// // // create class
// // class ImageGrid extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       images: [
// //         {
// //           name: "Image 1",
// //           src: "//placeimg.com/600/400?text=1",
// //           desc: "This describes this image..",
// //         },
// //         {
// //           name: "Image 2",
// //           src: "//placeimg.com/600/400?text=2",
// //           desc: "This describes this image 2..",
// //         },
// //         {
// //           name: "Image 3",
// //           src: "//placeimg.com/600/400/any",
// //           desc: "This describes this image 3 ..",
// //         },
// //         {
// //           name: "Image 4",
// //           src: "//placeimg.com/600/400?text=4",
// //           desc: "This describes this image 4..",
// //         },
// //         {
// //           name: "Image 5",
// //           src: "//placeimg.com/600/400?text=5",
// //           desc: "This describes this image 5..",
// //         },
// //         {
// //           name: "Image 6",
// //           src: "//placeimg.com/600/400?text=6",
// //           desc: "This describes this image 6..",
// //         },
// //       ],
// //       currentSelection: {},
// //     };
// //     this.handleClick = this.handleClick.bind(this);
// //   }

// //   componentDidMount() {
// //     // set first image selected
// //     this.setState({ currentSelection: this.state.images[0] });
// //   }

// //   handleClick(val) {
// //     //console.log(val)
// //     this.setState({ currentSelection: val });
// //   }

// //   render() {
// //     var { images, currentSelection } = this.state;
// //     return (
// //       <div>
// //         <div className="row">
// //           <div className="col-md">
// //             <div className="row no-gutters">
// //               {images.map((val, k) => {
// //                 return (
// //                   <div className="col-sm-4" key={k}>
// //                     <img
// //                       src={val.src}
// //                       className={
// //                         "img-fluid " +
// //                         (val.src === currentSelection.src ? "p-1" : "")
// //                       }
// //                       onClick={() => this.handleClick(val)}
// //                     />
// //                   </div>
// //                 );
// //               })}
// //             </div>
// //           </div>
// //           <div className="col-md">
// //             <h3 className="font-weight-light">{currentSelection.name}</h3>
// //             <p>{currentSelection.desc}</p>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }
// // }

// // class App extends React.Component {
// //   render() {
// //     return (
// //       <div className="container-fluid py-3">
// //         <h4 className="text-center font-weight-light text-light mb-3">
// //           React Gallery with Bootstrap
// //         </h4>
// //         <ImageGrid />
// //       </div>
// //     );
// //   }
// // }

// // ReactDOM.render(<App />, document.getElementById("root"));
// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Switch, Route } from "react-router";
// import Header from "./components/Header";
// import MovieList from "./components/MovieList";
// import WatchList from "./components/watchlist/WatchList";
// import Signin from "./components/SignIn";
// import Default from "./components/Default";
// import MovieDetails from "./components/MovieDetails";
// const App = () => {
//   return (
//     <div>
//       <Header />
//       <Switch>
//         <Route path="/login" component={Signin}></Route>
//         <Route exact path="/" component={MovieList}></Route>
//         <Route path="/details" component={MovieDetails}></Route>

//         <Route path="/watchlist" component={WatchList}></Route>
//         <Route component={Default}></Route>
//       </Switch>
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import { Card, Button } from "react-bootstrap";
// import { MovieConsumer } from "../../Context";
// import styled from "styled-components";
// import { Link } from "react-router-dom";

// const WatchListItem = ({ item, value }) => {
//   const { id, title, img, rating } = item;
//   return (
//     <>
//       <Button
//         variant="secondary"
//         onClick={() => value.clearWatchlist()}
//         className="text-capitalize"
//       >
//         remove all
//       </Button>
//       <MovieWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
//         <div className="card">
//           <MovieConsumer>
//             {(value) => (
//               <Card style={{ width: "18rem" }}>
//                 <Link to="/details">
//                   <Card.Img
//                     variant="top"
//                     className="img-container p-5"
//                     onClick={() => value.handleDetail(id)}
//                     src={img}
//                   />
//                 </Link>
//                 <Card.Body>
//                   <Card.Title>{title}</Card.Title>
//                   <Card.Subtitle className="mb-2 text-muted">
//                     <i class="fas fa-star" /> {rating}
//                   </Card.Subtitle>
//                   {/* <Card.Text>{info}</Card.Text> */}
//                   {/* <Button variant="outline-secondary">Go To Watchlist</Button> */}
//                   <Button
//                     variant="secondary"
//                     className="mx-3"
//                     onClick={() => value.removeItem(id)}
//                   >
//                     Remove
//                   </Button>
//                 </Card.Body>
//               </Card>
//             )}
//           </MovieConsumer>
//         </div>
//       </MovieWrapper>
//     </>
//   );
// };
// // Movie.propTypes = {
// //   movie: PropTypes.shape({
// //     id: PropTypes.number,
// //     rating: PropTypes.number,
// //     info: PropTypes.string,
// //     img: PropTypes.string,
// //     title: PropTypes.string,
// //     watchlist: PropTypes.bool,
// //   }).isRequired,
// // };

// //styled-components

// const MovieWrapper = styled.div`
//   .card {
//     border-color: transparent;
//     transition: all 0.1s linear;
//   }
//   .card-footer {
//     background: transparent;
//     border-top: transparent;
//     transition: all 0.1s linear;
//   }
//   &:hover {
//     .card {
//       border: 0.04rem solid rgba(0, 0, 0, 0.2);
//       box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
//     }
//     .card-footer {
//       background: rgba(247, 247, 247);
//     }
//   }
//   .img-container {
//     position: relative;
//     overflow: hidden;
//   }

//   //transition is for deciding how the effects is going to take place

//   .card-img-top {
//     transition: all 0.1s linear;
//   }
//   .img-container: hover .card-img-top {
//     transform: scale(1.2);
//   }
// `;

// export default WatchListItem;
