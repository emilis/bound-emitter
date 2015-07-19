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
var your_events =   BoundEmitter([ "add", "remove", "change" ]);

/// In return you get an object with pre-bound methods for the event names:
your_events.on.add( addHandler );
your_events.emit.add({ title: "Some object you jsut added" });

var other_events =  BoundEmitter([ "create", "update" ]);

/// Connecting two EventEmitters has never been easier:
your_events.on.add( other_events.emit.create );
```

##  Copyright and License

Copyright 2015 Emilis Dambauskas <emilis.d@gmail.com>.

This is free software, and you are welcome to redistribute it under certain conditions; see LICENSE.txt for details.

BoundEmitter is licensed under GPL v3. Please email me if you need other licensing options.


