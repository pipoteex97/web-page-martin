import React from 'react';
import {HeroSection} from '../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import {Pricing} from '../Pricing';


export const Services = () => {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
    </>
  )
}
