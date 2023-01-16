import { Box, Button, Paper } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import React from "react";
import LogoInput from "./LogoInput/LogoInput";
import HeaderInfo from "./HeaderInfo/HeaderInfo";
import Pdf from "react-to-pdf";
import styles from "./invoice.module.css";
import BillingInfo from "./BillingInfo/BillingInfo";
import GitHubIcon from "@mui/icons-material/GitHub";
import DetailsTable from "./DetailsTable/DetailsTable";

const ref = React.createRef();

function Invoice() {
  return (
    <div>
      <Paper
        ref={ref}
        elevation={3}
        sx={{
          bgcolor: "white",
          boxShadow: 1,
          borderRadius: 2,
          p: 2,
          m: 2,
        }}
        className="flex"
      >
        <div className={styles.heading}>Quick Invoice Generator</div>
        <a href="https://github.com/MiteshDarda/quick-invoice-generator">
          <GitHubIcon />
        </a>
      </Paper>
      <Box
        sx={{
          width: "100vw",
          minHeight: "100vh",
          bgcolor: "primary.dark",
          p: 2,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Paper
          ref={ref}
          elevation={3}
          sx={{
            bgcolor: "white",
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            m: 2,
          }}
        >
          <header className="flex" style={{ width: "48rem" }}>
            <HeaderInfo />
            <LogoInput />
          </header>
          <BillingInfo />
          <DetailsTable />
        </Paper>
        {/* Make a context for filename eg=> Invoice${invoice #} */}
        <Pdf targetRef={ref} filename="Invoice.pdf">
          {({ toPdf }) => (
            <Button
              onClick={toPdf}
              sx={{
                // width: 30,
                // height: 60,
                m: 2,
                color: "primary.main",
                transition: "all 0.5s",
                ":hover": {
                  background: "black",
                  color: "white",
                },
              }}
              className={styles.downloadBtn}
            >
              <DownloadIcon fontSize="large" />
              <br />
              <br />
              <br />
              Download
            </Button>
          )}
        </Pdf>
      </Box>
    </div>
  );
}

export default Invoice;
