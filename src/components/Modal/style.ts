import styled from "styled-components";
import {THEME_MEDIA_ENUM} from "../../theme/index";

export const ModalView = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw !important;
    height: 100vh !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    background: rgba(35, 38, 47, 0.7);
    z-index: 999;
    .modal-header {
        padding: 24px 40px;
        display: flex;
        align-items: center;
        position: relative;
        h1 {
            flex: 1;
            font-size: 20px;
            font-weight: 500;
            color: ${({ theme }) => theme.color3};
            line-height: 28px;
            margin: 0;
        }
    }

    ${THEME_MEDIA_ENUM.small} {
        .modal-header{
            padding: 20px;
            h1 {
                font-size: 14px;
               
            }
            img {
                width: 18px;
                height: 18px;
                position: relative;
                top: 4px;
            }
        }
    }

`;

export const ModalViewBox = styled.div<{ width; paddingBox }>`
  box-sizing: border-box;
  margin: 0px;
  min-width: 0px;
  box-shadow: rgb(35 38 47 / 70%) 0px 4px 8px 0px;
  border-radius: 10px;
  padding: ${({ paddingBox }) => paddingBox};
  background-color: #ffffff;
  width: ${({ width }) => (typeof width === "number" ? `${width}px` : width)};
  max-width: 98vw;
  max-height: 100vh;
  overflow-y: auto;

  ${THEME_MEDIA_ENUM.small}{
    max-width: 92vw;
}
`;

export const ModalContentView = styled.div<{ padding: string }>`
  padding: ${({ padding }) => padding};
`;
