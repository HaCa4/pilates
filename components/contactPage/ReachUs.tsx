import { formProps } from "../../constants/types";

/* MUI COMPONENTS */
import { Box, Typography } from "@mui/material";

/* MUI ICONS */
import { Facebook, Twitter, Instagram, Email } from "@mui/icons-material";

const ReachUs = ({ styles }: formProps) => {
  return (
    <Box className={styles.reachBox}>
      <Typography variant="h5" sx={{ color: "rgba(118, 89, 55, 0.9)" }}>
        Reach us On Social Media
      </Typography>
      <Box className={styles.reachIconBox}>
        <Instagram />
        <Twitter />
        <Facebook />
        <Email />
      </Box>
    </Box>
  );
};

export default ReachUs;
