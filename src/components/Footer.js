
import React, { Component } from "react";
import SimpleReactFooter from "simple-react-footer";


export default class Footer extends Component {
  
render() {
  const description = " Beach Resort is a full service holiday lodging facility, located at the seaside, with access to a private beach. The beach being the primary focus for tourists. A Beach Resort offers a wide range of services and amenities and typically includes entertainment and recreational activities.";
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