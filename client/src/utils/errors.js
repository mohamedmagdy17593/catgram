import { message } from 'antd'

export function getErrorMessage(error) {
  let errorObj
  ;[errorObj] = error?.graphQLErrors ?? []
  if (errorObj) {
    let { message } = errorObj
    return message
  }

  errorObj = error?.networkError ?? []
  if (errorObj) {
    let { message } = errorObj
    return message
  }

  return 'Somothing is wrong!'
}

export function showError(error) {
  let errorMessage = getErrorMessage(error)
  message.error(errorMessage)
}
