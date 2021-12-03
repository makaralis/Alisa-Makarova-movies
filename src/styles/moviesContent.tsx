import { styled } from "@mui/system";
import { Typography  } from "@mui/material";

export const MovieContainer = styled('div')(({theme}) => ({
    background: '#1e1e46',
    border: '1px solid white',
    color: 'white',
    padding: theme.spacing(1.5),
    marginBottom: theme.spacing(3)
}))

export const Abstract = styled(Typography)(({theme}) => ({
}))

export const Title = styled(Typography)(({theme}) => ({
    fontWeight: 'bold',
    padding: theme.spacing(2,0),
}))

export const TopContainer = styled(Typography)(({theme}) => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
}))