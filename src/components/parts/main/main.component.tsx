import Box from "@mui/material/Box";
import File from "../../parts/file/file.component";
import DrawerHeader from "../side-bar/drawer-header.component";
import SideBar from "../side-bar/side-bar.component";
import ButtonsBar from "../buttons-bar/buttons-bar.component";
import HeadeFiles from "../header-files/header-files.component";

const Main = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Box sx={{ mb: 5 }}>
          <ButtonsBar path={""} />
        </Box>
        <Box>
          <HeadeFiles />
          <File />
          <File />
          <File />
          <File />
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
