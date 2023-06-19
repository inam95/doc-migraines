import { usePathname, useRouter } from 'next/navigation';
import {
  Avatar,
  FormControlLabel,
  Grid,
  Switch,
  useTheme
} from '@mui/material';

interface HeaderProps {
  onSwitchTheme: () => void;
}

export default function Header({ onSwitchTheme }: HeaderProps) {
  const pathName = usePathname();
  const router = useRouter();
  const theme = useTheme();

  return (
    <Grid sx={{ p: 2 }}>
      <Grid
        container
        direction="column"
        justifyContent={pathName === '/' ? 'center' : 'space-between'}
      >
        <Grid item lg={6}>
          LOGO
        </Grid>
        <Grid
          item
          xs={6}
          rowSpacing={1}
          container
          direction="row"
          alignItems="center"
          justifyContent="flex-end"
        >
          <FormControlLabel
            control={
              <Switch
                onChange={onSwitchTheme}
                name="dark-light"
                color="primary"
              />
            }
            label="Night mode"
          />
          <Avatar
            className="pointer"
            onClick={() => router.push('/profile')}
            sx={{
              width: 56,
              height: 56,
              backgroundColor: `${theme.palette.primary.main}`
            }}
          >
            G
          </Avatar>
        </Grid>
      </Grid>
    </Grid>
  );
}
