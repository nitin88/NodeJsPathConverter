# NodeJsPathConverter
Converts path from Windows type to *nix type and *nix to Windows type based on underlying os

###Use case:
If end user is unaware of where the application is going to run `[Windows/*nix]`, user might use one standard or mixed standard of path input. `ex: .\\test\\abc.txt`
If the application is running on Windows, the above user input gets resolved nicely, however if it falls into *nix, it will not be able to resolve.

This is where we make sure, we auto-convert the path to underlying OS wihout user worrying about path inputs.

###Example:
######Running on Windows
```
c:\\windows\\..\\node\\a.txt    =>  c:\\node\\a.txt
c:\\windows/a.txt               =>  c:\\windows\\a.txt
c:\\windows\\..\\node/b.txt     =>  c:\\node\\b.txt
////\\windows\\..\\unix/mixed/  =>  \\unix\\mixed\\
```

######Running on Linux
```
//windows\\unix/mixed   =>  /windows/unix/mixed
\\windows//unix/mixed   =>  /windows/unix/mixed
```
