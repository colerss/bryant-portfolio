import Flag from "react-world-flags";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { Button, Menu, MenuItem } from "@mui/material";

export default function StyleSelector() {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState("");
  const [renderedStyle, setRenderedStye] = useState("");
  const open = Boolean(anchorEl);

  const changeStyle = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedStyle(lng);
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };


  const enFlag = (
    <Flag
      code="GB"
      alt="GB"
      style={{ width: "1.8rem", height: "1.3rem" }}
      className="align-middle"
    />
  );
  const nlFlag = (
    <Flag
      code="NL"
      alt="NL"
      style={{ width: "1.8rem", height: "1.3rem" }}
      className="align-middle"
    />
  );

  return (
    <>
      <Button
        id="langselect"
        onClick={handleClick}
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        {renderedStyle}
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
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
        <MenuItem onClick={() => changeStyle("en")}>{enFlag}</MenuItem>
        <MenuItem onClick={() => changeStyle("nl")}>{nlFlag}</MenuItem>
      </Menu>
    </>
  );
}
