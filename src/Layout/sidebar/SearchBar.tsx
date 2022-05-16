import SearchIcon from "@mui/icons-material/Search";
import { InputBase, styled } from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";

const SearchBox = styled("form")`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchInput = styled(InputBase)(({ theme }) => ({
  width: "100%",
  padding: "10px 20px 10px 15px",
  color: grey[700],
  borderRadius: 50,
  fontSize: 16,
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  boxShadow: `0 5px 10px 1px rgba(0, 0, 0, 0.1)`,
}));

const ButtonIcon = styled("button")`
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;

const SearchBar = () => {
  return (
    <SearchBox>
      <SearchInput placeholder="Search user..." />
      <ButtonIcon type="submit">
        <SearchIcon
          sx={{
            color: grey[700],
          }}
        />
      </ButtonIcon>
    </SearchBox>
  );
};

export default SearchBar;
