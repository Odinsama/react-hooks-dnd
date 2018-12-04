import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
    border: 1px solid lightgrey
    border-radius: 2px
    padding: 8px
    margin-bottom: 8px
    transition: background-color 0.2s ease
    background-color: ${props => props.isDragging ? 'lightgreen' : 'white'}
    display: flex
`
const Icon = styled.div`
    width: 20px
    height: 20px
    background-color: orange
    border-radius: 4px
    margin-right: 8px
`
export const Task = ({content}) =>
    <Container>
        <Icon />
        {content}
    </Container>
