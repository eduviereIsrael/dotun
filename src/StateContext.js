import React, {createContext, useContext} from 'react';
import {HiFiScreen} from './components';
import { images, ByteIntroMockups, ByteLoFiSketch, byteSplashScreens, byteOnboardingScreens } from './constants/images';


const Context = createContext();

export const StateContext = ({children}) => {

    const {
        Byte,
        Caree,
        byteCompAdv,
        byteWireframeImg,
        byteContactImg,
        byteHomepageImg,
        bytePaymentImg,
        byteAmountImg,
        careeHomepage,
        careeInfoscreen,
        careeMedicines,
        careeTaskpage} = images;
    
    const bContactImg = <HiFiScreen img = {byteContactImg} screenName = 'Contact' />
    const bHomepageImg = <HiFiScreen img = {byteHomepageImg} screenName = 'Homepage' />
    const bPaymentImg = <HiFiScreen img = {bytePaymentImg} screenName = 'Payment' />
    const bAmountImg = <HiFiScreen img = {byteAmountImg} screenName = 'Amount' />

    const bSplashScreens = byteSplashScreens.map((splash, i) => (
        <HiFiScreen img={splash} key = {i} screenName='Splash' />
    ))
    const bOnboardingScreens = byteOnboardingScreens.map((screen, i) => (
        <HiFiScreen img={screen} key = {i} screenName='Onboarding' />
    ))

    const bFinalScreens = [...bSplashScreens, ...bOnboardingScreens, bHomepageImg, bContactImg, bAmountImg, bPaymentImg];
    
    const cHomepageImg = <HiFiScreen img = {careeHomepage} screenName='Homepage' />
    const cInfoscreenImg = <HiFiScreen img = {careeInfoscreen} screenName='Info Screen' />
    const cMedicinesImg = <HiFiScreen img = {careeMedicines} screenName='Medicines' />
    const cTaskpageImg = <HiFiScreen img = {careeTaskpage} screenName='Task Page' />

    const CareeIntroMockups = [
        cHomepageImg,
        cInfoscreenImg,
        cMedicinesImg,
        cTaskpageImg
    ]



    const project = [
        {
            name: 'Byte',
            role: ['UI/UX Design', 'Interaction', 'Prototype'],
            desc: '',
            img: Byte,
            linkUrl: '/byte',
            intro: 'Connecting everyone Through payment.',
            introLong: 'Connecting everyone Through payment. Byte allow users pay and recieve money with phone number, byte tag and email in Nigeria.',
            tool: 'Figma',
            year: '2020',
            introduction: 'In Nigeria, the size of mobile payments has risen dramatically over the last few years in response to global, domestic, market, technological, and regulatory factors. Data from the Nigeria Interbank Settlement System (NIBSS) show that while the volume of mobile transactions was 51 million in 2017, it reached 410 million in 2019 representing a growth of about 703.9 per cent (see Figure 1a). Similarly, the value of mobile transactions increased sharply from N196.3 billion in 2017 to N828.1 billion in 2019. The value of mobile transactions (N853.7 billion) recorded in the first fivemonths of 2020 surpassed the total amount recorded in 2019 by 3.1 per cent. The phenomenal growth in the value of mobile payments, especially in May 2020 (Figure 1b) can be partly explained by the effects of the restricted human movements associated with the lockdown measures implemented in response to the Covid-19 pandemic. CBN Journal of Applied Statistics Vol. 12 No. 1 (June 2021)',
            introMockups: ByteIntroMockups,
            bgColor: '#031CD9',
            problemDef: 'Payment downtime with Nigeria banks rise by 32% in Nigeria. meaning for every 10 mobile money transfer, only 6 gets to it destination. Customers need convenience, support and faster payment options.',
            questions: ['How can we make peer payment more reliable and fast in Nigeria? ', 'How can we eliminate downtime in our banking system?', 'How can we make peer payment more fun to use? '],
            causes: ['Lack of adequate infrastructure', 'Inter bank transaction is handle by NIBSS', 'poor user expirence', 'Public acceptability'],
            ideation: 'Right from the beginning and brainstorming stage for byte, we wanted a platform that makes payment more fun while maintaining its speed and reliability. One of the ways is to do  without traditional bank account and bank name type of payment. Paying users , friends , family with Phone Number and Email will be more fun. With that, we thicked our  second box. Since payment is all done with mobile number or email or byte tag, we have successfully bypass the Nigeria Inter-Bank settlement system for our peer payment which is mostly the cause of down payment because of its poor infrastructure.',
            compAdv: 'I know byte is not the only startup in Nigeria trying to tackle the down time payment issues and for me to construct a concise and solid foundation for byte, I had to see what and who are the competitors. As at the time of this report, We only have few startups tackling same issues which are Abeg and Barter.  I evaluated several features deemed vital from user surveys and identified which ones byte could capitalize on to have a leg up over other applications.',
            compAnalysisImg: byteCompAdv,
            loFiSketches: "Working through our initial sketches, we realized some of the ideas and layouts that we were thinking of just wouldn't fit. Not only were we able to quickly communicate some of the ideas we had a hard time explaining to each other, but we were also able to take them and spark more discussions as well as quickly filter the good and bad ideas out.",
            loFiSketchesImg: ByteLoFiSketch,
            wireframes: "Creating a higher fidelity however the still genuinely starter variant of our wireframes, I had the option to figure out a portion of the specialized issues that wouldn't be reasonable for us.",
            wireframeImg: byteWireframeImg,
            finalDesign: "Creating a higher fidelity however the still genuinely starter variant of our wireframes, I had the option to figure out a portion of the specialized issues that wouldn't be reasonable for us",
            finalDesignImg: bFinalScreens,
            successMetrics: 'Byte launch in December 2021, and after 3month, byte partnered with one major bank in Nigeria, $10,000 plus processed payment since inception and more than 600 waitlist sign up. After 3month of services and user feedback and testing, We started byte 2.0 as an updated service which you can read about',
            team: [
                {
                    name: 'Khalid',
                    role: 'Founder'
                },
                {
                    name: 'Richard',
                    role: 'Product Owner'
                },
                {
                    name: 'Victor',
                    role: 'Dev Lead'
                },
            ]
        },
        {
            name: 'Caree',
            role: ['UI/UX Design', 'Interaction', 'Prototype'],
            desc: '',
            img: Caree,
            linkUrl: '/caree',
            intro: 'Application for better living',
            introLong: 'Smart Care Mobile App  for Personalized Care and Support Planning',
            tool: 'Figma',
            year: '2022',
            introduction: '"The Older age and Individuals living with long term circumstances (LTCs) are the best clients of NHS administrations and the biggest piece of the well-being administration financial plan are spent on their help. The consideration and backing expected to live well with an LTC are generally unique to that for the intense medical issues - while individuals with LTCs regularly spend only a couple of hours a year with well-being and care experts, they live with their circumstances and make due them consistently themselves. The well-being and care framework should uphold people to have the information, abilities also certainty to plan and deal with their own well-being and care, and to help one more with regards to their more extended families and networks. We in this manner need a significant re-plan of current methodologies. This will call for some progressions across the Well being and care framework: from the manner in which experts and individuals cooperate in a face to face counsels, to how experts are prepared and what backing individuals can tap into, including support for carers and relatives". Propels in medical care have helped individuals in England to live longer than any time in recent memory. Therefore, the quantity of more seasoned individuals in England is developing fundamentally and this pace of development is projected to accelerate throughout the following 20 years. This is uplifting news for us all yet it makes a test for the NHS - as we age we will more often than not get long-haul conditions and need more well-being and social consideration.',
            introMockups: CareeIntroMockups,
            bgColor: '#0166FF',
            problemDef: "On 24 December 2021, the Government declared that care workers would be added to the Home Office's Shortage Occupation List (SOL) for visa purposes, The change has followed suggestions from the Migration Advisory Committee (MAC) corresponding to the issue of significant enlistment challenges and extreme and expanding hardships looked by the consideration area. “There will be 'a tsunami' of people without the care they need this winter unless staff shortages are tackled” England's care watchdog is warning. Care shortage meant more patients judged fit to go home were stuck in hospital as they lack who to look after them at home. As a result, many older people are not receiving the adequate care and guidance needed to go through the face of their life.",
            
        },
    ];

    return(
        <Context.Provider
        value={
            project
        }
            >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context)