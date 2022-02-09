import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import RefreshIcon from '@mui/icons-material/Refresh';

type Props = {
  fetchItems: any,
  resetCounter: any
}

const Header = (props: Props) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <RefreshIcon
                onClick={() => {
                  props.fetchItems();
                }}
              />
          </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Pictures
            </Typography>
            <Button
              color="inherit"
              onClick={() => {
                props.resetCounter();
              }}>
              Reset Counter
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Header;
