"use client";

import * as React from "react";
import {
  Box,
  Tab,
  Tabs,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { experience } from "../../../data/site";
import "./JobList.css";

function a11yProps(index: number, isMobile: boolean) {
  return {
    id: `${isMobile ? "mobile" : "desktop"}-tab-${index}`,
    "aria-controls": `${isMobile ? "mobile" : "desktop"}-panel-${index}`,
  };
}

export default function JobList() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = React.useState(0);

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      className="joblist"
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        gap: { xs: 0, md: 3 },
      }}
    >
      <Tabs
        orientation={isMobile ? "horizontal" : "vertical"}
        value={value}
        onChange={handleChange}
        variant={isMobile ? "scrollable" : "standard"}
        sx={{
          borderRight: isMobile ? 0 : 1,
          borderBottom: isMobile ? 1 : 0,
          borderColor: "var(--border)",
          "& .MuiTabs-indicator": {
            backgroundColor: "var(--teal)",
          },
          "& .MuiTab-root": {
            fontFamily: "var(--font-sans)",
            textTransform: "none",
            fontSize: "var(--text-sm)",
            color: "var(--text-secondary)",
            padding: "10px 20px",
            minHeight: "48px",
            "&.Mui-selected": {
              color: "var(--teal)",
            },
            "&:hover": {
              color: "var(--teal)",
            },
          },
        }}
      >
        {experience.map((item, i) => (
          <Tab key={i} label={item.company} {...a11yProps(i, isMobile)} />
        ))}
      </Tabs>

      <Box sx={{ flexGrow: 1, minWidth: 0 }}>
        {experience.map((item, i) => (
          <Box
            key={i}
            role="tabpanel"
            hidden={value !== i}
            aria-labelledby={`${isMobile ? "mobile" : "desktop"}-tab-${i}`}
            sx={{
              padding: { xs: 2, md: 3 },
              opacity: value === i ? 1 : 0,
            }}
          >
            {value === i && (
              <Box className="joblist-panel">
                <Typography
                  component="div"
                  className="joblist-role"
                  sx={{
                    fontFamily: "var(--font-sans)",
                    fontSize: { xs: "var(--text-desc)", md: "var(--text-header)" },
                    fontWeight: 700,
                    color: "var(--text-primary)",
                  }}
                >
                  {item.role}
                  <span className="joblist-company"> @ {item.company}</span>
                </Typography>

                <Typography
                  component="div"
                  className="joblist-meta"
                  sx={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "var(--text-sm)",
                    color: "var(--text-muted)",
                    marginTop: "4px",
                  }}
                >
                  {item.duration}
                  {item.location ? ` · ${item.location}` : ""}
                </Typography>

                <ul className="joblist-highlights">
                  {item.highlights.map((point, j) => (
                    <li key={j} className="joblist-highlight">
                      {point}
                    </li>
                  ))}
                </ul>
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Box>
  );
}
