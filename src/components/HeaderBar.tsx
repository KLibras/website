
import {
  Grid,
  Drawer,
} from "@mui/material";

export default function HeaderBar() {
  

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

      </Grid>
      <Drawer
        anchor="right"
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
            display: { xs: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box' },
          }}
      >
      </Drawer>
    </>
  );
}
