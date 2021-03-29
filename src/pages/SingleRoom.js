import React, { Component,useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import defaultBcg from "../images/room-1.jpeg";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext} from "../providers/context";
import StyledHero from "../components/StyledHero";
import "firebase/firestore";
import firebase from "firebase/app";
import { getCookie } from "../source";
import { generateUserDocument} from "../firebase";
import { auth } from "../firebase";

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
  // static useContext = UserContext;
  
  addToFavorite(){
    
    const { getRoom } = this.context;
//room
    const room =getRoom(this.state.slug);
    console.log(room);
    auth.onAuthStateChanged(async userAuth => {
      //user
      const user = await generateUserDocument(userAuth,[]);
      console.log(user);
      const obj= {
        "name" : user.uid
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

fetch(`https://reactapp-248b5-default-rtdb.firebaseio.com/rooms/${room.id2}/fields/users/${user.uid}.json`, requestOptions)
  .then(response => response.text())
  .then(result => {
    //componentDidMount()
    window.location.reload();
    console.log(result)})
  .catch(error => console.log('error', error));
    });
    //componentDidMount() {}
    
   }
  render() {
    const { getRoom } = this.context;

    const room =getRoom(this.state.slug)


    
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
    console.log(room)
    console.log(extras)
    const [mainImg, ...defaultImg] = images;


    
    return (
      <>
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
              return <img key={index} src={item} alt={name} />;
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
        
      </>
    );
  }
}
