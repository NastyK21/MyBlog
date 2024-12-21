import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}


export default PostCard

// import React from "react";
// import appwriteService from "../appwrite/config";
// import { Link } from "react-router-dom";

// function PostCard({ $id, title, featuredImage }) {
//   return (
//     <Link to={`/post/${$id}`} className="w-full max-w-xs mx-auto">
//       <div className="relative group overflow-hidden rounded-xl bg-black text-white shadow-lg">
//         <div className="w-full h-56 mb-4 group-hover:scale-105 transition-transform duration-300">
//           <img
//             src={appwriteService.getFilePreview(featuredImage)}
//             alt={title}
//             className="w-full h-full object-cover rounded-xl"
//           />
//         </div>
//         <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-black p-4 rounded-xl">
//           <h2 className="text-2xl font-bold">{title}</h2>
//         </div>
//       </div>
//     </Link>
//   );
// }

// export default PostCard;
