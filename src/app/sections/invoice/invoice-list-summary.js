import ClockIcon from '@untitled-ui/icons-react/build/esm/Clock';
import ReceiptCheckIcon from '@untitled-ui/icons-react/build/esm/ReceiptCheck';
import ReceiptIcon from '@untitled-ui/icons-react/build/esm/Receipt';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import {
  Avatar,
  Card,
  CardContent,
  Stack,
  Typography,
  Unstable_Grid2 as Grid
} from '@mui/material';

export const InvoiceListSummary = () => (
  <div>
    <Grid
      container
      spacing={3}
    >
      <Grid
        xs={12}
        md={6}
        lg={3}
      >
        <Card>
          <CardContent>
            <Stack
              alignItems="center"
              direction="row"
              spacing={2}
            >
              <Avatar
                sx={{
                  height: 48,
                  width: 48
                }}
              >
                <ReceiptIcon />
              </Avatar>
              <div>
                <Typography
                  color="text.secondary"
                  variant="body2"
                >
                  Requested
                </Typography>
                <Typography variant="h6">
                  $5,300.00
                </Typography>
              </div>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        xs={12}
        md={6}
        lg={3}
      >
        <Card>
          <CardContent>
            <Stack
              alignItems="center"
              direction="row"
              spacing={2}
            >
              <Avatar
                sx={{
                  backgroundColor: 'success.lightest',
                  color: 'success.main',
                  height: 48,
                  width: 48
                }}
              >
                <ReceiptCheckIcon />
              </Avatar>
              <div>
                <Typography
                  color="text.secondary"
                  variant="body2"
                >
                  Accepted
                </Typography>
                <Typography variant="h6">
                  $1,439.60
                </Typography>
                {/* <Typography
                  color="text.secondary"
                  variant="body2"
                >
                  from 3 invoices
                </Typography> */}
              </div>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        xs={12}
        md={6}
        lg={3}
      >
        <Card>
          <CardContent>
            <Stack
              alignItems="center"
              direction="row"
              spacing={2}
            >
              <Avatar
                sx={{
                  backgroundColor: 'warning.lightest',
                  color: 'warning.main',
                  height: 48,
                  width: 48
                }}
              >
                <ClockIcon />
              </Avatar>
              <div>
                <Typography
                  color="text.secondary"
                  variant="body2"
                >
                  Pending
                </Typography>
                <Typography variant="h6">
                  $276.87
                </Typography>
              </div>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        xs={12}
        md={6}
        lg={3}
      >
        <Card>
          <CardContent>
            <Stack
              alignItems="center"
              direction="row"
              spacing={2}
            >
              <Avatar
                sx={{
                  backgroundColor: 'success.lightest',
                  color: 'success.main',
                  height: 48,
                  width: 48
                }}
              >
                <MobileFriendlyIcon />
              </Avatar>
              <div>
                <Typography
                  color="text.secondary"
                  variant="body2"
                >
                  Collected
                </Typography>
                <Typography variant="h6">
                  $276.87
                </Typography>
                
              </div>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </div>
);
