import { Container, styled } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import React from "react";

const WrapHome = styled("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  box-shadow: 0 5px 10px 1px rgba(0, 0, 0, 0.1);
`;

const SvgForText = styled("svg")`
  position: absolute;
  font-size: 70px;
  font-family: sans-serif;
  font-weight: bold;
  letter-spacing: 0.09em;
  width: 100%;
  height: 100%;
  left: 0;
`;

const SvgText = styled("text")`
  fill: ${blueGrey[700]};
  stroke: ${blueGrey[700]};
  fill-opacity: 1;
  stroke-width: 0;
  stroke-dasharray: 100% 0;
  animation: stroke-offset 3s ease-out;

  @keyframes stroke-offset {
    0% {
      fill-opacity: 0;
      stroke-width: 0;
      stroke-dasharray: 0% 100%;
    }
    25% {
      stroke-width: 3px;
    }
    50% {
      fill-opacity: 0;
    }
    75% {
      stroke-width: 3px;
    }
    100% {
      stroke-width: 0;
    }
  }
`;

const Home = () => {
  return (
    <WrapHome>
      <SvgForText viewBox="0 0 1280 720">
        <SvgText x="50%" y="50%" textAnchor="middle">
          Wellcome to my Chatapp
        </SvgText>
      </SvgForText>
      <svg viewBox="0 0 3387 1270">
        <path
          id="planePath"
          style={{
            stroke: "#D9DADA",
            strokeWidth: ".5%",
            strokeDasharray: "1% 2%",
            strokeLinecap: "round",
            fill: "none",
          }}
          d="M-226 626c439,4 636,-213 934,-225 755,-31 602,769 1334,658 562,-86 668,-698 266,-908 -401,-210 -893,189 -632,630 260,441 747,121 1051,91 360,-36 889,179 889,179"
        />
        <g id="plane">
          <polygon
            points="-141,-10 199,0 -198,-72 -188,-61 -171,-57 -184,-57 "
            fill="#D9DADA"
          />
          <polygon points="199,0 -141,-10 -163,63 -123,9 " fill="#C5C6C6" />
          <polygon
            points="-95,39 -113,32 -123,9 -163,63 -105,53 -108,45 -87,48 -90,45 -103,41 -94,41 "
            fill="#AEAFB0"
          />
          <path
            d="M-87 48l-21 -3 3 8 19 -4 -1 -1zm-26 -16l18 7 -2 -1 32 -7 -29 1 11 -4 -24 -1 -16 -18 10 23zm10 9l13 4 -4 -4 -9 0z"
            fill="#9D9E9E"
          />
          <polygon
            points="-83,28 -94,32 -65,31 -97,38 -86,49 -67,70 199,0 -123,9 -107,27 "
            fill="#D9DADA"
          />
        </g>
        <animateMotion
          xlinkHref="#plane"
          dur="5s"
          repeatCount="indefinite"
          rotate="auto"
        >
          <mpath xlinkHref="#planePath" />
        </animateMotion>
      </svg>
    </WrapHome>
  );
};

export default Home;
