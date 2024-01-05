import React, { useState } from "react";
import {
  Button,
  Typography,
  Menu,
  MenuItem,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import SortIcon from "@mui/icons-material/Sort";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CreateFolderModal from "../create-folder-modal/create-folder-modal.component";
import UploadFilesModal from "../upload-file-modal.component.tsx/upload-file-modal.component";

interface ButtonBarProps {
  path: String;
}

const ButtonsBar = (props: ButtonBarProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const [createModalOpen, setCreateModalOpen] = useState(false);

  const handleCreateOpen = () => setCreateModalOpen(true);
  const handleCreateClose = () => setCreateModalOpen(false);

  const [uploadModalOpen, setUploadModalOpen] = useState(false);

  const handleUploadOpen = () => setUploadModalOpen(true);
  const handleUploadClose = () => setUploadModalOpen(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Stack spacing={2}>
      <Typography variant="h6" sx={{ fontWeight: "bold", color: "#3330E2" }}>
        GoShare {props.path ? " /" + props.path : ""}
      </Typography>
      <Stack
        direction={isMobile ? "column" : "row"}
        spacing={1}
        alignItems={isMobile ? "" : "center"}>
        <Button
          variant="contained"
          startIcon={<CloudUploadIcon />}
          sx={{
            backgroundColor: "#0061FE",
            "&:hover": {
              backgroundColor: "#3949ab",
            },
            borderRadius: 0,
          }}
          onClick={handleUploadOpen}>
          Upload
        </Button>
        <Button
          variant="contained"
          startIcon={<CreateNewFolderIcon />}
          sx={{
            color: "#524A3EE3",
            backgroundColor: "#A7927233",
            "&:hover": {
              backgroundColor: "#b8b6b2",
            },
            borderRadius: 0,
          }}
          onClick={handleCreateOpen}>
          Create
        </Button>
        <Button
          variant="contained"
          startIcon={<SortIcon />}
          sx={{
            color: "#524A3EE3",
            backgroundColor: "#A7927233",
            "&:hover": {
              backgroundColor: "#b8b6b2",
            },
            borderRadius: 0,
          }}>
          Organize
        </Button>
        <Button
          variant="contained"
          onClick={handleMenuClick}
          sx={{
            color: "#524A3EE3",
            backgroundColor: "#A7927233",
            "&:hover": {
              backgroundColor: "#b8b6b2",
            },
            borderRadius: 0,
          }}>
          <MoreHorizIcon />
        </Button>
        <Menu
          id="go-share-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}>
          <MenuItem onClick={handleMenuClose}>Option 1</MenuItem>
          <MenuItem onClick={handleMenuClose}>Option 2</MenuItem>
          <MenuItem onClick={handleMenuClose}>Option 3</MenuItem>
        </Menu>
      </Stack>
      <CreateFolderModal open={createModalOpen} onClose={handleCreateClose} />
      <UploadFilesModal open={uploadModalOpen} onClose={handleUploadClose} />
    </Stack>
  );
};

export default ButtonsBar;
