import {AboutUsView} from "./style";
import Banner1 from '../../assets/images/about-us/banner1.png'
import Banner2 from '../../assets/images/about-us/banner2.png'
import Banner3 from '../../assets/images/about-us/banner3.png'
import Banner4 from '../../assets/images/about-us/banner4.png'
import {useTranslation} from "react-i18next";

export default function AboutUS() {
  const {t} = useTranslation()
  return <AboutUsView>
    <h1 className="page-title" id="vision-mission-and-values">{t('Vision, Mission and Values')}</h1>
    <div className="view-layout-f-400">
      <div>
        <h2 className="block-title">{t('Vision')}</h2>
        <p className="text-dan">
          {t('To actively explore different opportunities, and capture new investment and business opportunities through different approaches while maintaining steady business growth')}
        </p>
        <p className="text-dan">
          {t('To be a client-focused, publicly respected, performance-driven corporation')}
        </p>
        <p className="text-dan">
          {t('To contribute to the growth of local communities by generating net income for the relevant public welfare organizations')}
        </p>
        <p className="text-dan">
          {t('To be a respected organization with a broad base of public support')}
        </p>
      </div>
      <div>
        <img src={Banner1} alt=""/>
      </div>
    </div>
    <div className="view-layout-400-f">
      <div>
        <img src={Banner2} alt=""/>
      </div>
      <div>
        <h2 className="block-title">{t('Mission')}</h2>
        <p className="text-dan">
          {t('We have already focused on big data centre services which have a brighte prospect')}
        </p>
        <p className="text-dan">
          {t('We believe that, under the new political and economic enviornment, we shall seek changes, adhere to the spirit of innovation, and leverage our core experience and corporate resources to achieve long-term benefits for the Group and its shareholders')}
        </p>
      </div>
    </div>
    <div className="view-layout-f-f-400">
      <div>
        <h2 className="block-title" style={{marginTop: "-30px"}}>{t('Values')}</h2>
        <p className="text-dan">
          {t('Intergrity - We conduct business in a fair,honest and trustworthy manner')}
        </p>
        <p className="text-dan-small">
          {t('Do business in accordance with the guidelines provided by respective government authorities')}
        </p>
        <p className="text-dan-small">
          {t('Operate on sound business principles and practices')}
        </p>
        <p className="text-dan-small">
          {t("Measure and publicly report on our performance")}
        </p>
        <p className="text-dan-small">
          {t("Value our customer's trust and provide quality products and service")}
        </p>
      </div>
      <div>
        <h2 className="block-title" style={{opacity: 0, marginTop: "-30px"}}>-</h2>
        <p className="text-dan">
          {t('Respect - Our workplace fosters openness,mutual respect and individual development')}
        </p>
        <p className="text-dan">
          {t('Promote a fair, open, respectful and progressive workplace')}
        </p>
        <p className="text-dan-small">
          {t('Support an innovative, high-performance culture')}
        </p>
        <p className="text-dan-small">
          {t('Encourage employee development through continuous learning and professional growth')}
        </p>
        <p className="text-dan-small">
          {t("Follow competitive compensation practices")}
        </p>
        <p className="text-dan-small">
          {t("Attract and retain talented leaders and experts")}
        </p>
      </div>
      <div>
        <img src={Banner3} alt=""/>
      </div>
    </div>
    <h1 className="page-title" id="board-of-directors">{t('Board of Directors')}</h1>
    <div className="view-layout-f-f view-layout-f-f-r">
      <div>
        <img src={Banner4} alt=""/>
      </div>
      <div>
        <h2 className="block-title">
          {t('Executive Directors')}
        </h2>
        <p className="text-dan">
          {t('Mr. Yan Hao (Chief Executive Officer) 、Ms. Huang Lilan 、Mr. Li Hongbin 、Mr. Huang Yibin')}
        </p>
        <p></p>
        <h2 className="block-title">
          {t('Independent Non-Executive Directors')}
        </h2>
        <p className="text-dan">
          {t('Dr. Lu Haitian 、Mr. Lin Sen、Mr. Huang Jian')}
        </p>
      </div>
    </div>
    <h1 className="page-title" id="strategic-shareholders">{t('Strategic Shareholders')}</h1>
    <div className="view-layout-f-f">
      <div>
        <p className="text-dan">
          <strong>{t('BIT Mining Limited (“BIT Mining”)')}</strong> {t('(NYSE: BTCM) is committed to becoming a leading cryptocurrency mining enterprise in China. Since announcing its entry into the cryptocurrency industry in December 2020, the Company has entered into definitive agreements to (i) purchase cryptocurrency mining machines, (ii) acquire a controlling stake in Loto Interactive Limited (HKEX: 08198), and (iii) acquire the entire mining pool business of Bitdeer Technologies Holding Company ("BitDeer") operated under BTC.com, including the domain name BTC.com and the cryptocurrency wallet of BTC.com (collectively, the "BTC.com Pool Businesses"), to unfurl a comprehensive approach to cryptocurrency mining.')}
        </p>
        <p className="text-dan">
          {t('BIT Mining is also an online sports lottery service provider in China. The Company offers a comprehensive and integrated suite of online lottery services, information, user tools and virtual community venues to its users.')}
        </p>
        <p className="text-dan">
          {t('For more information about BIT Mining, please visit https://ir.500.com.')}
        </p>
      </div>
      <div>
        <img src={Banner4} alt=""/>
      </div>
    </div>
  </AboutUsView>
}
