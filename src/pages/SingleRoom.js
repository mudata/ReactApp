import React, { Component, useContext } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../providers/context";
import StyledHero from "../components/StyledHero";
import "firebase/firestore";
import { getCookie } from "../source";
import { ToastsContainer, ToastsStore } from 'react-toasts';
import { deleteRoom, remove } from "../providers/fetchRooms";

export default class SingleRoom extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.id2,
      defaultBcg,
    };
  }
  static contextType = RoomContext;
  isOnline = false;



  async DeleteRoom() {
    const { getRoom, getData } = this.context;
    //room
    const room = getRoom(this.state.slug);
    await deleteRoom(room).then(result => {
      ToastsStore.success("Hey, you delete this room ");
      console.log(getData())
      getData().then(() => {

      })

    })
      .catch(error => {
        ToastsStore.error(`error`)

      });



  }
  async RemoveFromFavorite() {
    const { getRoom, getData } = this.context;
    //room
    const room = getRoom(this.state.slug);
    //user
    const user = getCookie("cookie3")
    remove(room.id2, user).then(result => {
      ToastsStore.success("Hey, you remove this room from favorite");
      console.log(getData())
      getData().then(() => {

      })

    })
      .catch(error => {
        ToastsStore.error(`error`)

      });


  }
  async addToFavorite() {

    const { getRoom, getData } = this.context;
    //room
    const room = getRoom(this.state.slug);
    console.log(room);

    //user
    const user = getCookie("cookie3")
    console.log(user);
    const obj = {
      "name": user
    };








    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(obj);

    var requestOptions = {
      method: 'PATCH',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`https://reactapp-248b5-default-rtdb.firebaseio.com/rooms/${room.id2}/fields/users/${user}.json`, requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
        //componentDidMount()
        ToastsStore.success("Hey, you just add this room to your favorites")

        console.log(getData())
        getData().then(() => {

        })

        //
      })
      .catch(error => {
        console.log('error', error)
        ToastsStore.error(`error`)

      });






  }
  render() {
    const { getRoom } = this.context;

    const room = getRoom(this.state.slug)




    if (!room) {
      return (
        <div className="error">
          <h3>no such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;
    const [mainImg, ...defaultImg] = images;
    // const found = room.users.find(element => element.name === getCookie("cookie3"));
    let found = "";
    // console.log(found);
    for (const key in room.users) {
      if (Object.prototype.hasOwnProperty.call(room.users, key)) {
        const element = room.users[key];
        if (element.name === getCookie("cookie3")) {
          found = element.name;
        }
      }
    }

    return (
      <>
        {/* <ToastsContainer store={ToastsStore}/>  */}
        <StyledHero img={mainImg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImg.map((item, index) => {
              // return <img key={index} src={item} alt={name} />;
              return <img src="https://pix10.agoda.net/hotelImages/487/487386/487386_13090617190014898442.jpg?s=1024x768" alt="single room" />
            })}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : ${size} SQFT</h6>
              <h6>
                max capacity :{" "}
                {capacity > 1 ? `${capacity} people` : `${capacity} person `}
              </h6>
              <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
              <h6>{breakfast && "free breakfast included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => {
              return <li key={index}>- {item}</li>;
            })}
          </ul>
        </section>
        {getCookie("cookie") && (
          <button
            className="favorite-botton"
            onClick={() => {
              this.addToFavorite();

            }}
          >
            Add to Favorite
          </button>
        )}
        {found == getCookie("cookie3") && (
          <button
            className="favorite-botton"
            onClick={() => {
              this.RemoveFromFavorite();

            }}
          >
            Remove From Favorite
          </button>
        )}
        {getCookie("cookie2") == "admin" && (
          <button
            className="favorite-botton"
            onClick={() => {
              this.DeleteRoom();

            }}
          >
            Delete Room
          </button>
        )}





        <div>

          {<ToastsContainer store={ToastsStore} />}
        </div>
      </>
    );
  }
}
