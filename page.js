
import Link from 'next/link'
// import React, { useState } from 'react'

// const [title, setTitle] = useState();

//  export const getServerSideProps= (context)=> {
//    console.log(context) 
//    console.log("hjgkjg",context.query) 
//    return {
//        props: { 
//           title: context.query.name //pass it to the page props
//        }

//   }
//  }

const page = (props) =>{
  console.log(props);
    return (
      <div>
        {/* <h1>{params.student1}</h1> */}
        {/* <h1>{props.params.student1}</h1> */}
        <h3>STUDENT INFO</h3>
        <h4>NAME - {props.searchParams.name}</h4>
        <h4>EMAIL - {props.searchParams.email}</h4>
      </div>
    )
  }

export default page
