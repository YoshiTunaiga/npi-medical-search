import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button, Stack, TextField, Typography } from "@mui/material";
import ProviderBox from "./ProviderBox";
import fetchDoctorInfo from "../../api/api";

export default function NPPage() {
  const [providerData, setProviderData] = useState({});
  const [doctorNpi, setDoctorNpi] = useState("");
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    // define fetch function
    const handleDoctorInfoFetch = async () => {
      try {
        const providerInfo = await fetchDoctorInfo(id);
        setProviderData(providerInfo);
        setDoctorNpi("");
      } catch (error) {
        console.error("Error:", error);
      }
    };

    // if there is an npId, call the fetch function
    if (id) {
      handleDoctorInfoFetch();
    }

    return () => {
      setProviderData({});
    };
  }, [id]);

  const handleSearchProvider = () => navigate(`/api/${doctorNpi}`);

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        padding: 0,
        margin: 0,
        background: `linear-gradient(rgba(255, 255,255, 100%), rgba(9, 89, 170, 10%))`,
      }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexGrow: 1,
          minHeight: "100vh",
          padding: "40px 100px 60px 100px",
        }}>
        <Stack
          spacing={0}
          useFlexGap
          sx={{
            width: { xs: "100%", sm: "70%" },
            mt: 0,
            mb: 3,
          }}>
          <Typography
            variant="h1"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignSelf: "center",
              textAlign: "center",
              fontSize: "clamp(3.0rem, 8vw, 2rem)",
            }}>
            Our&nbsp;
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: "clamp(3rem, 10vw, 4rem)",
                color: (theme) =>
                  theme.palette.mode === "light"
                    ? "primary.main"
                    : "primary.light",
              }}>
              PROVIDERS&nbsp;
            </Typography>
            information
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{
              alignSelf: "center",
              width: { sm: "100%", md: "90%" },
            }}>
            Explore our cutting-edge dashboard, delivering your providers
            information tailored to your needs.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignSelf="center"
            spacing={1}
            useFlexGap
            sx={{ pt: 1, width: { xs: "100%", sm: "auto" } }}>
            <TextField
              id="outlined-controlled"
              hiddenLabel
              size="small"
              variant="outlined"
              value={doctorNpi || ""}
              placeholder="Your provider's NPI"
              inputProps={{
                autoComplete: "off",
              }}
              onChange={(event) => setDoctorNpi(event.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              disabled={!doctorNpi}
              onClick={handleSearchProvider}>
              Search now
            </Button>
          </Stack>
        </Stack>
        <ProviderBox providerData={providerData} />
        <p>Powered by mimilabs.ai</p>
      </div>
    </div>
  );
}
