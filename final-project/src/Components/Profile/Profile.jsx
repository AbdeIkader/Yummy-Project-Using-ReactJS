import React from 'react';
import { Helmet } from "react-helmet";

export default function Profile({userData}) {
  return (
    <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Profile</title>
            </Helmet>
    <div className="profile w-50 bg-info py-4 my-4 m-auto text-center">
        <h2>Name :{userData?.first_name} {userData?.last_name}</h2>
        <h2>Age :{userData?.age}</h2>
        <h2>Email :{userData?.email}</h2>
    </div>
    </>
    
  )
}
