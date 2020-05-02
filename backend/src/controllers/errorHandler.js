/*Request errors*/
const emptyField = (req, res, field) => {
    res.status(400).json({
        status: `Request error: empty ${field}`,
    });
}
const wrongField = (req, res, field, entity) => {
    res.status(400).json({
        status: `Request error: wrong ${field}. Got - ${entity}`,
    });
}
const emptyUpdate = (req, res, entity) => {
    res.status(400).json({
        status: `Request error: nothing to update in ${entity}`
    })
}
/*Response errors*/
const createError = (req, res, err) => {
    res.status(500).json({
        status: "Database error: can't create entry",
        error: err,
    });
}

const readError = (req, res, err) => {
    res.status(500).json({
        status: "Database error: can't read entry / entry doesn't exist",
        error: err,
    });
}

const updateError = (req, res, err) => {
    res.status(500).json({
        status: "Database error: can't update entry / entry doesn't exist",
        error: err,
    });

}
const deleteError = (req, res, err) => {
    res.status(500).json({
        status: "Database error: can't delete entry / entry doesn't exist",
        error: err,
    });
}

const fileUploadError = (req, res) => {
    res.status(500).json({
        status: "Server error: can't upload file",
    });
}

const fileDeleteError = (req, res, err) => {
    res.status(500).json({
        status: "Server error: can't delete file on server",
    });
    console.log("Server error: can't delete file on server")
    console.log("Path is: " + err)
}

module.exports = {
    /*Request errors*/
    emptyField,
    wrongField,
    emptyUpdate,
    /*Response errors*/
    createError,
    readError,
    updateError,
    deleteError,
    fileUploadError,
    fileDeleteError
}