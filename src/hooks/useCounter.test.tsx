import { renderHook, waitFor } from "@testing-library/react"
import { useCounter } from "./useCounter"
import { act } from "react-dom/test-utils"

describe('useCounter', () => {
    test('should render the initial count', () => {
        const {result} = renderHook(useCounter)
        expect(result.current.count).toBe(0)
    })
    
    test('Initial Count test', () => {
        const {result} = renderHook(useCounter, {initialProps: {initialCount: 10}})
        expect(result.current.count).toBe(5)
    })

    test('increment the count', () => {
        const { result } = renderHook(useCounter, {
            initialProps: {initialCount: 10}
        })
        act(() => result.current.increment())
        expect(result.current.count).toBe(1)
    })
    
    test('decrement the count', async () => {
        const { result } = renderHook(useCounter, {
            initialProps: {initialCount: 10}
        })
        await waitFor(() => result.current.decrement())
        expect(result.current.count).toBe(-1)
    })
})