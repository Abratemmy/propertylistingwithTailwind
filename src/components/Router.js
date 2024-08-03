import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

// const Home = React.lazy(() => import('../pages/Home'));

const Router = () => {

    return (
        <Routes>
            <Route exact path="/" caseSensitive={false} element={<Home />} />
        </Routes>
    )
}
export default Router