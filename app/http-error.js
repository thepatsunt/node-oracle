module.exports.error = (err, code) => {
  var msg;
  switch (code) {
    case 200:
      msg = "OK";
      break;
    case 201:
      msg = "Created";
      break;
    case 202:
      msg = "Accepted";
      break;
    case 203:
      msg = "Non-Authoritative Information";
      break;
    case 204:
      msg = "No Content";
      break;
    case 400:
      msg = "Bad Request or User already exists";
      break;
    case 401:
      msg = "Unauthorized";
      break;
    case 403:
      msg = "Forbidden";
      break;
    case 404:
      msg = "Not Found";
      break;
    case 406:
      msg = "Not Acceptable";
      break;
    case 408:
      msg = "Request Timeout";
      break;
    case 415:
      msg = "Wrong content-type. Only application/json is supported";
      break;
    case 500:
      msg = "Internal Server Error";
      break;
    case 502:
      msg = "Bad Gateway";
      break;
    case 503:
      msg = "Service Unavailable";
      break;
  }

  const msgErr = {
    status: code,
    message: msg,
    detailed_message: err ? err.message : ""
  };

  return msgErr;
};
