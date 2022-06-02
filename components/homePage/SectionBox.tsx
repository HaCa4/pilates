//MUI COMPONENTS
import { Box, Button, Link, Typography } from "@mui/material";

/* TYPES */
import { homeCardProps } from "../../constants/types";

const SectionBox = ({ content, styles }: homeCardProps) => {
  return (
    <Box className={styles.sectionBox}>
      <Typography className={styles.sectionHeadline}>{content.title}</Typography>
      <Typography className={styles.sectionText}>{content.subtext}</Typography>
      <Link href={content.link}>
        <Button className={styles.sectionButton}>DETAILS</Button>
      </Link>
    </Box>
  );
};

export default SectionBox;
