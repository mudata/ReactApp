// import React, { useContext } from "react";
// import { UserContext } from "../providers/UserProvider";
// import { Link, Redirect, useHistory } from "react-router-dom";
// import { auth, firestore } from "../firebase";
// import { getAllCookies, getCookie, removeCookie, setCookie } from '../source'
// import Room from "../components/Room";



// const ProfilePage = async () => {
//   let rooms = [];
//   const user = useContext(UserContext);
//   var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
//   };

//   const res= await fetch("https://reactapp-248b5-default-rtdb.firebaseio.com/rooms.json", requestOptions)
//     .then(response => response.json())
//     .then(result => {

//       return result
//     })
//     .catch(error => console.log('error', error));

  
//     //console.log(res)
//     res.then((result)=>{
      
//       for (const key in result) {
//         //console.log(result[key])
//         const one = result[key].fields.users
//           for (const key2 in one) {
//             if (one[key2].name === user.uid) {
//               rooms.push(result[key].fields)
            
//             }
//           }
      
//       }
     
//     });

//     console.log(rooms)
//   if (rooms.length === 0) {
//     return (
//       <div><div className="flex border flex-col items-center md:flex-row md:items-start border-blue-400 px-3 py-4">
//         <div
//           style={{
//             background: `url(${user.photoURL || 'https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png'})  no-repeat center center`,
//             backgroundSize: "cover",
//             height: "200px",
//             width: "200px"
//           }}
//           className=""
//         ></div>
//         <div className="">
//           <h2 className="">{user.displayName || ""}</h2>
//           <h3 className="">{user.email || ""}</h3>
//         </div>
//       </div>
//         <div className="empty-search">

//           <h3>unfortunately no rooms matched your search parameters</h3>
//         </div>
//       </div>
//     );
//   }
//   console.log(rooms)
//   return (
//     <div className="mx-auto w-11/12 md:w-2/4 py-8 px-4 md:px-8">
//       <div className="flex border flex-col items-center md:flex-row md:items-start border-blue-400 px-3 py-4">
//         <div
//           style={{
//             background: `url(${user.photoURL || 'https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png'})  no-repeat center center`,
//             backgroundSize: "cover",
//             height: "200px",
//             width: "200px"
//           }}
//           className=""
//         ></div>
//         <div className="">
//           <h2 className="">{user.displayName || ""}</h2>
//           <h3 className="">{user.email || ""}</h3>
//         </div>
//       </div>
//       <section className="roomslist">
//         <div className="roomslist-center">
//           {rooms.map(item => {
//             return <Room key={item.id2} room={item} />;
//           })}
//         </div>
//       </section>
//     </div>


//   )
// };

// export default ProfilePage;



import React, { useContext } from "react";
import RoomsFilter from "../components/RoomFilter";
import { UserContext } from "../providers/UserProvider";
import RoomsList from "../components/RoomList";
import { withRoomConsumer } from "../providers/context";
import Loading from "../components/Loading";
import Room from "../components/Room";
function ProfilePage({ context }) {
  const { loading, sortedRooms, rooms } = context;
  console.log(rooms);

  const user = useContext(UserContext);
  console.log(user)
let favoriteRomms=[];
  rooms.forEach(element => {
    if(element.hasOwnProperty("users")){
      console.log(element);
      console.log("ima property")
      for (const key in element.users) {
        if (element.users[key].name===user.uid) {
          favoriteRomms.push(element)
        }
      }
      if(element.users.name===user.uid){
        favoriteRomms.push(element.fields)
            }
    }
    console.log(favoriteRomms)
  });
  return (
        <div className="mx-auto w-11/12 md:w-2/4 py-8 px-4 md:px-8">
          <div className="flex border flex-col items-center md:flex-row md:items-start border-blue-400 px-3 py-4">
            <div
              style={{
                background: `url(${user.photoURL || 'https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png'})  no-repeat center center`,
                backgroundSize: "cover",
                height: "200px",
                width: "200px"
              }}
              className=""
            ></div>
            <div className="">
              <h2 className="">{user.displayName || ""}</h2>
              <h3 className="">{user.email || ""}</h3>
            </div>
          </div>
          <section className="roomslist">
            <div className="roomslist-center">
              {favoriteRomms.map(item => {
                return <Room key={item.id2} room={item} />;
              })}
            </div>
          </section>
        </div>
    
    
      )
}

export default withRoomConsumer(ProfilePage);

