import React, { Suspense } from 'react';
import './App.css';
import Header from './components/Header';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Router from './components/Router';

const Router = React.lazy(() => import('./components/Router'))

function App() {
  return (
    <div className="">
      <Header />

      <div className=' w-full h-screen'>
        <div className='mt-20'>
          <Suspense fallback={<div>Loading...</div>}>
            <Router />
          </Suspense>
        </div>

      </div>
    </div>
  );
}

export default App;
