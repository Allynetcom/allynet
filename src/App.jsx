import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import LandingPage from './page/landing-page/landingPage.jsx';
import LoginPage from './page/auth/loginPage.jsx';
import SignupPage from './page/auth/signupPage.jsx';
import LoginasPage from './page/auth/loginasPage.jsx';
import Main from './layout/main/main.jsx';
import FeedPage from './page/feed-page/feedPage.jsx';
import LibraryPage from './page/library-page/libraryPage.jsx';
import AlumniPage from './page/alumni-page/alumniPage.jsx';
import CoursePage from './page/course-page/coursePage.jsx';
import EventPage from './page/event-page/eventPage.jsx';
import DownloadPage from './page/library-page/resource-detail-page/downloadPage.jsx'; // <-- new import
import PostDetail from './page/feed-page/post-detail/postDetail.jsx';
import AlumniDetailPage from './page/alumni-page/alumni-detail-page/alumniDetail.jsx';
import CourseDetail from './page/course-page/course-detail-page/courseDetail.jsx';
import EventDetailPage from './page/event-page/event-detail-page/eventDetail.jsx';
import MyPost from './page/my-post-page/myPost.jsx';
import MentorRequest from './page/mentor-request/mentorRequest.jsx';
import { UserDataProvider } from './context/UserDataContext.jsx';
import ProfileForm from './page/edit-detail/editDetail.jsx';

function App() {


  return (
    <div className="App">
      <UserDataProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/explore' element={<LandingPage />} />
            {/* <Route path='/profile/:id' element={<ProfilePage/>}/> */}
            <Route path='/login' element={<LoginPage />} />
            <Route path='/loginas' element={<LoginasPage />} />
            <Route path='/signin' element={<SignupPage />} />
            <Route path='/profile/:id' element={<AlumniDetailPage />} />
            <Route path='/profile/details' element={<ProfileForm/>} />
            <Route path='/' element={<Main />} >
              <Route path='' element={<FeedPage />} />
              <Route path='/post/:id' element={<PostDetail />} />
              <Route path='/library' element={<LibraryPage />} />
              <Route path='/library/:id' element={<DownloadPage />} />
              <Route path='/alumni' element={<AlumniPage />} />
              <Route path='/courses' element={<CoursePage />} />
              <Route path='/courses/:id' element={<CourseDetail />} />
              <Route path='/events' element={<EventPage />} />
              <Route path='/events/:id' element={<EventDetailPage />} />

              {/* ============ // ============== */}

              <Route path='/my-posts' element={<MyPost />} />
              <Route path='/mentor-request' element={<MentorRequest />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserDataProvider>
    </div>
  );
}

export default App;