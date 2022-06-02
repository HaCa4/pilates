/* COMPONENTS */
import SectionBox from "./SectionBox";

/* MUI COMPONENTS */
import { Box } from "@mui/material";

/* CONSTANTS */
import { box1, box2 } from "../../constants/constants";
import { homeCardProps } from "../../constants/types";

const HomeSelectionCard = ({ styles }: homeCardProps) => {
  return (
    <Box className={styles.selectionBox}>
      <SectionBox content={box1} styles={styles} />
      <SectionBox content={box2} styles={styles} />
    </Box>
  );
};

export default HomeSelectionCard;
