'use strict';
// Customized SG Mail component
/**
 * Dependencies
 */
const MailService = require('./classes/mail-service');

//Export singleton instance
module.exports = new MailService();
