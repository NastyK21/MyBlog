import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div style={{ width }}
            className="flex items-center justify-center font-bold text-red-600 text-3xl tracking-widest">
      <img src="https://files.oaiusercontent.com/file-41A8D4xHUuRLzTacXrQcWW?se=2024-12-21T12%3A00%3A29Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D6f4c64ba-3028-43a2-9730-64fe680a84b6.webp&sig=nx4FzQAVsnHbQAzoXAhtjwZ48WKYrbdj2SP15L/OZ/M%3D"/>
    </div>
  )
}

export default Logo



