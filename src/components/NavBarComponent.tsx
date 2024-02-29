import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";

function NavBarComponet() {
  return (
    <AppBar sx={{ backgroundColor: "black" }}>
      <Toolbar sx={{ color: "white" }}>
        <Typography sx={{ fontWeight: "bold" }} variant="h5">
          DEV PIAUI
        </Typography>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button color="inherit">Inicio</Button>
          <Button color="inherit">Sobre</Button>
          <Button color="inherit">Portifolio</Button>
          <Button color="inherit">Membros</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBarComponet;
