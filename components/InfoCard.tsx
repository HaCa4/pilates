import Image from "next/image";

/* COMPONENTS */
import { Box, Button, Typography } from "@mui/material";

/* TYPES */
import { InfoCardProps } from "../constants/types";

const InfoCard = (props: InfoCardProps) => {
  return (
    <Box className="infoCard">
      <Box className="CardBox">
        <Image
          className="CardImage"
          src={props.content.image}
          alt={props.content.title}
          width={340}
          height={225}
        />
        <Typography className="CardTitle">{props.content.title}</Typography>
        <Typography className="CardText">{props.content.text}</Typography>
      </Box>
      <Button className="CardButton">DETAILS</Button>
    </Box>
  );
};

export default InfoCard;
