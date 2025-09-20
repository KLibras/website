import * as React from 'react';
import {
  Grid,
  useTheme,
  useMediaQuery,
  IconButton,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export default function HeaderBar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', width: 250 }}>
      <Grid container alignItems="center" spacing={1} sx={{ my: 2, ml: 2 }}>
        <Grid>
            <img
            src="/logo.svg"
            alt="Logo"
            style={{ width: '40px', height: 'auto' }}
            />
        </Grid>
        <Grid>
            <Box 
            sx=
            {{
              my: 2,
              fontSize: '1.5rem',
              fontWeight: 'bold',
            }}>
              KLibras
            </Box>
        </Grid>
      </Grid>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/">
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/sobre">
            <ListItemText primary="Sobre" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/privacy">
            <ListItemText primary="Política de privacidade" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/terms">
            <ListItemText primary="Termos de serviço" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component="a" href="/faq">
            <ListItemText primary="FAQs" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <Grid container alignItems="center" justifyContent="space-between" sx={{ p: 2 }}>
        <Grid>
          <Grid container alignItems="center" spacing={2}>
            <Grid>
              <img
                src="/logo.svg"
                alt="Logo"
                style={{ width: '50px', height: 'auto' }}
              />
            </Grid>
            <Grid>
              <h2>KLibras</h2>
            </Grid>
          </Grid>
        </Grid>

        {isMobile && (
          <Grid>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Grid>
        )}
      </Grid>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
            display: { xs: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box' },
          }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
