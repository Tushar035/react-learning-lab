import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  CssBaseline,
  IconButton,
  ListItemIcon,
} from "@mui/material";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

const expandedWidth = 220;
const collapsedWidth = 70;

const PublicLayout = () => {
  const [open, setOpen] = useState(true);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* AppBar */}
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${open ? expandedWidth : collapsedWidth}px)`,
          ml: `${open ? expandedWidth : collapsedWidth}px`,
          transition: "all 0.3s ease",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">Welcome to TeamTask</Typography>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: open ? expandedWidth : collapsedWidth,
          flexShrink: 0,
          whiteSpace: "nowrap",
          [`& .MuiDrawer-paper`]: {
            width: open ? expandedWidth : collapsedWidth,
            transition: "width 0.3s ease",
            overflowX: "hidden",
          },
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: open ? "space-between" : "center",
            px: open ? 2 : 0,
          }}
        >
          {open && (
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: "primary.main",
                whiteSpace: "nowrap",
              }}
            >
              TeamTask
            </Typography>
          )}

          <IconButton
            onClick={toggleDrawer}
            sx={{
              transition: "transform 0.3s ease",
            }}
          >
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </Toolbar>

        <List>
          <ListItemButton
            component={NavLink}
            to="/"
            end
            sx={{ "&.active": { backgroundColor: "primary.light" } }}
          >
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Home" />}
          </ListItemButton>

          <ListItemButton
            component={NavLink}
            to="/about"
            sx={{ "&.active": { backgroundColor: "primary.light" } }}
          >
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            {open && <ListItemText primary="About" />}
          </ListItemButton>

          <ListItemButton
            component={NavLink}
            to="/login"
            sx={{ "&.active": { backgroundColor: "primary.light" } }}
          >
            <ListItemIcon>
              <LoginIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Login" />}
          </ListItemButton>

          <ListItemButton
            component={NavLink}
            to="/register"
            sx={{ "&.active": { backgroundColor: "primary.light" } }}
          >
            <ListItemIcon>
              <AppRegistrationIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Register" />}
          </ListItemButton>
        </List>
      </Drawer>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "#f5f6fa",
          p: 3,
          mt: 8,
          transition: "all 0.3s ease",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default PublicLayout;
