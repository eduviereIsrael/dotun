import React, {createContext, useContext} from 'react';
import { images, ByteIntroMockups } from './constants/images';


const Context = createContext();

export const StateContext = ({children}) => {

    const {Byte, Caree} = images

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
            bgColor: '#031CD9'
        },
        {
            name: 'Caree',
            role: ['UI/UX Design', 'Interaction', 'Prototype'],
            desc: '',
            img: Caree,
            linkUrl: '/caree'
        },
    ]

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