import Container from "@mui/material/Container";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthMe, selectIsAuth } from './redux/slices/auth'
import { Home, FullPost, Registration, AddPost, Login, Lk } from "./pages";
import React from "react";

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element= { <Home /> }/>
          <Route path="/posts/:id/edit" element= { <AddPost />}/>
          <Route path="/posts/:id" element= { <FullPost />}/>
          <Route path="/add-post" element= { <AddPost />}/>
          <Route path="/login" element= { <Login /> }/>
          <Route path="/register" element= { <Registration /> } />
          <Route path="/lk" element= { <Lk /> } />
        </Routes>
      </Container>
    </>
  );
}

export default App;
