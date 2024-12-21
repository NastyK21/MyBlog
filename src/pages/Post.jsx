 import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) {
                    setPost(post);
                    setLoading(false);
                } else {
                    navigate("/");
                }
            });
        } else {
            navigate("/");
        }
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    if (loading) {
        return (
            <div className="py-8">
                <Container>
                    <div className="flex justify-center">
                        <div className="w-20 h-20 border-4 border-t-transparent border-blue-600 rounded-full animate-spin"></div>
                    </div>
                </Container>
            </div>
        );
    }

    return post ? (
        <div className="py-8">
            <Container>
                <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2 bg-gray-900">
                    <img
                        src={appwriteService.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl shadow-md"
                    />
                    {isAuthor && (
                        <div className="absolute right-6 top-6 flex space-x-2">
                            <Link to={`/edit-post/${post.$id}`}>
                                <Button bgColor="bg-green-500" className="text-white hover:bg-green-600 transition-all duration-200">
                                    Edit
                                </Button>
                            </Link>
                            <Button
                                bgColor="bg-red-500"
                                onClick={deletePost}
                                className="text-white hover:bg-red-600 transition-all duration-200"
                            >
                                Delete
                            </Button>
                        </div>
                    )}
                </div>

                <div className="w-full mb-6">
                    <h1 className="text-3xl font-bold text-white">{post.title}</h1>
                </div>

                <div className="text-white browser-css">
                    {parse(post.content)}
                </div>
            </Container>
        </div>
    ) : null;
}
