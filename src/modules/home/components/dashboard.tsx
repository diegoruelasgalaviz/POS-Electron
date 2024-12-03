import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import SalesChart from './charts/SalesChart';
// import CostsChart from './charts/CostsChart';
// import EarningsChart from './charts/EarningsChart';
import StatCard from './StatCard';
import './dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <Typography variant="h4" className="dashboard-title">
        Dashboard Overview
      </Typography>
      
      <Grid container spacing={3}>
        {/* Summary Cards */}
        <Grid item xs={12} sm={6} md={4}>
          <StatCard 
            title="Total Sales"
            value="$15,890"
            increase="+12%"
            icon="trending_up"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <StatCard 
            title="Total Costs"
            value="$8,450"
            increase="+5%"
            icon="account_balance"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <StatCard 
            title="Net Earnings"
            value="$7,440"
            increase="+18%"
            icon="attach_money"
          />
        </Grid>

        {/* Charts */}
        <Grid item xs={12}>
          <Paper className="chart-paper">
            <SalesChart />
          </Paper>
        </Grid>
        {/* Temporarily hidden charts
        <Grid item xs={12} md={4}>
          <Paper className="chart-paper">
            <CostsChart />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className="chart-paper">
            <EarningsChart />
          </Paper>
        </Grid>
        */}
      </Grid>
    </div>
  );
};

export default Dashboard; 