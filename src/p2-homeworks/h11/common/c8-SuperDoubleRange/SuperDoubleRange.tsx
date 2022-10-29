import { Box, Slider } from '@mui/material'
import React, { useEffect, useState } from 'react'

type SuperDoubleRangePropsType = {
  onChangeRange1: (value: number) => void
  onChangeRange2: (value: number) => void
  value?: any
  // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = ({
  onChangeRange1,
  onChangeRange2,
  value,
  // min, max, step, disable, ...
}) => {
  let [doubleValue, setDoubleValue] = React.useState<number[]>(value)
  const handleChange = (event: Event, newValue: number | number[]) => {
    setDoubleValue(newValue as number[])
    // onChangeRange1(doubleValue[0])
    // onChangeRange2(doubleValue[1])
  }
  useEffect(() => {
    onChangeRange1(doubleValue[0])
    onChangeRange2(doubleValue[1])
  }, [doubleValue])

  // сделать самому, можно подключать библиотеки
  return (
    <Box sx={{ width: 300 }}>
      <Slider getAriaLabel={() => 'Temperature range'} value={value} onChange={handleChange} valueLabelDisplay='auto' />
    </Box>
  )
}

export default SuperDoubleRange
