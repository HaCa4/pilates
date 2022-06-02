import Image from "next/image";

/* TYPES */
import { instructorProps } from "../../constants/types";

/* MUI COMPONENTS */
import { Avatar, Box, Typography } from "@mui/material";

const InstructorCard = ({ content, styles }: instructorProps) => {
  return (
    <Box className={styles.instructorBox}>
      <Avatar src={content.image} alt={content.title} sx={{ width: "270px", height: "270px" }} />
      <Typography className={styles.instructorName}>{content.name}</Typography>
      <Typography className={styles.instructorTitle}>{content.title}</Typography>
      <Typography className={styles.text}>{content.text}</Typography>
    </Box>
  );
};

export default InstructorCard;
