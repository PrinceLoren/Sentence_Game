import { AnyAction } from 'redux'

export interface IQuestion {
  question: string
  answer: string
  id: number
}

const questionList: IQuestion[] = [
  {
    question: 'Who?',
    answer: '',
    id: 1,
  },
  {
    question: 'What?',
    answer: '',
    id: 2,
  },
  {
    question: 'When?',
    answer: '',
    id: 3,
  },
  {
    question: 'Where?',
    answer: '',
    id: 4,
  },
]

export interface IInitial {
  questions: IQuestion[]
  currentQuestion?: IQuestion
  result: string
}

const initialState: IInitial = {
  questions: questionList,
  currentQuestion: questionList[0],
  result: '',
}

export enum ACTIONS {
  ADD_ANSWER,
  NEXT_QUESTION,
  PREV_QUESTION,
  ADD_RESULT,
  RESTART,
}

export const gameReducer = (
  state: IInitial = initialState,
  action: AnyAction
): IInitial => {
  switch (action.type) {
    case ACTIONS.ADD_ANSWER:
      return {
        ...state,
        questions: state.questions.map((question) => {
          if (question.id === action.payload.id) {
            question.answer = action.payload.answer
          }
          return question
        }),
      }
    case ACTIONS.NEXT_QUESTION:
      return {
        ...state,
        currentQuestion: state.questions.find(
          (question) => question.id === action.payload.id + 1
        ),
      }
    case ACTIONS.PREV_QUESTION:
      return {
        ...state,
        currentQuestion: state.questions.find(
          (question) => question.id === action.payload.id - 1
        ),
      }
    case ACTIONS.ADD_RESULT:
      return {
        ...state,
        result: `${state.questions[0].answer} - ${state.questions[1].answer} - ${state.questions[2].answer} - ${state.questions[3].answer}`,
      }
    case ACTIONS.RESTART:
      return {
        ...state,
        ...initialState,
      }
    default:
      return state
  }
}
