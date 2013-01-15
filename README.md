# bezier-editor

## Introduction

It's a tool base on HTML5 canvas that allows you to create bezier curve like photoshop
and then it can be export as JavaScript code to create an animation path for an HTML element.

## How To

1. Open index.html and draw bezier curve in canvas like using Photoshop.

2. Click "Export" to get the JavaScript code.

3. Create your own HTML file and include jQuery Library :

  ```html
  <script type="text/javascript" src="jquery.js"></script>
  ```

4. And include bezier-animation.js :

  ```html
  <script type="text/javascript" src="bezier-animation.js"></script>
  ```

5. Paste the code you just got in another script tag. Don't forget to add the element selector. Here is an example :

  ```js
    <script type="text/javascript">
     $('#test').stop()
     .animate({path:new bezier({start: [78, 196],c1:[237, 133],end: [306,252],c2:[161, 228],})}, 2716.5969158005164 ,"linear")  
     .animate({path:new bezier({start: [306, 252],c1:[451, 276],end: [402,393],c2:[234, 425],})}, 2283.4030841994836 ,"linear");  
    </script>
  ```

6. Enjoy your coding!

## To Do

+ Some advanced operation mode in photoshop.
+ Native JavaScript animation support

## Questions?

If you have any questions or bugs to report, please send E-mail to admin@123hurray.tk, thx~
