/* COMPONENTS */
import SectionBox from "./SectionBox";

/* MUI COMPONENTS */
import { Box, Button, Typography } from "@mui/material";

/* TYPES */
import { homeCardProps } from "../../constants/types";

const HomeSelectionCard = ({ styles }: homeCardProps) => {
  <Box className={styles.infoBox}>
    <Typography className={styles.infoHeadline}>
      DISCOVER <br /> YOUR BODY
    </Typography>
    <Typography className={styles.infoText}>
      BECOME HEALTHIER,
      <br /> STRONGER AND HAPPIER
    </Typography>
    <Button className={styles.infoButton}>STEP UP NOW!</Button>
  </Box>;
};

export default HomeSelectionCard;
