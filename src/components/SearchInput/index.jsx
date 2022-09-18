import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { setQuery } from "../../state/slices/search";

export function SearchInput() {
  // Inputa girilen string'i global search slice'ına kaydeden yapı
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.query);
  const handleChange = (event) => dispatch(setQuery(event.target.value));

  return (
    <InputGroup w="auto">
      <Input
        _focusVisible={{
          outlineWidth: "2px",
          outlineColor: "brand.300",
          outlineOffset: "-1px",
        }}
        bg={"#fff"}
        value={search}
        onChange={handleChange}
        placeholder="Ara"
        size="sm"
      />
      <InputRightElement boxSize={"32px"} children={<SearchIcon />} />
    </InputGroup>
  );
}
