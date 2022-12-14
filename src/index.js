import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Main from "./components/Main";
import Student from "./components/Student";
import Company from "./components/Company";
import Curator from "./components/Curator";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <Router>
            <Routes>
                <Route path="/InternshipProceduralDesign" element={<Main/>}>
                    <Route path="/InternshipProceduralDesign/student" element={<Student/>}/>
                    <Route path="/InternshipProceduralDesign/company" element={<Company/>}/>
                    <Route path="/InternshipProceduralDesign/curator" element={<Curator/>}/>
                </Route>
            </Routes>
        </Router>
);
