import { forwardRef } from "react";
import { Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

// Chakra'nın link componentini react router link ile kullanma;
export const LinkWithRouter = forwardRef((props, ref) => {
  return (
    <Link ref={ref} as={RouterLink} {...props} to={props.href}>
      {props.children}
    </Link>
  );
});
