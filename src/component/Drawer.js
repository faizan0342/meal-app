import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const history = useHistory(); // Hook for navigation

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleListItemClick = (path: string) => () => {
    // history.push(path); // Navigate to the specified path
    window.location.href = path;
    toggleDrawer(false)(); // Close the drawer
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {[
          { text: 'Home', path: '/' },
          { text: 'Menu', path: '/menu' },
          { text: 'My Favorites', path: '/favorites' },
          { text: 'Random Meals', path: '/randomMeals' }
        ].map((item, index) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton onClick={handleListItemClick(item.path)}>
              <ListItemIcon>
                {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {/* Other items if needed */}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>NavBar</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
