import { render, screen } from "@testing-library/react"
import Contact from "./Contact"

describe("Contact", () => {
    test('renders correctly', () => {
        render(<Contact />)
        const h1Text = screen.getByRole('heading', {
            level: 1
        })
        expect(h1Text).toBeInTheDocument()
        const paragraphText = screen.getByText("すべてのフィールドは必須項目です。")
        expect(paragraphText).toBeInTheDocument()
        const nameElement = screen.getByRole("textbox", {
            name: 'お名前'
        })
        expect(nameElement).toBeInTheDocument()
        const nameElement2 = screen.getByLabelText('お名前')
        expect(nameElement2).toBeInTheDocument()
        const nameElement3 = screen.getByPlaceholderText('フルネーム')
        expect(nameElement3).toBeInTheDocument()
        const nameElement4 = screen.getByDisplayValue("ShinCode")
        expect(nameElement4).toBeInTheDocument()
        const imageElement = screen.getByAltText('sample alt')
        expect(imageElement).toBeInTheDocument()
        const closeElement = screen.getByTitle('close')
        expect(closeElement).toBeInTheDocument()
        const customElemnt = screen.getByTestId('custom-element')
        expect(customElemnt).toBeInTheDocument()
        const emailElement = screen.getByRole("textbox", {
            name: 'メールアドレス'
        })
        expect(emailElement).toBeInTheDocument()

        const questiosElement = screen.getByRole('combobox')
        expect(questiosElement).toBeInTheDocument()

        const termsElement = screen.getByRole('checkbox')
        expect(termsElement).toBeInTheDocument()
        
        const submitElement = screen.getByRole('submit')
        expect(submitElement).toBeInTheDocument()
    })    
})