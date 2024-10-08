import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { FC } from "react";

const DashboardCards: FC = () => {
  return (
    <div>
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography>
              Hii Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium quis, unde facere beatae eius aperiam veniam tempora
              sequi doloribus dolore dolorem totam ducimus sapiente id cum ex
              eos velit iste!
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default DashboardCards;
