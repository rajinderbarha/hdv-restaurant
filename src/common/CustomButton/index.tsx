import React from 'react'
import { HiArrowRight } from 'react-icons/hi'

interface CustomButtonProps {
  name: string;
}

const CustomButton = ({ name }: CustomButtonProps) => {
  return (
    <button type="button" className="common_btn">{name} <HiArrowRight /></button>
  )
}

export default CustomButton;
