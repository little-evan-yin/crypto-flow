import {OurBusinessView} from './style'
import Poster1 from '../../assets/images/our-business/poster1.png'
import Poster2 from '../../assets/images/our-business/poster2.png'
import Poster3 from '../../assets/images/our-business/poster3.png'
import {useTranslation} from "react-i18next";

export default function OurBusiness(){
    const {t} = useTranslation()
    return <OurBusinessView>
        <h1 className="page-header">{t('Our Business')}</h1>
        <p className="page-desc">{t('The Group is principally engaged in provision of data analysis and storage services (the “big data centre services”) and money lending business in Hong Kong (the “money lending business”).')}</p>
        <div className="block-528-f" id="blockchain-application-r-d-services">
            <div className="poster">
                <img src={Poster1} alt="" />
            </div>
            <div className="block-info">
                <div className="block-title">{t('Blockchain application R & D services')}</div>
                <div className="block-content">{t('Since 2021, the Group has devoted itself to the research and development of blockchain application R&D services, independently developed blockchain technology trading platforms with high performance and strong privacy protection, and will build application development platforms and services in the future. to help customers and partners quickly and easily use blockchain applications and transactions in various business scenarios to boost the development of the real economy. At present, the company is committed to building a multi-functional social application platform based on a web3.0 background and technology. The platform focuses on serving web3.0 groups and companies to quickly understand the web3.0 industry, blockchain technology and find a clear market positioning, and provide the latest blockchain application services in time to meet the trading needs of users. Blockchain application R&D service is based on customer feedback, industry knowledge, professional opinion, and industry experience as the benchmark, plowing the blockchain application industry, ready to provide support to help you discover and create new value.')}</div>
            </div>
        </div>

        <div className="block-f-528" id="big-data-centre-services">
            <div className="block-info">
                <div className="block-title">{t('Big Data Centre Services')}</div>
                <div className="block-content">
                    {t('The Group started building the big data centres in Sichuan Province, the PRC in March 2019 to provide comprehensive services including premises, hardware support, power supply, ancillary supervision and management services to our clients. The services cover a full range from monitoring the average utilisation rate and working status of data processors to supervising the overall safety and security of both physical environment and internet connection within the big data centres. Each customer is provided with a monthly report on operation results of its data processors. In the event of any unusual condition reported on the data processors, the relevant customer will receive an immediate notification and follow-up inspection and maintenance services will be provided by the Group upon request. In order to ensure full-load operation of the big data centres, the Group maintains regular communication with local utility services providers in respect of resources allocation and application for increase or decrease in supply of utility.')}
                    {t('In addition, the Group has developed a comprehensive management software (the “Software”) specifically for its big data centres. With the customised hardware installed in the big data centres, the Software provides integrated solutions for operation and maintenance management, financial management and resources allocation in cloud computing in the big data centres. The Software enables the clients to remotely monitor their data processors and obtain real-time information on the average computing capacity, CPU load and utilisation and operating time and to receive notification of unusual condition of their data processors. The Software effectively solves the common problems encountered in the operation and maintenance management of big data centres such as delayed information access, inefficient operation and maintenance, inability to quantify on-site work and inability to get access to on-site information anytime and anywhere.')}
                </div>
            </div>
            <div className="poster">
                <img src={Poster2} alt="" />
            </div>
        </div>

        <div className="block-528-f" id="money-lending-business">
            <div className="poster">
                <img src={Poster3} alt="" />
            </div>
            <div className="block-info">
                <div className="block-title">{t('Money Lending Business')}</div>
                <div className="block-content">{t('In order to leverage its corporate expertise and resources to broaden its income source, an indirect wholly-owned subsidiary of the Company, Might Winner Limited, was granted a money lender’s license in January 2020.')}</div>
            </div>
        </div>
    </OurBusinessView>
}
