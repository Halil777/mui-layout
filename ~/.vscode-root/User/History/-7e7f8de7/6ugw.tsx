import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { FC } from "react";

const Dashboard: FC = () => {
  return (
    <>
      <Grid container spacing={3} p={3}>
        <Grid item lg={4} md={4} sm={6} xs={12}>
          <Card>
            <CardActionArea>
              <CardContent>
                <Typography>
                  Hii Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium quis, unde facere beatae eius aperiam veniam
                  tempora sequi doloribus dolore dolorem totam ducimus sapiente
                  id cum ex eos velit iste!
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
