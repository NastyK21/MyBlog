import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
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

export default Home 
// import React, { useEffect, useState } from 'react';
// import appwriteService from "../appwrite/config";
// import { Container, PostCard } from '../components';

// function Home() {
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         appwriteService.getPosts().then((posts) => {
//             if (posts) {
//                 setPosts(posts.documents);
//             }
//         });
//     }, []);

//     if (posts.length === 0) {
//         return (
//             <div className="w-full py-8 mt-4 text-center bg-black">
//                 <Container>
//                     <div className="flex flex-wrap justify-center">
//                         <div className="p-4 w-full max-w-md text-white">
//                             <h1 className="text-3xl font-bold mb-4">
//                                 Login to read posts
//                             </h1>
//                             <p className="text-lg">
//                                 It seems like you haven't logged in yet. Please sign in to access the posts.
//                             </p>
//                         </div>
//                     </div>
//                 </Container>
//             </div>
//         );
//     }

//     return (
//         <div className='w-full py-8 bg-black'>
//             <Container>
//                 <div className='flex flex-wrap'>
//                     {posts.map((post) => (
//                         <div key={post.$id} className='p-4 w-1/4'>
//                             <PostCard {...post} />
//                         </div>
//                     ))}
//                 </div>
//             </Container>
//         </div>
//     );
// }

// export default Home;
