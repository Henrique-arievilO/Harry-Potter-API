import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navigation, Li } from './SNav'

export default function Navigate() {

    return (
        <Nav>
            <Navigation>
                <Li>
                    <Link to="/">Home</Link>
                </Li>
                <Li>
                    <Link to="Houses">Houses</Link>
                </Li>
                <Li>
                    <Link to="Characters">Characters</Link>
                </Li>
            </Navigation>
        </Nav>
    )
}