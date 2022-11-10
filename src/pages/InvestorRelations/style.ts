import styled from 'styled-components'
import {THEME_MEDIA_ENUM} from "../../theme";

export const InvestorRelationsView = styled.div`

  div, h1, h2, p, a {
    word-wrap: break-word;
    word-break: break-all;
  }

  .page-title {
    font-weight: 500;
    font-size: 48px;
    line-height: 67px;
    text-align: center;
    color: #1C2B33;
    margin-top: 96px;

    ${THEME_MEDIA_ENUM.small} {
      font-size: 32px;
      margin-top: 56px;
    }
  }

  .block-title {
    font-weight: 500;
    font-size: 24px;
    line-height: 34px;
    text-align: center;
    color: #1C2B33;
    margin-top: 145px;

    &:nth-child(1) {
      margin-top: 96px;
    }
    ${THEME_MEDIA_ENUM.small} {
      &:nth-child(1) {
        font-size: 24px;
        line-height: 34px;
        margin-top: 80px;
      }
    }
  }

  .block-view {
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  }

  .block-table {
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 60px 56px 60px;

    ${THEME_MEDIA_ENUM.medium} {
      padding: 0 40px 56px 40px;
    }

    ${THEME_MEDIA_ENUM.small} {
      padding: 0 24px 56px 24px;
    }
    .block-table-list {
      max-height: 520px;
      overflow-y: auto;
      padding-right: 26px;
      ${THEME_MEDIA_ENUM.small} {
        padding-right: 0;
      }
    }

    .block-table-item {
      display: grid;
      grid-template-columns: 170px 1fr;
      padding: 16px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      ${THEME_MEDIA_ENUM.small} {
        grid-template-columns: 1fr;
        & > div:nth-child(2) {
          margin-top: 8px;
        }
      }
      & > div:nth-child(1) {
        font-weight: 400;
        font-size: 17px;
        line-height: 24px;
        color: #1C2B33;
      }

      & > a {
        font-weight: 400;
        font-size: 17px;
        line-height: 24px;
        color: #465A69;
        text-decoration: none;
        &:hover{
          text-decoration: underline;
        }
      }
    }

    .block-table-item2 {
      display: grid;
      grid-template-columns: 1fr;
      /* padding: 10px 0; */
      /* border-bottom: 1px solid rgba(0, 0, 0, 0.05); */
      ${THEME_MEDIA_ENUM.small} {
        grid-template-columns: 1fr;
        & > div:nth-child(2) {
          margin-top: 8px;
        }
      }
      & > div:nth-child(1) {
        font-weight: 400;
        font-size: 17px;
        line-height: 24px;
        color: #1C2B33;
      }

      & > a {
        font-weight: 400;
        font-size: 17px;
        line-height: 24px;
        color: #465A69;
        text-decoration: none;
        &:hover{
          text-decoration: underline;
        }
      }
    }

    .block-table-item4 {
      display: grid;
      grid-template-columns: 1fr;
      padding: 16px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
      ${THEME_MEDIA_ENUM.small} {
        grid-template-columns: 1fr;
        & > div:nth-child(2) {
          margin-top: 8px;
        }
      }
      & > div:nth-child(1) {
        font-weight: 400;
        font-size: 17px;
        line-height: 24px;
        color: #1C2B33;
      }

      & > a {
        font-weight: 400;
        font-size: 17px;
        line-height: 24px;
        color: #465A69;
        text-decoration: none;
        &:hover{
          text-decoration: underline;
        }
      }
    }


    .block-table-title {
      & > div {
        font-weight: 600!important;
        font-size: 19px;
        line-height: 27px;
        color: #1C2B33;
      }
      ${THEME_MEDIA_ENUM.small} {
        grid-template-columns: 170px 1fr!important;
        &>div:nth-child(2){
          margin-top: 0;
        }
      }
    }

    .block-table-item2 {
      .block-table-item2-line {
        font-weight: 400;
        font-size: 17px;
        line-height: 24px;
        color: #1C2B33;
        margin-top: 16px;
      }

      .block-table-item2-line-c {
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        color: #465A69;
        padding-top: 8px;
        padding-left: 10px;
      }
    }

    .block-table-item3 {
      font-weight: 400;
      font-size: 17px;
      line-height: 24px;
      color: #465A69;
      padding: 16px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);
    }
    .load-more{
      padding: 20px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      span{
        font-size: 17px;
        line-height: 24px;
        color: #465A69;
        cursor: pointer;
      }
    }
  }
`
