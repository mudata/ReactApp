export const postRoom = async (obj) => {
    var raw = JSON.stringify(obj);

        var requestOptions = {
            method: 'POST',
            body: raw,
            redirect: 'follow'
        };

       await fetch("https://reactapp-248b5-default-rtdb.firebaseio.com/rooms.json", requestOptions)
            .then(response => response.text())
            .then(result => {
                
                return result;
            })
            .catch(error => {
                
            });
  };
  export const deleteRoom= async (room)=>{
    var raw = "";

    var requestOptions = {
      method: 'DELETE',
      body: raw,
      redirect: 'follow'
    };

    fetch(`https://reactapp-248b5-default-rtdb.firebaseio.com/rooms/${room.id2}.json`, requestOptions)
      .then(response => response.text())
      .then(result => {
      })
      .catch(error => {
      });
  }
  export const remove= async (id2,user)=>{
    var raw = JSON.stringify({ name: "" });

  var requestOptions = {
    method: 'PATCH',
    body: raw,
    redirect: 'follow'
  };

 await fetch(`https://reactapp-248b5-default-rtdb.firebaseio.com/rooms/${id2}/fields/users/${user}.json`, requestOptions)
    .then(response => response.text())
    .then(result => {
    })
    .catch(error => {
  
  });
}
export const getAll =async () =>{
  
  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  
    await fetch("https://reactapp-248b5-default-rtdb.firebaseio.com/rooms.json", requestOptions)
    .then((response) => response.json()) //2
    .then((result) => {
      let arr=[];
      for (const key in result) {
        result[key].fields.id2=key
        // console.log(result[key])
        arr.push(result[key])
      }
      let rooms = this.formatData(arr);
  // console.log(response.items)
  let featuredRooms = rooms.filter(room => room.featured === true);
  let maxPrice = Math.max(...rooms.map(item => item.price));
  let maxSize = Math.max(...rooms.map(item => item.size));

  this.setState({
    rooms,
    featuredRooms,
    price: maxPrice,
    maxPrice,
    maxSize
  });
  
    });

  
}

  