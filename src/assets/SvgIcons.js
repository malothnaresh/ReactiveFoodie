import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const ProfileIcon = props => {
  return (
    <SvgIcon width="18" height="18" viewBox="0 0 18 18">
      <path d="M9 1C4.58 1 1 4.58 1 9s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 2.75c1.24 0 2.25 1.01 2.25 2.25S10.24 8.25 9 8.25 6.75 7.24 6.75 6 7.76 3.75 9 3.75zM9 14.5c-1.86 0-3.49-.92-4.49-2.33C4.62 10.72 7.53 10 9 10c1.47 0 4.38.72 4.49 2.17-1 1.41-2.63 2.33-4.49 2.33z" />
    </SvgIcon>
  );
};

const MinusIcon = props => {
  return (
    <SvgIcon
      width="24"
      height="24"
      viewBox="0 0 24 24"
      color={props.color}
      className={props.className}
      onClick={props.onClick}
    >
      <path d="M19 13H5v-2h14v2z" />
    </SvgIcon>
  );
};

export default { ProfileIcon, MinusIcon };
