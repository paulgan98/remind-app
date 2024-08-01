import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: 'Nunito, Inter',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          fontFamily: 'Nunito',
          textTransform: 'capitalize',
        },
        contained: {
          boxShadow: '0 2px 8px 4px rgba(0, 0, 0, 0.04)',
          borderRadius: '50px 50px',
          //   color: '#111',
          //   backgroundColor: 'rgb(250, 250, 250)',
        },
      },
    },
    // MuiDialog: {
    //   styleOverrides: {
    //     root: {
    //       display: 'flex',
    //       flexFlow: 'column nowrap',
    //     //   maxHeight: '100vh',
    //     },
    //   },
    // },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: '8px 16px',
          borderBottom: '1px solid rgb(240, 240, 240)',
          fontWeight: 700,
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          padding: '24px 16px !important',
          display: 'flex',
          flexFlow: 'column nowrap',
          gap: '16px',
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: 'small',
        InputLabelProps: {
          shrink: true,
          style: {
            fontFamily: 'Nunito, Inter',
          },
        },
        InputProps: {
          style: {
            fontFamily: 'Nunito, Inter',
          },
        },
      },
      styleOverrides: {},
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: 'Nunito, Inter',
        },
      },
    },
    MuiIconButton: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiPickersCalendarHeader: {
      styleOverrides: {
        labelContainer: {
          overflow: 'unset', // prevent down icon button edges from being cut
        },
      },
    },
    MuiPickersYear: {
      styleOverrides: {
        yearButton: {
          lineHeight: 1,
          //   fontFamily: 'Nunito, Inter',
        },
      },
    },
  },
});
