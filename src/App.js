import "bootstrap/dist/css/bootstrap.css";
import UserRoutes from "./routes/user";
import MentorRoutes from "./routes/mentor";
import AdminRoutes from "./routes/admin";
import Layout from "./pages/AdminPage/layout";
import { Error } from "./components/common/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";

function App() {
  const routesDefine = (element, path = "") => {
    return element.map((el, i) => {
      if (el.hasOwnProperty("children")) {
        return routesDefine(el.children, path + el.path);
      } else if (el.hasOwnProperty("element")) {
        return <Route key={i} path={path + el.path} element={el.element} />;
      } else {
        return <></>;
      }
    });
  };

  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          {routesDefine(UserRoutes)}
          {routesDefine(MentorRoutes)}
          <Route element={<Layout />}>{routesDefine(AdminRoutes)}</Route>
          <Route path="/*"element={<Error />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
