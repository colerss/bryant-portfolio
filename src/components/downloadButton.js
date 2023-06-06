import React from "react";
import { Button, Typography, Box } from "@mui/material";

const DownloadButton = ({ fileType, link, fileName, downloadName }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      component="a"
      href={link}
      download={downloadName}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        textTransform: "none",
        "&:hover": {
          backgroundColor: "primary.dark",
        },
      }}
    >
      <Box
        sx={{
          width: 30,
          height: 30,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "background.default",
          marginRight: "1rem",
        }}
      >
        <Typography
          sx={{
            color: "black",
            fontSize: "0.7rem",
            fontWeight: "bold",
            textTransform: "uppercase"
          }}
        >
          {fileType}
        </Typography>
      </Box>
      <Typography
        variant="subtitle1"
        sx={{
          color: "text.primary",
          fontWeight: "bold",
          fontSize: 16,
        }}
      >
        {fileName}
      </Typography>
    </Button>
  );
};

export default DownloadButton;