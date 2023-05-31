import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box, Link, BoxProps, Typography } from '@mui/material';
// import Typography from 'src/theme/overrides/Typography';

// ----------------------------------------------------------------------

export interface LogoProps extends BoxProps {
  disabledLink?: boolean;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabledLink = false, sx, ...other }, ref) => {
    const theme = useTheme();

    const PRIMARY_LIGHT = theme.palette.primary.light;

    const PRIMARY_MAIN = theme.palette.primary.main;

    const PRIMARY_DARK = theme.palette.primary.dark;

    const logo = (
      <Box
        ref={ref}
        component="div"
        sx={{
          width: 50,
          height: 50,
          display: 'inline-flex',
          ...sx,
        }}
        {...other}
      >
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
          width="42.000000pt" height="42.000000pt" viewBox="0 0 32.000000 32.000000"
          preserveAspectRatio="xMidYMid meet">

          <defs>
            <linearGradient id="BG1" x1="100%" x2="50%" y1="9.946%" y2="50%">
              <stop offset="0%" stopColor={PRIMARY_DARK} />
              <stop offset="100%" stopColor={PRIMARY_MAIN} />
            </linearGradient>

            <linearGradient id="BG2" x1="50%" x2="50%" y1="0%" y2="100%">
              <stop offset="0%" stopColor={PRIMARY_LIGHT} />
              <stop offset="100%" stopColor={PRIMARY_MAIN} />
            </linearGradient>

            <linearGradient id="BG3" x1="50%" x2="50%" y1="0%" y2="100%">
              <stop offset="0%" stopColor={PRIMARY_LIGHT} />
              <stop offset="100%" stopColor={PRIMARY_MAIN} />
            </linearGradient>
          </defs>

          <g transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)"
            fill={PRIMARY_MAIN} stroke="none">
            <path d="M112 253 c-19 -7 -42 -58 -42 -93 0 -37 23 -85 45 -94 9 -3 37 -6 61
-6 63 0 91 31 91 100 0 70 -28 100 -94 99 -26 0 -54 -3 -61 -6z m108 -43 c11
-11 20 -33 20 -50 0 -61 -77 -93 -120 -50 -43 43 -11 120 50 120 17 0 39 -9
50 -20z"/>
            <path d="M132 198 c-17 -17 -15 -53 4 -72 21 -22 24 -20 24 14 0 21 -5 30 -16
30 -9 0 -14 6 -11 13 2 6 19 12 37 12 18 0 35 -6 38 -12 2 -7 -3 -13 -12 -13
-11 0 -16 -9 -16 -30 0 -22 4 -28 15 -24 20 8 31 53 18 73 -13 20 -64 26 -81
9z"/>
          </g>
        </svg>
      </Box>
    );

    // const logo = (
    // <Box
    //   ref={ref}
    //   component="div"
    //   sx={{
    //     width: 40,
    //     height: 40,
    //     display: 'inline-flex',
    //     ...sx,
    //   }}
    //   {...other}
    // >
    //     <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512">
    // <defs>
    //   <linearGradient id="BG1" x1="100%" x2="50%" y1="9.946%" y2="50%">
    //     <stop offset="0%" stopColor={PRIMARY_DARK} />
    //     <stop offset="100%" stopColor={PRIMARY_MAIN} />
    //   </linearGradient>

    //   <linearGradient id="BG2" x1="50%" x2="50%" y1="0%" y2="100%">
    //     <stop offset="0%" stopColor={PRIMARY_LIGHT} />
    //     <stop offset="100%" stopColor={PRIMARY_MAIN} />
    //   </linearGradient>

    //   <linearGradient id="BG3" x1="50%" x2="50%" y1="0%" y2="100%">
    //     <stop offset="0%" stopColor={PRIMARY_LIGHT} />
    //     <stop offset="100%" stopColor={PRIMARY_MAIN} />
    //   </linearGradient>
    // </defs>

    //       <g fill={PRIMARY_MAIN} fillRule="evenodd" stroke="none" strokeWidth="1">
    //         <path
    //           fill="url(#BG1)"
    //           d="M183.168 285.573l-2.918 5.298-2.973 5.363-2.846 5.095-2.274 4.043-2.186 3.857-2.506 4.383-1.6 2.774-2.294 3.939-1.099 1.869-1.416 2.388-1.025 1.713-1.317 2.18-.95 1.558-1.514 2.447-.866 1.38-.833 1.312-.802 1.246-.77 1.18-.739 1.111-.935 1.38-.664.956-.425.6-.41.572-.59.8-.376.497-.537.69-.171.214c-10.76 13.37-22.496 23.493-36.93 29.334-30.346 14.262-68.07 14.929-97.202-2.704l72.347-124.682 2.8-1.72c49.257-29.326 73.08 1.117 94.02 40.927z"
    //         />
    //         <path
    //           fill="url(#BG2)"
    //           d="M444.31 229.726c-46.27-80.956-94.1-157.228-149.043-45.344-7.516 14.384-12.995 42.337-25.267 42.337v-.142c-12.272 0-17.75-27.953-25.265-42.337C189.79 72.356 141.96 148.628 95.69 229.584c-3.483 6.106-6.828 11.932-9.69 16.996 106.038-67.127 97.11 135.667 184 137.278V384c86.891-1.611 77.962-204.405 184-137.28-2.86-5.062-6.206-10.888-9.69-16.994"
    //         />
    //         <path
    //           fill="url(#BG3)"
    //           d="M450 384c26.509 0 48-21.491 48-48s-21.491-48-48-48-48 21.491-48 48 21.491 48 48 48"
    //         />
    //       </g>
    //     </svg>
    //   </Box>
    // );

    if (disabledLink) {
      return logo;
    }

    return (
      <Link component={RouterLink} to="/dashboard" sx={{ display: 'contents' }}>
        {logo}
      </Link>
    );
  }
);

export default Logo;
