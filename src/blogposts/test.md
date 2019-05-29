As the title suggests, a few days ago I had to run an existing `react-native` project on device and build it with XCode.
First time to use a Mac and first time to work with XCode which I didn't even know before.
The project was already run before, but the app might need modifications on styles and debugging. What I received is a zip file with a structure like this:

> | MyProject
>   |- Android
>   |- ios
>     |- _MACOSX
>     |- ios
>     |- podfile
>     |- **(other files not listed)**
>   |- package.json
>   |- package-lock.json
>   |- **(other files not listed)**

## Do - Structure your project
I tried to drag the outer  `ios` folder to XCode, but it said no `.xcproject` or `.xcworkspace` detected. I realised that given the `_MACOSX` folder and the embeded `ios` folder, I need to restructure the unzipped project as presumably targets and files paths may not match the current structure. I didn't remove the `_MACOSX` folder but moved all files from the inner `ios` folder to the outer `ios` folder.

## Do - Use `.xcworkspace` instead of `.xcproject`
This is a piece of advice by many on SO to avoid unexpected errors. 

### Bug 1 - 'RCTxxx.h' not found or Cannot find protocol declaration
At first I thought it was due to incorrect header search path as many suggest on SO. 
## Do - Make sure header search paths are correct
I did correct some header search paths. But the errors persisted and there were indeed those `.h` and `.m` files. It shouldn't be the fault of codes inside the files since the app did run properly. Then I noticed a `podfile`.
After research, I presumed this was due to not having CocoaPods installed.
BINGO!
## Do - Make sure CocoaPods are installed

### Bug 2 - 'libxxx.a' not found
Check whether the file exists, and if not, check package.json and podfile to see if the dependency is installed.
## Do - Make sure the dependencies are installed

Until then, I thought it was all good as the app runs under debug mode. But when I switched to the release mode. Another error came up. :)

### Bug 3 - "_objc_class_$_" referenced from
I was on `release` mode when getting these errors. However, it can be archived on release mode and run on real device after being plugged into laptop. 
It just cannot be run on simulators. After following one answer on SO that we'd switch to `debug` mode, the errors were gone.
## Do - Switch to debug mode
But we cannot stay satisfied with debug mode, cos eventually we need to be on release mode to archive the app. And I wonder why debug mode fixes the bug? What makes the difference? 
Then I tried setting the release mode of `Build Active Architecture Only` on the target -> Build Settings to **Yes** as the debug mode. 
It RUNS!
<div class="postConcepts">Build Active Architecture Only</div>
Setting this to 'Yes' means XCode will detect which device is connected and will set the active <span class="postRelated" @click="relatedSite(relatedSites.architecture)">architecture</span> accordingly. This means if you now build the app with `Build Active Architecture Only` set to 'Yes', it would now only build the current active architecture to save time, say e.g. armv6 but not armv7 even if it is stated in `Valid Architecture`. 
Thus, we may probably setting this option to 'Yes' when we want the app to run on simulators; then switch back to 'No' when we archive the app, cos we want it to be universally run on different devices.
## Do - Set 'Build Active Architecture Only' to 'Yes' when running on simulators
