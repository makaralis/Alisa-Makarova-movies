import { styled } from "@mui/system";
import { Link } from 'react-router-dom';


export const StyledNav = styled('nav')(({theme}) => `
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    min-height: 10vh;
    background: #313646;
    `,
)

export const StyledLink = styled(Link)(({theme}) => `
    color: white;
    text-decoration: none;
    `,
)