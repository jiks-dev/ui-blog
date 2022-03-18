import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import HeaderComponent from "./components/navbar/HeaderComponent";
import MainPage from "./components/pages/MainPage";
import PaginationPostsPage from "./components/pages/PaginationPostsPage";
import FooterComponent from "./components/navbar/FooterComponent";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <HeaderComponent />
        <main>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainPage />}></Route>
              <Route
                path="/pagination-posts"
                element={<PaginationPostsPage />}
              ></Route>
            </Routes>
          </BrowserRouter>
        </main>
      </Container>
      <FooterComponent />
    </ThemeProvider>
  );
}

export default App;
