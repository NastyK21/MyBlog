import React from 'react'
import {Editor } from '@tinymce/tinymce-react';
import {Controller } from 'react-hook-form';


export default function RTE({name, control, label, defaultValue =""}) {
  return (
    <div className='w-full'> 
    {label && <label className='inline-block mb-1 pl-1'>{label}</label>}

    <Controller
    name={name || "content"}
    control={control}
    render={({field: {onChange}}) => (
        <Editor
        apiKey='vjtf4wygz0q3fe5c0qv4lme76d8nwlr31y9itaqtym9j6oms'
        initialValue={defaultValue}
        init={{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}
        onEditorChange={onChange}
        />
    )}
    />

     </div>
  )
}

// import React from "react";
// import { Editor } from "@tinymce/tinymce-react";
// import { Controller } from "react-hook-form";

// export default function RTE({ name, control, label, defaultValue = "" }) {
//   return (
//     <div className="w-full bg-black rounded-xl p-4">
//       {label && <label className="inline-block mb-2 text-white">{label}</label>}

//       <Controller
//         name={name || "content"}
//         control={control}
//         render={({ field: { onChange } }) => (
//           <Editor
//             apiKey="vjtf4wygz0q3fe5c0qv4lme76d8nwlr31y9itaqtym9j6oms"
//             initialValue={defaultValue}
//             init={{
//               initialValue: defaultValue,
//               height: 500,
//               menubar: false, // Hide the menubar to give it a cleaner interface
//               plugins: [
//                 "image",
//                 "advlist",
//                 "autolink",
//                 "lists",
//                 "link",
//                 "image",
//                 "charmap",
//                 "preview",
//                 "anchor",
//                 "searchreplace",
//                 "visualblocks",
//                 "code",
//                 "fullscreen",
//                 "insertdatetime",
//                 "media",
//                 "table",
//                 "help",
//                 "wordcount",
//                 "anchor",
//               ],
//               toolbar:
//                 "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
//               content_style:
//                 "body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; color: #fff; background-color: #121212; line-height: 1.6; }",
//               skin: "oxide-dark", // Dark skin for a more Netflix-like experience
//               branding: false, // Hide the TinyMCE branding for a cleaner UI
//             }}
//             onEditorChange={onChange}
//           />
//         )}
//       />
//     </div>
//   );
// }

