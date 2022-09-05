const bcrypt = require('bcrypt');
'use strict';


module.exports = {
  up: async (queryInterface, _Sequelize) => {
    const salt = await bcrypt.genSalt(10);

    return queryInterface.bulkInsert('Users',
      [
        { 
          userName: 'Érica',
          email: 'erica@odonteo.com',
          password: `${bcrypt.hash(process.env.ERICAS_PASSWORD, salt)}`
        }
      ],
      {},
    );
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },  
};
