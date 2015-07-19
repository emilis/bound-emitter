# BoundEmitter

A function to create instances of EventEmitter with bound methods for event names.

##  Installation

```bash
npm install bound-emitter
```

##  Usage

```js
var BoundEmitter =  require( "bound-emitter" );

/// You supply an Array of event names to the function:
var your_emitter =  BoundEmitter([ "add", "change", "remove" ]);

/// In return you get an object with pre-bound methods for the event names:
your_emitter.on.add( console.log.bind( console ) );
your_emitter.emit.add({ title: "Some object you jsut added" });

/// An example EventEmitter for logging application events and erorrs:
var logger =        BoundEmitter([ "debug", "info", "warn", "error" ]);
logger.on.info( console.log.bind( console ));
logger.on.warn( console.warn.bind( console ));
logger.on.error( console.error.bind( console ));
/// logger.on.warn( saveToFile );
/// logger.on.error( notifyAdmins );

/// Connecting two EventEmitters has never been easier:
your_emitter.on.change( logger.emit.info );
your_emitter.on.remove( logger.emit.warn );

/// These will get logged to console:
your_emitter.emit.change({ title: "Something you changed." });
your_emitter.emit.remove({ title: "Removing something." });
```

##  Copyright and License

Copyright 2015 Emilis Dambauskas <emilis.d@gmail.com>.

This is free software, and you are welcome to redistribute it under certain conditions; see LICENSE.txt for details.

BoundEmitter is licensed under GPL v3. Please email me if you need other licensing options.


