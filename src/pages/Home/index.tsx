import React from "react";
import { useTranslation } from "react-i18next";
import {HomeView} from './style'
import ArrawR from '../../assets/images/comon/arrow-r.svg'
import Poster1 from '../../assets/images/home/poster1.png'
import Poster2 from '../../assets/images/home/poster2.png'
import Poster3 from '../../assets/images/home/poster3.png'
import {NavLink} from "react-router-dom";
const HomePage = () => {
  const { t } = useTranslation();
  return <HomeView>
    <div className="block-view">
      <div className="block-box">
        <h1 className="title">{t('Create data flow with crypto')}</h1>
        <div className="desc-link">
          <NavLink to="/about-us">
            <img src={ArrawR} alt="" />
            <span>{t('Get to know us')}</span>
          </NavLink>
        </div>
        <div className="poster">
          <img src={Poster1} alt="" />
        </div>
      </div>
    </div>
    <div className="block-view">
      <div className="block-box">
        <h1 className="title">{t('Investor Relations')}</h1>
        <div className="desc-link">
          <NavLink to="/investor-relations">
            <img src={ArrawR} alt="" />
            <span>{t('Get to know us')}</span>
          </NavLink>
        </div>
        <div className="poster">
          <img src={Poster2} alt="" />
        </div>
      </div>
    </div>
    <div className="block-view">
      <div className="block-box">
        <h1 className="title">{t('Our Business')}</h1>
        <div className="desc-link">
          <NavLink to="/our-business">
            <img src={ArrawR} alt="" />
            <span>{t('Get to know us')}</span>
          </NavLink>
        </div>
        <div className="poster">
          <img src={Poster3} alt="" />
        </div>
      </div>
    </div>
  </HomeView>;
};
export default HomePage;
