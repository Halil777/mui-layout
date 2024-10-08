import { FC, useEffect, useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
  useTheme,
} from "@mui/material";

const DashboardCards: FC = () => {
  const theme = useTheme();
  const [dashboardData, setDashboardData] = useState([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      const response = await fetch("http://localhost:5000/api");
      const data = await response.json();
      setDashboardData(data);
    };

    fetchDashboardData();
  }, []);

  return (
    <Grid container spacing={4} sx={{ p: 2 }}>
      {dashboardData.map((item: any) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <Card
            sx={{
              backgroundColor:
                theme.palette.mode === "dark" ? "#424242" : "#f5f5f5",
              color: theme.palette.text.primary,
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow:
                  theme.palette.mode === "dark"
                    ? "0 8px 20px rgba(255, 255, 255, 0.2)"
                    : "0 8px 20px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <CardActionArea>
              <CardContent>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ display: "flex", alignItems: "center", mb: 1 }}
                >
                  <div
                    style={{
                      backgroundColor: "#6C5DD3",
                      borderRadius: "50%",
                      padding: "10px",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "8px",
                    }}
                  >
                    {item.icon}
                  </div>
                  <span>{item.title}</span>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.desc}
                </Typography>
                <Typography variant="h5" sx={{ mt: 2 }}>
                  {item.value}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Active Calls
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
