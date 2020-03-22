import { NavLink } from "react-router-dom";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";


const useStyles = makeStyles({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  }
});

export default function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        {[
          { name: "О клубе", href: "/home" },
          { name: "Контакты", href: "/contacts" }
        ].map(text => (
          <ListItem button key={text.name}>
            <NavLink to={text.href} exact={false}>
              <ListItemText primary={text.name} />
            </NavLink>
          </ListItem>
        ))}
        {[
          { name: "Цены", href: "https://vk.com/market-156067851" },
          { name: "Магазин", href: "https://vk.com/market-156067851" },
          { name: "Расписание", href: "https://sun9-14.userapi.com/c855020/v855020336/1dd46e/OKy-b6lF06I.jpg" },
        ].map(text => (
          <ListItem button key={text.name}>
            <a href={text.href}>
              <ListItemText primary={text.name} />
            </a>
          </ListItem>
        ))}


      </List>
      <Divider />
      <List>
        {[
          { name: "Групповые тренировки", href: "/brazil-jiu-jitsu" },
          { name: "Персональные тренировки", href: "/individual-trainings" },
          { name: "Аренда зала", href: "/hall-rental" }
        ].map(text => (
          <ListItem button key={text.name}>
            <NavLink to={text.href} exact={false}>
              <ListItemText primary={text.name} />
            </NavLink>
          </ListItem>
        ))}
      </List>
    </div>
  );

  //   const fullList = side => (
  //     <div
  //       className={classes.fullList}
  //       role="presentation"
  //       onClick={toggleDrawer(side, false)}
  //       onKeyDown={toggleDrawer(side, false)}
  //     >
  //       <List>
  //         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
  //           <ListItem button key={text}>
  //             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItem>
  //         ))}
  //       </List>
  //       <Divider />
  //       <List>
  //         {['All mail', 'Trash', 'Spam'].map((text, index) => (
  //           <ListItem button key={text}>
  //             <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
  //             <ListItemText primary={text} />
  //           </ListItem>
  //         ))}
  //       </List>
  //     </div>
  //   );

  return (
    <div className="menue-button">
      <Button onClick={toggleDrawer("left", true)}><div className={"icone-menu"}></div> </Button>
      <Drawer open={state.left} onClose={toggleDrawer("left", false)}>
        {sideList("left")}
      </Drawer>
    </div>
  );
}
