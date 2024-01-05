import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

interface FileComponentProps {
  // onCopyLink: () => void;
}

const HeaderFiles: React.FC<FileComponentProps> = (props) => {
  // Using Material-UI hooks to check for mobile view
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      p={2}>
      <Box display="flex" alignItems="center">
        <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
          Name
        </Typography>
      </Box>
      <Box display="flex" alignItems="center">
        {!isMobile && (
          // Show "Modified" only on non-mobile devices
          <>
            <Typography
              variant="caption"
              color="textSecondary"
              sx={{
                mr: { xs: 2, sm: 8, md: 20 },
                fontSize: "18px",
                fontWeight: "bold",
              }}>
              Modified
            </Typography>
            <Typography
              variant="caption"
              color="textSecondary"
              sx={{ mr: 2, fontSize: "18px", fontWeight: "bold" }}>
              Who can access
            </Typography>
          </>
        )}
      </Box>
    </Box>
  );
};

export default HeaderFiles;
