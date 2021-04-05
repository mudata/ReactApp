import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { withRoomConsumer } from "../providers/context";
import Room from "../components/Room";
function ProfilePage({ context }) {
  
  const { loading, sortedRooms, rooms } = context;

  const user = useContext(UserContext);
  let favoriteRomms = [];
  rooms.forEach((element) => {
    if (element.hasOwnProperty("users")) {
      for (const key in element.users) {
        if (element.users[key].name === user.uid) {
          favoriteRomms.push(element)
        }
      }
      if (element.users.name === user.uid) {
        favoriteRomms.push(element.fields)
      }
    }

    
  });
  return (
    
    <div className="mx-auto w-11/12 md:w-2/4 py-8 px-4 md:px-8">
      <div className="profile">
        <div
          style={{
            background: `url(${user.photoURL || 'https://res.cloudinary.com/dqcsk8rsc/image/upload/v1577268053/avatar-1-bitmoji_upgwhc.png'})  no-repeat center center`,
            backgroundSize: "cover",
            height: "150px",
            width: "150px"
          }}
          className="profile-img"
        ></div>
        <div className="user-info">
          <h2 className="">{user.displayName || ""}</h2>
          <h3 className="">{user.email || ""}</h3>
        </div>
      </div>
      <section className="roomslist">
        <div className="roomslist-center">


          {favoriteRomms.length===0 && (

            <div className="no-rooms">
              <h3>unfortunately no rooms matched your search parameters</h3>
            </div>
          )}
          {favoriteRomms && (

            favoriteRomms.map(item => {
              return <Room key={item.id2} room={item} />;
            })
          )}


        </div>
      </section>
    </div>


  )
}

export default withRoomConsumer(ProfilePage);

