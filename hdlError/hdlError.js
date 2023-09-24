const hdlErr = (inp_msg = "internal server error",inp_status=500) => {
    const error = new Error(inp_msg)
    error.status = inp_status
    return error
}

module.exports = hdlErr