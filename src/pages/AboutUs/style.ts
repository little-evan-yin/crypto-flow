import styled from 'styled-components'
import {THEME_MEDIA_ENUM} from "../../theme";

export const AboutUsView = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 60px 56px 0;

  ${THEME_MEDIA_ENUM.medium} {
    padding: 0 40px 56px 24px;
  }

  ${THEME_MEDIA_ENUM.small} {
    padding: 0 24px 56px 24px;
  }

  .page-title {
    font-weight: 500;
    font-size: 48px;
    line-height: 67px;
    text-align: center;
    color: #1C2B33;
    margin-top: 96px;
    word-wrap: break-word;
    word-break: break-all;

    ${THEME_MEDIA_ENUM.small} {
      font-size: 32px;
      margin-top: 80px;
    }

  }

  .block-title {
    font-weight: 600;
    font-size: 24px;
    line-height: 140%;
    color: #1C2B33;
    word-wrap: break-word;
    word-break: break-all;
    margin: 0;

    ${THEME_MEDIA_ENUM.small} {
      font-size: 24px;
      line-height: 140%;
    }
  }

  .text-dan {
    font-weight: 400;
    font-size: 17px;
    line-height: 24px;
    color: #465A69;
    word-wrap: break-word;
    word-break: break-all;
    margin: 16px 0 0 0;
  }

  .text-dan-small {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #465A69;
    margin-top: 16px;
    word-wrap: break-word;
    word-break: break-all;
  }

  .view-layout-f-400 {
    display: grid;
    grid-template-columns: 1fr 400px;
    grid-column-gap: 56px;
    margin-top: 88px;

    ${THEME_MEDIA_ENUM.small} {
      display: flex;
      flex-direction: column;
    }
  }

  .view-layout-f-f-400 {
    display: grid;
    grid-template-columns: 1fr 1fr 400px;
    grid-column-gap: 32px;
    margin-top: 120px;

    ${THEME_MEDIA_ENUM.small} {
      display: flex;
      flex-direction: column;
    }
  }

  .view-layout-400-f {
    display: grid;
    grid-template-columns: 400px 1fr;
    grid-column-gap: 56px;
    margin-top: 120px;

    ${THEME_MEDIA_ENUM.small} {
      display: flex;
      flex-direction: column-reverse;
    }
  }

  .view-layout-f-f {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 80px;
    margin-top: 56px;

    ${THEME_MEDIA_ENUM.small} {
      display: flex;
      flex-direction: column;

      &.view-layout-f-f-r {
        flex-direction: column-reverse;
      }
    }
  }

  img {
    width: 100%;

    ${THEME_MEDIA_ENUM.small} {
      margin-top: 32px;
    }
  }
`
