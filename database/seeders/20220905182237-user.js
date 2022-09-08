const bcrypt = require('bcrypt');
'use strict';


module.exports = {
  up: async (queryInterface, _Sequelize) => {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(process.env.ERICAS_PASSWORD, salt);

    return queryInterface.bulkInsert('Users',
      [
        { 
          username: 'Érica',
          email: 'erica@odonteo.com',
          password
        }
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },  
};
