import React from 'react';
import styled from '@emotion/styled'
import css from '@styled-system/css'
import { 
   space,
   color,
   typography,
   layout,
   flexbox,
   grid,
   background,
   border,
   position,
   shadow,
   variant
} from 'styled-system';

export const Button = styled('button')(
   space,
   color,
   typography,
   layout,
   flexbox,
   grid,
   background,
   border,
   position,
   shadow,
   // use for base styles
   css({
      transition: 'all 200ms',
      height: '50px',
      width: '100px',
      background: `linear-gradient(0deg, ${({theme, shade}) => theme.colors[shade][5]} 0%, ${({theme, shade}) => theme.colors[shade][4]} 100%)`
   }),
   // use for varying styles
   variant({
      variants: {
        primary: {
          color: 'red.8',
          '&:hover': {
            color: 'coral.5'
          }
         },
         secondary: {
            color: 'green.2',
            bg: 'red.2'
        },
      }
    })
);

Button.defaultProps = {
   variant: 'primary'
}

// export const Button = styled.button`
//    outline: none;
//    cursor: pointer;
//    padding: 0 16px;
//    min-width: 82px;
//    min-height: 40px;
//    font-size: 15px;
//    font-weight: 300;
//    letter-spacing: 1px;
//    color: ${props => props.theme.colors.white};
//    transition: all 200ms;
//    border-radius: 5px;
//    border: 1px solid ${({theme, color}) => theme.colors[color][6]};
//    box-shadow: 0 1px 2px 0 ${({theme, color}) => theme.colors[color][3]};
//    background: linear-gradient(0deg, ${({theme, color}) => theme.colors[color][6]} 0%, ${({theme, color}) => theme.colors[color][5]} 100%);
//    &:hover {
//       border: 1px solid ${({theme, color}) => theme.colors[color][5]};
//       box-shadow: 0 1px 5px 0 ${({theme, color}) => theme.colors[color][3]};
//       background: linear-gradient(0deg, ${({theme, color}) => theme.colors[color][5]} 0%, ${({theme, color}) => theme.colors[color][4]} 100%);
//    }
//    &:active {
//       border: 1px solid ${({theme, color}) => theme.colors[color][7]};
//       box-shadow: none;
//       background: linear-gradient(0deg, ${({theme, color}) => theme.colors[color][7]} 0%, ${({theme, color}) => theme.colors[color][6]} 100%);
//    }
// `

// export const Button = ({ color = 'blue', onClick, children }) => {
//    const { colors } = useTheme();
//    const styles = css`
//       outline: none;
//       cursor: pointer;
//       padding: 0 16px;
//       min-width: 82px;
//       min-height: 40px;
//       font-size: 15px;
//       font-weight: 300;
//       letter-spacing: 1px;
//       color: ${colors.white};
//       transition: all 200ms;
//       border-radius: 5px;
//       border: 1px solid ${colors[color][6]};
//       box-shadow: 0 1px 2px 0 ${colors[color][3]};
//       background: linear-gradient(0deg, ${colors[color][6]} 0%, ${colors[color][5]} 100%);
//       &:hover {
//          border: 1px solid ${colors[color][5]};
//          box-shadow: 0 1px 5px 0 ${colors[color][3]};
//          background: linear-gradient(0deg, ${colors[color][5]} 0%, ${colors[color][4]} 100%);
//       }
//       &:active {
//          border: 1px solid ${colors[color][7]};
//          box-shadow: none;
//          background: linear-gradient(0deg, ${colors[color][7]} 0%, ${colors[color][6]} 100%);
//       }
//    `
//    return (
//       <button
//          onClick={onClick}
//          css={styles}
//       >
//          {children}
//       </button>
//    );
// }