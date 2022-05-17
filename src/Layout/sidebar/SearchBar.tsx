import SearchIcon from "@mui/icons-material/Search";
import { InputBase, styled } from "@mui/material";
import { grey } from "@mui/material/colors";
import React, { useState } from "react";
import { userApi } from "../../api/user";

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
  backgroundColor: "white",
  boxShadow: `0 5px 10px 1px rgba(0, 0, 0, 0.1)`,
}));

const ButtonIcon = styled("button")`
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
`;

type PropsType = {
  updateListUser: any;
};

const SearchBar = ({ updateListUser }: PropsType) => {
  const [searchVal, setSearchVal] = useState<string>("");
  const handleSearchUser = async (e: any) => {
    setSearchVal(e.target.value);
    const value = e.target.value;
    setTimeout(() => {
      searchUser(value);
    }, 3000);
  };

  const searchUser = async (value: string) => {
    const users = await userApi.searchUsers(value);
    console.log(users);
    updateListUser(users);
  };
  return (
    <SearchBox>
      <SearchInput
        value={searchVal}
        onChange={(e: any) => handleSearchUser(e)}
        placeholder="Search user..."
      />
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
