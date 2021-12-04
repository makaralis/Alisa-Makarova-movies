import { styled } from "@mui/system";

export const Container = styled('div')(({theme}) => `
    background-image: url('/star-wars.jpg');
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100%;
    position: fixed;
    width: 100%;
    overflow-y: scroll;
    color: white;
`,)

