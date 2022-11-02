import styled from 'styled-components'
import React, {FC, ReactNode, useEffect, useState} from "react";
import axios from 'axios'
import {THEME_MEDIA_ENUM} from "../../../theme";
import {useTranslation} from "react-i18next";

const FooterView = styled.div`
  min-height: 80px;
  background: #000000;
  padding: 0 60px;

  ${THEME_MEDIA_ENUM.medium} {
    padding: 0 40px;
  }

  ${THEME_MEDIA_ENUM.small} {
    padding: 0 24px;
  }

  .footer-view {
    max-width: 1400px;
    min-height: 80px;
    margin: 0 auto;
    display: flex;
    align-items: center;

    ${THEME_MEDIA_ENUM.small} {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 32px 0;
    }

    .stock-data {
      flex: 1;

      ${THEME_MEDIA_ENUM.small} {
        flex: auto;
      }
      display: flex;

      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #FFFFFF;

      span {
        margin-right: 32px;
      }
    }

    .copy-right {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: #FFFFFF;

      ${THEME_MEDIA_ENUM.small} {
        margin-top: 10px;
      }
    }
  }
`
export default function Footer() {
  const [price, setPrice] = useState<string>('-')
  useEffect(() => {
    axios.get('http://localhost:5001/index').then(res => {
      // console.log("stock price: ", res.data)
      setPrice(res.data.data);
    })
  }, [])
  const {t} = useTranslation()
  return <FooterView>
    <div className="footer-view">
      <div className="stock-data">
        <span>{t('Stock code')} 8198</span>
        <span>{t('Nominal')} {price}</span>
      </div>
      <div className="copy-right">
        {t('Copyright©2017-2021 Loto Interactive Limited. All right reserved.')}
      </div>
    </div>
  </FooterView>
}
