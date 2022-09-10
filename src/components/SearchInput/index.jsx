import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { setQuery } from "../../state/slices/search";

export function SearchInput() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.query);
  const handleChange = (event) => dispatch(setQuery(event.target.value));

  return (
    <InputGroup w="auto">
      <Input
        value={search}
        onChange={handleChange}
        placeholder="Ara"
        size="sm"
      />
      <InputRightElement boxSize={"32px"} children={<SearchIcon />} />
    </InputGroup>
  );
}
