import React, { FC } from 'react'
import {
  Container,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/react'

interface IInput {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  inputText: string
  isError: boolean
}

export const InputField: FC<IInput> = ({ onChange, inputText, isError }) => {
  return (
    <Container centerContent marginTop="1rem">
      <FormControl isInvalid={isError}>
        <Input value={inputText} onChange={onChange} placeholder="Answer" />
        {!isError ? (
          <FormHelperText>Enter your answer</FormHelperText>
        ) : (
          <FormErrorMessage>Question is required.</FormErrorMessage>
        )}
      </FormControl>
    </Container>
  )
}
