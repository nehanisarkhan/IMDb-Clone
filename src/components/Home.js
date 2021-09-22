// import { useState, useEffect } from "react";
// import Axios from "axios";
// // import "./style.css";

// const Homepage = () => {
//   const [Image, setImage] = useState([]);
//   const count = 1;

//   useEffect(() => {
//     Axios.get(
//       "http://www.omdbapi.com/?t=shershaah&y=2021&apikey=cade37d1&"
//     ).then((data) => {
//       setImage(data.data);
//       console.log(data);
//     });
//   }, [count]);

//   return (
//     <section className="main-card--cointainer">
//       {[Image].map((item) => {
//         return (
//           <>
//             <div className="card-container" key={item.id}>
//               <div className="card " style={{ width: "60%" }}>
//                 <img src={item.Poster} alt="images" className="card-media" />
//               </div>
//             </div>
//           </>
//         );
//       })}
//     </section>
//   );
// };

// export default Homepage;
