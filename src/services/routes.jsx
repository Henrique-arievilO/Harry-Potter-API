import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import Home from '../Components/Pages/Home/Home'
import Houses from '../Components/Pages/Houses/Houses'
import Characters from '../Components/Pages/Characters/Characters'
import PageNotFound from '../Components/Pages/PageNotFound/404'

export default function Ways() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='characters' element={<Characters />} />
                <Route path='houses' element={<Houses />} />
                <Route path='*' element={<PageNotFound />} />
            </Routes>
            <Footer />
        </Router>
    )
}