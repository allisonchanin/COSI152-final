# COSI152-final
final project for cosi152

## Title
Make a Palette with standard DMC embroidery colors

## Description
This is the final version of my COSI 152 Web Development app. 

It accesses all DMC thread colors, with the ability to add and delete those threads from a palette.

Eventually, I would like to add the ability to have multiple palettes, with unique names, so a user can have multiple palettes saved.

After that, I would like to add a pattern making mechanism. Where you can make a palette and then use that palette to make a cross-stitching pattern.

## How to Install
Website is live at: https://cosi152-pattern.herokuapp.com/

Otherwise:
1. Clone repository / or download as a zip
2. To run locally you will need a database. Add a file `./startup.sh`
```bash
#!/bin/bash
export mongodb_URI='*enter the url for your mongodb database here*'
echo "connecting to $mongodb_URI"
nodemon
```
3. Then to run the app change to the correct directory and type `bash startup.sh`

## How to Use
The main purpose of the app so far is to create a palette, you can choose a color category from the drop down menu. Then the page will show all the DMC threads classified as that color. Then you can add the color you want to your palette. From the palette page you can either delete colors or add new ones through the same method.

## Credits
All hex codes for DMC threads are from https://floss.maxxmint.com/dmc_to_rgb.php?color=&ob=dmc

All other properties for DMC threads(name, number, and swatch image) are from https://www.everythingcrossstitch.com/dmc-6-strand-cotton-floss-mrl-c274.aspx?PageNum=1

## License
Copyright 2022 Allison Chanin

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
A modest attribution to Allison Chanin, the original author of the software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
