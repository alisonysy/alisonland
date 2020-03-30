(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e1850"],{"7b7f":function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",[o("p",[e._v("As the title suggests, a few days ago I had to run an existing "),o("code",{pre:!0},[e._v("react-native")]),e._v(" project on device and build it with XCode.\nFirst time to use a Mac and first time to work with XCode which I didn't even know before.\nThe project was already run before, but the app might need modifications on styles and debugging. What I received is a zip file with a structure like this:")]),o("ul",[o("li",[e._v("| MyProject")]),o("li",[e._v("  |- Android")]),o("li",[e._v("  |- ios")]),o("li",[e._v("    |- _MACOSX")]),o("li",[e._v("    |- ios")]),o("li",[e._v("    |- podfile")]),o("li",[e._v("    |- "),o("em",[e._v("(other files not listed)")])]),o("li",[e._v("  |- package.json")]),o("li",[e._v("  |- package-lock.json")]),o("li",[e._v("  |- "),o("em",[e._v("(other files not listed)")])])]),o("p",[e._v("I tried to drag the outer  "),o("code",{pre:!0},[e._v("ios")]),e._v(" folder to XCode, but it said no "),o("code",{pre:!0},[e._v(".xcproject")]),e._v(" or "),o("code",{pre:!0},[e._v(".xcworkspace")]),e._v(" detected. I realised that given the "),o("code",{pre:!0},[e._v("_MACOSX")]),e._v(" folder and the embeded "),o("code",{pre:!0},[e._v("ios")]),e._v(" folder, I need to restructure the unzipped project as presumably targets and files paths may not match the current structure. I didn't remove the "),o("code",{pre:!0},[e._v("_MACOSX")]),e._v(" folder but moved all files from the inner "),o("code",{pre:!0},[e._v("ios")]),e._v(" folder to the outer "),o("code",{pre:!0},[e._v("ios")]),e._v(" folder.")]),o("h2",[e._v("Do - Structure your project")]),o("p",[e._v("This is a piece of advice by many on SO to avoid unexpected errors.")]),o("h2",[e._v("Do - Use "),o("code",{pre:!0},[e._v(".xcworkspace")]),e._v(" instead of "),o("code",{pre:!0},[e._v(".xcproject")])]),o("h3",[e._v("Bug 1 - 'RCTxxx.h' not found or Cannot find protocol declaration")]),o("p",[e._v("At first I thought it was due to incorrect header search path as many suggest on SO.")]),o("h2",[e._v("Do - Make sure header search paths are correct")]),o("p",[e._v("I did correct some header search paths. But the errors persisted and there were indeed those "),o("code",{pre:!0},[e._v(".h")]),e._v(" and "),o("code",{pre:!0},[e._v(".m")]),e._v(" files. It shouldn't be the fault of codes inside the files since the app did run properly. Then I noticed a "),o("code",{pre:!0},[e._v("podfile")]),e._v(".\nAfter research, I presumed this was due to not having CocoaPods installed.\nBINGO!")]),o("h2",[e._v("Do - Make sure CocoaPods are installed")]),o("h3",[e._v("Bug 2 - 'libxxx.a' not found")]),o("p",[e._v("Check whether the file exists, and if not, check package.json and podfile to see if the dependency is installed.")]),o("h2",[e._v("Do - Make sure the dependencies are installed")]),o("p",[e._v("Until then, I thought it was all good as the app runs under debug mode. But when I switched to the release mode. Another error came up. :)")]),o("h3",[e._v('Bug 3 - "'),o("em",[e._v("objc_class")]),e._v('$_" referenced from')]),o("p",[e._v("I was on "),o("code",{pre:!0},[e._v("release")]),e._v(" mode when getting these errors. However, it can be archived on release mode and run on real device after being plugged into laptop.\nIt just cannot be run on simulators. After following one answer on SO that we'd switch to "),o("code",{pre:!0},[e._v("debug")]),e._v(" mode, the errors were gone.")]),o("h2",[e._v("Do - Switch to debug mode")]),o("p",[e._v("But we cannot stay satisfied with debug mode, cos eventually we need to be on release mode to archive the app. And I wonder why debug mode fixes the bug? What makes the difference?\nThen I tried setting the release mode of "),o("code",{pre:!0},[e._v("Build Active Architecture Only")]),e._v(" on the target -> Build Settings to "),o("strong",[e._v("Yes")]),e._v(" as the debug mode.\nIt RUNS!")]),o("div",{staticClass:"postConcepts"},[e._v("Build Active Architecture Only")]),o("p",[e._v("Setting this to 'Yes' means XCode will detect which device is connected and will set the active "),o("span",{staticClass:"postRelated",attrs:{"related-url":"efe"}},[e._v("architecture")]),e._v(" accordingly. This means if you now build the app with "),o("code",{pre:!0},[e._v("Build Active Architecture Only")]),e._v(" set to 'Yes', it would now only build the current active architecture to save time, say e.g. armv6 but not armv7 even if it is stated in "),o("code",{pre:!0},[e._v("Valid Architecture")]),e._v(".\nThus, we may probably setting this option to 'Yes' when we want the app to run on simulators; then switch back to 'No' when we archive the app, cos we want it to be universally run on different devices.")]),o("h2",[e._v("Do - Set 'Build Active Architecture Only' to 'Yes' when running on simulators")])])}],n=o("2877"),s={},d=Object(n["a"])(s,r,i,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0e1850.0c63b073.js.map