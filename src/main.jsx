import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home'
import Movie from './pages/Movie'
import MovieDetail from './pages/MovieDetail'
import Series from './pages/Series.jsx'
import WatchList from './pages/WatchList.jsx'
import SearchResults from './pages/SearchResults.jsx'




const router = createBrowserRouter(
  createRoutesFromElements (
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='movie' element={<Movie />} />
      <Route path='series' element={<Series />} />
      <Route path='watchlist' element={<WatchList />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
      <Route path="/watchlist" element={<WatchList />} />
      <Route path="/search" element={<SearchResults />} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
