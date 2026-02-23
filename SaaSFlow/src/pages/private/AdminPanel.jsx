import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Stack,
} from "@mui/material";

const users = [
  { id: 1, name: "Tushar Patil", role: "Admin" },
  { id: 2, name: "John Doe", role: "User" },
  { id: 3, name: "Jane Smith", role: "User" },
];

const AdminPanel = () => {
  return (
    <Box>
      {/* Header */}
      <Typography variant="h4" fontWeight={600} mb={3}>
        Admin Panel
      </Typography>

      {/* Stats Cards */}
      <Grid container spacing={3} mb={4}>
        <Grid item xs={12} md={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary">
                Total Users
              </Typography>
              <Typography variant="h4">12</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary">
                Active Projects
              </Typography>
              <Typography variant="h4">5</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="subtitle2" color="text.secondary">
                Pending Approvals
              </Typography>
              <Typography variant="h4">3</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* User Management Table */}
      <Paper elevation={3} sx={{ p: 3 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography variant="h6">User Management</Typography>
          <Button variant="contained">Add User</Button>
        </Stack>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Role</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>

                <TableCell>
                  <Chip
                    label={user.role}
                    color={user.role === "Admin" ? "primary" : "default"}
                    size="small"
                  />
                </TableCell>

                <TableCell align="right">
                  <Button size="small">Edit</Button>
                  <Button size="small" color="error">
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
};

export default AdminPanel;