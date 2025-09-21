import { Grid, Paper, Typography } from "@mui/material";
import RevenueChart from "../components/RevenueChart";
import SalesPieChart from "../components/SalesPieChart";


export default function Dashboard() {
  return (
    
    <Grid container spacing={2}>
      {/* Cards */}
      <Grid item xs={12} md={3}>
        <Paper sx={{ p: 2  , height: 200,width: 200   }}>
          <Typography variant="h6">Customers</Typography>
          <Typography variant="h4">3,781</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={3}>
        <Paper sx={{ p: 2  , height: 200,width: 200   }}>
          <Typography variant="h6">Orders</Typography>
          <Typography variant="h4">1,219</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={3}>
        <Paper sx={{ p: 2  , height: 200,width: 200   }}>
          <Typography variant="h6">Revenue</Typography>
          <Typography variant="h4">$695</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={3}>
        <Paper sx={{ p: 2  , height: 200,width: 200   }}>
          <Typography variant="h6">Growth</Typography>
          <Typography variant="h4">30.1%</Typography>
        </Paper>
      </Grid>

      {/* Revenue Chart */}
      <Grid item xs={12} md={8}>
        <Paper sx={{ p: 2 , height: 400,width: 400, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <RevenueChart />
        </Paper>
      </Grid>

      {/* Sales Pie */}
      <Grid item xs={12} md={4}>
        <Paper sx={{ p: 2 , height: 400,width: 400, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <SalesPieChart />
        </Paper>
      </Grid>
    </Grid>

    
  );
}
