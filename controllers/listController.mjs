import listData from "../data/list.mjs";

const listController = (request, response) => {
    response.json(listData)
}

export default listController;