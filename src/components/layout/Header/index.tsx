import React, { FC, useEffect, useState } from "react";
import {useTranslation} from "react-i18next"
import { Header,ConcatUsModalView } from "./style";
import LogoSvg from 'assets/images/logo/logo.svg'
import Arrowsvg from 'assets/images/comon/arrow-d.svg'
import Modal from '../../Modal'
import { useSelector } from "react-redux";
import { AppState, LANGUAGE_ENUM, setLanguage } from "store/app";
import { useDispatch } from "react-redux";
import { languageConfig } from "locales";
import {NavLink} from "react-router-dom";

interface ILink{
  title:string
  link:string
}

interface ILinkMenu{
  title:string
  link:string
  children:ILink[]
}
const THeader: FC<{}> = () => {

  const [showModal,setShowModal] = useState<boolean>(false)
  const {t} = useTranslation()

  const [showH5Menu,setShowH5Menu] = useState<boolean>(false)

  return <>
    <Header>
      <div className="header-view">
        <NavLink to="/" className="header-logo">
          <img src={LogoSvg} alt="" />
          <span>{t('Crypto Flow')}</span>
        </NavLink>
        <div className="header-links">
          <LinkList/>
        </div>
        <div className="header-menus">
        <LangSelector className="language-view"/>
          </div>
        <div className="link-item concat-us" onClick={()=>setShowModal(true)}>
          <div className="link-item-txt">
            <span>{t('Contact us')}</span>
          </div>
        </div>
        <div className={"h5-menu-btn" + (showH5Menu ? ' active' : '')} onClick={()=>setShowH5Menu(!showH5Menu)}>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className={"h5-menu-view" + (showH5Menu ? ' active' : '')}>
        <div className="h5-menu-main">
          <div className="h5-menus">
            <LinkList/>
          </div>
          <div className="h5-language">
            <LangSelector className=""/>
          </div>
        </div>
        <div className="h5-concat-view">
          <div className="link-item" onClick={()=>setShowModal(true)}>
            <div className="link-item-txt">
              <span>{t('Contact us')}</span>
            </div>
          </div>
        </div>
      </div>
    </Header>
    <Modal
     visible={showModal}
     onClose={()=>setShowModal(false)}
     title={t('Contact us')}
     >
      <ConcatUsModalView>
        <h1>{t('Hong Kong')}</h1>
        <p>{t('Address')}: {t('Unit 3506, 35th Floor, Tower One, Lippo Centre, 89 Queensway, Hong Kong')}</p>
        <p>{t('Tel')}: (852) 2596 3098</p>
        <p>{t('Fax')}: (852) 2360 9738</p>
        <p>{t('Email')}: info@lotoie.com</p>
      </ConcatUsModalView>
    </Modal>
  </>;
};

function LangSelector({className}){
  const { language } = useSelector(
    ({ AppReducer }: { AppReducer: AppState }) => AppReducer
  );
  const {t,i18n} = useTranslation()
  const diapatch = useDispatch()
  const changelan = (lan:LANGUAGE_ENUM) =>{
    diapatch(setLanguage(lan))
    i18n.changeLanguage(lan)
  }

return <div className={"link-item" + ' ' + className}>
          <div className="link-item-txt">
            <span>{languageConfig[language].title}</span>
            <img src={Arrowsvg} alt="" />
          </div>
          <div className="link-item-menu language-menu">
            <a className={language === LANGUAGE_ENUM.en_US ? 'active':''} onClick={()=>{
              changelan(LANGUAGE_ENUM.en_US)
            }}><span>EN</span></a>
            <a className={language === LANGUAGE_ENUM.zh_CN ? 'active':''} onClick={()=>{
              changelan(LANGUAGE_ENUM.zh_CN)
            }}><span>简体</span></a>
            <a className={language === LANGUAGE_ENUM.zh_HK ? 'active':''} onClick={()=>{
              changelan(LANGUAGE_ENUM.zh_HK)
            }}><span>繁体</span></a>
          </div>
        </div>
}

function LinkList(){

  const {t} = useTranslation()
  const links:ILinkMenu[] = [
    {
      title: t("About US"),
      link:"/about-us",
      children:[
        {
          title:t("Vision, Mission and Values"),
          link:"/about-us#vision-mission-and-values"
        },
        {
          title:t("Board of Directors"),
          link:"/about-us#board-of-directors"
        },
        {
          title:t("Strategic Shareholders"),
          link:"/about-us#strategic-shareholders"
        }
      ]
    },
    {
      title:t("Investor Relations"),
      link:"/investor-relations",
      children:[
        {
          title:t("Announcements"),
          link:"/investor-relations#announcements"
        },
        {
          title:t("Financial Reports"),
          link:"/investor-relations#financial-reports"
        },
        {
          title:t("Circulars / Proxy Forms"),
          link:"/investor-relations#circulars-proxy-forms"
        },
        {
          title:t("Company Information Sheets"),
          link:"/investor-relations#company-information-sheets"
        },
        {
          title:t("Corporate Governance"),
          link:"/investor-relations#corporate-governance"
        },
        {
          title:t("Documents on Display"),
          link:"/investor-relations#documents-on-display"
        },
      ]
    },
    {
      title:t("Our Business"),
      link:"/our-business",
      children:[
        {
          title:t("Blockchain application R & D services"),
          link:"/our-business#blockchain-application-r-d-services"
        },
        {
          title:t("Big Data Centre Services"),
          link:"/our-business#big-data-centre-services"
        },
        {
          title:t("Money Lending Business"),
          link:"/our-business#money-lending-business"
        }
      ]
    },
  ]
  return <>
            {
            links.map((item,index)=>(
              <div className="link-item" key={index}>
                <div className="link-item-txt">
                <a href={item.link}>{item.title}</a>
                <img src={Arrowsvg} alt="" />
                </div>
                <div className="link-item-menu">
                  {
                    item.children.map((item2,index2)=>(
                      <a key={index2} href={item2.link}><span>{item2.title}</span></a>
                    ))
                  }
                </div>
              </div>
            ))
          }
  </>
}

export default THeader;
