import {useMemo, useState} from "react";
import {InvestorRelationsView} from "./style";
import {useTranslation} from "react-i18next";
import Announcements_CN from 'assets/investor/CN/Announcements_CN.json'
import Announcements_EN from 'assets/investor/EN/Announcements_EN.json'
import Announcements_HK from 'assets/investor/HK/Announcements_HK.json'
import Circulars_CN from 'assets/investor/CN/Circulars-Proxy Forms_CN.json'
import Circulars_EN from 'assets/investor/EN/Circulars-Proxy Forms_EN.json'
import Circulars_HK from 'assets/investor/HK/Circulars-Proxy Forms_HK.json'
import Company_CN from 'assets/investor/CN/Company Information Sheets_CN.json'
import Company_EN from 'assets/investor/EN/Company Information Sheets_EN.json'
import Company_HK from 'assets/investor/HK/Company Information Sheets_HK.json'
import Corporate_CN from 'assets/investor/CN/Corporate Governance_CN.json'
import Corporate_EN from 'assets/investor/EN/Corporate Governance_EN.json'
import Corporate_HK from 'assets/investor/HK/Corporate Governance_HK.json'
import Documents_CN from 'assets/investor/CN/Documents on Display_CN.json'
import Documents_EN from 'assets/investor/EN/Documents on Display_EN.json'
import Documents_HK from 'assets/investor/HK/Documents on Display_HK.json'
import Financial_CN from 'assets/investor/CN/Financial Reports_CN.json'
import Financial_EN from 'assets/investor/EN/Financial Reports_EN.json'
import Financial_HK from 'assets/investor/HK/Financial Reports_HK.json'
import {useSelector} from "react-redux";
import {AppState, LANGUAGE_ENUM} from "../../store/app";

interface IData{
  data: string
  title: string
  pdf_url: string
}
const pageSize = 10

