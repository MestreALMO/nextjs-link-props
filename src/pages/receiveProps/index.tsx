import { Typography } from "@mui/material";
import { useRouter } from "next/router";

const ReceiveProps = () => {
  const router = useRouter();
  const { id, page } = router.query;

  return (
    <>
      <Typography variant="h1">Receive Props</Typography>
      <Typography>{id}</Typography>
      <Typography>{page}</Typography>
    </>
  );
};

export default ReceiveProps;
