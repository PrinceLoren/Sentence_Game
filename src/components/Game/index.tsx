import React, { FC, useEffect, useState } from 'react'
import { Center, Heading, Text } from '@chakra-ui/react'
import { theme } from '@common/theme'
import { IQuestion } from '@store/counter/counterReducer'
import { InputField } from '@components/InputField'
import { ButtonsField } from '@components/ButtonsField'

interface CounterProps {
  setAnswer: (answer: string, currentQuestion: IQuestion) => void
  setNextQuestion: (currentQuestion: IQuestion) => void
  setBackQuestion: (currentQuestion: IQuestion) => void
  restart: () => void
  currentQuestion?: IQuestion
  result: string
}

export const Game: FC<CounterProps> = ({
  setAnswer,
  currentQuestion,
  result,
  setNextQuestion,
  setBackQuestion,
  restart,
}) => {
  const onAdd = (answer: string) =>
    currentQuestion && setAnswer(answer, currentQuestion)
  const onNext = () => currentQuestion && setNextQuestion(currentQuestion)
  const onPrev = () => currentQuestion && setBackQuestion(currentQuestion)
  const onReset = () => restart()
  const [input, setInput] = useState<string>('')
  const [isError, setIsError] = useState<boolean>(false)
  const [isLast, setIsLast] = useState<boolean>(false)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setInput(e.target.value)
  const onAnswer = () => {
    if (input.length > 0) {
      onAdd(input)
      setInput('')
      onNext()
    } else {
      setIsError(true)
    }
  }
  const onPrevious = () => {
    onAdd(input)
    setInput('')
    onPrev()
  }

  const onRestart = () => {
    setInput('')
    onReset()
  }

  useEffect(() => {
    if (input.length < 0) setIsError(true)
    setIsError(false)
  }, [input])

  useEffect(() => {
    if (currentQuestion?.id === 4) setIsLast(true)
  }, [currentQuestion])

  return (
    <div>
      <Center bg={theme.colors.purple} h="8rem" color="black">
        <Heading fontSize="6rem">Sentence Game</Heading>
      </Center>
      <Center h="100px">{result}</Center>
      {currentQuestion?.question && (
        <Center h="100px">
          <Text fontSize="3rem">{currentQuestion?.question}</Text>
        </Center>
      )}
      {currentQuestion && (
        <InputField
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleInputChange(e)
          }
          isError={isError}
          inputText={input}
        />
      )}
      <ButtonsField
        currentQuestion={currentQuestion}
        isLast={isLast}
        onAnswer={onAnswer}
        onPrevious={onPrevious}
        onRestart={onRestart}
      />
    </div>
  )
}
