@echo off

type NUL > .git/hooks/post-merge
echo #!/bin/sh > .git/hooks/post-merge
echo java -jar ModpackDownloader-cli-0.6.1.jar >> .git/hooks/post-merge

echo Done setting up hooks
echo Running Modpack Downloader

java -jar ModpackDownloader-cli-0.6.1.jar

pause