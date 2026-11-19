---
title: "Make a shell script committed to Git executable"
date: 2026-11-16
showDate: true
draft: false
tags: ["git", "shell"]
series: ["development"]
---

You wrote a shell script called `script.sh`, perhaps to back up a database or regularly remove old files, and committed and pushed it to your Git repository. You go to your server, run `git pull` to get the latest commit, and try to execute the script with `./script.sh`.

At some point, the script fails to run and displays the message `Permission denied`. No problem, you think. I’ll just change the file permissions with `chmod`. You do that, and the script runs. All is peachy—or so you think.

The next time you push a code update to your repository and run `git pull`, you get this error:

```sh
error: Your local changes to the following files would be overwritten by merge: script.sh

Please commit your changes or stash them before you merge.
```

“But I didn’t change the code on the server,” you say. No, you didn’t, but you changed the file’s executable permissions, which Git tracks. You can resolve the error by resetting the repository clone to the latest commit:

```sh
git fetch origin master 

git reset --hard FETCH_HEAD
```

Great, the error goes away and `git pull` works as before. But when you try to execute the script, you get `Permission denied` again. Resetting the clone also reset the file permissions, making the script non-executable.

What’s the solution, then? You don’t want to keep changing the file permissions every time you update your code.

As mentioned above, Git tracks whether the executable bit is on or off. So, make sure to flag the file as executable when you commit it to the repository. On your local machine, where you write and commit the code, run:

```sh
# Stage the script.sh file
git add script.sh 

# Flag it as executable
git update-index --chmod=+x script.sh

# Commit the change
git commit -m "Make script.sh executable."

# Push the commit

git push
```

Then, go to your remote server, run `git pull`, and try to execute the script. The permissions should be set correctly, and the script should run without any issues.

Similarly, if you later want to remove the executable permission from the file, run this command, then commit and push the change:

```
git update-index --chmod=-x script.sh
```
