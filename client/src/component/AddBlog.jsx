import React, { useContext, useState } from 'react';
import { storage } from "../utils/firebase";
import {
    ref as storeRef,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";
import { BlogContext } from '../contexts/blog.context';
import "../styles/AddBlog.css"

const AddBlogForm = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [poster, setPoster] = useState('');
    const { addBlog } = useContext(BlogContext)
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        addBlog({ writer: "Anonymous", title, body, poster }).then((res) => {
            alert(res.data.message)
        }).catch((err) => {
            alert(JSON.parse(err.request.response).message)
        })
    };

    const handleFileChange = (event) => {
        setLoading(true)
        const poster = event.target.files[0];
        if (poster.size > 2000000) {
            return
        }
        const fileStoreRef = storeRef(
            storage,
            `blog-app/${poster.name}_${Math.random().toString(16).slice(2)}`
        );

        const uploadTask = uploadBytesResumable(fileStoreRef, poster);
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(progress)
            },
            (error) => {
                setLoading(false)
                alert(error.message)
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref)
                    .then((downloadURL) => {
                        setPoster(downloadURL);
                        setLoading(false)
                    })
            }
        );
    }

    return (
        <>
            <h1 className='heading'>Add Blog</h1>
            <form onSubmit={handleSubmit} className='add-blog-form'>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="body">Body:</label>
                    <textarea
                        id="body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        rows={25}
                        cols={100}
                        required
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="image">Poster:</label>
                    <input
                        type="file"
                        id="image"
                        onChange={(e) => handleFileChange(e)}
                        required
                    />
                </div>
                {loading ? <p>Uploading poster...</p> :
                    <button type="submit">Add Blog</button>
                }
            </form>
        </>
    );
};

export default AddBlogForm;
