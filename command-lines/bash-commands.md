## bash commands 

A directory is just a technical term for a folder.
We can combine multipal commands.

1. print working directory
```bash
pwd # print path of current dir
```
2. change directory
```bash
cd path # press tab to auto complete
cd .. # to go back a dir
cd ../../.. # we can use multiple at a time 
```
3. list file&folders
```bash
ls # print files and folder present in current working dir
ls .. # print file&dir present in current working dir
ls -l dir # print files and folder present in dir with additional details
ls -la dir # it also includes hidden files
ls -r dir # it reverses the order 
ls -R dir # print files and dir present in dir and their sub dir's too
ls -t # print file and dir sorted by last modif first
ls -lR | grep .ext  # print all the files with .ext present in dir including all sub dir 
ls *.ext # using it at an dir leval
```
4. make directory
```bash
mkdir name # make's a folder with name in current working dir
mkdir name && cd name # create a new dir and make it current working dir 
mkdir -p dir/subdir1  # make a sundir1 in dir 
```
5. create file
```bash
touch name.ext # create a file with name and extension
```
6. read file content
```bash
cat name.ext # opens the file in termainal
cat > name.ext # add content via terminal to file
cat >> name.ext # used to append content in the file 
```
7. move file or dir & rename
```bash
mv filename path # moves file to a dir-path 
mv filename1 path/filename2 # moves file to a dir-path and rename it 
mv dirname path # moves a dir to a dir-path
mv filename1 filename2 # rename the file 
```
8. copy file or dir
```bash
cp name path # copy file to dir-path
cp -r dir1 path # copy one dir to path
```
9. edit a file-text or code (Vi is predecessor of Vi IMproved aka VIM)
```bash
vi filename # open the file in editior press i of go in insertmode 
:q! # quit
:wq! # save and quit 
```
10. remove file or dir 
```bash
rm file # remove/delete the file
rm -r dir # remove the dir 
```
11. history & clear
```bash
history # print the whole history of command that we have used
clear # clears the terminal 
```
will add more as I learn