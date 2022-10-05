import express from 'express'

const contactRouter = express.Router();

import CreateService from '../../services/create';

contactRouter.post('/api/payment', async (request, response) => {
    const createClient = new CreateService();
    const { username, email } = request.body;
    console.log(username, email);
    const client = await createClient.execute({ username, email });
    return response.json(client);
});
export default contactRouter;