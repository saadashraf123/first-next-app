import { Inter } from "next/font/google";
import "./globals.css";
import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                News
              </Typography>
              <Link href="/user">
                <Button variant="contained" className="bg-inherit	text-white">
                  Login
                </Button>
              </Link>
            </Toolbar>
          </AppBar>
        </Box>
        {children}
        <Box sx={{}}>
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{}}
          >
            {"Copyright © "}
            <Link color="inherit" href="https://google.com/">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </body>
    </html>
  );
}