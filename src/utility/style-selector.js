import Flag from "react-world-flags";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { Button, Menu, MenuItem, createTheme } from "@mui/material";


export default function StyleSelector({availableStyles, setSelectedStyle}) {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const changeStyle = (style) => {
    setSelectedStyle(availableStyles[style]);
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Button
        sx={{color: "text.menu"}}
        id="langselect"
        onClick={handleClick}
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        {t("Change Style")}
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        sx={{width: anchorEl?.width}}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {Object.keys(availableStyles).map((value)=>{
          return <MenuItem sx={{color: "text.dark"}} key={value} onClick={()=> changeStyle(value)}>{value}</MenuItem>
        })}
      </Menu>
    </>
  );
}
