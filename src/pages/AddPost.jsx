import React from 'react'
import { Container, PostForm } from '../components'

function AddPost() {
  return (
    <div className='py-8'>
        <Container>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost

// import React from 'react';
// import { Container, PostForm } from '../components';

// function AddPost() {
//   return (
//     <div className="py-8 bg-black min-h-screen">
//       <Container>
//         <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
//           <h2 className="text-3xl text-white font-bold mb-6">Add New Post</h2>
//           <PostForm />
//         </div>
//       </Container>
//     </div>
//   );
// }

// export default AddPost;
