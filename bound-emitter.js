/// Requirements ---------------------------------------------------------------

var EventEmitter =      require( "events" ).EventEmitter;

/// Exports --------------------------------------------------------------------

module.exports =        BoundEmitter;

/// Functions ------------------------------------------------------------------


/** Copyright ------------------------------------------------------------------

    Copyright 2015 Emilis Dambauskas <emilis.d@gmail.com>.

    BoundEmitter is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    BoundEmitter is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with BoundEmitter.  If not, see <http://www.gnu.org/licenses/>.
**/

function BoundEmitter( event_names ){

    var ee =                new EventEmitter;

    /// Normalize methods for different EventEmitter implementations:
    ee.off =                ee.off || ee.removeListener;
    ee.listeners =          ee.listeners || ee.getListeners;
    ee.getListeners =       ee.getListeners || ee.listeners;

    ee.addListener =        ee.addListener.bind( ee );
    ee.on =                 ee.on.bind( ee );
    ee.once =               ee.once.bind( ee );
    ee.off =                ee.off.bind( ee );
    ee.removeListener =     ee.removeListener.bind( ee );
    ee.removeAllListeners = ee.removeAllListeners.bind( ee );
    ee.listenrs =           ee.listeners.bind( ee );
    ee.getListeners =       ee.getListeners.bind( ee );
    ee.emit =               ee.emit.bind( ee );

    return event_names.reduce( bindEvent, ee );

    function bindEvent( ee, name ){

        ee.addListener[name] =          ee.addListener.bind( ee, name );
        ee.on[name] =                   ee.on.bind( ee, name );
        ee.once[name] =                 ee.once.bind( ee, name );
        ee.off[name] =                  ee.off.bind( ee, name );
        ee.removeListener[name] =       ee.removeListener.bind( ee, name );
        ee.removeAllListeners[name] =   ee.removeAllListeners.bind( ee, name );
        ee.listeners[name] =            ee.listeners.bind( ee, name );
        ee.getListeners[name] =         ee.getListeners.bind( ee,name );
        ee.emit[name] =                 ee.emit.bind( ee, name );

        return ee;
    }///
}///

