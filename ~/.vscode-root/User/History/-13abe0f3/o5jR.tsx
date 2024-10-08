import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import { FC } from "react";
import { dashboardData } from "../data/dashboardData";

const DashboardCards: FC = () => {
  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      {dashboardData.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardActionArea>
              <CardContent>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  {item.icon}
                  <span style={{ marginLeft: "8px" }}>{item.title}</span>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.desc}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default DashboardCards;
