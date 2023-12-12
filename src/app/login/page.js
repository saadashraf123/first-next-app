import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Form from "./form";

export default function SignUp() {
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        boxShadow: "0 5px 10px 3px rgba(0, 0, 0, 0.2)",
        marginY: 20,
        padding: 5,
      }}
    >
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Form />
      </Box>
    </Container>
  );
}
