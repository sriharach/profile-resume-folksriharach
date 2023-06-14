import React from 'react'
import styled from 'styled-components'
import type { NextChildren } from '@/interfaces/next-interface'

interface IContainer extends NextChildren {
  xs?: boolean
  sm?: boolean
  md?: boolean
  lg?: boolean
  xl?: boolean
  xxl?: boolean
}

interface IResponsive {
  xs?: boolean
  sm?: boolean
  md?: boolean
  lg?: boolean
  xl?: boolean
  xxl?: boolean
}

const Container = ({ children, ...responsive }: IContainer) => {
  return <ContainerStyle {...responsive}>{children}</ContainerStyle>
}

export default Container

const ContainerStyle = styled.div<IResponsive>`
  margin: 0 auto;
  padding: 0 1rem;

  ${(props) =>
    props.xs &&
    `@media screen and (min-width: 480px) {
      max-width: 480px
  }`};

  ${(props) =>
    props.sm &&
    `@media screen and (min-width: 576px) {
      max-width: 576px
  }`};

  ${(props) =>
    props.md &&
    `@media screen and (min-width: 768px) {
    max-width: 768px
  }`};

  ${(props) =>
    props.lg &&
    `@media screen and (min-width: 992px) {
    max-width: 992px
  }`};

  ${(props) =>
    props.xl &&
    `@media screen and (min-width: 1200px) {
    max-width: 1200px
  }`};

  /* @media screen and (min-width: 1600px) {
    max-width: 1600px;
  } */
`
