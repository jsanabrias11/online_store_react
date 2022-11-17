import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
    palette: {
        primary: {
            main: '#ffa000'
        },
        secondary: {
            main: '#757575'
        },
        customColorRed: {
            main: red[500]
        }

      },
});

export default theme;