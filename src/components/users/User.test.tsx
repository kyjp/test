import { Server } from "http"

describe('Users', () => {
    test('renders collectly', () => {
        render(<Users />)
        const textElement = screen.getByRole('heading', {name: 'Users'})
        expect(textElement).toBeInTheDocument()
    })
    test('renders a list of users', async () => {
        render(<Users />)
        const users = await screen.findAllByRole('listitem')
        expect(users).toHaveLength(10)
    })
    test('renders error', async () => {
        server.use(
            rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
                return res(ctx.status(500))
            })
        )
        render(<Users />)
        const error = await screen.findByText('Error')
        expect(error).toBeInTheDocument()
    })
})