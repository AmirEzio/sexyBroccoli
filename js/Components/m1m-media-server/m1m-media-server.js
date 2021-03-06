/**
 * Created by attalbin on 05/10/16.
 *
 */


var angular    = require( "angular" ),
    CommModule  = require( "../../Services/CommModule.js" ),
    template    = require( "./m1m-media-server.html" ),
    modAngularMediaFolder      = require( "../m1m-media-folder/m1m-media-folder.js" )
    ;

module.exports = "m1m-media-server-Module";

function controller($scope, CommService) {
    console.log( "On construit un server" );
    var ctrl = this;

    this.browse = function( mediaServerId, directoryId ) {
        CommService.browse( mediaServerId, directoryId ).then( function(data) {
            console.log( "Browse", mediaServerId, directoryId, "=>", data );
            ctrl.directories = data.directories;
            ctrl.medias = data.medias;
            $scope.$applyAsync();
        });
    }

}

controller.$inject = ["$scope", "CommService"];

angular .module     ( module.exports
                    , [CommModule
                    , modAngularMediaFolder
                    ]
                    )
    .component  ( "m1mMediaServer", {
        controller  : controller,
        bindings    : {serv: "<"},
        template   : template
    });


