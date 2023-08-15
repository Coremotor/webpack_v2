import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { Counter } from 'components/counter/counter'
import logo from 'assets/logo.png'
import Icon from 'assets/question.svg'

const root = document.getElementById('app')

if (root) {
  createRoot(root).render(
    <StrictMode>
      <Counter/>
      <img src={logo} alt="logo"/>
      <Icon />
    </StrictMode>
  )
}
