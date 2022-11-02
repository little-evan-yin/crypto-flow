import styled from "styled-components";
import {THEME_MEDIA_ENUM} from "theme";

export const Header = styled.div`
  height: 80px;
  background: #000000;

  .header-view {
    max-width: 1400px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 0 60px;

    ${THEME_MEDIA_ENUM.medium} {
      padding: 0 40px;
    }

    ${THEME_MEDIA_ENUM.small} {
      padding: 0 24px;
    }
  }

  .header-logo {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
    text-decoration: none;

    img {
      width: 40px;
      height: 40px;
    }
  }

  .header-links {
    flex: 1;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 30px;

    ${THEME_MEDIA_ENUM.medium} {
      .link-item {
        display: none;
      }
    }
  }

  .header-menus {
    height: 100%;
  }

  .language-view, .concat-us {
    ${THEME_MEDIA_ENUM.medium} {
      display: none !important;
    }
  }

  .link-item {
    position: relative;
    display: flex;
    align-items: center;
    margin-left: 32px;
    height: 100%;

    .link-item-txt {
      display: flex;
      align-items: center;

      & > a {
        font-weight: 400;
        font-size: 17px;
        line-height: 24px;
        color: #FFFFFF;
        cursor: pointer;
        text-decoration: none;
      }

      & > img {
        width: 16px;
        height: 16px;
        cursor: pointer;
        transition: all 200ms ease-in;
        margin-left: 5px;
      }
    }

    .link-item-menu {
      position: absolute;
      left: 0;
      top: 100%;
      width: auto;
      z-index: 2;
      background: #FFFFFF;
      border: 1px solid rgba(67, 255, 187, 0.1);
      box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      padding: 8px;
      display: none;

      &.language-menu {
        left: 50%;
        transform: translateX(-50%);

        a {
          text-align: center;
        }
      }

      & > a {
        white-space: nowrap;
        display: block;
        cursor: pointer;
        padding: 8px 16px;
        text-decoration: none;
        font-weight: 400;
        font-size: 17px;
        line-height: 24px;
        color: #000000;

        &:hover {
          span {
            border-bottom: 1px solid #43FFBB;
          }
        }

        &.active {
          background: #EEEEEE;
          border-radius: 4px;
        }
      }
    }

    &:hover {
      .link-item-txt {
        & > img {
          transform: rotateZ(180deg);
        }

        border-bottom: 1px solid #43FFBB;
      }

      .link-item-menu {
        display: block;
      }
    }
  }

  .h5-menu-btn {
    display: none;
    width: 20px;
    height: 20px;
    cursor: pointer;

    ${THEME_MEDIA_ENUM.medium} {
      display: block;
      position: relative;

      & > div {
        height: 2px;
        width: 100%;
        position: absolute;
        left: 0;
        top: 5px;
        background-color: #ffffff;
        transform-origin: center;
        transition: all 100ms;

        &:nth-child(2) {
          top: 15px;
        }
      }
    }

    &.active {
      & > div {
        transform: translate3d(0px, 0px, 0px) scale(1, 1) rotate(-45deg) scale(1, 1);
        top: 10px;

        &:nth-child(2) {
          transform: translate3d(0px, 0px, 0px) scale(1, 1) rotate(45deg) scale(1, 1);
        }
      }
    }
  }

  .h5-menu-view {
    height: 0;
    overflow: hidden;
    width: 100%;
    position: absolute;
    top: 80px;
    transition: all 200ms;

    &.active {
      height: calc(100vh - 80px);
      background: #000000;
    }

    display: flex;
    flex-direction: column;

    .h5-menu-main {
      flex: 1;

      .h5-menus {
        margin-top: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .link-item {
          margin-top: 32px;

          .link-item-menu {
            left: 50%;
            transform: translateX(-50%);
          }
        }
      }

      .h5-language {
        margin-top: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }

    .h5-concat-view {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 40px;
    }
  }
`;
export const ConcatUsModalView = styled.div`
  padding: 0 20px;

  h1 {
    font-weight: 500;
    font-size: 24px;
    line-height: 34px;
    color: #000000;
    margin: 0;
  }

  p {
    font-weight: 400;
    font-size: 17px;
    line-height: 24px;
    color: #000000;
    margin: 16px 0 0 0;
  }

`
