/*-------------------------------------
| Explained
-------------------------------------*/
Disable the same origin policy and allow you to access local files.

Update: For Chrome 22+ you will be presented with an error message that says:
You are using an unsupported command-line flag: --disable-web-security. Stability and security will suffer.
However you can just ignore that message while developing.

/*-------------------------------------
| OSX
-------------------------------------*/
Open Terminal and run:
open -a Google\ Chrome --args --disable-web-security -–allow-file-access-from-files

/*-------------------------------------
| Linux
-------------------------------------*/
Open Terminal and run:
google-chrome --disable-web-security

/*-------------------------------------
| PC
-------------------------------------*/
go into the command prompt and go into the folder where Chrome.exe is and type
chrome.exe --disable-web-security

/*-------------------------------------
| More
-------------------------------------*/
Also if you're trying to access local files for dev purposes like AJAX or JSON, you can use this flag too.
-–allow-file-access-from-files

Pulled From:
http://stackoverflow.com/questions/3102819/disable-same-origin-policy-in-chrome