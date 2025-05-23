import HomePage from "pages/home";
import NotificationsPage from "pages/notifications";
import PostListPage from "pages/posts";
import PostDetail from "pages/posts/detail";
import PostEdit from "pages/posts/edit";
import PostNew from "pages/posts/new";
import ProfilePage from "pages/profile";
import ProfileEdit from "pages/profile/edit";
import SearchPage from "pages/search";
import LoginPage from "pages/user/login";
import SignupPage from "pages/user/signup";

import { Routes, Route, Navigate } from "react-router-dom";

interface RouterProps {
    isAuthenticated: boolean;
}
export default function Router({isAuthenticated} : RouterProps) {
    return (
        <Routes>
            {isAuthenticated ? (<>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/posts" element={<PostListPage/>}/>
                <Route path="/posts/:id" element={<PostDetail />}/>
                <Route path="/posts/new" element={<PostNew />}/>
                <Route path="/posts/edit/:id" element={<PostEdit />}/>
                <Route path="/profile" element={<ProfilePage/>}/>
                <Route path="/profile/edit" element={<ProfileEdit/>}/>
                <Route path="/search" element={<SearchPage/>}/>
                <Route path="/notificatios" element={<NotificationsPage />}/> 
                <Route path="/users/Login" element={<LoginPage />}/>
                <Route path="/users/signup" element={<SignupPage />}/>
                <Route path="*" element={<Navigate replace to='/'/>} />
            </>) : (<>
                <Route path="/users/Login" element={<LoginPage />}/>
                <Route path="/users/signup" element={<SignupPage />}/>
                <Route path="*" element={<Navigate replace to='/users/login'/>} />
            </>)}
            
            
        </Routes>
    );
}