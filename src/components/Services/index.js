import React from 'react'
import Icon1 from '../../images/programmer.svg'
import Icon2 from '../../images/laravel and vue.svg'
import Icon3 from '../../images/designer team.svg'
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './ServiceElements'

const Services = () => {
  return (
    <>
    <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Website Development</ServicesH2>
                <ServicesP>We'll build a good website for our clients.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Database Management</ServicesH2>
                <ServicesP>We can manage your database system.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>UI/UX Design</ServicesH2>
                <ServicesP>We can design an amazing UI/UX for your website.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>
    </>
  )
}

export default Services