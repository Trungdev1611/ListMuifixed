import * as React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList } from "react-window";
import { Avatar, ListItemIcon } from "@mui/material";
import AdUnitsIcon from "@mui/icons-material/AdUnits";

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <Avatar
            alt="Remy Sharp"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToM3JCO4iE-dGbyQF11FxWRU2BEUH5a0qGHw&usqp=CAU"
          />
        </ListItemIcon>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}

export default function VirtualizedList() {
  return (
    <>
      <Box
        sx={{
          width: "100%",

          height: 400,
          maxWidth: 260,
          bgcolor: "background.paper",
          border: "1px solid red"
        }}
      >
        <input
          style={{
            width: "100%",
            display: "inline-block",
            marginBottom: "20px",
            maxWidth: 260,
            padding: 0,
            margin: 0
          }}
        />
        <FixedSizeList
          height={400}
          width={260}
          itemSize={56}
          itemCount={20}
          overscanCount={5}
        >
          {renderRow}
        </FixedSizeList>
      </Box>
    </>
  );
}
