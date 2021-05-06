# Info

A Connect Three game PWA made using Svelte as Frontend
and Crow Microframework for C++ as Backend.<br>

## Requirements -

1. Docker or Linux Environment.<br/>
2. Can be run on Windows using cygwin (install cmake automake libboost g++).
3. if Linux then libboost-all-dev and gcc installed.

### Steps to run -

1.run `docker build -t {enter image name} . `<br />
2.run `docker run -ti -p 8080:8080 -e PORT=8080 {image name} `<br />
3.On Windows or Linux Compile in a build folder using cmake and make, then run the executable .`<br />
Open browser and go on localhost port 8080
