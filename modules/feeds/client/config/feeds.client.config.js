'use strict';

// Configuring the feeds module
angular.module('feeds').run(['Menus',
  function (Menus) {
    // Add the articles dropdown item
    Menus.addMenuItem('topbar', {
      title: 'Feeds',
      state: 'feeds',
      type: 'dropdown',
      roles: ['*']
    });

    // Add the dropdown list item
    Menus.addSubMenuItem('topbar', 'feeds', {
      title: 'List Feed',
      state: 'feeds.list'
    });

    // Add the dropdown create item
    Menus.addSubMenuItem('topbar', 'feeds', {
      title: 'Create Feeds',
      state: 'feeds.create',
      roles: ['user']
    });
  }
]);
