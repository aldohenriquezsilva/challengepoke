import React from 'react'
import { screen, render } from '@testing-library/react'
import  { UserPage } from './UserPage'

describe("pokemonPage", () => {
    it("display", () => {
        render(<UserPage />)
        expect(screen.queryAllByText(/pokemon page/i))
    });
});