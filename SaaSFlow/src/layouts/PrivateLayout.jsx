import { useState } from "react";
import { Outlet, NavLink, useParams, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
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
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

const expandedWidth = 220;
const collapsedWidth = 70;

const PrivateLayout = () => {
  const { logout } = useAuth();
  const { tenantId } = useParams();
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
          <Typography variant="h6">
            {tenantId?.toUpperCase()} Dashboard
          </Typography>
          <Button color="inherit" onClick={logout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: open ? expandedWidth : collapsedWidth,
          flexShrink: 0,
          whiteSpace: "nowrap",
          transition: "width 0.3s ease",
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
            px: 2,
          }}
        >
          {open && (
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: "primary.main",
                letterSpacing: 1,
              }}
            >
              TeamTask
            </Typography>
          )}

          <IconButton onClick={toggleDrawer}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </Toolbar>

        <List>
          <ListItemButton
            component={NavLink}
            to=""
            end
            sx={{ "&.active": { backgroundColor: "primary.light" } }}
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Home" />}
          </ListItemButton>

          <ListItemButton
            component={NavLink}
            to="profile"
            sx={{ "&.active": { backgroundColor: "primary.light" } }}
          >
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Profile" />}
          </ListItemButton>

          <ListItemButton
            component={NavLink}
            to="settings"
            sx={{ "&.active": { backgroundColor: "primary.light" } }}
          >
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Settings" />}
          </ListItemButton>

          <ListItemButton
            component={NavLink}
            to="admin"
            sx={{ "&.active": { backgroundColor: "primary.light" } }}
          >
            <ListItemIcon>
              <AdminPanelSettingsIcon />
            </ListItemIcon>
            {open && <ListItemText primary="Admin" />}
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
          transition: "margin 0.3s ease",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default PrivateLayout;
