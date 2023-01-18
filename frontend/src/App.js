// General Imports
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ExerciseItemPage from "./pages/ExerciseItemPage/ExerciseItemPage";
import JournalEntryPage from "./pages/JournalEntryPage/JournalEntryPage"
import VideoViewPage from "./pages/VideoViewPage/VideoViewPage";
import PlaylistPage from "./pages/PlaylistPage/PlaylistPage";
import ExerciseLibraryPage from "./pages/ExerciseLibraryPage/ExerciseLibraryPage";
import VideoLibraryPage from "./pages/VideoLibraryPage/VideoLibraryPage";
import ChartPage from "./pages/ChartPage/ChartPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<PrivateRoute><HomePage /></PrivateRoute>}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/exercise/:id" element={<PrivateRoute><ExerciseItemPage /></PrivateRoute>} />
        <Route path="/entry/:id" element={<PrivateRoute><JournalEntryPage /></PrivateRoute>} />
        <Route path="/video/:id" element={<PrivateRoute><VideoViewPage /></PrivateRoute>} />
        <Route path="/playlist" element={<PrivateRoute><PlaylistPage /></PrivateRoute>} />
        <Route path="/exercise_library" element={<PrivateRoute><ExerciseLibraryPage /></PrivateRoute>} />
        <Route path="/video_library" element={<PrivateRoute><VideoLibraryPage /></PrivateRoute>} />
        <Route path="/chart" element={<PrivateRoute><ChartPage /></PrivateRoute>} />
        <Route path="/journal_entries" element={<PrivateRoute><JournalEntryPage /></PrivateRoute>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
