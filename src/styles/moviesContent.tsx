import { styled } from "@mui/system";
import { Typography, Theme, Grid  } from "@mui/material";

export const MovieContainer = styled('div')(({theme, isselected}: {theme?: Theme; isselected?: string}) => ({
    background: isselected === 'true' ? '#505062' : '#1e1e46',
    border: '1px solid white',
    borderRadius: theme?.spacing(0.5),
    color: 'white',
    padding: theme?.spacing(1.5),
    marginBottom: theme?.spacing(3),
    '&:hover': {
        cursor: 'pointer',
    }
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

export const DescriptionContainer = styled(Grid)(({theme}) => ({
    border: '1px solid white',
    borderRadius: theme?.spacing(0.5),
    padding: theme?.spacing(1.5),
    margin: theme?.spacing(0, 3),
}))