import { Box, Grid } from "@mui/material"

function App() {
  return (
    <div>
      <Grid container spacing={10}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box sx={{background:"#000", borderRadius:"9px", width:"100%", height:"400px"}}></Box>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
            <Box sx={{background:"orange", borderRadius:"9px", width:"100%", height:"400px"}}></Box>
        </Grid>
      </Grid>
    </div>
  )
}

export default App
