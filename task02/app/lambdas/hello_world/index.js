exports.handler = async (event) => {
  const { httpMethod, path } = event;

  // Handle requests to the /hello endpoint
  if (path === "/hello" && httpMethod === "GET") {
    const response = {
      statusCode: 200,
      message: "Hello from Lambda",
    };
    return response;
  }

  // Handle requests to any other endpoint with a 400 Bad Request error
  const errorResponse = {
    statusCode: 400,
    message: `Bad request syntax or unsupported method. Request path: ${path}. HTTP method: ${httpMethod}`,
  };
  return errorResponse;
};
