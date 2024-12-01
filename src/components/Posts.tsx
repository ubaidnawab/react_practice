import { useEffect, useState } from "react";
type Posts = {
    userId: number,
    id: number,
    title: string,
    body: string
}
const Posts = () => {
    const [posts, setPosts] = useState<Posts[]>([]);
    const getPosts = async () => {
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
        const jsonResp = await resp.json();
        setPosts(jsonResp);
    }
    useEffect(() => {
        getPosts();
    },[])
    return(
    <> 
        <div className="flex justify-between items-center">
        <h1 className="text-3xl tracking-wider font-bold mb-3">Post Feed</h1>
        <button onClick={getPosts} className="py-2 px-3 mb-2 mt-2 border rounded-md"> click to get Posts</button>
        </div>
        <hr className="opacity-40 mb-5" />
            {
                posts.map((post)=> {
                    return <div key={post.id}>
                        <h1 className="text-2xl font-semibold mb-3">{post.title}</h1>
                        <p className="mt-2">{post.body}</p>
                    </div>
                })
            }
    </>
    )
}
export default Posts;