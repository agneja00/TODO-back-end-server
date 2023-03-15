import listData from "../data/list.mjs";

const removeTodoController = (req, res) => {
    // let deletedCount = 0;
    // const {documents} = listData;
    // const newDocuments = []
    // const requestedDeleteId = req.body._id;

    // for (let i = 0; i < documents.length; i++) {
    //     const todo = documents[i];
    //     if (todo._id !== requestedDeleteId) {
    //         newDocuments.push(todo);
    //     } else {
    //         deletedCount++;
    //     }
    // }

    // listData.documents = newDocuments;

    const { documents } = listData;
    const requestedDeleteId = req.body._id;

    const newDocuments = documents.filter(({ _id }) => _id !== requestedDeleteId);
    const deletedCount = documents.length - newDocuments.length;
    listData.documents = newDocuments;

    res.json({
        deletedCount,
    })
}

export default removeTodoController;