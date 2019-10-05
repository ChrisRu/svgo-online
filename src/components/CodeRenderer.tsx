import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: #000;
  color: #fff;
  flex: 1;
`

const CodeBlock = styled.pre`
  word-wrap: anywhere;
  white-space: normal;
`

interface IProps {
  SVGContent?: string
}

export function CodeRenderer({ SVGContent }: IProps) {
  return (
    <Wrapper>
      {SVGContent ? <CodeBlock>{SVGContent}</CodeBlock> : <span>No SVG loaded</span>}
    </Wrapper>
  )
}
