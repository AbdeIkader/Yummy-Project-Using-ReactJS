import React from 'react';
import { Helmet } from "react-helmet";

export default function About() {
  return (
    <>
    <Helmet>
                <meta charSet="utf-8" />
                <title>About</title>
            </Helmet>
    <div className="profile w-50 bg-info py-4 my-4 m-auto text-center">
        <h2>About Component</h2>
        
    </div>
    </>
  )
}
