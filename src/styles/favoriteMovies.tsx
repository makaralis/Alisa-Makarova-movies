import { Paper } from "@mui/material";
import { styled } from "@mui/system";

export const StyledPaper = styled(Paper)(({theme}) => ({
    background: '#57576a',
    [theme.breakpoints.down('sm')]: {
        padding: 0,
    }
}))
   