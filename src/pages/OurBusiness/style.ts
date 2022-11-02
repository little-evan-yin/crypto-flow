import styled from 'styled-components'
import {THEME_MEDIA_ENUM} from "../../theme";

export const OurBusinessView = styled.div`
  padding: 96px 40px 56px 40px;
  max-width: 1120px;
  margin: 0 auto;

  ${THEME_MEDIA_ENUM.medium} {
    padding: 56px 40px;
  }

  ${THEME_MEDIA_ENUM.small} {
    padding: 56px 24px;
  }

  .page-header {
    font-weight: 500;
    font-size: 48px;
    line-height: 67px;
    text-align: center;
    color: #1C2B33;
    margin: 0;

    ${THEME_MEDIA_ENUM.small} {
      font-size: 32px;
    }

  }

  .page-desc {
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 24px;
    text-align: center;
    color: #465A69;
    margin-top: 8px;
  }

  .block-528-f {
    display: grid;
    grid-template-columns: 528px 1fr;
    grid-column-gap: 80px;
    padding-top: 56px;
    ${THEME_MEDIA_ENUM.medium} {
      grid-template-columns: 360px 1fr;
    }
    ${THEME_MEDIA_ENUM.small} {
      display: flex;
      flex-direction: column-reverse;
      padding-top: 56px;
      grid-column-gap: 0;
    }
  }

  .block-f-528 {
    display: grid;
    grid-template-columns: 1fr 528px;
    grid-column-gap: 80px;
    padding: 56px 0;
    margin: 50px 0;
    ${THEME_MEDIA_ENUM.medium} {
      grid-template-columns: 1fr 360px;
    }
    ${THEME_MEDIA_ENUM.small} {
      display: flex;
      flex-direction: column;
      margin: 50px 0 0 0;
    }
  }

  .block-title {
    font-weight: 500;
    font-size: 24px;
    line-height: 34px;
    color: #000000;
  }

  .block-content {
    font-weight: 400;
    font-size: 17px;
    line-height: 24px;
    color: #000000;
    margin-top: 24px;
    max-height: 400px;
    overflow-y: auto;
  }

  .poster {
    display: flex;
    align-items: center;
    ${THEME_MEDIA_ENUM.small} {
      margin-top: 40px;
    }
    img {
      width: 100%;
    }
  }

  .block-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
