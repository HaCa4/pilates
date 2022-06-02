/* MUI COMPONENTS */
import { Alert, Box, Button, TextField, Typography } from "@mui/material";

/* FORM HANDLING */
import { useFormik } from "formik";
import * as Yup from "yup";

/* CONSTANTS */
import { how, interests } from "../../constants/constants";
/* TYPES */
import { formProps } from "../../constants/types";

const ContactForm = ({ styles }: formProps) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      interest: "",
      howDidYouHeard: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().max(15, "Must be 15 characters or less").required("Required"),
      email: Yup.string().required("Required").email("Invalid mail adress"),
      interest: Yup.string().required("Required"),
      howDidYouHeard: Yup.string().required("Required"),
      message: Yup.string().required("Required").max(250, "Must be 250 characters or less"),
    }),
    onSubmit: (values) => {
      /* send values to the firestore */
    },
  });
  return (
    <Box className={styles.formBox}>
      <form className={styles.form} onSubmit={formik.handleSubmit}>
        <Typography variant="h5">We would love to hear from you</Typography>
        <TextField
          className={styles.formInput}
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name ? (
          <Alert className={styles.formAlert} severity="error">
            {formik.errors.name}
          </Alert>
        ) : null}
        <TextField
          className={styles.formInput}
          name="email"
          type="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <Alert className={styles.formAlert} severity="error">
            {formik.errors.email}
          </Alert>
        ) : null}
        <TextField
          className={styles.formInput}
          name="interest"
          SelectProps={{
            native: true,
          }}
          select
          label="Pick your interest"
          value={formik.values.interest}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          {interests.map((interest, index) => {
            return <option key={index}>{interest}</option>;
          })}
        </TextField>
        {formik.touched.interest && formik.errors.interest ? (
          <Alert className={styles.formAlert} severity="error">
            {formik.errors.interest}
          </Alert>
        ) : null}
        <TextField
          className={styles.formInput}
          name="howDidYouHeard"
          select
          SelectProps={{
            native: true,
          }}
          label="How Did You Heard About Us?"
          value={formik.values.howDidYouHeard}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          {how.map((item, index) => {
            return <option key={index}> {item} </option>;
          })}
        </TextField>
        {formik.touched.howDidYouHeard && formik.errors.howDidYouHeard ? (
          <Alert className={styles.formAlert} severity="error">
            {formik.errors.howDidYouHeard}
          </Alert>
        ) : null}

        <TextField
          name="message"
          label="Message"
          multiline
          rows={7}
          sx={{ width: "80%", backgroundColor: "#D9D9D9", color: "black", borderRadius: "5px" }}
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.message && formik.errors.message ? (
          <Alert className={styles.formAlert} severity="error">
            {formik.errors.message}
          </Alert>
        ) : null}
        <Button className={styles.submitButton} type="submit">
          SEND
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
