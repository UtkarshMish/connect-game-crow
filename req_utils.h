#include "crow_all.h"
using namespace std;
using namespace crow;
#ifndef SAY_HELLO_REQ_UTILS_H

#define SAY_HELLO_REQ_UTILS_H

void SendFile(response &res, string contentType, string filename)
{
    ifstream in(("../public/" + filename), ifstream::in);
    if (in)
    {
        ostringstream contents;
        contents << in.rdbuf();
        in.close();
        res.set_header("Content-Type", contentType);
        res.write(contents.str());
    }
    else
    {
        res.write("Not found");
    }
    res.end();
}
void sendJavaScript(response &res, string filename)
{
    SendFile(res, "text/javascript", "js/" + filename);
}
void sendHTML(response &res, string filename)
{
    SendFile(res, "text/html", filename + ".html");
}
void sendPNG(response &res, string filename)
{
    SendFile(res, "image/png", "image/" + filename);
}
void sendStyle(response &res, string filename)
{
    SendFile(res, "text/css", "style/" + filename);
}
void sendSound(response &res, string filename)
{
    SendFile(res, "audio/mpeg3", "sound/" + filename);
}
#endif //SAY_HELLO_REQ_UTILS_H
