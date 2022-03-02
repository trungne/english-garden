import styles from "./courseinfo.module.css";

import Typography from '@mui/material/Typography';
import { createTheme } from "@mui/system";
import { ThemeProvider } from "@emotion/react";
import { Fade } from "react-awesome-reveal";

const theme = createTheme({
    typography: {
        name: {
            color: "#581f7e",
            fontFamily: "SansterdamScript"
        }
    }
});

declare module '@mui/material/styles' {
    interface TypographyVariants {
        name: React.CSSProperties;
    }

    // allow configuration using `createTheme`
    interface TypographyVariantsOptions {
        name?: React.CSSProperties;
    }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        name: true;
    }
}
export default function CourseTitle({ name, bannerUrl }: { name: string, bannerUrl: string }) {
    return (
        <Fade triggerOnce damping={0.1} cascade>
            <div style={{ backgroundImage: `url(${bannerUrl})` }} className={styles['course-banner']}>
                <div className={styles['course-title']}>
                    <ThemeProvider theme={theme}>
                        <Typography fontSize={"10vmin"} variant="name">
                            {name}
                        </Typography>
                    </ThemeProvider>
                </div>
            </div>
        </Fade>);
}