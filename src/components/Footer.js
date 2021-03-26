
import React, { Component } from "react";
import SimpleReactFooter from "simple-react-footer";


export default class Footer extends Component {
  
render() {
  const description = "According to wikipedia, the cat (Felis catus) is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the domestic cat to distinguish it from the wild members of the family. A cat can either be a house cat, a farm cat or a feral cat; the latter ranges freely and avoids human contact.";
  const title = "Beach Resort";
  const columns = [
    {
        title: "Resources",
        resources: [
            {
                name: "About",
                link: "/about"
            },
            
            {
                name: "Contact",
                link: "/contact"
            },
            {
                name: "Home",
                link: "/"
            },
            {
                name: "Rooms",
                link: "/rooms"
            }
        ]
    },
    
    // {
    //     title: "Sign in",
    //     resources: [
    //         {
    //             name: "Sign In",
    //             link: "/login"
    //         },
    //         {
    //             name: "Sign Up",
    //             link: "/register"
    //         }
    //     ]
    // }
 ];
 return <SimpleReactFooter 
    description={description} 
    title={title}
    columns={columns}
    linkedin=""
    facebook=""
    twitter=""
    instagram=""
    youtube=""
    pinterest=""
    iconColor="black"
    backgroundColor="#F7F7F7"
    fontColor="black"
    copyrightColor="transperent"
 />;
};
}