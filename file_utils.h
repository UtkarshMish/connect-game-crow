#include "crow_all.h"
#include "unordered_map"

using namespace crow;
using namespace std;
#ifndef GAME_APP_FILE_UTILS_H
#define GAME_APP_FILE_UTILS_H
class ServerFile
{
private:
    string file;
    string extension;
    string contentType;
    string location;

    string findExtension()
    {
        auto dotExist = false;
        int key = this->file.length();
        while (!dotExist)
        {
            if (this->file[key] == '.')
            {
                dotExist = true;
            }
            else if (key == 0)
            {
                break;
            }
            else
            {
                --key;
            }
        }
        return this->file.substr(key, this->file.length());
    }
    string findContentType()
    {
        unordered_map<string, string> contentList;
        contentList.insert(pair<string, string>(".js", "text/javascript"));
        contentList.insert(pair<string, string>(".css", "text/css"));
        contentList.insert(pair<string, string>(".html", "text/html"));
        contentList.insert(pair<string, string>(".htm", "text/html"));
        contentList.insert(pair<string, string>(".png", "image/png"));
        contentList.insert(pair<string, string>(".jpg", "image/jpeg"));
        contentList.insert(pair<string, string>(".mp3", "audio/mpeg3"));
        return contentList.at(this->extension);
    }
    string findLocation()
    {
        unordered_map<string, string> fileLocation;
        fileLocation.insert(pair<string, string>("text/javascript", "js/" + this->file));
        fileLocation.insert(pair<string, string>("text/css", "style/" + this->file));
        fileLocation.insert(pair<string, string>("text/html", this->file));
        fileLocation.insert(pair<string, string>("text/html", this->file));
        fileLocation.insert(pair<string, string>("image/png", "image/" + this->file));
        fileLocation.insert(pair<string, string>("image/jpeg", "image/" + this->file));
        fileLocation.insert(pair<string, string>("audio/mpeg3", "sound/" + this->file));
        return fileLocation.at(this->contentType);
    }

public:
    ServerFile(string filename)
    {

        this->file = filename;
        this->extension = this->findExtension();
        this->contentType = this->findContentType();
        this->location = this->findLocation();
    }
    string getFile()
    {
        return this->file;
    }
    string getExtension()
    {
        return this->extension;
    }
    string getContentType()
    {
        return this->contentType;
    }
    string getLocation()
    {
        return this->location;
    }
    ~ServerFile()
    {
        free(this);
    }
};

#endif //GAME_APP_FILE_INFO_H
