import Flag from "react-world-flags";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { Button, Menu, MenuItem } from "@mui/material";

export default function LanguageSelector() {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedLang, setSelectedLang] = useState("");
  const [renderedLang, setRenderedLang] = useState("");
  const open = Boolean(anchorEl);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLang(lng);
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  useEffect(() => {
    let language = i18n.language;
    if (language?.includes("nl")) {
      setRenderedLang(nlFlag);
    } else {
      setRenderedLang(enFlag);
    }
  }, [selectedLang]);

  const enFlag = (
    <Flag
      code="GB"
      alt="GB"
      style={{ width: "1.8rem" }}
      className="align-middle"
    />
  );
  const nlFlag = (
    <Flag
      code="NL"
      alt="NL"
      style={{ width: "1.8rem" }}
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
        {renderedLang}
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={() => changeLanguage("en")}>{enFlag}</MenuItem>
        <MenuItem onClick={() => changeLanguage("nl")}>{nlFlag}</MenuItem>
      </Menu>
    </>
  );
}
