import {rest} from 'msw'

export default handlers = [
    rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
        return res(ctx.status(200), ctx.json([
            {
                name: 'ShinCode',
            },
            {
                name: 'Test',
            },
            {
                name: 'Test2',
            },
        ]))
    }),
]