import { Link } from "react-router-dom";
import { FaUserCircle, FaRegComment } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { PostProps } from "pages/home";
import { JSX } from "react";
export interface PostBoxProps {
    post: PostProps;
}


export default function PostBox({post}: PostBoxProps) {
    const FaUserCircleImage = FaUserCircle as unknown as (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
    const AiFillHeartIcon = AiFillHeart as unknown as (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
    const FaRegCommentIcon = FaRegComment as unknown as (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
    const handleDelete = () => {

    }
    return (
        <div className="post__box" key={post?.id}>
            <Link to={`/posts/${post?.id}`}>
                <div className="post__box-profile">
                    <div className="post__flex">
                        {post?.profileUrl ?(
                            <img src={post?.profileUrl} alt="profile"/>
                            ) : (
                            <FaUserCircleImage className="post__box-profile-icon"/>
                        )}
                        <div className="post__email">{post?.email}</div>
                        <div className="post__createdAt">{post?.createdAt}</div>
                    </div>
                    <div className="post__box-content">{post?.content}</div>
                </div>
            </Link>
            <div className="post__box-footer">
                {/* post.uid === user.uid 일 때 */}
                <>
                <button type="button" className="post__delete" onClick={handleDelete}>Delete</button>
                <button type="button" className="post__edit" >
                    <Link to={`/posts/edit/${post?.id}`}>Edit</Link>
                </button>
                <button type="button" className="post__likes" >
                    <AiFillHeartIcon/>
                    {post?.likeCount || 0}
                </button>
                <button type="button" className="post__comments" >
                    <FaRegCommentIcon/>
                    {post?.comments?.length || 0}
                </button>
                </>
            </div>
        </div>
    )
}