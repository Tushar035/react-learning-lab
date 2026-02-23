import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Stack,
  Chip,
  Paper,
  Divider,
} from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PeopleIcon from "@mui/icons-material/People";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Dashboard = () => {
  return (
    <Box>
      {/* Header */}
      <Typography variant="h4" fontWeight={600} mb={1}>
        Dashboard Overview
      </Typography>

      <Typography variant="body1" color="text.secondary" mb={4}>
        Here’s what’s happening in your workspace today.
      </Typography>

      {/* Stats Cards */}
      <Grid container spacing={3} mb={4}>
        <Grid item xs={12} md={3}>
          <Card elevation={3}>
            <CardContent>
              <Stack direction="row" justifyContent="space-between">
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">
                    Total Projects
                  </Typography>
                  <Typography variant="h4">12</Typography>
                </Box>
                <AssignmentIcon color="primary" fontSize="large" />
              </Stack>
              <Chip
                label="+2 this week"
                color="success"
                size="small"
                sx={{ mt: 2 }}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card elevation={3}>
            <CardContent>
              <Stack direction="row" justifyContent="space-between">
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">
                    Active Tasks
                  </Typography>
                  <Typography variant="h4">48</Typography>
                </Box>
                <TrendingUpIcon color="primary" fontSize="large" />
              </Stack>
              <Chip
                label="+8 today"
                color="success"
                size="small"
                sx={{ mt: 2 }}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card elevation={3}>
            <CardContent>
              <Stack direction="row" justifyContent="space-between">
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">
                    Team Members
                  </Typography>
                  <Typography variant="h4">6</Typography>
                </Box>
                <PeopleIcon color="primary" fontSize="large" />
              </Stack>
              <Chip
                label="Stable"
                color="info"
                size="small"
                sx={{ mt: 2 }}
              />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card elevation={3}>
            <CardContent>
              <Stack direction="row" justifyContent="space-between">
                <Box>
                  <Typography variant="subtitle2" color="text.secondary">
                    Completed Tasks
                  </Typography>
                  <Typography variant="h4">120</Typography>
                </Box>
                <CheckCircleIcon color="primary" fontSize="large" />
              </Stack>
              <Chip
                label="+15 this week"
                color="success"
                size="small"
                sx={{ mt: 2 }}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Recent Activity */}
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h6" mb={2}>
          Recent Activity
        </Typography>

        <Stack spacing={2}>
          <Typography>
            ✅ Tushar completed "Authentication Module"
          </Typography>
          <Divider />
          <Typography>
            📝 New project "Mobile App Redesign" created
          </Typography>
          <Divider />
          <Typography>
            👤 John added as a team member
          </Typography>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Dashboard;