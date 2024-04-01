import { Box, Paper, Stack } from "@mui/material";
import React from "react";
import Header from "../../../components/Header/Header";
import styles from "./Settings.module.css";
import CustomButton from "../../../components/Button/CustomButton";
import SettingsBody from "./body";

const Settings = () => {
  return (
    <Box className={styles.settings}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        marginBottom={3}
      >
        <Header
          header={"Settings"}
          subheader={"Manage your account settings"}
        />
        <Box display={"flex"} justifyContent={"space-between"}  minWidth={210}>
          <CustomButton
            color="primary"
            variant="contained"
            handleClick={() => {}}
            title={"Save Change"}
          />
          <CustomButton
            color="primary"
            variant="outlined"
            handleClick={() => {}}
            title={"Cancel"}
          />
        </Box>
      </Stack>

      <Paper>
        <SettingsBody />
      </Paper>
    </Box>
  );
};

export default Settings;
