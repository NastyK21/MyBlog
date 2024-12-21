import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
            </Container>
    </div>
  )
}

export default AllPosts 

// import React, { useState, useEffect } from 'react';
// import { Container, PostCard } from '../components';
// import appwriteService from "../appwrite/config";

// function AllPosts() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await appwriteService.getPosts([]);
//         if (response && response.documents) {
//           setPosts(response.documents);
//         }
//       } catch (error) {
//         console.error("Error fetching posts:", error);
//       }
//     };

//     fetchPosts();
//   }, []); // Empty dependency array to fetch posts only on mount

//   return (
//     <div className="w-full py-8 bg-black">
//       <Container>
//         <h2 className="text-white text-2xl font-bold mb-6">Trending Posts</h2>
//         <div className="flex overflow-x-scroll space-x-4 pb-4">
//           {posts.length === 0 ? (
//             <p className="text-white w-full text-center">No posts available.</p>
//           ) : (
//             posts.map((post) => (
//               <div key={post.$id} className="w-48">
//                 <PostCard {...post} />
//               </div>
//             ))
//           )}
//         </div>
//       </Container>
//     </div>
//   );
// }

// export default AllPosts;
