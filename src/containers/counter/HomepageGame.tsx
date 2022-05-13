import { Game } from '@components/Game'
import { AppState } from '@store/store'
import { Dispatch } from 'redux'
import { connect } from 'react-redux'
import { ACTIONS, IQuestion } from '@store/counter/counterReducer'

const mapStateToProps = ({ game }: AppState) => ({
  result: game.result,
  currentQuestion: game.currentQuestion,
})

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setAnswer: (answer: string, currentQuestion: IQuestion) => {
      const cq = currentQuestion
      cq.answer = answer
      dispatch({
        type: ACTIONS.ADD_ANSWER,
        payload: cq,
      })
    },
    setNextQuestion: (currentQuestion: IQuestion) => {
      dispatch({
        type: ACTIONS.NEXT_QUESTION,
        payload: currentQuestion,
      })
      if (currentQuestion.id > 3) {
        dispatch({
          type: ACTIONS.ADD_RESULT,
        })
      }
    },
    setBackQuestion: (currentQuestion: IQuestion) => {
      dispatch({
        type: ACTIONS.PREV_QUESTION,
        payload: currentQuestion,
      })
    },
    restart: () => {
      dispatch({
        type: ACTIONS.RESTART,
      })
    },
  }
}

export const HomepageGame = connect(mapStateToProps, mapDispatchToProps)(Game)
