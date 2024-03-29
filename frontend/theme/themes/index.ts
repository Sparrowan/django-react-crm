declare module "@mui/material/styles" {
    interface PaletteOptions {
        orange: {
            light?: string;
            main: string;
            dark?: string;
        };
        primary?: PaletteColorOptions;

    }

    interface Palette {
        orange: {
            light?: string;
            main: string;
            dark?: string;
        };
        primary200?: string;
    }
}





import { createTheme, PaletteColorOptions, Theme } from '@mui/material/styles';

// assets
import colors from './assets/scss/_themes-vars.module.scss';

// project imports
import componentStyleOverrides from './compStyleOverride';
import themePalette from './palette';
import themeTypography from './typography';
import { ThemeOptions, Direction } from '@mui/material/styles';


/**
 * Represent theme style and structure as per Material-UI
 * @param {JsonObject} customization customization parameter object
 */
// Augmenting the PaletteOptions interface from Material-UI



export const theme = (customization: any) => {
    const color = colors;

    const themeOption = {
        colors: color,
        heading: color.grey900,
        paper: color.paper,
        backgroundDefault: color.paper,
        background: color.primaryLight,
        darkTextPrimary: color.grey700,
        darkTextSecondary: color.grey500,
        textDark: color.grey900,
        menuSelected: color.secondaryDark,
        menuSelectedBack: color.secondaryLight,
        divider: color.grey200,
        customization
    };

    const themeOptions: ThemeOptions = {
        direction: 'ltr',
        palette: themePalette(themeOption),
        mixins: {
            toolbar: {
                minHeight: '48px',
                padding: '16px',
                '@media (min-width: 600px)': {
                    minHeight: '48px'
                }
            }
        },
        typography: themeTypography(themeOption)
    };

    const themes = createTheme(themeOptions);
    themes.components = componentStyleOverrides(themeOption);

    return themes;
};

export default theme;
