import { Avatar, Box, Stack, Typography } from "@mui/material";
import { cyan, teal } from "@mui/material/colors";
import { stat } from "fs";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userApi } from "../../api/user";
import { setUserInfor } from "../../redux/actions/user";

const listAvatars = [
  {
    id: 1,
    link: "https://img.freepik.com/free-vector/cute-cat-with-love-sign-hand-cartoon-illustration-animal-nature-concept-isolated-flat-cartoon-style_138676-3419.jpg?t=st=1652770166~exp=1652770766~hmac=2aafdc7b890c8f7b0ccdf1df16b607c44caa0d64ca7747ac6eea50d913b4eacf&w=740",
  },
  {
    id: 2,
    link: "https://img.freepik.com/free-vector/hen-with-chick-cartoon-illustration_138676-2054.jpg?t=st=1652770166~exp=1652770766~hmac=9991b3e148c453c52b5bc3d9e4ed670f0a0962e9ae8b98faa766cf9fc57443fb&w=740",
  },
  {
    id: 3,
    link: "https://img.freepik.com/free-vector/cute-cow-holding-milk-animal-drink_138676-2036.jpg?t=st=1652770166~exp=1652770766~hmac=e2816141f9df34a1c9d4f1063eaa7c4815ea4dc2ea94ae94597e4a9a6a09df33&w=740",
  },
  {
    id: 4,
    link: "https://img.freepik.com/free-vector/astronaut-dabbing-cartoon-vector-icon-illustration-science-technology-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3360.jpg?t=st=1652770166~exp=1652770766~hmac=fa699971a823513962c4187e4bd011506c37c67e61c2a0ea8840083b99c4d7c4&w=740",
  },
  {
    id: 5,
    link: "https://img.freepik.com/free-vector/cute-unicorn-sliding-rainbow-cartoon-vector-illustration-animal-fantasy-concept-isolated-vector-flat-cartoon-style_138676-1939.jpg?t=st=1652770166~exp=1652770766~hmac=101ce30380e89e26f1195a2210a57c30724efcdeaa447d661a8182465bed0ab2&w=740",
  },
  {
    id: 6,
    link: "https://img.freepik.com/free-vector/cute-king-pig-wearing-glasses-cartoon-illustration-animal-concept-isolated-flat-cartoon_138676-2291.jpg?t=st=1652770166~exp=1652770766~hmac=242c755f6a349283bb9d25cdc7548b2c93604e7028fb71f3ce81b6195ecc9309&w=740",
  },
  {
    id: 7,
    link: "https://img.freepik.com/free-vector/cute-bad-cat-wearing-suit-sunglasses-with-baseball-bat-cartoon-icon-illustration-animal-fashion-icon-concept-isolated-flat-cartoon-style_138676-2170.jpg?t=st=1652770166~exp=1652770766~hmac=f6b4bc7b1150e92eb69a9ddf3703da011c8658bcae38eb4987795303d948e23b&w=740",
  },
  {
    id: 8,
    link: "https://img.freepik.com/free-vector/cute-corgi-astronaut-flying-cartoon-vector-illustration-animal-science-concept-isolated-vector-flat-cartoon-style_138676-1931.jpg?t=st=1652770166~exp=1652770766~hmac=d9ce2996934d14515a335efe86326fb5156ee09ae8c5befd9e114776962a1ecc&w=740",
  },
  {
    id: 9,
    link: "https://img.freepik.com/free-vector/cute-blue-tyrannosaurus-rex_138676-2073.jpg?t=st=1652770166~exp=1652770766~hmac=d90429d4ffeb30576f95b369ccb8aafbf7739e759055174558f02e2d42c09b6d&w=740",
  },
  {
    id: 10,
    link: "https://img.freepik.com/free-vector/cute-swag-polar-bear-with-hat-gold-chain-necklace-cartoon-illustration-flat-cartoon-style_138676-2719.jpg?t=st=1652770343~exp=1652770943~hmac=c6d8adc3438708861994af8c931804606e3101e19699a855a01dfc7a2dd8f637&w=740",
  },
];

const ChooseAvatar = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state: any) => state.user.infor);

  const handleUpdateAvatar = async (link: string) => {
    try {
      const user = await userApi.updateAvatar(currentUser.id, link);
      if (user) {
        setUserInfor(user);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: cyan[50],
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "30px 0",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            color: teal[700],
          }}
        >
          Choose Your Avatar
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            flexWrap: "wrap",
            gap: "30px",
            justifyContent: "center",
          }}
        >
          {listAvatars.map((avatar) => (
            <Avatar
              key={avatar.id}
              src={avatar.link}
              sx={{
                width: 200,
                height: 200,
                cursor: "pointer",
                transition: "0.3s",
                "&:hover": {
                  transform: "scale(1.1)",
                  boxShadow: `0px 5px 30px 1px ${teal[200]}`,
                  border: "5px solid white",
                },
              }}
              onClick={() => handleUpdateAvatar(avatar.link)}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
};

export default ChooseAvatar;
