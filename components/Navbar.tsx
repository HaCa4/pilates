import Link from "next/link";

/* MUI COMPONENTS */
import { Box, Container, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Container className="navContainer">
      <Container className="navSubContainer">
        <Link href="/">
          <Box>
            <Typography className="navItem">home</Typography>
          </Box>
        </Link>
        <Link href="/training">
          <Box>
            <Typography className="navItem">training</Typography>
          </Box>
        </Link>
        <Link href="/nutrition">
          <Box>
            <Typography className="navItem">nutrition</Typography>
          </Box>
        </Link>
      </Container>
      <Container className="navLogoContainer">
        <Link href="/">
          <Typography className="appLogo" variant="h6">
            pilates
          </Typography>
        </Link>
      </Container>
      <Container className="navSubContainer">
        <Link href="/about">
          <Box>
            <Typography className="navItem">about</Typography>
          </Box>
        </Link>
        <Link href="/blog">
          <Box>
            <Typography className="navItem">blog</Typography>
          </Box>
        </Link>
        <Link href="/contact">
          <Box>
            <Typography className="navItem">contact</Typography>
          </Box>
        </Link>
      </Container>
    </Container>
  );
};

export default Navbar;
