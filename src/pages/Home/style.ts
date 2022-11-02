import styled from 'styled-components'
import {THEME_MEDIA_ENUM} from "../../theme";

export const HomeView = styled.div`
  .block-view {
    padding: 95px 0 140px 0;

    ${THEME_MEDIA_ENUM.small} {
      padding: 26px 0 120px 0;
    }

    &:nth-child(even) {
      background: #F0F7F8;
    }

    .block-box {
      max-width: 1120px;
      margin: 0 auto;
      padding: 0 60px;

      ${THEME_MEDIA_ENUM.medium} {
        padding: 0 40px;
      }

      ${THEME_MEDIA_ENUM.small} {
        padding: 0 24px;
      }
    }
  }

  .title {
    font-weight: 500;
    font-size: 48px;
    line-height: 67px;
    text-align: center;
    color: #1C2B33;

    ${THEME_MEDIA_ENUM.small} {
      font-size: 32px;
      line-height: 45px;
    }
  }

  .desc-link {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;

    a {
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
    }

    img {
      width: 24px;
      height: 24px;
    }

    span {
      font-weight: 500;
      font-size: 17px;
      line-height: 24px;
      color: #1C2B33;
      margin-left: 8px;

      ${THEME_MEDIA_ENUM.small} {
        font-size: 15px;
        line-height: 21px;
      }
    }
  }

  .poster {
    img {
      width: 100%;
      margin-top: 56px;
    }
  }
`
