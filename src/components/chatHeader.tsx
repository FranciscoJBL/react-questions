import { Typography } from "@material-ui/core";
import { AppBar, Toolbar } from "@material-ui/core";

function ChatHeader() {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Automated profile definition
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default ChatHeader;
