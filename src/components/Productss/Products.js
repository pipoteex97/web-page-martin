import React from 'react';
import { HeroSection } from '../HeroSection';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import {Pricing} from '../Pricing';


export const Products = () => {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
    </>
  )
}
