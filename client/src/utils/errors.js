import { message } from 'antd'

export function getErrorMessage(error) {
  let [{ message }] = error.graphQLErrors
  return message
}

export function showError(error) {
  let errorMessage = getErrorMessage(error)
  message.error(errorMessage)
}
