import listData from "../data/list.mjs";
import { v4 as createId } from "uuid";

const createTodoController = (req, res) => {
    const id = createId()
    const todo = {
        _id: id,
        ...req.body,
    };
    
    listData.documents.push(todo)

    res.json({
        insertedId: id,
    })
};

export default createTodoController;