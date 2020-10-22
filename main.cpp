#include "req_utils.h"
using namespace std;
using namespace crow;



int main(int argc, char *argv[])
{
  crow::SimpleApp app;
  crow::mustache::set_base("./public/");
  CROW_ROUTE(app, "/")
  ([](const request &req, response &res) {
    sendHTML(res, "index");
  });

  CROW_ROUTE(app, "/<string>")
  ([](const request &req, response &res, string name = NULL) {
    sendHTML(res, "index");
  });

  CROW_ROUTE(app, "/js/<string>")
  ([](const request &req, response &res, string filename) {
    sendJavaScript(res, filename);
  });

  CROW_ROUTE(app, "/image/<string>")
  ([](const request &req, response &res, string filename) {
    sendPNG(res, filename);
  });

  CROW_ROUTE(app, "/style/<string>")
  ([](const request &req, response &res, string filename) {
    sendStyle(res, filename);
  });
    CROW_ROUTE(app, "/sound/<string>")
            ([](const request &req, response &res, string filename) {
                sendSound(res, filename);
            });

  char *port = getenv("PORT");
  uint16_t iPort = static_cast<uint16_t>(port != NULL) ? stoi(port) : 8080;
  cout << "PORT = " << port << endl;
  app.port(iPort).multithreaded().run();
}
