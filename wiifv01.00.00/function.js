date = "14-06-2014";
var OSName="Unknown OS";
var h_i;
var n = 0;
var wait = 5000;
var pause = 1000;
var slide = 720;


if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";
switch(OSName){
	case "Windows":
		h_i = "a";
	break;
	case "MacOS":
		h_i = "b";
	break;
	case "UNIX":
		h_i = "c";
	break;
	case "Linux":
		h_i = "d";
	break;
}
