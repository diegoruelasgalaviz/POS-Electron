import React from 'react';
import { Card, CardContent, Typography, Icon } from '@mui/material';

interface StatCardProps {
  title: string;
  value: string;
  increase: string;
  icon: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, increase, icon }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="h4">{value}</Typography>
        <Typography variant="subtitle2" color="textSecondary">
          {increase}
          <Icon>{icon}</Icon>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StatCard;