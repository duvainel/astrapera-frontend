import { forwardRef } from "react";
import { Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export const LinkWithRouter = forwardRef((props, ref) => {
  return (
    <Link ref={ref} as={RouterLink} {...props} to={props.href}>
      {props.children}
    </Link>
  );
});