export default function InvestorRelations() {
  const {t} = useTranslation()
  const { language } = useSelector(
    ({ AppReducer }: { AppReducer: AppState }) => AppReducer
  );
  const announcements:IData[] = useMemo(() => {
    return {
      [LANGUAGE_ENUM.zh_CN]: Announcements_CN,
      [LANGUAGE_ENUM.en_US]: Announcements_EN,
      [LANGUAGE_ENUM.zh_HK]: Announcements_HK
    }[language] || Announcements_EN
  },[language])
  const [announcementstCurrent, setAnnouncementstCurrent] = useState(1);
  const showAnnouncementst = useMemo(() => {
    return announcements.slice(0, (announcementstCurrent) * pageSize);
  }, [pageSize, announcementstCurrent, announcements]);
  ///
  const financialReports:IData[] = useMemo(() => {
    return {
      [LANGUAGE_ENUM.zh_CN]: Financial_CN,
      [LANGUAGE_ENUM.en_US]: Financial_EN,
      [LANGUAGE_ENUM.zh_HK]: Financial_HK
    }[language] || Financial_EN
  },[language])
  const [financialReportsCurrent, setFinancialReportsCurrent] = useState(1);
  const showFinancialReports = useMemo(() => {
    return financialReports.slice(0, (financialReportsCurrent) * pageSize);
  }, [pageSize, financialReportsCurrent, financialReports]);
  ///
  const circulars:IData[] = useMemo(() => {
    return {
      [LANGUAGE_ENUM.zh_CN]: Circulars_CN,
      [LANGUAGE_ENUM.en_US]: Circulars_EN,
      [LANGUAGE_ENUM.zh_HK]: Circulars_HK
    }[language] || Circulars_EN
  },[language])

  const [circularsCurrent, setCircularsCurrent] = useState(1);
  const showCirculars = useMemo(() => {
    return circulars.slice(0, (circularsCurrent) * pageSize);
  }, [pageSize, circularsCurrent, circulars]);
  ///

  const companys:IData[] = useMemo(() => {
    return {
      [LANGUAGE_ENUM.zh_CN]: Company_CN,
      [LANGUAGE_ENUM.en_US]: Company_EN,
      [LANGUAGE_ENUM.zh_HK]: Company_HK
    }[language] || Company_EN
  },[language])

  const [companysCurrent, setCompanysCurrent] = useState(1);
  const showCompanys = useMemo(() => {
    return companys.slice(0, (companysCurrent) * pageSize);
  }, [pageSize, companysCurrent, companys]);
  ///

  const corporateGovernance:IData[] = useMemo(() => {
    return {
      [LANGUAGE_ENUM.zh_CN]: Corporate_CN,
      [LANGUAGE_ENUM.en_US]: Corporate_EN,
      [LANGUAGE_ENUM.zh_HK]: Corporate_HK
    }[language] || Corporate_EN
  },[language])

  const [corporateGovernanceCurrent, setCorporateGovernanceCurrent] = useState(1);
  const showCorporateGovernance = useMemo(() => {
    return corporateGovernance.slice(0, (corporateGovernanceCurrent) * pageSize);
  }, [pageSize, corporateGovernanceCurrent, corporateGovernance]);
  ///

  const documentsOnDisplay:IData[] = useMemo(() => {
    return {
      [LANGUAGE_ENUM.zh_CN]: Documents_CN,
      [LANGUAGE_ENUM.en_US]: Documents_EN,
      [LANGUAGE_ENUM.zh_HK]: Documents_HK
    }[language] || Documents_EN
  },[language])

  const [documentsOnDisplayCurrent, setDocumentsOnDisplayCurrent] = useState(1);
  const showDocumentsOnDisplay = useMemo(() => {
    return documentsOnDisplay.slice(0, (documentsOnDisplayCurrent) * pageSize);
  }, [pageSize, documentsOnDisplayCurrent, documentsOnDisplay]);

  const filterUrl = (url:string) => {
    // change to local static file
    // return url
    const newUrl = url.replace('www.lotoie.com', 'localhost');
    console.log(newUrl)

    return newUrl
  }

  return <InvestorRelationsView>
    <h1 className="page-title">{t('Investor Relations')}</h1>
    <div className="block-view" id="announcements">
      <h2 className="block-title">{t('Announcements')}</h2>
      <div className="block-table">
        <div className="block-table-item block-table-title">
          <div>{t('Date of Release')}</div>
          <div>{t('Document')}</div>
        </div>
        <div className="block-table-list">
          {
            showAnnouncementst.map((item, index) => (
              <div className="block-table-item" key={index}>
                <div>{item.data}</div>
                <a href={filterUrl(item.pdf_url)} target="_blank">{item.title}</a>
              </div>
            ))
          }
          {
            announcements.length > showAnnouncementst.length && <div className="load-more">
              <span onClick={() => setAnnouncementstCurrent(announcementstCurrent + 1)}>{t('Click to load more')}</span>
            </div>
          }
        </div>
      </div>
    </div>

    <div className="block-view" id="financial-reports">
      <h2 className="block-title">{t('Financial Reports')}</h2>
      <div className="block-table">
        <div className="block-table-item block-table-title">
          <div>{t('Date of Release')}</div>
          <div>{t('Document')}</div>
        </div>
        <div className="block-table-list">
          {
            showFinancialReports.map((item, index) => (
              <div className="block-table-item" key={index}>
                <div>{item.data}</div>
                <a href={filterUrl(item.pdf_url)} target="_blank">{item.title}</a>
              </div>
            ))
          }
          {
            financialReports.length > showAnnouncementst.length && <div className="load-more">
              <span
                onClick={() => setFinancialReportsCurrent(financialReportsCurrent + 1)}>{t('Click to load more')}</span>
            </div>
          }
        </div>
      </div>
    </div>

    <div className="block-view" id="circulars-proxy-forms">
      <h2 className="block-title">{t('Circulars / Proxy Forms')}</h2>
      <div className="block-table">
        <div className="block-table-item block-table-title">
          <div>{t('Date of Release')}</div>
          <div>{t('Document')}</div>
        </div>
        <div className="block-table-list">
          {
            showCirculars.map((item, index) => (
              <div className="block-table-item" key={index}>
                <div>{item.data}</div>
                <a href={filterUrl(item.pdf_url)} target="_blank">{item.title}</a>
              </div>
            ))
          }
          {
            circulars.length > showCirculars.length && <div className="load-more">
              <span onClick={() => setCircularsCurrent(circularsCurrent + 1)}>{t('Click to load more')}</span>
            </div>
          }
        </div>
      </div>
    </div>

    <div className="block-view" id="company-information-sheets">
      <h2 className="block-title">{t('Company Information Sheets')}</h2>
      <div className="block-table">
        <div className="block-table-item block-table-title">
          <div>{t('Date of Release')}</div>
          <div>{t('Document')}</div>
        </div>
        <div className="block-table-list">
          {
            showCompanys.map((item, index) => (
              <div className="block-table-item" key={index}>
                <div>{item.data}</div>
                <a href={filterUrl(item.pdf_url)} target="_blank">{item.title}</a>
              </div>
            ))
          }
          {
            companys.length > showCompanys.length && <div className="load-more">
              <span onClick={() => setCompanysCurrent(companysCurrent + 1)}>{t('Click to load more')}</span>
            </div>
          }
        </div>
      </div>
    </div>

    <div className="block-view" id="corporate-governance">
      <h2 className="block-title">{t('Corporate Governance')}</h2>
      <div className="block-table">
        {
          showCorporateGovernance.map((item, index) => (
            <div className="block-table-item" key={index}>
              <div>{item.data}</div>
              <a href={filterUrl(item.pdf_url)} target="_blank">{item.title}</a>
            </div>
            /*<div className="block-table-item2" key={index}>
              <div className="block-table-item2-line">{item.data}</div>
              {
                item.children.map((item2, index2) => (
                  <div className="block-table-item2-line-c" key={index2}>
                    {item2.title}
                  </div>
                ))
              }
            </div>*/
          ))
        }
        {
          corporateGovernance.length > showCorporateGovernance.length && <div className="load-more">
            <span
              onClick={() => setCorporateGovernanceCurrent(corporateGovernanceCurrent + 1)}>{t('Click to load more')}</span>
          </div>
        }
      </div>
    </div>

    <div className="block-view" id="documents-on-display">
      <h2 className="block-title">{t('Documents on Display')}</h2>
      <div className="block-table">
        <div className="block-table-item block-table-title">
          <div>{t('Date of Release')}</div>
          <div>{t('Document')}</div>
        </div>
        <div className="block-table-list">
          {
            showDocumentsOnDisplay.map((item, index) => (
              <div className="block-table-item" key={index}>
                <div>{item.data}</div>
                <a href={filterUrl(item.pdf_url)} target="_blank">{item.title}</a>
              </div>
            ))
          }
          {
            documentsOnDisplay.length > showDocumentsOnDisplay.length && <div className="load-more">
            <span
              onClick={() => setDocumentsOnDisplayCurrent(documentsOnDisplayCurrent + 1)}>{t('Click to load more')}</span>
            </div>
          }
        </div>
      </div>
    </div>

  </InvestorRelationsView>
}
