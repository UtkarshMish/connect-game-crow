#include "file_utils.h"

void sendFile(response &res, string filename)
{
  const auto file = new ServerFile(filename);
  ifstream in(("../public/" + file->getLocation()), ifstream::in);
  if (in)
  {
    ostringstream contents;
    contents << in.rdbuf();
    in.close();
    res.set_header("Content-Type", file->getContentType());
    res.write(contents.str());
  }
  else
  {
    res.write("Not found");
  }
  res.end();
}
int main(int argc, char *argv[])
{
  crow::SimpleApp app;
  CROW_ROUTE(app, "/")
  ([](const request &req, response &res) {
    sendFile(res, "index.html");
  });

  CROW_ROUTE(app, "/<string>")
  ([](const request &req, response &res, string name = NULL) {
    sendFile(res, "index.html");
  });

  CROW_ROUTE(app, "/js/<string>")
  ([](const request &req, response &res, string filename) {
    sendFile(res, filename);
  });

  CROW_ROUTE(app, "/image/<string>")
  ([](const request &req, response &res, string filename) {
    sendFile(res, filename);
  });

  CROW_ROUTE(app, "/style/<string>")
  ([](const request &req, response &res, string filename) {
    sendFile(res, filename);
  });
  CROW_ROUTE(app, "/sound/<string>")
  ([](const request &req, response &res, string filename) {
    sendFile(res, filename);
  });

  char *port = getenv("PORT");
  uint16_t iPort = static_cast<uint16_t>(port != NULL) ? stoi(port) : 8080;
  cout << "PORT = " << port << endl;
  app.port(iPort).multithreaded().run();
}
