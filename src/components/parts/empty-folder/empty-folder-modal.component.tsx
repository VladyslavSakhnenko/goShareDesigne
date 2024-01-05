import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import DrawerHeader from "../side-bar/drawer-header.component";
import SideBar from "../side-bar/side-bar.component";
import ButtonsBar from "../buttons-bar/buttons-bar.component";
import HeadeFiles from "../header-files/header-files.component";

const EmptyFolder = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Box sx={{ mb: 5 }}>
          <ButtonsBar path={"EmptyFolder"} />
        </Box>
        <Box>
          <HeadeFiles />
          <Typography
            sx={{
              mt: "25rem",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "24px",
            }}>
            This folder is empty
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default EmptyFolder;
