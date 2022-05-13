import React, { FC } from 'react'
import { Button, Container, Grid, GridItem } from '@chakra-ui/react'
import { IQuestion } from '@store/counter/counterReducer'

interface IButtonsField {
  onAnswer: () => void
  onPrevious: () => void
  onRestart: () => void
  isLast: boolean
  currentQuestion?: IQuestion
}

export const ButtonsField: FC<IButtonsField> = ({
  onAnswer,
  onPrevious,
  onRestart,
  currentQuestion,
  isLast,
}) => {
  return (
    <Container centerContent marginTop="3rem">
      <Grid
        templateColumns="repeat(2, 13rem)"
        templateRows="repeat(4, 1fr)"
        gap={5}
      >
        {currentQuestion && (
          <>
            <GridItem>
              <Button
                onClick={onPrevious}
                width="100%"
                h="4rem"
                colorScheme="teal"
                variant="solid"
              >
                Previous Word
              </Button>
            </GridItem>
            <GridItem>
              <Button
                onClick={onAnswer}
                width="100%"
                h="4rem"
                colorScheme="teal"
                variant="solid"
              >
                {isLast ? 'See Result' : 'Next Word'}
              </Button>
            </GridItem>
          </>
        )}
        <GridItem colSpan={2}>
          <Button
            onClick={onRestart}
            width="100%"
            h="4rem"
            colorScheme="teal"
            variant="solid"
          >
            Restart
          </Button>
        </GridItem>
      </Grid>
    </Container>
  )
}
