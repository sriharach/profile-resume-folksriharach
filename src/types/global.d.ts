import keyTypeMessages from '../../messages/en.json'

type Messages = typeof keyTypeMessages

declare global {
  interface IntlMessages extends Messages {}
}
