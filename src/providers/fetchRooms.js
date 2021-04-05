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
        // ToastsStore.success("Hey, you delete this room ");
        // setTimeout(() => {
        //   window.location.reload();
        // }, 2500);
      })
      .catch(error => {
        // ToastsStore.error(`error`)
        // setTimeout(() => {
        //   window.location.reload();
        // }, 2500);
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
    //   ToastsStore.success("Hey, you remove this room from favorite");
    //   setTimeout(() => {
    //     window.location.reload();
    //   }, 2500);
    })
    .catch(error => {
    //   ToastsStore.error(`error`)
    //   setTimeout(() => {
    //     window.location.reload();
    //   }, 2500);
    // });
  
  });
}

  